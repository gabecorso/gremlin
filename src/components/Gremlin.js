import React, {Component,Fragment} from 'react';
import {Container,Navbar,Row,Col,Image,Nav,Button,Spinner,Alert} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class Gremlin extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render () {
        const {loading,response,loading_asset,response_asset} = this.state;
        return (
            <div>
                <AppNav>
                    <Container>
                        <Row className={'my-5'}>
                            <Col md={12}>
                                <h1 className={'border-boxed mb-3'}>GREMLIN</h1>
                                <h2>Smart Contract Solution</h2>
                                <p className={'text-left'}>
                                    Smart Contract Solution
                                    EndGame builds a Smart Contract that changes the idea of investing and reduces market manipulation. It is open-source, immutable, and safe to attacks.
                                </p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className={'my-5'}>
                            <Col md={12}>
                                <strong className={'d-block mb-1 text-left w-100'}>WHY</strong>
                                <h2 className={'text-left mb-3'}>Acronym</h2>
                                <ul>
                                    <li>GameStonk</li>
                                    <li>Regulatory</li>
                                    <li>EndGame</li>
                                    <li>Market Manipulation</li>
                                    <li>Liquidity Issue</li>
                                    <li>Investing</li>
                                    <li>Name Your Price</li>
                                </ul>
                            </Col>
                        </Row>

                        <hr/>
                        <Row className={'my-5'}>

                            <Col md={12}>
                                <h2 className={'border-boxed'}>What it means for each player</h2>


                                <strong>WSB</strong>

                                <p>Guaranteed win under your terms of conditions</p>

                                <strong>Melvin:</strong>

                                <p>No point in scare tactics. Less jail time</p>

                                <strong>Regulators</strong>

                                <p>Easier to track fraudulent activities on the blockchain system</p>
                                <strong>BlackRock:</strong>
                                <p>Sell 1M shares w/o triggering a sell-off</p>



                                <strong>GameStop</strong>

                                <p>Money will be invested in this company longer</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h1 className={'border-boxed'}>Future Applicability</h1>
                                <ul>
                                    <li>Support long-term projects (Tesla to the Moon)!</li>
                                    <li>Support yearly/quarterly goals!</li>
                                    <li>Everyone can invest regardless of country or currency.</li>
                                    <li>Allow 24/7 trading, aftermarkets & premarket.</li>
                                </ul>
                            </Col>
                        </Row>



                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default Gremlin;