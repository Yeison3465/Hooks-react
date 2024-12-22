import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Multiplecustomhook } from './03-example/multiplecustomhook'
import { MainPage } from './05-Usecontext/MainPage'
import { Layout } from './06-layout/Layout'
//import { BrowserRouter } from 'react-router-dom'
//import { FormWithCustom } from './02-useEfect/FormWithCustomHook'
//import { Counter2 } from './01-useStade/Counter'
//import { CounterWH } from './01-useStade/counterWH'
//import { Counter } from './01-useStade/CounterApp'
//import { Simpleforms } from './02-useEfect/Simpleforms'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout/>

  </StrictMode>
  
)




/*ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <multiplecustomhook></multiplecustomhook>
  </BrowserRouter>
  
)*/
