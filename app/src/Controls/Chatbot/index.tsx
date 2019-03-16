//@ts-ignore
import * as React from "react";
import { MessagesList } from "./MessagesList";

import './Chatbot.css';
import { Input } from "./Input";
import MessageDirection from "../../Enums/MessageDirection";
import { ApiAiClient } from "api-ai-javascript";

const client = new ApiAiClient({ accessToken: 'ba8b1e5dad804cbfbd1bd9d1fcc08991' })

export class Chatbot extends React.Component<any, any> {
    scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }


    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    constructor(props: any) {
        super(props);

        client.eventRequest('Welcome')
            .then(this._handleQueryResponse.bind(this))
            .catch((error) => {
                alert('error');
                console.log(error);
            })

        this.state = {
            messages: [

            ],
            member: {
                username: 'Me'
            }
        }
    }

    private _showMessage(message: any) {
        let messages = this.state.messages;

        messages.push(message);

        this.setState({ messages: messages });
    }

    private _handleQueryResponse(response: any) {
        if (response.result && response.result.fulfillment && response.result.fulfillment.messages) {
            response.result.fulfillment.messages.forEach((m) => {
                if (m.type == 4) {
                    console.log(m);

                    var message = m.payload;
                    message.member = {
                        username: "Confession Bot"
                    };
                    message.direction = MessageDirection.Incoming;

                    this._showMessage(message);
                }
                else if (m.type == 0) {
                    debugger;
                    console.log(m);

                    var message: any = this._decodeMessage(m.speech);
                    message.member = {
                        username: "Confession Bot"
                    };
                    message.direction = MessageDirection.Incoming;

                    this._showMessage(message);
                }
            })
        }
    }

    _decodeMessage = (text: string) => {
        let message: any = {};
        try {
            let text2 = text.replace(/#\(/g, "{").replace(/\)#/g, "}");
            message = JSON.parse(text2);
        }
        catch (e) {
            message = {
                "text": text
            }
        }
        return message;
    }

    SendMessage = (message: string) => {
        this._showMessage({
            text: message,
            member: this.state.member,
            direction: MessageDirection.Outgoing
        });

        client.textRequest(message)
            .then(this._handleQueryResponse.bind(this))
            .catch((error) => {
                console.log(error);
            })
    }

    TriggerEvent = (message: any) => {
        this._showMessage({
            text: message.payload,
            member: this.state.member,
            direction: MessageDirection.Outgoing
        });

        client.eventRequest(message.event, {})
            .then(this._handleQueryResponse.bind(this))
            .catch((error) => {
                console.log(error);
            })
    }

    public render(): JSX.Element {
        return (<div>
            <MessagesList onSendMessage={this.SendMessage.bind(this)} onTriggerEvent={this.TriggerEvent.bind(this)} messages={this.state.messages}></MessagesList>
            <Input onSendMessage={this.SendMessage}></Input>
        </div>);
    }
}
