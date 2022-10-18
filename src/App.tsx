// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Provider } from 'react-redux'

import Counter from './components/counter/Counter'
import Hello from './components/hello/Hello'
import { store } from './store'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Hello />
      <Counter />
    </Provider>
  )
}

export default App
