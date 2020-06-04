import React, { Component } from 'react'
import './styles/Search.css';
import ToggleColumns from './components/ToggleColumns';
import ProductList from './components/ProductList';
import FilterForm from './components/FilterForm';
import products from './../src/assets/products.json';

// https://medium.com/@divyabiyani26/react-hooks-with-closures-usestate-v-s-usereducer-9e0c20e81051

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      }
    };
  }

  componentDidMount =() => {
    this.setState({products: products})
  }

  onPriceInputChange = (name, value) => {
    if(name === 'priceFrom') {
      this.state.priceFrom = value
      this.setState({priceFrom: value})
    } else {
      this.state.priceTo = value
      this.setState({priceTo: value})
    }
    this.filterProducts()
  }

  filterProducts = () => {

    const {priceFrom, priceTo} = this.state
    let products = this.state.products.filter((e) => e.price >= priceFrom &&  e.price <= priceTo);
    if(products.length > 0)
    this.setState({products:products})
  }

  onCheckboxClick = (name, checked) => {
    this.state.columns[name] = checked
    this.setState({columns: this.state.columns})
  }

  render() {
    let displayedProducts = [];
    const {priceFrom, priceTo, columns, products } = this.state
    return (
      <div className="Products">
        <FilterForm priceFrom={priceFrom}
                    priceTo={priceTo}
                    onPriceInputChange={this.onPriceInputChange}/>

        <ToggleColumns onCheckboxClick={this.onCheckboxClick}
                       columns={columns}/>

        <ProductList products={products}
                     columns={columns}/>
      </div>
    );
  }
}
