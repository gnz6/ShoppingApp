import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
// import MemoHook from './06-useMemo/MemoHook'
// import CallbackHook from './07-useCallback/CallbackHook'
// import CounterApp from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import FormCustomHook from './02-useEffect/FormCustomHooks'
// import SimpleForm from './02-useEffect/SimpleForm'
// import MultipleCustoms from './03-examples/MultipleCustoms'
// import FocusScreen from './04-useRef/FocusScreen'
// import Layout from './05-useLayoutEffect/Layout'
// import Memorize from './06-useMemo/Memorize'
// import HooksApp from './HooksApp'
import './index.css'
// import "./08-useReducer/intro-reducer"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>
)
