import React, {Component,Fragment} from 'react';
import {Container,Navbar,Row,Col,Image,Nav,Button,Spinner,Alert} from "react-bootstrap";
import './styles/splash.css';

import logo from '../assets/logo.png';
import sendPayment from "../helpers/sendPayment";
import issueAsset from "../helpers/issueAsset";
import AppNav from "./AppNav";
class Playground extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            response: null,
            response_asset: null,
            loading_asset: false,
        };
        // this.sendTestPayment = async () => {
        //     this.setState({loading:true});
        //     let response = await sendPayment();
        //     this.setState({response,loading:false});
        // };
        // this.issueTestAsset = async () => {
        //     this.setState({loading_asset:true});
        //     let response_asset = await issueAsset();
        //     this.setState({response_asset,loading_asset:false});
        // }
    }

    render () {
        const {loading,response,loading_asset,response_asset} = this.state;
        return (
            <div>
                <AppNav>
                    <Container style={{minHeight: '100vh'}} >
                        {response && <Alert className={'mt-5'} onClose={() => {
                            this.setState({response: null})
                        }} variant={'success'} dismissible>{response}</Alert>}
                        <Row className={'my-5'}>
                            <Col>
                                <h2 className={'mb-3'}>Payments (XLM)</h2>
                                {loading ?
                                    <Fragment><Spinner animation={'border'} /><p>Please wait while we process your payment</p></Fragment>
                                    :
                                    <Button onClick={() => {
                                        this.sendTestPayment();
                                    }}>Send Test Payment</Button>
                                }
                            </Col>
                        </Row>
                        <hr/>
                        {response_asset && <Alert className={'mt-5'} onClose={() => {
                            this.setState({response_asset: null})
                        }} variant={'success'} dismissible>{response_asset}</Alert>}
                        <Row className={'mt-5'}>
                            <Col>
                                <h2 className={'mb-3'}>Issuing Assets (GameStonk)</h2>
                                {loading_asset ?
                                    <Fragment><Spinner animation={'border'} /><p>Please wait while we process your payment</p></Fragment>
                                    :
                                    <Button onClick={() => {
                                        this.issueTestAsset();
                                    }}>Issue Test Asset</Button>
                                }
                            </Col>
                        </Row>
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default Playground;