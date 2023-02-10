import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer'
import Counter from './components/Counter.js'
import Number from './components/Number.js'
import "./styles.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Number />);


function App()
{
  return(
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}






//  AJAX -> ASYNCHRONOUS JAVASCRIPT AND XML