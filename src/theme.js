import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { primary, secondary } from "../palette"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    fontFamily: "Bebas Neue",
    body1: {
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
    },
  },
})

export default responsiveFontSizes(theme)
