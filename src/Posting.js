import React from "react";

function Posting(props) {
  return <h1>Posting</h1>;
}
const craigPost = require("./postings");

let postList = craigPost.postings.map((data, i) => {
  return <Posting data={data} key={i} />;
});

export default Posting;
