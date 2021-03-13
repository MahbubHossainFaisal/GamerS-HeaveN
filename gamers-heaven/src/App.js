import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Head from './Components/Header'
import Foot from './Components/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'

const App=()=> {
  return (
    <Router>
      <Head />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Foot />
    </Router>
  );
}

export default App;
