import React, { Component } from 'react'

export default class ToggleColumns extends Component {

  onCheckboxClick = (name, e) => {
    this.props.onCheckboxClick(name, e.checked);
  }
  
  render() {
    return (
      <div>
        { 
          Object.keys(this.props.columns).map((column, index) => {
            return ( 
            <div className="toggelCln" key={index}>
              <input type="checkbox"
                onClick={(e) => this.onCheckboxClick(column, e.target)} 
                defaultChecked="true"
              />
              <label>
                {column}
              </label>
              
            </div>)
          })
        }
      </div>
    );
  }
}
