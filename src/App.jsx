
import './App.css'

import rasmcha from './assets/logo.svg'

function App() {


  return (
    <>

      <header className='container' >
        
        <ul>
          <li><img src={rasmcha} alt="" /></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Resources</a></li>
        </ul>

        <button>Sign Up</button>


      </header>
      <main></main>
      <footer></footer>


    </>
  )
}

export default App;
