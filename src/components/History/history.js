import './history.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAllQuestion } from '../../features/QuestionSlice/questionSlice';

const History = () => {

    const [indexName, setIndexName] = useState(0);

    const dispatch = useDispatch();
    const questions = useSelector(selectAllQuestion);

    return (
        <>
            <div className='game-header'>
                <div className='game-title'>Yes No WTF GAME</div>
                <Link to="/game-play">
                    <Button className='history-btn' variant="outline-dark">Back</Button>
                </Link>
            </div>
            <div className='game-body-match'>
                Match {questions[indexName]?.match}
            </div>
            <Form.Control
                type="text"
                name="name"
                className="history-search"
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>No</td>
                        <td>No</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>

                    </tr>

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