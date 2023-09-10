import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import Main from './Main'
import store from './store'

const domRoot = document.querySelector('#root')

createRoot(domRoot as Element).render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
)
