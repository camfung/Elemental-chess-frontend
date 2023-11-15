export class Recording {
    recordString = '';
    packedArray = []
    chainFlag = false;
    whiteTurn = true;
    turnCount = -1;

    constructor(recordString = '', packedArray = []) {
        this.recordString = recordString;
        this.packedArray = packedArray;
    }

    enterMove(from, to, piece, capture, atkEle, capEle, capType, castleType) {
        // make packed
        let packedMove = this.pack(from, to)
        
        this.packedArray.push(packedMove)
        // New turn
        
        if (!this.chainFlag) {


            if (this.whiteTurn) {
                if(this.turnCount != 0) this.recordString += '\n'
                this.turnCount++;
                this.recordString += this.turnCount + ': ';
                this.whiteTurn = false;
            } else {
                this.recordString += ',  ';
                this.whiteTurn = true;
            }
            if(castleType == 'king'){
                this.recordString += 'O-O'
            } else if (castleType == 'queen') {
                this.recordString += 'O-O-O'
            } else {
             this.recordString += getAbbreviation(atkEle) + (piece.toUpperCase()) + (capture ? ' -x ' : ' -> ')
    
            }
            //piece == 'p' ? '' : 
        }
        let mod = ''

        if (capType) {
            mod += this.chainFlag ? ',' : '';
            switch (capType) {
                case 'resisted':
                    mod += '-';
                    break;
                case 'superEffective':
                    mod += this.chainFlag ? '' : '(';
                    this.chainFlag = true;
                    break;
                case 'immune':
                    mod += '~';
                    break;
                default:
            }
        }
        let end = ''
        if(this.chainFlag && !capture){
            mod = ')'
            this.chainFlag = false
        }
        if(this.chainFlag && capture && capType !== 'superEffective'){
            end = ')'
            this.chainFlag = false
        }
        let pieceTaken = ''
        if(capture){
            pieceTaken = getAbbreviation(capEle) + capture.toUpperCase()
        }
        this.recordString += mod + pieceTaken + to + end;
    }

    skip() {
        this.recordString += ')s';
        this.chainFlag = false;
    }

    pack(from, to) {
        const fromNum = this.locToNum(from);   //first 5 bits set as from (0-63)  
        const toNum = this.locToNum(to) << 6   // second 5 bits set as to
        // console.log(fromNum + ' ' + (toNum >> 6))
        return toNum | fromNum
    }

    locToNum(spot){
        const file = spot.charCodeAt(0) - 97; // Convert letter to file (0 to 7)
        const rank = (parseInt(spot[1]) - 1) * 8; // Convert number to rank (0 to 7)
        return file + rank; // Combine rank and file to get the number (0 to 63)
    }

    unpack(packedValue) {
        const fromNum = packedValue & 0b111111; // Extract the lower 5 bits for 'from' position
        const toNum = packedValue >> 6; // Extract the upper 5 bits for 'to' position
        //console.log( fromNum + " " + toNum)
        const from = '' + String.fromCharCode(fromNum % 8 + 97) + (Math.trunc(fromNum / 8) + 1)
        const to = '' + String.fromCharCode(toNum % 8 + 97) + (Math.trunc(toNum / 8) + 1)
    
        return { from, to };
    }

    stepMove(){
        this.turnCount++
        let ret = this.unpack(this.packedArray[this.turnCount])
        //console.log(ret)
        return ret
    }
   
    
      
}

function bracketInsert(record) {
    const lastIndexX = record.lastIndexOf('x');
    
    if (lastIndexX >= 2) {
        return record.slice(0, lastIndexX + 1) + '(' + record.slice(lastIndexX + 1);
    } else {
        return record;
    }
}

function getAbbreviation(pokemonType) {
    const typeMappings = {
        Normal: 'nm',
        Fighting: 'ft',
        Flying: 'fy',
        Poison: 'ps',
        Ground: 'gd',
        Rock: 'rk',
        Bug: 'bg',
        Ghost: 'gh',
        Steel: 'st',
        Fire: 'fr',
        Water: 'wr',
        Grass: 'gs',
        Electric: 'el',
        Psychic: 'py',
        Ice: 'ic',
        Dragon: 'dr',
        Dark: 'dk',
        Fairy: 'fy'
    };
    

    return typeMappings[pokemonType] || 'unk'; // Default to 'unk' if type is not found
}
