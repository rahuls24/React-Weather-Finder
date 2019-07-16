import React, { Component } from 'react'
import './App.css';
import Weather from './Weather';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const API1= 'http://api.openweathermap.org/data/2.5/weather?q='//for serach via city
const API2=','
const API3= '&appid=YOUR KEYcc1&units=metric'
const API4= 'http://api.openweathermap.org/data/2.5/weather?zip='//for serach via pin/zip code

const styles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


class App extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
       isFill: false,
       city: '',
       country: '',
       temp: '',
       name: '',
       sunR: '',
       sunS: '',
       pin:'',
      
    }
    this.getTemp = this.getTemp.bind(this)
  }
  //for serach via city
  findWeather= () => {
    if(this.state.country !=='' && this.state.city !=='') {
      this.getTemp()
     this.setState({isFill: true})
    
    }
  }
  //for sarch via pincode 
  findWeather1= () => {
    if(this.state.country !=='') {
      this.getTemp1()
     this.setState({isFill: true})
    }
  }

  //for sarch via pincode
  getTemp1(){
    fetch(API4+this.state.pin+API2+this.state.country+API3)
    .then((res) => res.json() )
    .then((data) => {
       // console.log(data);
      this.setState({temp: data.main.temp})
      this.setState({name: data.name})
      this.setState({sunR: data.sys.sunrise})
      this.setState({sunS: data.sys.sunset})
      this.changeTime(this.state.sunR)
      this.changeTime1(this.state.sunS)
    // console.log(this.state);
     
    })
    .catch((error) => console.log('THere was a problem in fetching data'))
    
  
  

  }


//for search via city name
  getTemp(){
    fetch(API1+this.state.city+API2+this.state.country+API3)
    .then((res) => res.json() )
    .then((data) => {
       // console.log(data);
      this.setState({temp: data.main.temp})
      this.setState({name: data.name})
      this.setState({sunR: data.sys.sunrise})
      this.setState({sunS: data.sys.sunset})
      this.changeTime(this.state.sunR)
      this.changeTime1(this.state.sunS)
     //console.log(this.state);
     
    })
    .catch((error) => console.log('THere was a problem in fetching data'))
    
  
  

  }
  //to convert unix time to local time for SunSet Time
  changeTime1=(unix) => {
    var date = new Date(unix*1000);
     var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    this.setState({sunS: formattedTime})
  }
  
  //to convert unix time to local time for SunRise Time
  changeTime=(unix) => {
    var date = new Date(unix*1000);
     var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    this.setState({sunR: formattedTime})
  }
  
  render() {
    const { classes } = this.props;

    if(!this.state.isFill) {
      return (
        <div className="bc">
        <div className="knockout">See The Weather</div>
          <center>
          <TextField
          label="City"
          placeholder="1st Latter In Capital"
          onChange={e => this.setState({ city: e.target.value})}
        />
       
         <TextField
          label="Country"
          placeholder="Only 1st two latter in upper"
          onChange={e => this.setState({ country: e.target.value})}
        />
        <br />
        <br></br>
       <Fab variant="extended" aria-label="Delete" className={classes.fab} onClick={() => this.findWeather()}>
        <NavigationIcon className={classes.extendedIcon} />
        Go
      </Fab>
      <br />
      <TextField
          label="pin"
          placeholder="1st Latter In Capital"
          onChange={e => this.setState({ pin: e.target.value})}
        />
       
         <TextField
          label="Country"
          placeholder="Only 1st two latter in lower"
          onChange={e => this.setState({ country: e.target.value})}
        />
        <br></br>
       <Fab variant="extended" aria-label="Delete" className={classes.fab} onClick={() => this.findWeather1()}>
        <NavigationIcon className={classes.extendedIcon} />
        Go
      </Fab>
      </center>
        </div>
      )
    }
    else {
    return (
      
      <div>
        hay
        <Weather
              name={this.state.name}
              temp={this.state.temp}
              sunR={this.state.sunR}
              sunS={this.state.sunS}
              
         />
      </div>
    )
    }
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
