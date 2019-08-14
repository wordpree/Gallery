import React from "react";
import Header from "../components/Header";
import ImageLists from "../components/ImageLists";
import { Container } from "@material-ui/core";
import { StateProvider } from "../components/ApiDataProvider";

export default function Home() {
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Header />
      <StateProvider>
        <ImageLists />
      </StateProvider>
    </Container>
  );
}
