import React, {Component} from 'react';
import {Container,Navbar,Row,Col,Image,Nav} from "react-bootstrap";
import './styles/splash.css';

import logo from '../assets/logo.png';
import AppNav from "./AppNav";
class Splash extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
        <div>
           <AppNav>
            <Container className={'my-5 py-5'}>
                <Row>
                    <Col md={12}>
                        <Image fluid className={'mb-4'} src={'https://static.wixstatic.com/media/578455_d314e8b8cdad4f3bab132ed22d2d2261~mv2.png/v1/crop/x_2,y_0,w_950,h_326/fill/w_1139,h_391,al_c,lg_1,q_90/Screen%20Shot%202021-02-04%20at%206_00_31%20PM.webp"'} />

                        <p>The EndGame Team's aim is to make sure fairness and transparency prevail in this GameStop situation. We are proposing a solution that will end the conflict by delivering a swift and decisive victory to one side.
                        </p>
                        <p>Our goal is to create a Smart Contract that allows people to BOLD (BUY and HOLD) $GME. You can buy the $GME stock at the market price ($55) and "Name Your Price" that you would like to sell at (i.e. $1000). Then the $GME stock is locked into the smart contract and you are issued a crypto coin called $GS, which can only be redeemed when your precondition is met. (Read more about Smart Contracts: link here)
                        </p>
                        <p>This would destroy all incentives to perform scare tactics to get investors to sell $GME, since they would be locked up. Not only that, if all 65 million shares are locked up in this contract, and there are still trades being made, it would be clear that those trades are made with counterfeit stocks (Read more about BlockChain: link here)
                        </p>
                        <h2 className={'p-3 my-5 border-boxed'} style={{maxWidth: 'fit-content'}}>Here's how it works</h2>

                        <p>An investor buys $GME at the market price and is given a crypto coin called GameStonk, which is redeemable for $GME when the stock reaches the "Name Your Price".
                        </p>
                        <p>This smart contract provides transparency and certainty, which can bring a quick and decisive end to the GameStop situation. This can prevent a nasty fallout from this situation that does not involve further market manipulation, financial collapse, or a government bailout. (See how you can get involved below)
                        </p>

                        <Image fluid src={'https://static.wixstatic.com/media/578455_7d7cad45e08546a7bf2a7af71e8acafc~mv2.jpeg/v1/fill/w_2846,h_1360,al_c,q_90,usm_0.66_1.00_0.01/578455_7d7cad45e08546a7bf2a7af71e8acafc~mv2.webp'}></Image>

                    </Col>
                </Row>
            </Container>
           </AppNav>
        </div>
        )
    }
}

export default Splash;