import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import {
  Portal,
  Dialog,
  Slide,
  Box,
  List,
  ListItem,
  ListItemText,
  Fab,
} from "@material-ui/core"
import { Close } from "mdi-material-ui"
import { internal } from "../nav"
import { setMobMenuVisible } from "../state/actions"

const MobMenu = ({ dispatch, isOpen }) => {
  const handleClick = (e, link = null) => {
    switch (e) {
      case "close":
        dispatch(setMobMenuVisible(false))
        break
      default:
        break
    }
  }
  return (
    <Portal>
      <Dialog open={isOpen} fullScreen TransitionComponent={Slide}>
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <List>
            {internal.map(i => (
              <ListItem
                button
                component={Link}
                to={i.link}
                onClick={() => handleClick("close")}
              >
                <ListItemText
                  primary={i.label}
                  primaryTypographyProps={{ align: "center" }}
                />
              </ListItem>
            ))}
          </List>
          <Fab
            onClick={() => handleClick("close")}
            color="primary"
            style={{ position: "fixed", top: 15, right: 15 }}
          >
            <Close />
          </Fab>
        </Box>
      </Dialog>
    </Portal>
  )
}

const mapStateToProps = state => ({
  isOpen: state.mobMenuVisible,
})

export default connect(mapStateToProps)(MobMenu)
