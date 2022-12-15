import React from "react";
import Posting from "./Posting";
import { postings } from "./postings";

function Gallery() {
  return (
    <div>
      {postings.map((post) => {
        return <Posting post={post}/>;
      })}
    </div>
  );
}

export default Gallery;
