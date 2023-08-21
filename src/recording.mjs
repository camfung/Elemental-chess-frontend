export class Recording {
    recordString = '';
    chainFlag = false;
    whiteTurn = true;
    turnCount = 0;

    constructor(recordString = '') {
        this.recordString = recordString;
    }

    enterMove(from, to, piece, capture, atkEle, capEle, capType, castleType) {
        // New turn
        
        if (!this.chainFlag) {


            if (this.whiteTurn) {
                if(this.turnCount != 0) this.recordString += '\n'
                this.turnCount++;
                this.recordString += this.turnCount + ': ';
                this.whiteTurn = false;
            } else {
                this.recordString += ', ';
                this.whiteTurn = true;
            }
            console.log(getAbbreviation(atkEle))
            if(castleType == 'king'){
                this.recordString += 'O-O'
            } else if (castleType == 'queen') {
                this.recordString += 'O-O-O'
            } else {
            this.recordString += getAbbreviation(atkEle) + (piece.toUpperCase())  + from + (capture ? '-x' : '->')
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

function
 
