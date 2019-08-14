import React from "react";

export default function Gallery({ match }) {
  return <div>hello from {match.params.gallery}</div>;
}
