import React, { Component } from 'react'

export default class FilterForm extends Component {

  onPriceInputChange = (e) => {
    this.props.onPriceInputChange(e.target.name, e.target.value)
  }

  render() {
    const {priceFrom, priceTo} =this.props
    return (
      <div>
        <label htmlFor="name">Filter:</label>
        <input type="number"
               name="priceFrom"
               value={priceFrom}
               onChange={(e)=>this.onPriceInputChange(e)}
               placeholder="Price from..."/>
        <input type="number"
               name="priceTo"
               value={priceTo}
               onChange={(e)=>this.onPriceInputChange(e)}
               placeholder="Price to..."/>
      </div>
    )
  }
}
