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

import InfoCard from "./InfoCard";
import Header from "./Header";

import DisplayWebsite from "./DisplayWebsite";
import { DisplayDetails } from "./DisplayDetails";

// const inter = Inter({ subsets: ['latin'] })

const Projects: NextPage = () => {
  const [page, setPage] = useState(1);

  return (
    <Grid.Container
      wrap="wrap"
      justify="center"
      css={{
        backgroundImage: "url(https://littlevisuals.co/images/sunset.jpg)",
        backgroundColor: "white",
      }}
    >
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
        <Grid
          css={{
            borderWidth: "thick",
            width: "10%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
          display: "flex",
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
  );
};

export default Projects;
