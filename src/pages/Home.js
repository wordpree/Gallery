import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { Container } from "@material-ui/core";

export default function Home() {
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Header />
      <MainContent />
    </Container>
  );
}
