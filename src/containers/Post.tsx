import React from "react";
import { Head, useRouteData } from "react-static";
import { Link } from "@reach/router";
import { Post } from "types";
import { siteConfig } from "../../utils";

export default () => {
  const { post }: { post: Post } = useRouteData();
  const content = post.content
    .replace(/<h2/g, '<h2 class="text-2xl font-bold mb-4"')
    .replace(/<h4/g, '<h4 class="text-lg font-semibold mb-4"')
    .replace(/<p/g, '<p class="text-base mb-4"')
    .replace(
      /<a/g,
      `<a 
        target="_blank"
        rel="noreferrer noopener"
        class="
          transition duration-500 ease-in-out
          px-1 
          font-semibold
          bg-gray-800 
          text-white 
          border-gray-800 
          hover:border-b 
          hover:bg-transparent 
          hover:text-black"
      `
    );

  return (
    <>
      <Head>
        <title>
          {post.title} - {siteConfig.title}
        </title>
        <meta name="description" content={post.excerpt} />
        <meta
          property="og:title"
          content={`${post.title} - ${siteConfig.title}`}
        />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta
          property="og:url"
          content={`https://notes.etin.space/posts/${post.slug}`}
        />
        <meta
          name="twitter:title"
          content={`${post.title} - ${siteConfig.title}`}
        />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Link to="/">{"<"} Back</Link>
        <br />
        <h1 className="text-2xl mb-4">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};
