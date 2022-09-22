import './tablePlayer.scss';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Header from '../../page/header';
import { useState } from 'react';
import { playerAdded } from '../../features/PlayerSlice/playerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const TablePlayer = () => {


    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const playerData = useSelector(state => state.player);

    const closeAdd = () => setShow(false);
    const showAdd = () => setShow(true);
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setName(event.target.value);
        setId(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(playerAdded(id, name));
        setName('');
        setShow(false);

    };

    const handleClose = () => {
        setName('');
        setShow(false);
    }

    const tableRows = playerData.map((player) => {
        return (
            <tr>
                <td>{player.id}</td>
                <td>{player.name}</td>
            </tr>
        );
    });




    return (
        <>
            <Header></Header>
            <Table className='list-player-container' striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Player</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>

            <div className="mb-2">
                <Button variant="secondary" size="lg" onClick={showAdd}>
                    Add More Player
                </Button>

                <Modal show={show} onHide={closeAdd}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please enter a new player</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label >New name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={name}
                            aria-describedby="passwordHelpBlock"
                            onChange={handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn-popup' variant="primary" onClick={handleSubmit}>
                            OK
                        </Button>
                        <Button className='btn-popup' variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>


                    </Modal.Footer>
                </Modal>

                <Link to="/game-play">
                    <Button variant="success" size="lg">
                        Start The Game
                    </Button>
                </Link>


            </div>
        </>
    );
};

export default TablePlayer;