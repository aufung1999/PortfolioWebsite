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
import { useState } from "react";

import InfoCard from "@/components/InfoCard";
import Header from "@/components/Header";

import DisplayWebsite from "@/components/DisplayWebsite";
import { DisplayDetails } from "@/components/DisplayDetails";

// const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const [page, setPage] = useState(1);

  return (
    <Container css={{ backgroundColor: "white" }}>
      {/* NAVBAR */}
      <Grid.Container css={{ backgroundColor: "black" }}>
        <Header />
      </Grid.Container>
      {/* JUMBOTRON */}
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

        {/* PAGINATION */}
        <Grid
          xs={12}
          justify="center"
          alignItems="center"
          // css={{ borderWidth: 10 }}
        >
          <Pagination
            color="primary"
            size="xl"
            total={4}
            onChange={(page) => setPage(page)}
          />
        </Grid>
      </Grid.Container>

      {/* OTHER WEBSITES */}
      {/* ====================================================================== */}
      <Grid.Container
        wrap="wrap"
        justify="center"
        css={{
          backgroundImage: "url(https://littlevisuals.co/images/sunset.jpg)",
          backgroundColor: "white",
        }}
      >
        <Grid
          css={{
            margin: "$10",
            borderWidth: "thick",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Grid
            css={{
              borderWidth: "thick",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text h1 size={30} css={{ borderWidth: "thick" }} weight="bold">
              {page === 1 &&
                `1. Sound Event Detection through Convolutional Neural Nework`}
              {page === 2 && `2. Self Learning Website`}
              {page === 3 &&
                `3. Calenther - a Combination of Calendar and Weather`}
            </Text>
          </Grid>
          <Grid css={{ borderWidth: "thick" }}>
            <Popover placement="right" disableAnimation>
              <Popover.Trigger>
                <Button bordered shadow color="error" auto>
                  Details
                </Button>
              </Popover.Trigger>
              <Popover.Content
                css={{
                  width: "60%",
                  padding: "$10",
                }}
              >
                {page === 1 && <DisplayDetails page={page} />}
                {page === 2 && <DisplayDetails page={page} />}
                {page === 3 && <DisplayDetails page={page} />}
                {page === 4 && <DisplayDetails page={page} />}
                {page === 5 && <DisplayDetails page={page} />}
              </Popover.Content>
            </Popover>
          </Grid>
        </Grid>

        {/* <DisplayDetails page={page} /> */}

        {/* ===================================== */}

        <Grid
          css={{
            width: "100%",
            justifyContent: "center",
            backgroundColor: "white",
            margin: "$10",
          }}
        >
          {/* <Text>{page}</Text> */}

          {page === 1 && (
            <DisplayWebsite
              websiteURL={"https://master--zesty-longma-6d7cc7.netlify.app/"}
            />
          )}
          {page === 2 && (
            <DisplayWebsite
              websiteURL={"https://poetic-mermaid-0421c2.netlify.app"}
            />
          )}
          {page === 3 && (
            <DisplayWebsite
              websiteURL={"https://sage-biscochitos-c3e89c.netlify.app"}
            />
          )}
        </Grid>
      </Grid.Container>
      {/* ====================================================================== */}

      {/* CARD */}
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
    </Container>
  );
};

export default Home;
