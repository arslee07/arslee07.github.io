import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import pfp from '../Images/ars.png';

class About extends Component {
    render() {
        return (
            <div className={'p-5 row text-center'}>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={pfp}/>
                    <Card.Body>
                        <Card.Title>Арсений Лиунша</Card.Title>
                        <Card.Text>
                            Кодит всякую всячину. Иногда бывает даже прикольно. 🙂
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={pfp}/>
                    <Card.Body>
                        <Card.Title>Игорь Толмачёв</Card.Title>
                        <Card.Text>
                            Программист с 15-ти летним стажем. Сейчас ему 14. 😂
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={pfp}/>
                    <Card.Body>
                        <Card.Title>Даниил Лотков</Card.Title>
                        <Card.Text>
                            Лучший питонист Самары. Пилит кастомы андроида. 🤖
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={pfp}/>
                    <Card.Body>
                        <Card.Title>Валерия Юрова</Card.Title>
                        <Card.Text>
                            Даже сам Артемий Лебедев завидует ей! 😳
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default About;
