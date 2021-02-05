import React, {Component,Fragment} from 'react';
import {Container,Navbar,Row,Col,Card} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class Contact extends Component {

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
                        <Row className={'mt-5'}>
                            <Col>
                                <Card body>
                                    <h1>Join the Good Fight!</h1>
                                    <p>Want to help? Have questions about the goals and motivations behind Endgame? Just want to say hello?</p>
                                    <p><a href="mailto:info@gremlin.endgame.com">Send Gremlin an Email</a></p>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default Contact;