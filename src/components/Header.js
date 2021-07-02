import React from "react"
import { connect } from "react-redux"
import { setMobMenuVisible } from "../state/actions"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@material-ui/core"
import { Menu } from "mdi-material-ui"
import { useStaticQuery, graphql } from "gatsby"
import { internal } from "../nav"

const Header = ({ dispatch, isMobile }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleClick = e => {
    switch (e) {
      case "mob-menu":
        dispatch(setMobMenuVisible(true))
        break
      default:
        break
    }
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">{data.site.siteMetadata.title}</Typography>
        <Box flexGrow={1} />
        {isMobile ? (
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => handleClick("mob-menu")}
          >
            <Menu />
          </IconButton>
        ) : (
          <>
            {internal.map(i => (
              <Button color="inherit">{i.label}</Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(Header)
