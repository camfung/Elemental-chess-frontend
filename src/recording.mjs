export class Recording {
    recordString = '';
    chainFlag = false;
    whiteTurn = true;
    turnCount = 0;

    constructor(recordString = '') {
        this.recordString = recordString;
    }

    enterMove(from, to, piece, capture, capType) {
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
            console.log(piece)
            this.recordString += (piece == 'p' ? '' : piece.toUpperCase())  + from + (capture ? 'x' : '->');
        }
        let mod = ''

        if (capType) {
            switch (capType) {
                case 'resisted':
                    mod = '-';
                    break;
                case 'superEffective':
                    mod = this.chainFlag ? ',' : '(';
                    this.chainFlag = true;
                    break;
                case 'immune':
                    mod = '~';
                    break;
                default:
                    mod = '';
            }
        }
        let end = ''
        if(this.chainFlag && !capture){
            mod = ')'
        }
        if(this.chainFlag && capture && capType !== 'superEffective'){
            end = ')'
            this.chainFlag = false
        }
        this.recordString += mod + to + end;
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
