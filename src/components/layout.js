import * as React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useTheme, useMediaQuery, Toolbar, Box } from "@material-ui/core"
import Header from "./Header"
import MobMenu from "./MobMenu"
import { setIsMobile } from "../state/actions"

const Layout = ({ dispatch, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  React.useEffect(() => {
    dispatch(setIsMobile(isMobile))
  }, [isMobile])
  return (
    <>
      <Header />
      <MobMenu />
      <main>
        <Toolbar />
        <Box py={2}>{children}</Box>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect()(Layout)
