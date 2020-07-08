import React, { Component } from 'react'

export default class ProductList extends Component {



  render() {
    const {id, name, currency, department, price } = this.props.columns
    return (
      <div id="product-list">
        <header>
          <strong>Product List</strong>
        </header>
        <table>
          <thead>
            <tr>
               {id && <th>ID</th>}
               {name && <th>Name</th>}
               {currency && <th>Currency</th>}
               {department && <th>Department</th>}
               {price && <th>Price</th>}
            </tr>
          </thead>
          <tbody>
              {this.props.products.map((prd, index) =>
                <tr key={index}>
                 {id && <td>{prd.id}</td>}
                 {name && <td>{prd.name}</td>}
                 {currency && <td>{prd.currency}</td>}
                 {department && <td>{prd.department}</td>}
                 {price && <td>{prd.price}</td>}
              </tr>
              )}
          </tbody>
        </table>
      </div>
    )
  }
}


// import React, { Component } from 'react'

// export default class ProductList extends Component {

// render() {
//   const columns =this.props.columns
//     return (
//       <div id="product-list">
//         <header>
//           <strong>Product List</strong>
//         </header>
//         <table>
//           <thead>
//             <tr>
//               for(let column in columns) {
//                 if(columns[column]) {
//                  `<td>{this.props.products[column]}</td>`
//                 }
//               }
//               <th>ID</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Price</th>
//             </tr>

//           </thead>
//           <tbody>
//               {this.props.products.map((prd, id) =>
//                 <tr key={id}>
//                 <td>{prd.id}</td>
//                 <td>{prd.name}</td>
//                 <td>{prd.department}</td>
//                 <td>{prd.price}</td>
//               </tr>)}
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }
