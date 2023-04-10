import { Card, Text, Row, Col, Button, Grid } from "@nextui-org/react";
import type { NextPage } from "next";
import Iframe from "react-iframe";
import styles from "../styles/Iframe.module.css";

interface Props {
  websiteURL: string;
}

const DisplayWebsite: NextPage<Props> = (props) => {
  const { websiteURL } = props;
  return (
    <Grid.Container css={{margin:"", borderWidth:"thick", borderColor:"$accents0"}}>
      <Grid
        css={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          paddingTop: "75%",
        }}
      >
        <Iframe
          url={websiteURL}
          // width="100%"
          // height="1000px"
          // height="100%"

          id=""
          className={styles.responsive_iframe}
          // display="block"
          // position="absolute"
        />
      </Grid>
    </Grid.Container>
  );
};

export default DisplayWebsite;
