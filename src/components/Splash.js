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
                        <p><strong>
                            The aim of the EndGame Team is to make sure fairness and transparency prevail in the
                            GameStop situation. This event has revealed many flaws in the stock market. The EndGame
                            team is proposing a de-fi solution to fix the major issues in the financial system.</strong>
                        </p>
                        <p>Lack of transparency allows deceptive agents to use various market manipulation techniques
                            that are harmful to the financial system. These techniques include overshorting shares,
                            spreading misinformation, failing to disclose positions, and even creating counterfeit
                            shares. On a blockchain system, it would be impossible for deceptive agents to hide
                            their positions or create fake shares.
                        </p>
                        <p><strong>Currently, some hedge funds find themselves in a position that require them to
                            buy back all shares of $GME. In order to minimize their losses, these entities
                            must wait for the price of $GME to drop. Each passing day, these entities are losing
                            millions of dollars to pay interest on their borrowed shares. The EndGame team would
                            argue that these entities'  livelihoods require them to take drastic measures to lower
                            the price of $GME. These drastic measures are harmful to our financial system, so the
                            GameStop situation must come to an end before it destroys the financial systems that
                            we all rely on.</strong>
                        </p>
                        <p>Therefore, we are proposing a solution that would allow people to buy and hold onto shares
                            of $GME until it reaches a desirable selling price. All of the transactions will be
                            performed on a smart contract, agreed upon between the seller and the buyer. This smart
                            contract would be built on the Stellar platform using $XLM, which would allow people from
                            all over the world to participate and shape the desirable end game to the GameStop
                            situation.</p>
                        <h2 className={'p-3 my-5 border-boxed'} style={{maxWidth: 'fit-content'}}>Here's how it works</h2>
                        <p>The smart contract would allow a seller and a buyer to agree upon the trading price for $GME. Upon purchase, the share of $GME is locked into the smart contract, and the buyer receives a token called $GS. This $GS token is pegged to $GME, and the $GS token is redeemable for $GME when the stock reaches a predetermined price. While the $GME share is locked up in the smart contract, the investor would be free to trade their $GS token 24/7 directly with other investors.
                        </p>
                        <p>There are many advantages of locking up the shares of $GME in a smart contract. First, we can keep an accurate count of the number of floating shares. Imagine that millions of people decide to lock up their shares of $GME in the smart contract. Let's say that institutions also partake in this action and all available shares of $GME are locked into the smart contract. Then we discover that there are still millions of shares trading on the stock market. We would have discovered counterfeit shares! The Smart Contract also prevents entities from artificially lowering the selling price of $GME, because all investors would be able to determine their own selling price. Last but not least, locking up shares of $GME would provide GameStop the capital and time to grow as a company.
                        </p>
                        <p>This smart contract is built on blockchain technology which ensures security and transparency over ownership. Transparency would deter blatant acts of market manipulation tactics that are harmful to our financial system. We hope to prevent fallout from this GameStop situation that does not involve further market manipulation, financial collapse, or a government bailout.</p>


                        <Image fluid
                               src={'https://static.wixstatic.com/media/578455_94cd23a885b74ca3a324c812e06e76a4~mv2.jpeg/v1/fill/w_980,h_680,al_c,q_85,usm_0.66_1.00_0.01/578455_94cd23a885b74ca3a324c812e06e76a4~mv2.webp'}/>


                        <h2 className={'p-3 my-5 border-boxed'} style={{maxWidth: 'fit-content'}}>Whitepaper</h2>
                        <p>
                            Interested in learning more details? Check out our
                            <Nav.Link className={'d-inline-block'} href="/whitepaper">
                                <strong>Whitepaper</strong>
                            </Nav.Link>
                            for a deep dive!
                        </p>

                    </Col>
                </Row>
            </Container>
           </AppNav>
        </div>
        )
    }
}

export default Splash;