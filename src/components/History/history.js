import './history.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAllResult } from '../../features/Result/result';

const History = () => {

    const results = useSelector(selectAllResult);
    const [text, setText] = useState('');

    const [questionNum, setQuestionNum] = useState(results[results.length - 1]?.matchId || 0);
    console.log(results[results.length - 1])

    console.log("ee", questionNum)
    // const dispatch = useDispatch();

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
    const itemTable = search.map((results, index) => {
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



    console.log(results)
    const onChangeSearch = (e) => {
        setText(e.target.value);
    }


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
                    {itemTable}
                </tbody>
                <thead>
                    <tr>
                        <th>Summary</th>
                        <th>Correct Percent</th>
                        <th>Total Score</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>0%</td>
                        <td>0</td>

                    </tr>
                    <tr>
                        <td>Hennry</td>
                        <td>100%</td>
                        <td>1</td>
                    </tr>

                </tbody>
            </Table>
        </>
    )
}


export default History