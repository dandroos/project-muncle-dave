import * as React from "react"
import { Container, Typography } from "@material-ui/core"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Container>
      <Typography>I am the home page</Typography>
    </Container>
  </>
)

export default IndexPage
