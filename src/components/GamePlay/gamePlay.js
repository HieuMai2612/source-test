import { Button, Spinner } from 'react-bootstrap';
import './gamePlay.scss';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { selectAllQuestion } from '../../features/QuestionSlice/questionSlice';
import { selectAllPlayers } from '../../features/PlayerSlice/playerSlice';
import { playerResult } from '../../features/Result/result';
import { Link } from 'react-router-dom';
import axios from '../../api/Api';
const GamePlay = () => {
    const players = useSelector(selectAllPlayers);

    const [indexName, setIndexName] = useState(0);

    const [playerCount, setPlayerCount] = useState(playerResult[playerResult.length - 1]?.playerCount || 0);
    const [questionNum, setQuestionNum] = useState(playerResult[playerResult.length - 1]?.match || 1);
    const [showBtn, setShowBtn] = useState(true);
    const [answer, setAnswer] = useState('');
    const [apiAnswer, setApiAnswer] = useState('');
    const [checkAnswer, setCheckAnswer] = useState('');
    const [result, setResult] = useState('');

    const [image, setImage] = useState();
    //show btn when clicked
    const [showEnd, setShowEnd] = useState(false);
    const [isDisable, setIsDisable] = useState(true);

    const dispatch = useDispatch();
    const questions = useSelector(selectAllQuestion);

    const onClickSubmit = () => {
        dispatch(playerResult(players[playerCount]?.match, players[playerCount]?.name, answer, checkAnswer, questionNum, playerCount + 1));
        console.log("api", apiAnswer, "//", answer)
        setResult(checkAnswer);
        setShowBtn(false);
        setTimeout(() => {
            if (questionNum === 2 && playerCount + 1 === players.length) {
                setShowEnd(true);
                setQuestionNum(0);
                setResult('');
            }
        }, 5000);
    }
    const onClickYes = () => {
        setAnswer('yes');
        setIsDisable(false);
    }

    const onClickNo = () => {
        setAnswer('no');
        setIsDisable(false);
    }

    const onNextPlayer = () => {
        setShowBtn(true);
        setResult('');
        setAnswer('');
        setPlayerCount(playerCount + 1);
        setIsDisable(true);


    }
    useEffect(() => {
        if (playerCount === players.length) {
            setQuestionNum(questionNum => questionNum + 1);
            dispatch(playerResult(null, null, null, null, questionNum + 1));
            setPlayerCount(0);
        }
    }, [showBtn]);

    useEffect(() => {
        axios.getImage().then((response) => {
            setImage(response.image);
            setApiAnswer(response.answer);
        });
    }, [showBtn]);

    useEffect(() => {
        apiAnswer === answer ? setCheckAnswer('yes') : setCheckAnswer('no');
    }, [answer]);


    return (
        <div className='game-container'>
            <div className='game-header'>
                <div className='game-title'>Yes No WTF GAME</div>

                <Link to="/history">
                    <Button className='history-btn' variant="outline-dark">Player History</Button>
                </Link>
            </div>
            <div className='game-body'>
                <div className='game-body-title'>
                    <div className='game-body-match'>
                        Match {questionNum}
                    </div>

                    <div className='player-name'>
                        Player: <div className='player-name-change'>{players[playerCount]?.name}</div>
                    </div>
                </div>

                <div className='game-body-choose'>
                    <Button onClick={onClickYes} className='btn-yes' variant="outline-dark">YES</Button>
                    <div className='result-message'>
                        {result === 'yes' && <div>Correct</div>}
                        {result === 'no' && <div>Incorrect</div>}
                    </div>
                    <Button onClick={onClickNo} className='btn-no' variant="outline-dark">NO</Button>

                </div>

                {result.length > 0 && (
                    <div>
                        <img className="game-image" src={image} alt="" />
                    </div>
                )}
            </div>

            <div className='game-footer'>

                {showBtn && !showEnd &&
                    <Button onClick={onClickSubmit} disabled={isDisable} className='btn-submit' variant="outline-dark" >Submit</Button>
                }
                {!showBtn && !showEnd &&
                    <Button variant="outline-light" className='btn-submit' onClick={onNextPlayer}  >
                        {playerCount + 1 === players.length ? "Next game" : "Next player"}
                    </Button>
                }

                {/* <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> */}

                {showEnd &&
                    <Link to="/history">
                        <Button variant="outline-dark" className='btn-result '>
                            ViewResult
                        </Button>
                    </Link>
                }
                {showEnd &&
                    <div>
                        This game has finished
                    </div>
                }
            </div>
        </div>
    );
}

export default GamePlay;
