import React from "react";
import { Head, useRouteData } from "react-static";
import { Link } from "@reach/router";
import { Post } from "types";
import { siteConfig } from "../../utils";

export default () => {
  const { post }: { post: Post } = useRouteData();
  return (
    <>
      <Head>
        <title>{post.title} - {siteConfig.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} - ${siteConfig.title}`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta
          property="og:url"
          content={`https://notes.etin.space/posts/${post.slug}`}
        />
        <meta name="twitter:title" content={`${post.title} - ${siteConfig.title}`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Link to="/">{"<"} Back</Link>
        <br />
        <h1 className="text-2xl mb-4">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  );
};
