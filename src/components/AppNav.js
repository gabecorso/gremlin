import React, {Component,Fragment} from 'react';
import {Container,Navbar,Row,Col,Image,Nav,Button,Spinner,Alert} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/splash.css';

import logo from '../assets/logo.png';
import {faReddit,faTwitter} from "@fortawesome/free-brands-svg-icons";
class AppNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {

        return (
            <div>
                <Navbar bg="dark" expand={'lg'} variant="dark">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Endgame: Gremlin Accords
                        {/*<FontAwesomeIcon className={'ml-2'} icon={faTwitter} />*/}
                        <a rel="noreferrer" href={'https://www.reddit.com/user/gremlin-endgame/'} target={'_blank'}>
                            <FontAwesomeIcon className={'ml-2'} icon={faReddit} />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className={'w-100 d-block text-right mr-5'}>
                            <Nav.Link className={'d-inline-block'} href="/endgame"><strong>Endgame</strong></Nav.Link>
                            <Nav.Link className={'d-inline-block'} href="/gamestonk"><strong>Gamestonk</strong></Nav.Link>
                            <Nav.Link className={'d-inline-block'} href="/gremlin"><strong>Gremlin</strong></Nav.Link>
                            <Nav.Link className={'d-inline-block'} href="/pg-13"><strong>PG-13</strong></Nav.Link>
                            <Nav.Link className={'d-inline-block'} href="/contact"><strong>Marketplace</strong></Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

                {this.props.children}


                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        YSL © 2021
                    </Navbar.Brand>
                    <div className={'w-100 d-block text-center mr-5'}>
                        <Nav.Link className={'d-inline-block'} href="/privacy"><strong>Privacy</strong></Nav.Link>
                        <Nav.Link className={'d-inline-block'} href="/terms"><strong>Terms</strong></Nav.Link>
                        <Nav.Link className={'d-inline-block'} href="/risks"><strong>Legal</strong></Nav.Link>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default AppNav;