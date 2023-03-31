import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

function Home() {


  return (
    <REACT.Fragment>
      <Header />
      <main>
        <ProductList />
      </main>
      <footer>
        <p><small>Soluxe Sunglasses Boutique™ | ©copyright 2023</small></p>
      </footer>
    </REACT.Fragment>
  );
}

export default Home;