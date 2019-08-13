import React, { useState, useContext, useEffect } from "react";
const contentful = require("contentful");

const client = contentful.createClient({
  space: "sgg3r4gn764x",
  accessToken: "OpfgHtB2yl5DQyt3j8pWwhPsjXBUMcW8fCgEzrKn6z8"
});

const GalleryContext = React.createContext();

export const StateProvider = props => {
  const [state, setState] = useState({
    loading: true,
    gallery: []
  });

  useEffect(() => {
    async function handleDataFetch() {
      await client
        .getEntry("1S5uWC5GZheNDLUFT5JYS9")
        .then(entry =>
          setState({
            gallery: entry.fields.homepage.map(item => ({
              title: item.fields.title,
              url: item.fields.file.url
            })),
            loading: false
          })
        )
        .catch(console.error);
    }
    handleDataFetch();
  }, []);
  return (
    <GalleryContext.Provider value={state}>
      {props.children}
    </GalleryContext.Provider>
  );
};
export const useStateValue = () => useContext(GalleryContext);
