import React from 'react'
import {Container} from 'react-bootstrap'
import Head from './Components/Header'
import Foot from './Components/Footer'

const App=()=> {
  return (
    <div>
      <Head />
      <main className='py-3'>
        <Container>
          <h1>Welcome to GamerS HeaveN</h1>
        </Container>
      </main>
      <Foot />
    </div>
  );
}

export default App;
