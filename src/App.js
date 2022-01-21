import React, { Component } from "react";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { getSmurfs } from './actions/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component{
  constructor(){
    super();
  }
  
  componentDidMount(){
    console.log(this.state, this.props.getSmurfs);
    this.props.getSmurfs();
  }

  render(){
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    )
  };
}

//const mapDispatchToProps = (dispatch) = ({
//  getSmurfs: () => dispatch(getSmurfs())
//});

export default connect(null, { getSmurfs })(App);


//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.
