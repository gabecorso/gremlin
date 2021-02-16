import React, {Component,Fragment} from 'react';
import {Container, Navbar, Row, Col, Card, Image} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class GuildList extends Component {

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
                            <Col md={12} className={'mt-5'}>
                                <h1 className={'border-boxed p-3 mw-fit-content mb-4'}>Join the Guild</h1>
                                <Image className={'mb-4'} fluid src={'https://static.wixstatic.com/media/578455_288ecbaa85254cc89ace90d9d6734d3d~mv2.png/v1/fill/w_600,h_217,al_c,q_85,usm_0.66_1.00_0.01/578455_288ecbaa85254cc89ace90d9d6734d3d~mv2.webp'}></Image>
                                <p>Your donation will provide you a Badge (NFT) that you can show off to your friends
                                    for supporting the Gremlin Accords. These badges will commemorate your support
                                    for De-Fi and brokering perhaps the most important deal in history. You can also
                                    trade these badges on the Free Market. They are one-of-a-kind. The Gremlin Badge #1
                                    and Captain Badge #1 are now available for purchase on the free market from JulieKim
                                    and Decentralization44 respectively.</p>
                            </Col>
                        </Row>



                        <Row>
                            <Col md={12} className={'mt-5'}>
                                <h1 className={'border-boxed p-3 mw-fit-content mb-4'}>Guild List</h1>
                                <ul>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>100 XLM: Gremlin</span> - Julie Kim, ever0602</li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>200 XLM: Knight</span> - BHOU, ever0602</li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>500 XLM: Commander</span> - decentralization44, ILWE.io</li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>50,000 XLM: Lord</span> -</li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>500,000 XLM: Chamath</span> -</li>
                                    </strong>
                                </ul>
                        

                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className={'mt-5'}>
                                <p>After we raise 1 Million XLM, the price of the newly issued badges will go up:</p>
                                <ul>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>200 XLM: Gremlin</span></li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>400 XLM: Knight</span></li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>1000 XLM: Commander</span></li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>100,000 XLM: Lord</span></li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>1,000,000 XLM: Chamath</span></li>
                                    </strong>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default GuildList;