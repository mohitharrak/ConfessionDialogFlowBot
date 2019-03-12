import * as React from "react";
import MessageDirection from "../../Enums/MessageDirection";
import { Persona, PersonaSize, PersonaPresence, DocumentCard, DocumentCardDetails, DocumentCardTitle, DocumentCardActivity, PrimaryButton, Stack } from "office-ui-fabric-react";

export class MessageBox extends React.Component<any, any> {

    private _renderMessage() {

    }

    private _buttonClick(button: any) {
        if (this.props.onSendMessage)
            this.props.onSendMessage(button.payload);
    }

    render(): JSX.Element {
        //var className = this.props.message.direction == MessageDirection.Incoming ? "Messages-message" : "Messages-message currentMember";
        return (
            <div className="ms-Grid-col ms-sm12">
                {this.props.message.direction == MessageDirection.Incoming ?
                    <DocumentCard
                        style={{ 'backgroundColor': '#f4f7f9', 'float': 'left', 'width': '100%', 'margin': 10 }} >
                        <DocumentCardDetails>
                            <DocumentCardActivity
                                activity="0 minutes ago"
                                people={[{ name: this.props.message.member.username, profileImageSrc: '' }]}
                            />
                            <DocumentCardTitle className='message-box-text' title={this.props.message.text} showAsSecondaryTitle={true} />
                            {this.props.message.buttons && this.props.message.buttons.length > 0 &&
                                <Stack gap={10} padding={10}>
                                    {this.props.message.buttons.map((button: any) => {
                                        return <PrimaryButton onClick={this._buttonClick.bind(this, button)} text={button.title}></PrimaryButton>
                                    })}
                                </Stack>
                            }
                            <div></div>
                        </DocumentCardDetails>
                    </DocumentCard>
                    : <DocumentCard style={{ 'backgroundColor': '#f4f9f8', 'float': 'right', 'width': '100%', 'margin': 10 }}>
                        <DocumentCardDetails>
                            <DocumentCardActivity
                                activity="10 minutes ago"
                                people={[{ name: 'Me', profileImageSrc: '' }]}
                            />
                            <DocumentCardTitle title={this.props.message.text} showAsSecondaryTitle={true} />
                        </DocumentCardDetails>
                    </DocumentCard>}
            </div>
        );
    }
}
