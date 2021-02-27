import React, {Component,Fragment} from 'react';
import {Container, Navbar, NavDropdown, Row, Col, Image, Nav, Button, Spinner, Alert, Modal} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/splash.css';
import logo from '../assets/logo.png';
import {faReddit,faTwitter} from "@fortawesome/free-brands-svg-icons";
import _detectEthereumProvider from "../helpers/services/metamask/metamask";
import detectEthereumProvider from '@metamask/detect-provider';
const jdenticon = require("jdenticon");
class AppNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            loading: false,
            error: null,
            isLoggedIn: false
        };
        this.handleSignIn = () => {
            this.setState({show:true, loading: true});
            _detectEthereumProvider().then((result) => {
                this.setState({metaMaskProvider: result, loading: false, isLoggedIn: true, metaMaskAddress: result && result.selectedAddress})
            }).catch(err => {
                this.setState({error: err, loading: false});
            });
        }
        this.getIcon = (value, size=200) => {
            const png = jdenticon.toSvg(value, size);
            console.log(png, 'icon');
            return png;
        }
    }

    componentDidMount() {
        console.log('mount')
        detectEthereumProvider().then((provider) => {
            console.log(provider, 'after', provider.selectedAddress)
            if(provider && provider.selectedAddress) {
                this.setState({metaMaskAddress: provider.selectedAddress, isLoggedIn: true})
            }
        })
    }

    render () {
        const {loading, error, metaMaskAddress, isLoggedIn} = this.state;
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
                            <NavDropdown className={'d-inline-block'} title="Marketplace" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/get-involved">Get Involved</NavDropdown.Item>
                                <NavDropdown.Item href="/donate">Donate</NavDropdown.Item>
                                <NavDropdown.Item href="/guild-list">Guild List</NavDropdown.Item>
                                {/* <NavDropdown.Item href="/your-badges">Your Badges</NavDropdown.Item> */}
                                <NavDropdown.Item href="/free-market">Free Market</NavDropdown.Item>
                                <NavDropdown.Item href="/bounty-program">Bounty Program</NavDropdown.Item>
                                <NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
                            </NavDropdown>
                            {isLoggedIn ?
                                <div><span>My Account:</span><span className={'mx-2'}><div style={{width: 20, height: 20}} className={'d-inline-block'} dangerouslySetInnerHTML={{
                                    __html: this.getIcon(metaMaskAddress, 20)
                                }} /></span> {metaMaskAddress}</div>
                                :
                                <Button disabled={loading} onClick={() => {this.handleSignIn()}}>Sign In with Metamask</Button>
                            }
                        </div>
                    </Navbar.Collapse>
                </Navbar>

                {this.props.children}

                <Modal show={error || loading} dismissable onHide={() => {this.setState({error: null})}}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        {loading && <p>Attempting to connect to MetaMask... <Spinner animation={'border'} /></p>}
                        {error && <p>{error}</p>}
                    </Modal.Body>
                </Modal>


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