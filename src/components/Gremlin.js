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
                            <Col md={6}>
                                <strong className={'d-block mb-1 text-left w-100'}>WHAT IS</strong>
                                <h1 className={'text-left mb-3'}>GREMLIN</h1>
                                <p className={'text-left'}>
                                    GREMLIN is an acronym that stands for GameStonk, Regulatory Guidelines, EndGame,
                                    Market Manipulation, Liquidity Issues, Investing, and Name Your Price.
                                    GREMLIN is also the name of the White Paper, which proposes a
                                    Smart Contract that can eradicate market manipulations and solve the prisoner’s dilemma.
                                </p>
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
                                <strong className={'d-block mb-1 text-left w-100'}>WHY</strong>
                                <h1 className={'text-left mb-3'}>GameStop</h1>
                                <p className={'text-left'}>
                                    The GameStop situation is revealing a flaw in the financial system,
                                    and uncovering market manipulations that take place frequently on Wall Street.
                                    Retail investors that are buying and holding GameStop stocks are stuck
                                    in a prisoner’s dilemma where the collective’s interest is to hold onto the stock,
                                    but the individual’s interest is to take profit. In fact, we can find the prisoner’s
                                    dilemma in many corners of our financial system.
                                </p>
                            </Col>
                        </Row>

                        <hr/>
                        <Row className={'my-5'}>

                            <Col md={6}>
                                <strong className={'d-block mb-1 text-left w-100'}>HOW</strong>
                                <h1 className={'text-left mb-3'}>GameStonk</h1>
                                <p className={'text-left'}>
                                    GameStonk is a cryptocurrency that can be purchased by 100+ different
                                    currencies around the world, 24/7. By purchasing GameStonk,
                                    the investor is entering into a Smart Contract that holds a
                                    stock of GameStop that is redeemed when a predetermined condition is met.
                                    By allowing 24/7 trading and predetermined investment conditions,
                                    GameStonk reduces agents from acting in malicious, fraudulent ways to manipulate the market.
                                </p>
                            </Col>

                            <Col md={6}>
                                <Image fluid rounded src={'https://picsum.photos/400/300?grayscale&blur=1'}></Image>
                            </Col>
                        </Row>



                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default Gremlin;