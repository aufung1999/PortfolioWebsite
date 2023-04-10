import type { NextPage } from "next";
import { Button, Container, Navbar, Text, Grid, Col } from "@nextui-org/react";
import { Link } from "react-scroll";
import React from "react";

function Header() {
  return (
    <Navbar isCompact variant={"static"}>
      <Navbar.Brand>
        <Text b color="inherit">
          Fung's Portfolio
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link href="#">Learning Platform</Navbar.Link>
        <Navbar.Link href="#">Community</Navbar.Link>
        <Navbar.Link href="#here">Contact Us</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {/* <Navbar.Link href="#">Login</Navbar.Link>
        <Navbar.Item>
          <Button auto flat href="#">
            Sign Up
          </Button>
        </Navbar.Item> */}
      </Navbar.Content>
    </Navbar>
  );
}

export default Header;
