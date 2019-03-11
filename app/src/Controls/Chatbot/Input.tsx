import * as React from "react";
import { TextField, PrimaryButton } from "office-ui-fabric-react";

export class Input extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            text: ""
        }
    }

    onChange(e: any) {
        this.setState({ text: e.target.value });
    }

    onSubmit(e: any) {
        e.preventDefault();
        this.setState({ text: "" });
        this.props.onSendMessage(this.state.text);
    }

    render(): JSX.Element {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12">
                    <div style={{ 'float': 'left', 'width': 'calc(100% - 80px)' }}>
                        <TextField
                            autoFocus={true}
                            onChange={e => this.onChange(e)}
                            value={this.state.text}
                            type="multiline"
                            placeholder="Enter your message and press ENTER"
                        />
                    </div>
                    <PrimaryButton onClick={this.onSubmit.bind(this)} text="Send"></PrimaryButton>
                </div>
            </div>
        );
    }
}
