import React, {Component,Fragment} from 'react';
import {Container, Navbar, Row, Col, Card, Image} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class GetInvolved extends Component {

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
                                <div className={'my-4 text-center'}>
                                    <h1 className={'framed-yellow mx-auto mw-fit-content mb-4'}>Get Involved</h1>
                                    <p>There are many ways to get involved:</p>
                                    <ol style={{listStylePosition: 'inside'}} className={'mx-auto text-center'}>
                                        <li style={{fontSize: 20}}>Donate!</li>
                                        <li style={{fontSize: 20}}>Join the Guild List!</li>
                                        <li style={{fontSize: 20}}>Trade your badges on the Free Market!</li>
                                        <li style={{fontSize: 20}}>Participate in the Bounty Program!</li>
                                        <li style={{fontSize: 20}}>Contact Us for More Info!</li>
                                    </ol>
                                </div>
                            </Col>
                        </Row>

                        <Row className={'mx-auto mb-4'}>
                            <Col>
                                <div className={'my-5 text-center'}>
                                    <h1 className={'mx-auto framed-blue mw-fit-content mb-4'}>Donate</h1>
                                    <p>Your donation will fund the development of the Gremlin Accord Smart Contract and
                                        cover the costs of spreading this message on the internet. We also need capital
                                        to hire lawyers to represent us in front of the SEC and to broker a deal with
                                        Institutions that want to sell $GME to retail investors. Finally, the donations
                                        will be used to pay out bounties in the Bounty Program, which allows anyone in
                                        the public to get paid for solving some of our biggest challenges!</p>
                                </div>
                            </Col>
                        </Row>

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
                            <Col md={12} className={'my-5'}>
                                <div className={'my-4 text-center'}>
                                    <h1 className={'framed-green mx-auto mw-fit-content mb-4'}>Join the Guild</h1>
                                    <Image className={'my-4'} fluid src={'https://static.wixstatic.com/media/578455_288ecbaa85254cc89ace90d9d6734d3d~mv2.png/v1/fill/w_600,h_217,al_c,q_85,usm_0.66_1.00_0.01/578455_288ecbaa85254cc89ace90d9d6734d3d~mv2.webp'}></Image>
                                    <p>Your donation will provide you a Badge (NFT) that you can show off to your friends
                                        for supporting the Gremlin Accords. These badges will commemorate your support
                                        for De-Fi and brokering perhaps the most important deal in history. You can also
                                        trade these badges on the Free Market. They are one-of-a-kind. The Gremlin Badge #1
                                        and Captain Badge #1 are now available for purchase on the free market from JulieKim
                                        and Decentralization44 respectively.</p>
                                </div>    
                            </Col>
                        </Row>

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

export default GetInvolved;