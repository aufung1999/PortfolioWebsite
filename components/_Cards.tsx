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
import InfoCard from "./InfoCard";

export const _Cards = () => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12} sm={4}>
        <InfoCard
          label="Course"
          title="Learn Next.js"
          imageURL="https://littlevisuals.co/images/red_dawn.jpg"
          studentCount="3000"
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <InfoCard
          label="Course"
          title="Learn Next.js"
          imageURL="https://littlevisuals.co/images/sunset.jpg"
          studentCount="3000"
        />
      </Grid>
      <Grid xs={12} sm={4} id="here">
        <InfoCard
          label="Course"
          title="Learn Next.js"
          imageURL="https://littlevisuals.co/images/tail.jpg"
          studentCount="3000"
        />
      </Grid>
    </Grid.Container>
  );
};
