import React, { Component } from 'react';
import { History } from './Controls/History';
import { Breadcrumb } from 'office-ui-fabric-react';

class HistoryView extends Component {
  render() {
    return (
      <div>
        <div className="ms-Grid-row" style={{ margin: '0px', marginBottom: '10px' }}>
          <div className="ms-Grid-col ms-sm12">
            <Breadcrumb
              items={[
                { text: 'History', key: 'History' }
              ]}
              
            />
            <History></History>
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryView;
