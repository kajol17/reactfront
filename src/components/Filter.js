import React, { Component } from 'react'

export class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          title: ""
        }
      }
      
      handleChange = (e) => {
        this.setState({
          title: e.target.value
        })
        this.props.onChange(e.target.value)
      }
  render() {
    return (
      <div>
        <label htmlFor="filter">Search </label>
        <input type="text" id="filter" 
          value={this.state.title} 
          onChange={this.handleChange}/>

      </div>
    )
  }
}

export default Filter
