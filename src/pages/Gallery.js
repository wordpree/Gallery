import React from "react";
import GridLists from "../components/gridlist/GridLists";
import { Container } from "@material-ui/core";
import { StateProvider } from "../components/ApiDataProvider";
import Header from "../components/Header";
import queryPara from "../Contentful";
import Error from "./Error";
export default function Gallery({ match }) {
  const key = match.params.gallery;
  const query = queryPara.find(item => key === Object.keys(item).toString());
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      {query !== undefined ? (
        <>
          <Header />
          <StateProvider query={query[key]}>
            <GridLists />
          </StateProvider>
        </>
      ) : (
        <Error />
      )}
    </Container>
  );
}
