import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import App from "./App"
import "normalize.css"
import "./assets/css/index.less"
import store from "./stores"

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
  <BrowserRouter>
    <Suspense fallback="lodaing">
      <Provider store={store}>
        <App/>
      </Provider>
    </Suspense>
  </BrowserRouter>
)