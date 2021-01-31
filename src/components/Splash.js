import React, {Component} from 'react';
import {Container,Navbar,Row,Col,Image,Nav} from "react-bootstrap";
import './styles/splash.css';

import logo from '../assets/logo.png';
class Splash extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        console.log(process.env);
        return (
        <div>
            <Navbar bg="dark" expand={'lg'} variant="dark">

                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Gremlin
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className={'w-100 d-block text-right mr-5'}>
                        <Nav.Link className={'d-inline-block'} href="whitepaper"><strong>Whitepaper</strong></Nav.Link>
                        <Nav.Link className={'d-inline-block'} href="#contact"><strong>Contact</strong></Nav.Link>
                        <Nav.Link className={'d-inline-block'} href="#risks"><strong>Risks</strong></Nav.Link>
                        <Nav.Link className={'d-inline-block'} href="/playground"><strong>Playground</strong></Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Row className={'my-5'}>
                    <Col md={6}>
                        <strong className={'d-block mb-1 text-left w-100'}>WHAT IS</strong>
                        <h1 className={'text-left mb-3'}>Gremlin</h1>
                        <p className={'text-left'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum turpis, sollicitudin in ante ut, facilisis blandit est. Mauris sodales consectetur ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Quisque condimentum vulputate porttitor. Nulla facilisi. In sollicitudin massa quis arcu porta, ac bibendum nulla dapibus. Phasellus turpis tortor, gravida a rutrum at, semper sed mi. Aliquam nec tellus condimentum magna egestas volutpat ut vitae quam.</p>
                    </Col>
                    <Col md={6}>
                        <Image fluid rounded src={'https://picsum.photos/300/300?grayscale&blur=1'}></Image>
                    </Col>
                </Row>
                <hr/>
                <Row className={'my-5'}>
                    <Col md={6}>
                        <Image fluid rounded src={'https://picsum.photos/300/200?grayscale&blur=1'}></Image>
                    </Col>
                    <Col md={6}>
                        <strong className={'d-block mb-1 text-left w-100'}>HOW</strong>
                        <h1 className={'text-left mb-3'}>Gremlin</h1>
                        <p className={'text-left'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum turpis, sollicitudin in ante ut, facilisis blandit est. Mauris sodales consectetur ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Quisque condimentum vulputate porttitor. Nulla facilisi. In sollicitudin massa quis arcu porta, ac bibendum nulla dapibus. Phasellus turpis tortor, gravida a rutrum at, semper sed mi. Aliquam nec tellus condimentum magna egestas volutpat ut vitae quam.</p>
                    </Col>
                </Row>

                <hr/>
                <Row className={'my-5'}>

                    <Col md={6}>
                        <strong className={'d-block mb-1 text-left w-100'}>WHY</strong>
                        <h1 className={'text-left mb-3'}>Gremlin</h1>
                        <p className={'text-left'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum turpis, sollicitudin in ante ut, facilisis blandit est. Mauris sodales consectetur ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Quisque condimentum vulputate porttitor. Nulla facilisi. In sollicitudin massa quis arcu porta, ac bibendum nulla dapibus. Phasellus turpis tortor, gravida a rutrum at, semper sed mi. Aliquam nec tellus condimentum magna egestas volutpat ut vitae quam.</p>
                    </Col>

                    <Col md={6}>
                        <Image fluid rounded src={'https://picsum.photos/400/300?grayscale&blur=1'}></Image>
                    </Col>
                </Row>



            </Container>


            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    YSL © 2021
                </Navbar.Brand>
                <div className={'w-100 d-block text-center mr-5'}>
                    <Nav.Link className={'d-inline-block'} href="#whitepaper"><strong>Privacy</strong></Nav.Link>
                    <Nav.Link className={'d-inline-block'} href="#contact"><strong>Terms</strong></Nav.Link>
                    <Nav.Link className={'d-inline-block'} href="#risks"><strong>Legal</strong></Nav.Link>
                </div>
            </Navbar>
        </div>
        )
    }
}

export default Splash;