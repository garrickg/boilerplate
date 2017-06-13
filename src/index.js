import React from 'react'
import ReactDOM from 'react-dom'

// import css
import './styles/index.css'

// import components
import App from './components/App'
import ItemGrid from './components/ItemGrid'
import Single from './components/Single'

// import react router dependencies
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={ItemGrid} />
        <Route path='/view/:itemId' component={Single} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
