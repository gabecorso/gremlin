import React, {Component,Fragment} from 'react';
import {Container, Navbar, Row, Col, Card, Image} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class FreeMarket extends Component {

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
                                <Col md={6}>
                                    <div className='text-center'>   
                                        <h1 className={'framed-yellow mt-5'}>Sell Badges</h1>
                                        <h2 className={'mt-5'}>Offering</h2>
                                    </div>
                                    {/* <ol>
                                        <li>Cap. #1 Badge (4480 XLM)</li>
                                    </ol> */}
                                   
                                </Col>
                                <Col md={6}>
                                    <div className='text-center'>   
                                        <h1 className={'framed-blue mt-5 text-center'}>Buy Badges</h1>
                                        <h2 className={'mt-5'}>All Listings</h2>
                                    </div> 
                                        <ol>
                                            <li>Gremlin #1 Badge (448 XLM)</li>
                                            <li>Gremlin #7 Badge (80 XLM)</li>
                                            <li>Gremlin #104 Badge (5 XLM)</li>
                                            <li>Knight #3 Badge (350 XLM)</li>
                                            <li>Cap. #1 Badge (4480 XLM)</li>
                                            <li>Cap. #12 Badge (900 XLM)</li>
                                            <li>Com. #1 Badge (56000 XLM)</li>
                                            <li>Grem. Lord #1 Badge (100,000 XLM)</li>
                                            <li>Grem. Lord #2 Badge (80,000 XLM)</li>
                                            <li>Chamath #1 Badge (2,000,000 XLM)</li>
                                        </ol>   
                                </Col>
                            </Row>
                            <Row>
                            
                            </Row>
                            
                        </Container>
      
                </AppNav>
            </div>
        )
    }
}

export default FreeMarket;