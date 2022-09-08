import './startGame.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from 'react';
import Header from '../../page/header';
import { useNavigate } from "react-router-dom";


const StartGame = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const closeAdd = () => setShow(false);
    const showAdd = () => setShow(true);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("../addplayer", { replace: true });
    };

    return (
        <div className="start-game">
            <Header></Header>
            <Button variant="outline-dark" onClick={showAdd}  >
                Start Game
            </Button>

            <Modal show={show} onHide={closeAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Please enter a new game</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label >New game:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-popup' variant="primary" onClick={handleSubmit}>
                        OK
                    </Button>
                    <Button className='btn-popup' variant="secondary" onClick={closeAdd}>
                        Cancel
                    </Button>

                    {/* <Link to="/addplayer">

                    </Link> */}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default StartGame;