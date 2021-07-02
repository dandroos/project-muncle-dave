import React from "react"
import { Provider } from "react-redux"
import store from "./src/state/store"
import { ThemeProvider, CssBaseline } from "@material-ui/core"
import { Helmet } from "react-helmet"
import theme from "./src/theme"

const wrapWithProvider = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {element}
      </ThemeProvider>
    </Provider>
  )
}

export default wrapWithProvider
