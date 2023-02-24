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

// 1. Сделать отступ между двумя группами
// 2. Уменшить шрифт всему кроме контакты
// 3. Переместить кнопку саве вниз
// 4. Отспуп для кнопок саве и едит
// 5. Сделать нормальный отступ у профайл инфо
// 6. У картинки отступ убрать
// 7. Контакты сделать ссылками, добавить target=blank
// 8. Добавить иконку справа для статуса
// 9. Добавить отступ в форму AddPost между полем и кнопкой
// 10. Составить письмо чтобы пофиксить beacend

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
