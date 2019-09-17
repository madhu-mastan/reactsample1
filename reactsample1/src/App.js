import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { columnNames, data } from './service';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this)
  }

  renderColumnNames() {
    return columnNames.map((value, index) => {
      return <th className="dynamic-table-th" key={index}>{value}</th>
    });
  }

  renderTableData = () => {
    return data.map((obj, index) => {
      const { date, open, high, low, close, volume } = obj //destructuring
      return (
        <tr key={index}>
          <td>{date}</td>
          <td>{open}</td>
          <td>{high}</td>
          <td>{low}</td>
          <td>{close}</td>
          <td>{volume}</td>
        </tr>
      );
    });
  }

  renderCardsData = () => {
    return data.map((obj, index) => {
      return (
        <Card key={index}>
          <Card.Body>
            <Card.Text><span>Open:</span>{obj.date}</Card.Text>
            <Card.Text><span>Open:</span>{obj.open}</Card.Text>
            <Card.Text><span>High:</span>{obj.high}</Card.Text>
            <Card.Text><span>Low:</span>{obj.low}</Card.Text>
            <Card.Text><span>Close:</span>{obj.close}</Card.Text>
            <Card.Text><span>Volume:</span>{obj.volume}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="center">
        <div className="center-middle">
          <div className="toggle-button">
            <button className="toggle" onClick={this.handleClick}>Toggle</button>
          </div>

          <div>
            <div className="div-style">
              {this.state.isToggleOn ?
                <div>
                  <table id="dynamic-table">
                    <tbody>
                      <tr>{this.renderColumnNames()}</tr>
                      {this.renderTableData()}
                    </tbody>
                  </table>
                </div> :
                <div>
                  {this.renderCardsData()}
                </div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
