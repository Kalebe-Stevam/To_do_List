import { Provider } from 'react-redux'
import store from './store/index'

import './App.css'
import List from './List'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
      </div>

    </Provider>
  )
}

export default App
