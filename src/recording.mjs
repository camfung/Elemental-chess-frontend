export class Recording {
    recordString = '';
    packedString = ''
    chainFlag = false;
    whiteTurn = true;
    turnCount = 0;

    constructor(recordString = '', packedString = '') {
        this.recordString = recordString;
        this.packedString = packedString;
    }

    enterMove(from, to, piece, capture, atkEle, capEle, capType, castleType) {
        // make paacked
        let packedMove = this.pack(from, to)
        this.packedString += packedMove
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

    pack(loc1, loc2) {
        const toNumber = (loc) => {
          const col = loc.charCodeAt(0) - 'a'.charCodeAt(0);
          const row = parseInt(loc[1]) - 1;
          return row * 8 + col;
        };
      
        const packedValue = (toNumber(loc1) << 6) | toNumber(loc2);
        return String.fromCharCode(packedValue);
      }
      
     unpack(char) {
        const toLocation = (num) => {
          const col = num % 8;
          const row = Math.floor(num / 8) + 1;
          return String.fromCharCode(col + 'a'.charCodeAt(0)) + row;
        };
      
        const packedValue = char.charCodeAt(0);
        const num1 = packedValue >> 6;
        const num2 = packedValue & 63;
      
        return [toLocation(num1), toLocation(num2)];
      
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
