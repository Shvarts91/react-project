import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './redux/redux-store.js'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

// 7. Контакты сделать ссылками, добавить target=blank
// 8. Добавить иконку справа для статуса
// 9. Переделать логин форму с mui
// 10. Составить письмо чтобы пофиксить backend

// 1. Чекбокс
// 2. Тег а только на ссылки
// 3. Не переходит по ссылке

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
