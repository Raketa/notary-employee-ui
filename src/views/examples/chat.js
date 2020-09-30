import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Input, Row} from "reactstrap";
import {
    MessageBox,
    ChatItem,
    SystemMessage,
    MessageList,
    ChatList,
    Popup,
    SideBar,
    Navbar,
    Dropdown,
    Avatar
} from 'react-chat-elements';
import Utils from "./Utils";

const ChatComponent = ({role, ...restProps}) => {
    let [messages, setMessages] = useState([]);

    useEffect(() => {
        Utils.auth().then(() => {
            Utils.getMessages()
                .then((data) => {
                    return data.map(x => {

                        return {
                            "id": x.id,
                            "position": 'right',
                            "text": x.text,
                            "type": "text",
                            "title": `${x.author.firstname} ${x.author.lastname}`,
                            "date": new Date()
                        }
                    });
                })
                .then(data => {
                    setMessages(data);
                });
        });
    }, []);



    return (
        <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                    <Col xs="8">
                        <h3 className="mb-0">Чат</h3>
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

                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={messages}/>

                </div>
                <hr className="my-4"/>
                <Input
                    className="form-control-alternative"
                    placeholder="Введите ваше сообщение..."
                    rows="4"
                    type="textarea"
                    onClick={(e) => console.log(e.target.value)}
                />

                <Button className="my-4" color="info" type="button">
                    Отправить
                </Button>
                <input type="file" name="photo" multiple accept="image/*,image/jpeg"/>
            </CardBody>

        </Card>

    )
};

export default ChatComponent;