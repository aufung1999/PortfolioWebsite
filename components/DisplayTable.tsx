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
} from "@nextui-org/react";
import Data from "./Data";
import { useEffect, useState } from "react";

interface Props {
  page: number;
}

interface Dataformat {
  frontend: string;
  backend: string;
  database: string;
}

export const DisplayTable: NextPage<Props> = ({ page }) => {
  const [data, setdata] = useState<any | null>(null);

  useEffect(() => {
    if (page) {
      setdata(Data(page));
    }
  }, []);

  console.log("data: " + JSON.stringify(data, null, 1));

  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
        backgroundColor: "white",
      }}
    >
      <Table.Header>
        <Table.Column css={{ color: "white", fontSize: "$2xl" }}>
          Frontend
        </Table.Column>
        <Table.Column css={{ color: "white", fontSize: "$2xl" }}>
          Backend
        </Table.Column>
        <Table.Column css={{ color: "white", fontSize: "$2xl" }}>
          Database
        </Table.Column>
      </Table.Header>
      <Table.Body css={{ color: "black" }}>
        <Table.Row key="1" css={{ color: "inherit" }}>
          <Table.Cell
            css={{
              borderWidth: "thick",
              // wrap: "wrap",
              borderColor: "black",
              // overflowWrap:"break-word",
              width: "33%",
              // whiteSpace:"noraml",
              // whiteSpace: "initial",
              // wordWrap:"break-word"
            }}
          >
            {data?.frontend}
          </Table.Cell>
          <Table.Cell
            css={{ borderWidth: "thick", borderColor: "black", width: "33%" }}
          >
            {data?.backend}
          </Table.Cell>
          <Table.Cell
            css={{ borderWidth: "thick", borderColor: "black", width: "33%" }}
          >
            {data?.database}
          </Table.Cell>
        </Table.Row>
        {/* <Table.Row key="2" css={{ color: "inherit" }}>
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3" css={{ color: "inherit" }}>
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row> */}
        {/* <Table.Row key="4" css={{ color: "inherit" }}>
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>
  );
};
