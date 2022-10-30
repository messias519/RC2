import './App.css'
import Calculadora from './assets/conteudo/calculadora/calculadora'
import Footer from './assets/footer/footer'
import Header from './assets/header/header'

// colors
// #d90429 #ef233c #edf2f4 #8d99ae #2b2d42 

function App() {
  return(
    <div>
      <Header />
      <div className="conteudo">
        <Calculadora />
      </div>
      <Footer />
    </div>
  )
}

export default App
