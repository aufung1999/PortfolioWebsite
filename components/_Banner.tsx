import type { NextPage } from "next";
import {
  Button,
  Container,
  Navbar,
  Text,
  Grid,
  Col,
  Collapse,
  Pagination,
  Radio,
  Table,
  Card,
  Row,
  Popover,
} from "@nextui-org/react";

export const Banner = () => {

  return (
    <Grid.Container
      css={{
        height: "200px",
        // borderWidth: 10,
        backgroundImage: "url(https://littlevisuals.co/images/sunset.jpg)",
      }}
    >
      <Grid
        xs={12}
        justify="center"
        alignItems="center"
        // css={{ borderWidth: 10 }}
      >
        <Text
          weight={"bold"}
          size={45}
          css={{
            textAlign: "center",
            borderWidth: 10,
            paddingRight: 100,
            paddingLeft: 100,
          }}
        >
          Portfolio
        </Text>
      </Grid>


    </Grid.Container>
  );
};
