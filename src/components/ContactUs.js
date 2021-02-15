import React, {Component,Fragment} from 'react';
import {Container, Navbar, Row, Col, Card, Image} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render () {
        const {loading,response,loading_asset,response_asset} = this.state;
        return (
            <div>
                <AppNav>
                    <Container style={{minHeight: '100vh'}} >
                        <Row className={'my-5 mx-auto'}>
                            <Col>
                                <h1 className={'framed-red p-3 text-center mx-auto mb-5 mw-fit-content'}>Get in Touch</h1>
                                <p>We need help from everyone to get this funded, developed, and approved by the SEC! ​We need lawyers, developers, marketers, politicians, and people of all talents and influence. This Smart Contract needs the support and approval of every player. Join the guild above and begin participating in the greatest movement in the history of Finance.</p>
                            
                                <ul>
                                    <li>Follow us on Reddit: u/Gremlin-endgame</li>
                                    <li>Join Discord:</li>
                                    <li>Call: 714-393-1487</li>
                                    <li>Write: info@endgame.is</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className={'mb-5'}>
                            <Col>
                                <p>Want to help? Have questions about the goals and motivations behind Endgame? Just want to say hello?</p>
                                <p><a href="mailto:info@gremlin.endgame.com">Send Gremlin an Email</a></p>
                            </Col>
                        </Row>
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default ContactUs;