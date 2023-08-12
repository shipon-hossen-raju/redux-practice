
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from './Fetaure/Store/Store.js'
import Route from './Routes/Route.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={Route} />
  </Provider>,
)
