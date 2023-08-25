import React, {
    useState,
    useRef,
    useEffect
} from 'react';
import "./BoardView.css"
import PlayerHeader from './PlayerHeader';
import ChessboardWrapper from './ChessBoardWrapper';


const BoardView = (props) => {
    const [opponentName, setOpponentName] = useState('Opponent');
    const [playerName, setPlayerName] = useState('LostPariah');
    const [opponentTimer, setOpponentTimer] = useState(0);
    const [playerTimer, setPlayerTimer] = useState(0);
    const [addPlayerTime, setAddPlayerTime] = useState(false)
    const [addOpponentTime, setAddOpponentTime] = useState(false)

    const [isPlayerRunning, setIsPlayerRunning] = useState(true)
    const [isOpponentRunning, setIsOpponentRunning] = useState(false)

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const parentRef = useRef(null);
    const [childWidth, setChildWidth] = useState(0);
    const {chess} = props;


    const changeTurn = () => {
        isPlayerRunning ? setAddPlayerTime(!addPlayerTime) : setAddOpponentTime(!addOpponentTime);
        setIsOpponentRunning(!isOpponentRunning)
        setIsPlayerRunning(!isPlayerRunning)
    }



    useEffect(() => {
        const isMobileView = () => {
            return window.innerWidth <= 768;
        };

        const handleResize = () => {
            if (parentRef.current) {
                setWindowHeight(window.innerHeight);
                let width = Math.floor(window.innerWidth);
                let height = Math.floor(window.innerHeight);

                if (!isMobileView()) {
                    width = width > height ? height : width;
                    width *= .75
                }
                console.log(width);
                setChildWidth(width);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const test = () => {
        console.log(childWidth);
    }

    

    return (
        <div class="board-view-wrapper" ref={parentRef}>
            <PlayerHeader
                name={opponentName}
                initialTime={10}
                addedTime={10}
                isRunning={isOpponentRunning}
                addTime={addOpponentTime}
                elo={1000}
            />

            {(childWidth && parentRef && <ChessboardWrapper
                className="ChessBoard"
                id="BasicBoard"
                //this childWidth / 8 is the size of a square reactively
                boardWidth={childWidth}
                chess={chess}
            />)}

            <PlayerHeader
                name={playerName}
                initialTime={10}
                addedTime={10}
                isRunning={isOpponentRunning}
                addTime={addOpponentTime}
                elo={1000}
            />

        </div>
    );
};

export default BoardView;
