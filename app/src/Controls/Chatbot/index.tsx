//@ts-ignore
import * as React from "react";
import { MessagesList } from "./MessagesList";

import './Chatbot.css';
import { Input } from "./Input";
import MessageDirection from "../../Enums/MessageDirection";
import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: 'ba8b1e5dad804cbfbd1bd9d1fcc08991'})

export class Chatbot extends React.Component<any, any> {

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

    private _showMessage(message:any){
        let messages=this.state.messages;

        messages.push(message);

        this.setState({messages:messages});
    }

    private _handleQueryResponse(response:any){
        if(response.result && response.result.fulfillment && response.result.fulfillment.messages){
            response.result.fulfillment.messages.forEach((m)=>{
                if(m.type==4 ){
                    console.log(m);

                    var message=m.payload;
                    message.member={
                        username: "Confession Bot"
                    };
                    message.direction= MessageDirection.Incoming;

                    this._showMessage(message);
                }
            })
        }
    }

    onSendMessage = (message: string) => {
        const messages = this.state.messages
        messages.push({
            text: message,
            member: this.state.member,
            direction: MessageDirection.Outgoing
        })
        this.setState({ messages: messages })

        client.textRequest(message)
        .then(this._handleQueryResponse.bind(this))
        .catch((error) => {
            console.log(error);
        })
    }

    public render(): JSX.Element {
        return (<div>
            <MessagesList messages={this.state.messages}></MessagesList>
            <Input onSendMessage={this.onSendMessage}></Input>
        </div>);
    }
}
