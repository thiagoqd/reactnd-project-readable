import React, { Component } from 'react';
import { Route  } from 'react-router-dom';





class Temp extends Component {


  componentDidMount() {
    fetch('http://127.0.0.1:5000/restaurants')
    .then(result => {
      return result.json()
    }).then(data => {
      

      for (let restaurant of Object.keys(data)) {
        for(let item of data[restaurant])
        console.log(item)
      }

      return data
    })
  }


  render() {

    return (
      <div className="App">
        Thi
      </div>
    );
  }
}

export default Temp;