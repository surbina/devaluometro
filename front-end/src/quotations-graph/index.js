import React from 'react';
import { connect } from 'react-redux';
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryBrushContainer,
} from 'victory';

import { fireFetchQuotations } from './quotations-data-actions';
import {
  fireUpdateSelectedDomain,
  fireUpdateZoomDomain,
} from './graph-actions';

class QuotationsGraph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleBrushDomainUpdate = this.handleBrushDomainUpdate.bind(this);
    this.handleZoomDomainUpdate = this.handleZoomDomainUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fireFetchQuotations();
  }

  handleZoomDomainUpdate(domain) {
    this.props.fireUpdateSelectedDomain(domain);
  }

  handleBrushDomainUpdate(domain) {
    this.props.fireUpdateZoomDomain(domain);
  }

  render() {
    const { dolarData, graph } = this.props;

    return(
      <div>
        <VictoryChart
          width={550} height={400} scale={{x: "time"}}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={graph.zoomDomain}
              onZoomDomainChange={this.handleZoomDomainUpdate}
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={dolarData}
          />
        </VictoryChart>

        <VictoryChart
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            width={550} height={100} scale={{x: "time"}}

            containerComponent={
              <VictoryBrushContainer
                brushDimension="x"
                brushDomain={graph.selectedDomain}
                onBrushDomainChange={this.handleBrushDomainUpdate}
              />
            }
          >
            <VictoryAxis
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={dolarData}
            />
        </VictoryChart>
      </div>
    );
  }
}

const mapStateToProps = ({ quotationsData, graph }) => {
  const { quotationsList, data } = quotationsData;

  const dolarData = quotationsList.map((quotationDate, index) => ({
    x: new Date(...(quotationDate.split('-'))),
    y: data[quotationDate].value,
  }));

  return {
    dolarData,
    graph,
  };
};

const mapDispatchToProps = {
  fireFetchQuotations,
  fireUpdateSelectedDomain,
  fireUpdateZoomDomain,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotationsGraph);
