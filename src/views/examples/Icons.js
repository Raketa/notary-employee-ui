/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react component that copies the given text inside your clipboard
import {CopyToClipboard} from "react-copy-to-clipboard";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip, Button, Form, FormGroup, Input
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
// RCE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import {MessageBox, ChatItem, SystemMessage, MessageList, ChatList, Popup, SideBar, Navbar, Dropdown, Avatar} from 'react-chat-elements';

class Icons extends React.Component {
    state = {};

    render()
    {
        return (
                <>
                    <Header/>
                    {/* Page content */}
                    <Container className=" mt--7" fluid>
                        {/*Элемент чата*/}


                        {/* Table */}
                        <Row>
                            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                                {/*Правая часть чата*/}
                                <Card className="card-profile shadow">
                                    {/*<Row className="justify-content-center">*/}
                                    {/*    <Col className="order-lg-2" lg="3">*/}
                                    {/*        <div className="card-profile-image">*/}
                                    {/*            <a href="#pablo" onClick={e => e.preventDefault()}>*/}
                                    {/*                <img*/}
                                    {/*                        alt="..."*/}
                                    {/*                        className="rounded-circle"*/}
                                    {/*                        src={require("assets/img/theme/team-4-800x800.jpg")}*/}
                                    {/*                />*/}
                                    {/*            </a>*/}
                                    {/*        </div>*/}
                                    {/*    </Col>*/}
                                    {/*</Row>*/}
                                    <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                        <div className="d-flex justify-content-between">
                                            <Button
                                                    className="mr-4"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm"
                                            >
                                                Подробнее
                                            </Button>
                                            <Button
                                                    className="float-right"
                                                    color="default"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm"
                                            >
                                                Изменить
                                            </Button>

                                        </div>
                                        <Row>
                                            Пользователи
                                        </Row>
                                    </CardHeader>
                                    <CardBody className="pt-0 pt-md-4">
                                        <Row>
                                            <div className="col">
                                                <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                                    <div>
                                                        <span className="heading">22</span>
                                                        <span className="description">Friends</span>
                                                    </div>
                                                    <div>
                                                        <span className="heading">10</span>
                                                        <span className="description">Photos</span>
                                                    </div>
                                                    <div>
                                                        <span className="heading">89</span>
                                                        <span className="description">Comments</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                        <div className="text-center">
                                            <h3>
                                                Jessica Jones
                                                <span className="font-weight-light">, 27</span>
                                            </h3>
                                            <div className="h5 font-weight-300">
                                                <i className="ni location_pin mr-2"/>
                                                Bucharest, Romania
                                            </div>
                                            <div className="h5 mt-4">
                                                <i className="ni business_briefcase-24 mr-2"/>
                                                Solution Manager - Creative Tim Officer
                                            </div>
                                            <div>
                                                <i className="ni education_hat mr-2"/>
                                                University of Computer Science
                                            </div>
                                            <hr className="my-4"/>
                                            <p>
                                                Ryan — the name taken by Melbourne-raised, Brooklyn-based
                                                Nick Murphy — writes, performs and records all of his own
                                                music.
                                            </p>
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                Show more
                                            </a>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/*Левая часть чата*/}
                            <Col className="order-xl-1" xl="8">
                                <Card className="bg-secondary shadow">
                                    <CardHeader className="bg-white border-0">
                                        <Row className="align-items-center">
                                            <Col xs="8">
                                                <h3 className="mb-0">Чат</h3>
                                            </Col>
                                            <Col className="text-right" xs="4">
                                                <Button
                                                        color="primary"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                        size="sm"
                                                >
                                                    Развернуть чат
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardHeader>
                                    <CardBody>
                                        <div className='chat-scroll'>
                                            <MessageBox
                                                    title={'Петренко Петр Петрович'}
                                                    titleColor={'#24ae00'}
                                                    position={'left'}
                                                    type={'photo'}
                                                    text={'react.svg'}
                                                    data={{
                                                        uri: 'https://facebook.github.io/react/img/logo.svg',
                                                        status: {
                                                            click: false,
                                                            loading: 0,
                                                        }
                                                    }}/>
                                            <MessageBox
                                                    reply={{
                                                        photoURL: 'https://facebook.github.io/react/img/logo.svg',
                                                        title: 'elit magna',
                                                        titleColor: '#8717ae',
                                                        message: 'Aliqua amet incididunt id nostrud',
                                                    }}
                                                    replyButton={true}
                                                    onReplyMessageClick={() => console.log('reply clicked!')}
                                                    position={'left'}
                                                    type={'text'}
                                                    text={'Ответить и прочее'}/>

                                            <SystemMessage
                                                    text={'Системное сообщение типо разделиние дат. Дальше сообщения списком идут'}/>

                                            {/* eslint-disable-next-line react/jsx-no-undef */}
                                            <MessageList
                                                    className='message-list'
                                                    lockable={true}
                                                    toBottomHeight={'100%'}
                                                    dataSource={[
                                                        {
                                                            title: 'Негодяев Злыдень Иванович',
                                                            titleColor: '#8717ae',
                                                            position: 'right',
                                                            type: 'text',
                                                            text: 'Много сообщений от одного',
                                                            date: new Date(),
                                                        },
                                                        {
                                                            title: 'Негодяев Злыдень Иванович',
                                                            titleColor: '#8717ae',
                                                            position: 'right',
                                                            type: 'text',
                                                            text: 'пользователя',
                                                            date: new Date(),
                                                        },
                                                        {
                                                            title: 'Иванов Иван Иванович',
                                                            titleColor: '#ae0000',
                                                            position: 'left',
                                                            type: 'text',
                                                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                                            date: new Date(),
                                                        },
                                                        {
                                                            title: 'Негодяев Злыдень Иванович',
                                                            titleColor: '#8717ae',
                                                            position: 'right',
                                                            type: 'text',
                                                            text: 'Много сообщений от одного',
                                                            date: new Date(),
                                                        },
                                                        {
                                                            title: 'Негодяев Злыдень Иванович',
                                                            titleColor: '#8717ae',
                                                            position: 'right',
                                                            type: 'text',
                                                            text: 'пользователя',
                                                            date: new Date(),
                                                        },
                                                        {
                                                            title: 'Иванов Иван Иванович',
                                                            titleColor: '#ae0000',
                                                            position: 'left',
                                                            type: 'text',
                                                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit',
                                                            date: new Date(),
                                                        },
                                                        {
                                                            title: 'Негодяев Злыдень Иванович',
                                                            titleColor: '#8717ae',
                                                            position: 'right',
                                                            type: 'text',
                                                            text: 'Много сообщений от одного',
                                                            date: new Date(),
                                                        },
                                                        {
                                                            title: 'Негодяев Злыдень Иванович',
                                                            titleColor: '#8717ae',
                                                            position: 'right',
                                                            type: 'text',
                                                            text: 'пользователя',
                                                            date: new Date(),
                                                        },
                                                        {
                                                            title: 'Петренко Петр Петрович',
                                                            titleColor: '#24ae00',
                                                            position: 'left',
                                                            type: 'text',
                                                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                                            date: new Date(),
                                                        }
                                                    ]}/>

                                        </div>
                                        <hr className="my-4"/>
                                        <Input
                                                className="form-control-alternative"
                                                placeholder="Введите ваше сообщение..."
                                                rows="4"
                                                type="textarea"
                                        />

                                        <Button className="my-4" color="info" type="button">
                                            Отправить
                                        </Button>
                                        <label htmlFor="file-input">Выберите файл</label>

                                    </CardBody>

                                </Card>

                            </Col>
                        </Row>

                    </Container>
                </>
        );
    }
}

export default Icons;
