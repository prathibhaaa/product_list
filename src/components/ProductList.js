import React, { Component } from 'react'

export default class ProductList extends Component {


// constructor(props) {
//     super(props);
//     const products = this.props.products
//   }

  render() {
    return (
      <div id="product-list">
        <header>
          <strong>Product List</strong>
        </header>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              {this.props.products.map((prd, id) =>
                <tr key={prd.id}>
                <td>{prd.id}</td>
                <td>{prd.name}</td>
                <td>{prd.department}</td>
                <td>{prd.price}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}
