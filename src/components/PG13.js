import React, {Component,Fragment} from 'react';
import {Container,Navbar,Row,Col,Image,Nav,Button,Spinner,Alert} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class PG13 extends Component {

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
                        <Row className={'mt-4'}>
                            <Col>
                                <h1 className={'border-boxed p-3 text-left mb-5 mw-fit-content'}>Philosophy</h1>
                                <p>
                                    On every videogame disc package, there is a rating that shows the ESRB rating
                                    (E for Everyone, PG for Parental Guidance, PG-13 for Parental Guidance under 13,
                                    and M for Mature). As a child growing up, the founder YSL really liked
                                    PG-13 because it demonstrated a nuance that regulation is necessary but
                                    individuals can earn autonomy. We believe the regulatory guidelines that
                                    are meant to "protect the small investors" are oftentimes degrading and
                                    counter-effective. So our philosophy is PG-13 to promote nuanced changes
                                    to securities regulation.
                                </p>
                                <h2 className={'text-left mb-3'}>Acronym</h2>
                                <div className={'acronym-wrapper'}>
                                    <div className={'mb-4'}>
                                        <strong>P</strong>rinsoner's Dilemma
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>G</strong>roup Economics
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>I</strong>nspiration
                                    </div>
                                    <div className={'mb-4'}>
                                        <strong>3</strong>ar/Peace
                                    </div>
                                </div>
                                <h1 className={'border-boxed mt-5 p-3 text-left mb-5 mw-fit-content'}>A Better Way to Invest</h1>
                                <p>We hope to change the meaning of investing. We want to see a world where investments stay in a company longer to allow time for a company to grow! We want to reduce the number of trades that go in and out of 100 companies in a day. Under the blockchain system, everyone will be able to see what others have. Investors will be able to trade 24/7. Finally, everyone in the world will be able to invest.</p>
                            </Col>
                        </Row>
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default PG13;