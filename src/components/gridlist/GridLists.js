import React, { useState } from "react";
import { useStateValue } from "../ApiDataProvider";
import Loading from "../Loading";
import { GridList, GridListTile } from "@material-ui/core";
import useQueryMedia from "@material-ui/core/useMediaQuery";
import GridListsDialog from "./GridListsDialog";
import PrevPageFab from "../PrevPageFab";

export default function GridLists() {
  const state = useStateValue();
  const md = useQueryMedia("(min-width:760px)");
  const lg = useQueryMedia("(min-width:1025px)");
  const [ele, setEle] = useState({ open: false, index: 0 });
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
            <GridListTile
              key={index}
              cols={cols}
              onClick={() => {
                setEle({ open: true, index: index });
              }}
            >
              <img src={item.url} alt={item.title} />
            </GridListTile>
          );
        })}
      </GridList>
      <GridListsDialog
        open={ele.open}
        close={() => setEle({ open: false, index: ele.index })}
        index={ele.index}
      />
      <PrevPageFab to="/" />
    </>
  );
}
