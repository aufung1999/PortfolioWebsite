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
} from "@nextui-org/react";
import { DisplayTable } from "./DisplayTable";

interface Props {
  page: number;
}

export const DisplayDetails: NextPage<Props> = ({ page }) => {
  return (
    <>
      <Grid css={{ width: "90%", justifyContent: "center" }}>
        <Card css={{ marginBottom: 30 }}>
          <Card.Body>
            <Text h3 size={30}>
              Usage: To predict the audio from 10 Sound Event Classes
            </Text>
          </Card.Body>
        </Card>

        <Card css={{ marginBottom: 20 }}>
          <Card.Body>
            <DisplayTable page={page} />
          </Card.Body>
        </Card>
      </Grid>
    </>
  );
};
