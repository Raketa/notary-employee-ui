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
    UncontrolledTooltip, Button, Form, FormGroup, Input, Table, Media, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
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
                                                Скрыть
                                            </Button>

                                        </div>
                                        <hr className="my-2"/>

                                        <Row>
                                            <Table
                                                    className="align-items-center table-flush"
                                                    responsive
                                            >
                                                <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">имя</th>
                                                    <th scope="col">статус</th>
                                                    <th scope="col">действия</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <Media className="align-items-center">
                                                            <Media>
                            <span className="mb-0 text-sm">
                              Иванов Иван Иванович
                            </span>
                                                            </Media>
                                                        </Media>
                                                    </th>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-success" />
                                                        </Badge>
                                                    </td>

                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Media className="align-items-center">
                                                            <Media>
                            <span className="mb-0 text-sm">
                              Негодяев Злыдень Иванович
                            </span>
                                                            </Media>
                                                        </Media>
                                                    </th>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-warning" />
                                                        </Badge>
                                                    </td>

                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Media className="align-items-center">
                                                            <Media>
                            <span className="mb-0 text-sm">
                              Петренко Петр Петрович
                            </span>
                                                            </Media>
                                                        </Media>
                                                    </th>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-warning" />
                                                        </Badge>
                                                    </td>

                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </Table>
                                        </Row>
                                    </CardHeader>
                                    <CardBody className="pt-0 pt-md-4">
                                        <Row>
                                            <Table
                                                    className="align-items-center table-flush"
                                                    responsive
                                            >
                                                <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Документ</th>
                                                    <th scope="col">статус</th>
                                                    <th scope="col">действия</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <Media className="align-items-center">
                                                            <Media>
                            <span className="mb-0 text-sm">
                              Паспорт
                            </span>
                                                            </Media>
                                                        </Media>
                                                    </th>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-success" />
                                                        </Badge>
                                                    </td>

                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Media className="align-items-center">
                                                            <Media>
                            <span className="mb-0 text-sm">
                              Доверенность на квартиру
                            </span>
                                                            </Media>
                                                        </Media>
                                                    </th>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-warning" />
                                                        </Badge>
                                                    </td>

                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Row>
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
                                        <input type="file" name="photo" multiple accept="image/*,image/jpeg"/>
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
