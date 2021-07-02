import * as React from "react"
import { Container, Typography } from "@material-ui/core"

import Seo from "../components/seo"

const AboutPage = () => (
  <>
    <Seo title="About" />
    <Container>
      <Typography>I am the about page</Typography>
    </Container>
  </>
)

export default AboutPage
