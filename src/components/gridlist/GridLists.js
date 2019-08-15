import React, { useState } from "react";
import { useStateValue } from "../ApiDataProvider";
import Loading from "../Loading";
import { GridList, GridListTile } from "@material-ui/core";
import useQueryMedia from "@material-ui/core/useMediaQuery";
import PrevPageFab from "../PrevPageFab";
import GridListsDialog from "./GridListsDialog";

export default function GridLists() {
  const state = useStateValue();
  const md = useQueryMedia("(min-width:760px)");
  const lg = useQueryMedia("(min-width:1025px)");
  const [open, setOpen] = useState(false);
  const i = { acc: 0, cols: 0 };
  let cellHeight = lg ? 335 : md ? 250 : 180;

  const imageSArg = () => {
    const cols = () => Math.ceil(Math.random() * 2);
    i.cols = cols();
    if (i.acc % 3 === 0) {
      i.acc = 0;
    }
    if (i.acc % 3 === 2) {
      i.cols = 1;
    }
    i.acc = i.acc + i.cols;
    return i.cols;
  };

  return state.loading && state.gallery.length === 0 ? (
    <Loading />
  ) : (
    <>
      <GridList cols={3} cellHeight={cellHeight} style={{ margin: 0 }}>
        {state.gallery.map((item, index) => {
          const cols = imageSArg();
          return (
            <GridListTile key={index} cols={cols} onClick={() => setOpen(true)}>
              <img src={item.url} alt={item.title} />
            </GridListTile>
          );
        })}
      </GridList>
      <GridListsDialog
        open={open}
        close={() => setOpen(false)}
        onclick={e => console.log(e.target.style)}
      />
      <PrevPageFab to="/" />
    </>
  );
}
