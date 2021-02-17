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
            <div className="gremlin-bg">
                <AppNav>
                    <Container>
                        <Row className={'my-5'}>
                            <Col md={12}>
                                <h1 className={'border-boxed p-3 text-left mb-5 mw-fit-content'}>Gremlin Accords</h1>
                                <h2 className={'mb-4'}>Smart Contract <span className={'lw-font'}>Solution</span></h2>
                                <p className={'text-left'}>
                                    A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The Gremlin Accords Smart Contract will be open-source, immutable, and autonomous. This means that the entire world can verify the validity of the contract, but no one will be able to influence the outcome once the contract is set in place.
                                </p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className={'my-5'}>
                            <Col md={12}>
                                <h2 className={'text-left mb-3'}>Acronym</h2>
                                <div className={'acronym-wrapper'}>
                                    <div className={'mb-4'}>
                                        <strong>G</strong>ameStonk
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>R</strong>egulatory
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>E</strong>ndGame
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>M</strong>arket Manipulation
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>L</strong>iquidity Issue
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>I</strong>nvesting
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>N</strong>ame Your Price
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <hr/>
                        <Row className={'my-5'}>

                            <Col md={12}>
                                <h2 className={'border-boxed p-3 text-left mb-5 mw-fit-content'}>What it means for each player</h2>


                                <h4><strong>WSB</strong></h4>

                                <p>Guaranteed win under your terms of conditions</p>

                                <h4><strong>Melvin:</strong></h4>

                                <p>No point in scare tactics. Less jail time</p>

                                <h4><strong>Regulators</strong></h4>

                                <p>Easier to track fraudulent activities on the blockchain system</p>

                                <h4><strong>BlackRock:</strong></h4>

                                <p>Sell 1M shares w/o triggering a sell-off</p>

                                <h4><strong>GameStop</strong></h4>

                                <p>Money will be invested in this company longer</p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className={'mb-5'}>
                            <Col>
                                <h1 className={'border-boxed p-3 text-left mb-5 mw-fit-content'}>Future Applicability</h1>
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