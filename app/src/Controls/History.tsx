//@ts-ignore
import * as React from "react";
import { HistoryService } from "../Services/HistoryService";
import { DetailsList, IColumn } from "office-ui-fabric-react";



export class History extends React.Component<any, any> {
    private _historyService: HistoryService = new HistoryService();
    constructor(props: any) {
        super(props);

        this.state = {
            'history': [],
            'columns': this._getColumns()
        }

        this._getHistory();
    }


    private _getColumns(): IColumn[] {
        return [
            {
                key: 'Date',
                name: 'Date',
                fieldName: 'Date',
                isSorted: true,
                minWidth: 130,
                maxWidth: 130,
            },
            {
                key: 'SessionId',
                name: 'Session Id',
                fieldName: 'SessionId',
                minWidth: 240,
                maxWidth: 240,
                onRender: (item: any) => {
                    let sessionId = item.SessionId.substring(item.SessionId.lastIndexOf("/") + 1);

                    return <span>{sessionId}</span>;
                }
            },
            {
                key: 'Intent',
                name: 'Intent',
                fieldName: 'IntentName',
                isSorted: true,
                minWidth: 130,
                maxWidth: 130,
            },
            {
                key: 'Query',
                name: 'Query',
                fieldName: 'Query',
                minWidth: 130,
                maxWidth: 130,
            },
            {
                key: 'Is Failed',
                name: 'Is Failed',
                fieldName: 'Failed',
                minWidth: 50,
                maxWidth: 50,
                onRender: (item: any) => {
                    return <span>{item.Failed.toString()}</span>;
                }
            },
            {
                key: 'Response',
                name: 'Response',
                fieldName: 'Response',
                minWidth: 0,
                maxWidth: 80,
                onRender: (item: any) => {
                    return <span>{JSON.stringify(item.Response)}</span>;
                }
            }
        ]
    }

    private _getHistory() {
        this._historyService.listAll().then(
            (result: any) => {
                console.log(result);
                this.setState({ 'history': result })
            },
            error => {
                console.log(error);
                //alert(error.text());
                // this.toastr.error('', error.text());
                //this.displayAlertModal(error.text());
                alert(error);
            }
        );

    }

    public render(): JSX.Element {
        return (<div>
            <DetailsList
                items={this.state.history}
                columns={this.state.columns}
            />
        </div>);
    }
}