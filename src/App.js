import React, { Component } from 'react';

import './App.css';
import ShowReport from './ShowReport';
var defaulturl1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFill: false,
      city: '',
      temp: '',
      name: '',
      sunR: '',
      sunS: ''
    };
    this.getTemp = this.getTemp.bind(this);
  }
  //for serach via city
  findWeather = () => {
    if (this.state.city !== '') {
      this.getTemp();
      this.setState({ isFill: true });
    }
  };

  //for search via city name
  getTemp() {
    fetch(defaulturl1 + this.state.city + process.env.REACT_APP_KEY)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ temp: data.main.temp });
        this.setState({ name: data.name });
        this.setState({ sunR: data.sys.sunrise });
        this.setState({ sunS: data.sys.sunset });
        this.changeTime(this.state.sunR);
        this.changeTime1(this.state.sunS);
        //console.log(this.state);
      })
      .catch(error => console.log('THere was a problem in fetching data'));
  }
  //to convert unix time to local time for SunSet Time
  changeTime1 = unix => {
    var date = new Date(unix * 1000);
    var hours = date.getHours();
    var minutes = '0' + date.getMinutes();
    var seconds = '0' + date.getSeconds();
    var formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    this.setState({ sunS: formattedTime });
  };

  //to convert unix time to local time for SunRise Time
  changeTime = unix => {
    var date = new Date(unix * 1000);
    var hours = date.getHours();
    var minutes = '0' + date.getMinutes();
    var seconds = '0' + date.getSeconds();
    var formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    this.setState({ sunR: formattedTime });
  };

  render() {
    if (this.state.isFill) {
      return (
        <ShowReport
          name={this.state.name}
          temp={this.state.temp}
          sunR={this.state.sunR}
          sunS={this.state.sunS}
        />
      );
    }
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark mynav'>
          <h3 className='test mx-auto'>Weather Forecast</h3>
        </nav>
        <div className='cl1'>
          <div className='cl2'>
            <form onSubmit={this.findWeather}>
              <input
                type='text'
                id='ip1'
                placeholder='Enter City Name'
                value={this.state.value}
                onChange={e => this.setState({ city: e.target.value })}
              />
              {/* <input type='text' id='ip2' /> */}
              {/* jjjj */}
              <button className='btn-grad' type='submit'>
                Get Weather
              </button>
              {/* ,,,, */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
