import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Head from './Components/Header'
import Foot from './Components/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'

const App=()=> {
  return (
    <Router>
      <Head />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} /> {/* ? is used to make id optional */}
        </Container>
      </main>
      <Foot />
    </Router>
  );
}

export default App;
