import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import axios from '../../axios';

class Products extends Component {
  componentDidMount() {
    axios.get('/profile/test')
      .then(res => {
        console.log(res);
      })
  }
  render () {
    return <div>Products</div>
  }
}

export default Products;