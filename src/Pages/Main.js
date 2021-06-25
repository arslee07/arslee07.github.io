import React from 'react';
import '../Stylesheets/Header.css'
import {Card} from "react-bootstrap";

import ars from "../Images/ars.png";
import val from "../Images/val.png";
import dan from "../Images/dan.png";
import igr from "../Images/igr.png";

const Main = () => (
    <div style={{overflow: 'hidden'}}>
        <div className={'row text-center justify-content-center align-items-center'} style={{
            minHeight: '100vh'
        }}>
            <div className={'col'}>
                <h1 className={'mt-5'}><strong>// TODO: придумать название</strong></h1>
                <div className={'container'}>
                    <hr className={'mt-4 mb-3'}/>
                </div>
                <div className={'row justify-content-center px-5 pb-5'}><a href={'https://arslee.dev/'}
                                                                           style={{
                                                                               textDecoration: 'none',
                                                                               color: 'black'
                                                                           }}>
                    <Card className={'my-4 mx-3 shadow'} style={{width: '18rem'}}>
                        <Card.Img className={'shadow'} variant="top" src={ars}/>
                        <Card.Body>
                            <Card.Title>Арсений Лиунша</Card.Title>
                            <Card.Text>
                                Кодит всякую всячину. Иногда бывает даже прикольно. 🙂
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                    <a href={'https://igorek.dev/'} style={{textDecoration: 'none', color: 'black'}}>
                        <Card className={'my-4 mx-3 shadow'} style={{width: '18rem'}}>
                            <Card.Img className={'shadow'} variant="top" src={igr}/>
                            <Card.Body>
                                <Card.Title>Игорь Толмачёв</Card.Title>
                                <Card.Text>
                                    Программист с 15-ти летним стажем. Сейчас ему 14. 😂
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href={'https://github.com/KrutosVIP'} style={{textDecoration: 'none', color: 'black'}}>
                        <Card className={'my-4 mx-3 shadow'} style={{width: '18rem'}}>
                            <Card.Img className={'shadow'} variant="top" src={dan}/>
                            <Card.Body>
                                <Card.Title>Даниил Лотков</Card.Title>
                                <Card.Text>
                                    Лучший питонист Самары. Пилит кастомы андроида. 🤖
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href={'https://vk.com/id528197210'} style={{textDecoration: 'none', color: 'black'}}>
                        <Card className={'my-4 mx-3 shadow'} style={{width: '18rem'}}>
                            <Card.Img className={'shadow'} variant="top" src={val}/>
                            <Card.Body>
                                <Card.Title>Валерия Юрова</Card.Title>
                                <Card.Text>
                                    Даже сам Артемий Лебедев завидует её мастерству! 😳
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a></div>
            </div>

        </div>
    </div>
);
export default Main;
