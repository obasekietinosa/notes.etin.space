import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import { Post } from "../../types";

export default () => {
  const { post }: { post: Post } = useRouteData();
  return (
    <div>
      <Link to="/">{"<"} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};
