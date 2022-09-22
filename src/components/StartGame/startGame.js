import './startGame.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, } from "react-bootstrap";
import Header from '../../page/header';
import { Link } from "react-router-dom";


const StartGame = () => {

    return (
        <div className="start-game">
            <Header></Header>


            <Link to="/addplayer">
                <Button variant="outline-dark"  >
                    Start Game
                </Button>
            </Link>
        </div>
    );
};

export default StartGame;