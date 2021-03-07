import React, {Component,Fragment} from 'react';
import {Container, Navbar, Row, Col, Card, Image} from "react-bootstrap";
import './styles/splash.css';
import PaypalDonate from './PaypalDonate';


import AppNav from "./AppNav";
class Donate extends Component {

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
                        <Row className={'mx-auto mb-4'}>
                            <Col>
                                <div className={'my-5 text-center'}>
                                    <h1 className={'border-boxed text-left mw-fit-content mb-4 p-3'}>Donate</h1>
                                    <p>Your donation will fund the development of the Gremlin Accord Smart Contract and
                                        cover the costs of spreading this message on the internet. We also need capital
                                        to hire lawyers to represent us in front of the SEC and to broker a deal with
                                        Institutions that want to sell $GME to retail investors. Finally, the donations
                                        will be used to pay out bounties in the Bounty Program, which allows anyone in
                                        the public to get paid for solving some of our biggest challenges!</p>
                                </div>
                            </Col>
                        </Row>
                        <h2 className ={'mb-5'}>Paypal Donation</h2>
                        <Row>
                            <Col>
                                <PaypalDonate/>
                            </Col>

                        </Row>
                        <h2 className ={'mb-5'}>XLM Donation</h2>
                        <Row>
                            
                            <Col md={6}>
                                
                               <Image fluid src={'https://static.wixstatic.com/media/578455_5dfc2ec5293c4bc6a59ae5b53bd89d39~mv2.png/v1/fill/w_442,h_484,al_c,lg_1,q_85/578455_5dfc2ec5293c4bc6a59ae5b53bd89d39~mv2.webp'}/>
                           </Col>
                            <Col md={6}>
                                <h2>How</h2>
                                <ol>
                                    <li>Create a wallet on https://lobstr.co/</li>
                                    <li>Fund it with XLM</li>
                                    <li>Use the QR code on the left and pick the amount you would like to donate!</li>
                                </ol>
                                <h2>Amount</h2>
                                <div>Donate as little as 1 XLM</div>
                                <h2>Memo</h2>
                                <div>write your name to join the guild list</div>
                            </Col>
                        </Row>
                        <Row>
                            {/* <Col md={} */}
                        </Row>
                        
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default Donate;