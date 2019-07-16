import React, { Component } from 'react';
class Weather extends Component {
 
    render() {
        return (
            <div>
                <div className="container">
             <div className="row">
                    <div className="col">
                         <div className="weather-card">
                                <div className="top">
                                
                                <h1>Weather in </h1>
                                <h2 className="heading">{this.props.name}</h2>
                                <h2 className="heading">Temperature:{this.props.temp}°C</h2>
                               
                                <h2 className="heading">SunRise:{this.props.sunR}</h2>
                                <h2 className="heading">SunSet:{this.props.sunS}</h2>

                                </div>
                               
                         </div>
                    </div>
            </div>
        </div>
            </div>
        )
    }
}
export default Weather;
