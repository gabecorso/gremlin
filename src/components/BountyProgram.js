import React, {Component,Fragment} from 'react';
import {Container, Navbar, Row, Col, Card, Image} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class Contact extends Component {

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
                        <Row>
                            <Col>
                                <div className={'my-4'}>
                                    <h1 className={'framed-yellow mw-fit-content mb-4 mx-auto'}>Bounty Program</h1>
                                    <ul>
                                        <li>1 XLM back: for donating any amount!</li>
                                        <li>5 XLM: for user interface improvement</li>
                                        <li>5 XLM: for code improvement</li>
                                        <li>10 XLM: for finding a bug/security issue</li>
                                        <li>10 XLM for any thoughtful Reddit post that explains the concepts and garners 50K upvotes</li>
                                        <li>10 XLM donated to charity of choice if Chamath contacts us</li>
                                        <li>10 XLM donated to charity of choice AOC contacts us</li>
                                        <li>10 XLM donated to charity of choice DeepFuckingValue makes a 5 min video explaining Gremlin</li>
                                        <li>20 XLM/Month salaried position for a permanent</li>
                                        <li>20 XLM/Month to lawyer on retainer</li>
                                        <li>100 XLM to the first company that sells their stocks</li>
                                        <li>100 XLM to Melvin to lay down their weapons and repay their debts</li>
                                        <li>1000 XLM to the brokerage that decided to host us</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default Contact;