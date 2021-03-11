import React from 'react'
import {Container} from 'react-bootstrap'
import Head from './Components/Header'
import Foot from './Components/Footer'
import HomeScreen from './screen/HomeScreen'

const App=()=> {
  return (
    <div>
      <Head />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Foot />
    </div>
  );
}

export default App;
