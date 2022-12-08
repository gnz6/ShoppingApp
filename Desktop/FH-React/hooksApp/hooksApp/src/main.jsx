import React from 'react'
import ReactDOM from 'react-dom/client'
// import CounterApp from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import FormCustomHook from './02-useEffect/FormCustomHooks'
// import SimpleForm from './02-useEffect/SimpleForm'
import MultipleCustoms from './03-examples/MultipleCustoms'
// import HooksApp from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustoms/>
  </React.StrictMode>
)
