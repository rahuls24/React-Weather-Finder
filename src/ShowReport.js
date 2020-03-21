import React, { Component } from 'react';
import './App.css';
import App from './App';

export default class ShowReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClick: false
    };
  }

  render() {
    if (this.state.isClick) {
      return <App />;
    } else if (this.props.temp < 20 + 273) {
      return (
        <div className='showRCO'>
          <div className='cl1SRCO'>
            <div className='cl2SRCO' style={{}}>
              <div style={{ textAlign: 'center', color: '#2B2B52' }}>
                <h3>{this.props.name}</h3>
                <h3>{Math.round(this.props.temp - 273)} &#8451;</h3>
                <h3>SunRise - {this.props.sunR} AM</h3>
                <h3>SunSet - {this.props.sunS} PM</h3>
              </div>
              <button
                class='btn-grad'
                onClick={() => {
                  this.setState({ isClick: true });
                }}
              >
                BACK
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.props.temp >= 20 + 273 && this.props.temp <= 40 + 273) {
      return (
        <div className='showRC'>
          <div className='cl1SRC'>
            <div className='cl2SRC' style={{}}>
              <div style={{ textAlign: 'center', color: '#2B2B52' }}>
                <h3>{this.props.name}</h3>
                <h3>{Math.round(this.props.temp - 273)} &#8451;</h3>
                <h3>SunRise - {this.props.sunR} AM</h3>
                <h3>SunSet - {this.props.sunS} PM</h3>
              </div>
              <button
                class='btn-grad'
                onClick={() => {
                  this.setState({ isClick: true });
                }}
              >
                BACK
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='showR'>
          <div className='cl1SR'>
            <div className='cl2SR' style={{}}>
              <div style={{ textAlign: 'center', color: '#2B2B52' }}>
                <h3>{this.props.name}</h3>
                <h3>{Math.round(this.props.temp - 273)} &#8451;</h3>
                <h3>SunRise - {this.props.sunR} AM</h3>
                <h3>SunSet - {this.props.sunS} PM</h3>
              </div>
              <button
                class='btn-grad'
                onClick={() => {
                  this.setState({ isClick: true });
                }}
              >
                BACK
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
