import { Button, Spinner } from 'react-bootstrap';
import './gamePlay.scss';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { selectAllQuestion } from '../../features/QuestionSlice/questionSlice';
import { playerResult } from '../../features/Result/result';
import { Link } from 'react-router-dom';
const GamePlay = () => {
    const playerData = useSelector(state => state.player);

    const [indexName, setIndexName] = useState(0);
    const [indexQuest, setIndexQuest] = useState(0);
    const [checkAnswer, setCheckAnswer] = useState('');
    const [result, setResult] = useState(0);
    const [showBtn, setShowBtn] = useState(true);
    const [answer, setAnswer] = useState('');

    const dispatch = useDispatch();
    const questions = useSelector(selectAllQuestion);

    useEffect(() => {

    },)


    const onChangeSubmit = () => {
        dispatch(playerResult(playerData[indexName]?.name, questions[indexName]?.match, checkAnswer));
        setTimeout(() => {
            setResult(checkAnswer);
            setShowBtn(false);
        }, 3000);
        if (questions[indexName]?.answer === checkAnswer) {
            setAnswer('yes');
        } else {
            setAnswer('no');
        }
    }

    const onClickYes = () => {
        setCheckAnswer('yes');
    }

    const onClickNo = () => {
        setCheckAnswer('no');
        console.log("no");
    }

    const onNextPlayer = () => {
        dispatch(playerResult(playerData[indexName]?.name + 1, questions[indexName]?.match + 1, checkAnswer + 1));
    }

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
                        Match {questions[indexName]?.match}
                    </div>
                    <div>
                        Question: {questions[indexName]?.question}
                    </div>
                    <div className='player-name'>
                        Player: <div className='player-name-change'>{playerData[indexName]?.name}</div>
                    </div>
                </div>

                <div className='game-body-choose'>
                    <Button onClick={onClickYes} className='btn-yes' variant="outline-dark">YES</Button>
                    <div className='result-message'>
                        {answer === 'yes' && <div>Correct</div>}
                        {answer === 'no' && <div>Incorrect</div>}
                    </div>
                    <Button onClick={onClickNo} className='btn-no' variant="outline-dark">NO</Button>

                </div>
            </div>

            <div className='game-footer'>
                <Button variant="outline-light" className='btn-submit' onClick={onChangeSubmit}>
                    Submit
                </Button>
                <Button variant="outline-light" className='btn-submit' onClick={onNextPlayer} >
                    Next Player
                </Button>
                <Button variant="primary" className='btn-loading invisible' disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span>Loading...</span>
                </Button>

                <Button variant="outline-dark" className='btn-result invisible'>
                    ViewResult
                </Button>
            </div>
        </div>
    );
}

export default GamePlay;
