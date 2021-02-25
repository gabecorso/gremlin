import React, {Component,Fragment} from 'react';
import {Container,Navbar,Row,Col,Image,Nav,Button,Spinner,Alert} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class Gamestonk extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render () {
        const {loading,response,loading_asset,response_asset} = this.state;
        return (
            <div>
                <AppNav>
                    <Container style={{minHeight: '100vh'}}>
                        <Row className={'my-5'}>
                            <Col md={12}>
                                <h1 className={'mw-fit-content border-boxed p-3 text-left mb-5'}>Characteristics of $GS</h1>
                                <p className={'text-left'}>
                                    GameStonk ($GS) is a cryptocoin that is pegged to the $GME stock. There are many different types of cryptocoins, such as fiat coins, non-fiat coins, and stable coins. GameStonk is the first of its kind and the only cryptocoin that is tied to a stock that is listed on the NASDAQ.
                                </p>
                                <p>GameStonk will have a hard cap of 69.75M shares, to represent the exact amount of shares that GameStop has issued. GameStonk will only be issued when a Seller puts up a share of GameStop. The share of GameStop will be locked in the Smart Contract, and the Buyer will receive the cryptocoin GameStonk.

                                </p>
                                <p>GameStonk is an incredible investing tool. Since GameStonk is offered on the Stellar Platform, everyone in the world will be able to buy $GS using any sort of currency by exchanging it with Lumens. Secondly, although $GME will be locked up in the Smart Contract, $GS will be tradeable 24/7. Lastly, since $GME is locked into the contract for a specified period of time, GameStop will be able to utilize the investments to grow.</p>

                                <h2>
                                    List of Features
                                </h2>
                                <ul>
                                    <li>$GS will be pegged to $GME</li>

                                        <li>$GS will have a hard cap of 69.75M shares, to represent the exact amount of shares of $GME that GameStop has issued.</li>

                                        <li>$GS will only be issued when a seller puts up an equivalent amount of $GME</li>

                                        <li>Investors can purchase $GS through the smart contract using Stellar XLM</li>

                                        <li>Investors can freely trade $GS with other investors 24/7 without being limited to the stock market hours (9:30 AM -4:30 PM EST).</li>

                                </ul>
                                <Image fluid src={'https://endgamegremlins.s3.amazonaws.com/GameStonk.jpg'} />
                            </Col>
                        </Row>
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default Gamestonk;