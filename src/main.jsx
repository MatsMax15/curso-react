import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import './08-useReducer/intro-reducer'

import { TodoApp } from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'
// import { SimpleWithCustomHook } from './02-useEffect/SimpleWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* <HooksApp /> */}
		{/* <CounterApp /> */}
		{/* <CounterWithCustomHook /> */}
		{/* <SimpleForm /> */}
		{/* <SimpleWithCustomHook /> */}
		{/* <MultiplesCustomHooks /> */}
		{/* <FocusScreen /> */}
		{/* <Layout /> */}
		{/* <Memorize /> */}
		{/* <MemoHook /> */}
		{/* <CallbackHook /> */}
		{/* <Padre /> */}
		<TodoApp />
	</StrictMode>
)
