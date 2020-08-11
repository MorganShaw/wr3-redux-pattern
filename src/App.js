import React from 'react';
import Child1 from './components/Child1';
import './App.css';
import {connect} from 'react-redux';
import {addMessage} from './redux/reducer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: '',
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.pushButton = this.pushButton.bind(this);
  }

  pushButton = () =>{
    this.props.addMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render(){
    console.log(this.props)

    return <div className="app-main">
      <input value={this.state.message} onChange={e => this.changeHandler(e)}/>
      <button onClick={this.pushButton}>Add Comment</button>
      <span>{this.props.greeting}</span>
      <Child1/>
    </div>
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {addMessage})(App);

//the addMessage on the export line is the mapDispatchToProps.... 
//if you don't have it, you don't have access to this 