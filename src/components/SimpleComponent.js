// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  toggleMood = () => {
      this.setState(state => {
        state.mood = state.mood === "happy" ? "sad" : "happy"
        return state
      })
  }

  render(){
    return <div onClick={this.toggleMood}>{this.state.mood}</div>
  }
}
