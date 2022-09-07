import './dialogPopup.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';

const DialogPopup = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = () => { console.log("first") };


    return (
        <div className='wrapper_dialog'>

        </div >
    );

}

export default DialogPopup;