import React, {Component} from 'react';
import {Container,Navbar,Row,Col,Image,Nav} from "react-bootstrap";
import './styles/splash.css';

import logo from '../assets/logo.png';
class Splash extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
        <div>
            <Navbar bg="dark" expand={'lg'} variant="dark">

                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    GREMLIN
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className={'w-100 d-block text-right mr-5'}>
                        <Nav.Link className={'d-inline-block'} href="whitepaper"><strong>Download Whitepaper</strong></Nav.Link>
                        <Nav.Link className={'d-inline-block'} href="#contact"><strong>Contact</strong></Nav.Link>
                        <Nav.Link className={'d-inline-block'} href="#risks"><strong>Risks</strong></Nav.Link>
                        <Nav.Link className={'d-inline-block'} href="/playground"><strong>Playground</strong></Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <Container className={'my-5 py-5'}>
                <Row>
                    <Col md={12}>
                        <h1 className={'text-center mb-5'}>GREMLIN/Endgame Whitepaper</h1>
                        <p>The GameStop situation is revealing a flaw in the financial system, and uncovering market manipulations that take place frequently on Wall Street.
                        </p>
                        <p>Retail investors that are buying and holding GameStop stocks are stuck in a prisoner’s dilemma where the collective’s interest is to hold onto the stock, but the individual’s interest is to take profit. In fact, we can find the prisoner’s dilemma in many corners of our financial system.
                        </p>
                        <p>This white paper outlines a Smart Contract on Stellar XLM Platform that can help reduce market manipulations and solve the prisoner’s dilemma.
                        </p>
                        <p>GREMLIN is an acronym that stands for GameStonk, Regulatory Guidelines, EndGame, Market Manipulation, Liquidity Issues, Investing, and Name Your Price. GREMLIN is also the name of the White Paper, which proposes a Smart Contract that can eradicate market manipulations and solve the prisoner’s dilemma.
                        </p>
                        <p>GameStonk is a cryptocurrency that can be purchased by 100+ different currencies around the world, 24/7. By purchasing GameStonk, the investor is entering into a Smart Contract that holds a stock of GameStop that is redeemed when a predetermined condition is met. By allowing 24/7 trading and predetermined investment conditions, GameStonk reduces agents from acting in malicious, fraudulent ways to manipulate the market.
                        </p>
                        <p>Regulatory guidelines and procedures must be met in order to launch GameStonk. What the founders at EndGame are proposing is that individuals can enter into a Smart Contract which guarantees that the investment cannot be sold until the predetermined conditions are met. This means that individual investors cannot be tricked into selling a stock prematurely by scare tactics. Also, it means that individuals have 100% certainty in knowing that others who are investing for the same cause, cannot deceive them later by surreptitiously pulling out their money. Since we are suggesting to create a cryptocurrency, GameStonk, which is redeemable 1:1 for a stock of GameStop at a later date, we have regulatory concerns about the trade of a cryptocurrency that can later be redeemed for a security. However, we believe that this method of investing is the correct and fair way. It promotes money actually being invested into a company until it reaches a target valuation rather than turning the stock market into a game where people profit from the rise and fall of stock prices. Therefore, we are recruiting lawyers and hoping to work with SEC regulators to change the way our financial system works.
                        </p>
                        <p>EndGame is the name of the company that issues the GameStonk cryptocurrency. EndGame also represents the idea that people should be investing into a stock that they like with a goal for the company in mind. Currently the focus of the stock market is the valuation of each stock, and how to enter and exit a stock in order to make money on the differences. This creates a horrible financial system that favors wild speculation over productivity. Companies are forced to uphold an image of profitability in order to satisfy investor’s concerns, rather than work towards solving a problem. What EndGame is trying to achieve is to create a better financial system where people can invest into the company and receive earnings when a predetermined condition that that investor himself/herself sets is met. This will be achieved through the Smart Contract which is an open-source code that can be viewed by anyone and that cannot be manipulated by anyone.
                        </p>
                        <p>Market Manipulation is the problem that EndGame seeks to solve. Currently, there are one hundred different incentives to manipulate the market and one hundred different ways to do so. Why do we have a system that benefits from the death of a company? Why are we allowing certain entities access to information that should just be readily available to everyone? For example, why is it that Robinhood allows retail investors to trade for free on their platform and in exchange, sell their customers’ information to Citadel and allow Citadel to execute trades at the speed of light to take advantage of the retail investor? Why should it take a rebellion of the retail investor against Institutions and we must face the brink of collapse of an entire financial system for us to recognize that transparency and fair practices are not only necessary but beneficial for our society? Why can’t people invest into a company that they like? What exactly is the value of the company other than the value that can be built with the money that is invested by the people who believe in the company?
                        </p>
                        <blockquote>A smart contract resolves the issue because the intentions of the investor is clearly labeled and available to view by everyone in the world. It allows everyone to work in their interest, but eradicates deceit and manipulation. We see the GameStop situation as an existential crisis for our financial system and the pivot point for a new way. However, we do not need to completely destroy the system, since we have infrastructures like Stellar that can make the transition possible. Starting with this GameStop situation.
                        </blockquote>
                        <p>Liquidity issues are problematic in investing, especially in this GameStop case. When you own 9 million shares of GameStop, how can you sell even 10% of your position without triggering a sell-off by everyone else? EndGame believes that the top eight holders of GameStop stock are currently faced with this liquidity issue. They like the stock, but they do not necessarily want to be holding 9 million * $300 = $2.7 billion dollars worth of these stocks if they had initially deposited 9 million * $10 = $90 million dollars to purchase these stocks. So even if every 5 million retail investors are eager to buy a million shares, the institutions that are holding these stocks simply cannot sell them. EndGame’s SmartContract facilitates transparent and near-instantaneous transfer of these stocks from any entity to another by leveraging the tools on Stellar XLM platform. This means that Blackrock can liquidate a portion of the stocks at the current market price, without extremely devaluing the rest of their position.
                        </p>
                        <p>Investing is a word we all have come to love in the past 10 years. It is incredible that investing has become available for everyone in the world. Well not everyone, but to so many people in the world. Our goal is to make investing in companies truly available to everyone in the world by allowing everyone to use any form of currency to invest in companies they believe in. Investing has turned into an idea that people can “play” the market to gain a financial edge over others. The founders of EndGame believe that when you invest your time or money into anything, you should see that thing grow and flourish. Oftentimes, we call our businesses our babies. When we invest into our babies, we are not worried about the fundamental value of that baby. Instead, we invest our time and resources to see that baby flourish. The same idea can and should be applied to investing in businesses if we want to create a society that is productive and fair.
                        </p>
                        <p>Name Your Price is the portion of the Smart Contract that allows everyone to set their own precondition upon which they would like to see their investments return to them. An example of a condition can be such as when the price of the stock reaches $1000, I would like it to be redeemed. Another example is when a space exploration company reaches Mars, I would like my investment returned to me. By setting a precondition, it essentially turns investments into a vote that supports a productive cause. Investing will no longer be a gross computerized speed monster that pulls money in and out of 100 companies in one day. Instead the money will enter a company with a specific purpose and give the companies time to grow. Furthermore, Name Your Price will reduce the ability of evil entities to use market manipulation tactics like short-ladders, spread of misinformation, and impeding access to the market to scare investors into selling their positions… Positions which we believe represent supporting businesses that they like, believe in, and want to see flourish.
                        </p>
                        <p>PG-13 is an acronym that stands for Prisoner’s Dilemma, Group Economics, 1nspiration, 3ar/Peace. PG-13 addresses the philosophical issue that EndGame hopes to resolve. Philosophy is the act of contemplation to understand and improve the lives of human beings. We believe that the Smart Contract that allows transparent and fair transactions is the key to solving our broken financial system.
                        </p>
                        <p>Prisoner’s Dilemma describes a situation when collective efforts that lead to greater outcomes for everyone in the group are undermined by individual interests to defect from the group. The financial system in which everyone must make fools of their neighbors by selling the stock at the highest price is captured by the Prisoner’s Dilemma perfectly. The current financial system has imprisoned us and forced us to betray our peers in order to make any profit. The Smart Contract liberates all of us from this prison by making all of our investments and transactions transparent. When we tell another that together we can build something, we can truly build something, without undercutting our partners for our personal gain. When individuals share a shared interest and enter into a Smart Contract, the contract cannot be manipulated by anyone inside or outside of that contract.
                        </p>
                        <p>Group Economics is defined as one group of people who have a common economic interest. It is touted by community organizers to build social projects and infrastructures that benefit everyone in society. However, group economics are often undermined by deceitful individuals. The best people in the world that utilize Group Economics are currently the hedge funds and High-Net-Worth Individuals that pool money together to achieve a shared interest. It is much easier for these entities to succeed in their collective efforts because they have more concentrated wealth in fewer numbers. We believed that it is nearly impossible for a collective group of 5 million people to achieve Group Economics with the same level of sophistication and effectiveness. But the GameStop situation has shown us that the spread of information has made that possible. Currently, there are contracts that Hedge Funds and High-Net-Worth individuals enter to achieve shared goals. The Smart Contract would allow millions of people to work in the interest of the collective, regardless of your gender, your race, your country, your financial background, whether you’re a small company or a big company or an individual.
                        </p>
                        <p>1nspiration is what helps us to aim for higher ideals and goals. It is what the founders of EndGame believe should drive our world, including its financial system. The Inspiration of EndGame is Saldo, which allows anyone from anywhere to send money to their loved ones to pay their bills. Currently, transferring USD to another currency is a long and expensive process. But Saldo solves that issue by utilizing Stellar XLM’s platform. EndGame hopes to push the envelope by allowing everyone, not just to support their family to pay the bills, but to participate in the wonderful activity of investing no matter where you are in the world. The EndGame Smart Contract which accepts any form of currency, including USD, Euro, Won, Pesos, BTC, ETH, allows a person from France, Korea, Mexico, Ghana, or anywhere in the world to buy a share of GameStop. We hope to offer every sort of security on this platform in the future.
                        </p>
                        <p>3ar/Peace: After a War, must come peace. Otherwise, we are stuck in a state of chaos and destruction. Just like every moms and dads, and regulators, and investing firms are on their toes about the GameStop situation, the founders of EndGame are concerned about the fallout of this cataclysmic event that is caused by a failing financial system riddled with fraud and manipulation. Melvin Capital, Citadel, and other investors who hold a short position on 140% of the floating stocks of GME are in a position where they cannot pay back their debts even if they were to buy back every single stock on the market. In order to survive, they must pull out every single tactic in their arsenal, manipulating the market by spreading misinformation through news stations, performing short ladders, interfering with the free market to buy and sell assets. These tools in the arsenal are not only manipulative, but also destructive to the financial system that we all live under. And we do not need to resort to a nuclear war that destroys us all. The Name Your Price feature of the Smart Contract allows the investors who buy GME stock to name the price that they would like to sell it at. This prevents scare tactics from influencing any investor, which can cause panic in the market. The Smart Contract is a peace treaty that each individual investor who has bought GME stock can determine to be fair. The Smart Contract offers a transparent and fair end game for all.
                        </p>
                        <blockquote>The name of our Smart Contract, Gremlin, also takes inspiration from the Kremlin Accords, which were a series of agreements signed by President Bill Clinton of the United States and President Boris Yeltsin of Russia on January 14, 1994. These treaties stopped the preprogrammed targeting of nuclear weapons at targets on any nation (see United States – Russia mutual detargeting) and provided for the dismantling of the Russian nuclear arsenal positioned in Ukraine.[1]
                        </blockquote>
                        <p>
                            The Gremlin Smart Contract can help us to avoid a nuclear fallout of the GameStop situation and provide for the dismantling of the current financial system that is destructive and easily manipulated. It also offers our society a way forward to pivot from our old, failed ways to a new financial system that is transparent, fair, and productive.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/*<Container>*/}
            {/*    <Row className={'my-5'}>*/}
            {/*        <Col md={6}>*/}
            {/*            <strong className={'d-block mb-1 text-left w-100'}>WHAT IS</strong>*/}
            {/*            <h1 className={'text-left mb-3'}>GREMLIN</h1>*/}
            {/*            <p className={'text-left'}>*/}
            {/*                GREMLIN is an acronym that stands for GameStonk, Regulatory Guidelines, EndGame,*/}
            {/*                Market Manipulation, Liquidity Issues, Investing, and Name Your Price.*/}
            {/*                GREMLIN is also the name of the White Paper, which proposes a*/}
            {/*                Smart Contract that can eradicate market manipulations and solve the prisoner’s dilemma.*/}
            {/*            </p>*/}
            {/*        </Col>*/}
            {/*        <Col md={6}>*/}
            {/*            <Image fluid rounded src={'https://picsum.photos/300/300?grayscale&blur=1'}></Image>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <hr/>*/}
            {/*    <Row className={'my-5'}>*/}
            {/*        <Col md={6}>*/}
            {/*            <Image fluid rounded src={'https://picsum.photos/300/200?grayscale&blur=1'}></Image>*/}
            {/*        </Col>*/}
            {/*        <Col md={6}>*/}
            {/*            <strong className={'d-block mb-1 text-left w-100'}>WHY</strong>*/}
            {/*            <h1 className={'text-left mb-3'}>GameStop</h1>*/}
            {/*            <p className={'text-left'}>*/}
            {/*                The GameStop situation is revealing a flaw in the financial system,*/}
            {/*                and uncovering market manipulations that take place frequently on Wall Street.*/}
            {/*                Retail investors that are buying and holding GameStop stocks are stuck*/}
            {/*                in a prisoner’s dilemma where the collective’s interest is to hold onto the stock,*/}
            {/*                but the individual’s interest is to take profit. In fact, we can find the prisoner’s*/}
            {/*                dilemma in many corners of our financial system.*/}
            {/*            </p>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}

            {/*    <hr/>*/}
            {/*    <Row className={'my-5'}>*/}

            {/*        <Col md={6}>*/}
            {/*            <strong className={'d-block mb-1 text-left w-100'}>HOW</strong>*/}
            {/*            <h1 className={'text-left mb-3'}>GameStonk</h1>*/}
            {/*            <p className={'text-left'}>*/}
            {/*                GameStonk is a cryptocurrency that can be purchased by 100+ different*/}
            {/*                currencies around the world, 24/7. By purchasing GameStonk,*/}
            {/*                the investor is entering into a Smart Contract that holds a*/}
            {/*                stock of GameStop that is redeemed when a predetermined condition is met.*/}
            {/*                By allowing 24/7 trading and predetermined investment conditions,*/}
            {/*                GameStonk reduces agents from acting in malicious, fraudulent ways to manipulate the market.*/}
            {/*            </p>*/}
            {/*        </Col>*/}

            {/*        <Col md={6}>*/}
            {/*            <Image fluid rounded src={'https://picsum.photos/400/300?grayscale&blur=1'}></Image>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}



            {/*</Container>*/}


            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    YSL © 2021
                </Navbar.Brand>
                <div className={'w-100 d-block text-center mr-5'}>
                    <Nav.Link className={'d-inline-block'} href="#whitepaper"><strong>Privacy</strong></Nav.Link>
                    <Nav.Link className={'d-inline-block'} href="#contact"><strong>Terms</strong></Nav.Link>
                    <Nav.Link className={'d-inline-block'} href="#risks"><strong>Legal</strong></Nav.Link>
                </div>
            </Navbar>
        </div>
        )
    }
}

export default Splash;