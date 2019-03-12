import * as React from "react";
import { MessageBox } from "./MessageBox";

export class MessagesList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    private _renderMessage(message: any) {
        return (
            <MessageBox onSendMessage={this.props.onSendMessage} message={message}></MessageBox>
        );
    }

    render(): JSX.Element {
        return (
            <div className="ms-Grid-row" >
                {this.props.messages.map((m: any) => this._renderMessage(m))}
            </div>
        );
    }
}
