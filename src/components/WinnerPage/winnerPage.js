import './winnerPage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAllResult } from '../../features/Result/result';
import { selectAllPlayers } from '../../features/PlayerSlice/playerSlice';

const WinnerPage = () => {

    const results = useSelector(selectAllResult);
    const players = useSelector(selectAllPlayers);
    const [text, setText] = useState('');

    const [questionNum, setQuestionNum] = useState(results[results.length - 1]?.matchId || 0);
    console.log(results[results.length - 1])

    console.log("ee", questionNum)

    const coverDate = (item) => {
        const date = new Date();
        const dateAt = ` ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return dateAt;
    };

    const matchResult = results.filter((match) => {
        if (match.matchId === questionNum) {
            return match;
        }
    });

    const search = matchResult.filter((item) => item?.name?.includes(text));


    const tableItem = search.map((results, index) => {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{results?.name}</td>
                <td>{coverDate(results?.date)}</td>
                <td>{results?.answer}</td>
                <td>{results?.result}</td>
                <td>{results?.result === 'yes' ? '1' : '0'}</td>
            </tr>
        );
    });

    const onChangeSearch = (e) => {
        setText(e.target.value);
    };
    //get summary

    const getSummary = (item) => {
        let sum = 0;
        results.map((total) => {
            if (total?.name === item && total?.result === 'yes') {
                return (sum = sum + 1);
            }
        });
        return sum;
    };

    const playerName = players.map((results, index) => {
        return (
            <tr key={index}>
                <td>{results?.name}</td>
                <td>{(getSummary(results?.name) / 5) * 100} %</td>
                <td>{getSummary(results?.name)}</td>
            </tr>
        );
    });

    // get winner of the game
    const winner = players.map((results) => {
        return {
            name: results.name,
            point: getSummary(results.name),
        };
    });
    console.log("winer", winner)
    const gameWinner = Math.max(...winner.map((results) => results.point));
    const winGame = winner.filter((results) => results.point === gameWinner);
    console.log("winerwww", winGame)


    return (
        <>
            <div className='game-header'>
                <div className='game-title'>Yes No WTF GAME</div>
                <Link to="/game-play">
                    <Button className='history-btn' variant="outline-dark">Back</Button>
                </Link>
            </div>
            <div className='game-body-match'>
                Match {questionNum}
            </div>
            <Form.Control
                type="text"
                name="name"
                className="history-search"
                onChange={onChangeSearch}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Player Name</th>
                        <th>Date</th>
                        <th>Answer</th>
                        <th>Result</th>
                        <th>Score</th>
                    </tr>

                </thead>
                <tbody>
                    {tableItem}
                </tbody>
                <thead>
                    <tr>
                        <th>Summary</th>
                        <th>Correct Percent</th>
                        <th>Total Score</th>

                    </tr>
                </thead>
                <tbody>
                    {playerName}
                </tbody>
            </Table>

            <div>The winner is: {winGame[0].name}</div>
            <div>
                <Link to="/">
                    <Button className='end-btn' variant="outline-dark">End game</Button>
                </Link>
            </div>
        </>
    )
}


export default WinnerPage