import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import { Post } from "types";

export default () => {
  const { posts }: { posts: Post[] } = useRouteData();

  return (
    <div>
      <div className="mb-8 md:-mx-16 lg:-mx-40">
        <h1 className="text-3xl mb-4">Welcome to my notes.</h1>
        <p className="text-lg text-gray-600">
          On this small corner of the internet, I write about the various things
          that catch my fancy. From software, to organizational process, to
          poetry and music.
        </p>
      </div>
      <ol className="list-decimal">
        {posts.map((post) => (
          <li className="mb-4 border-b" key={post.id}>
            <h2 className="text-xl mb-4">
              <Link to={`/post/${post.slug}/`}>{post.title}</Link>
            </h2>
            <div className="flex items-center gap-3">
              <p className="mb-4 text-xs">
                {new Date(post.datePublished).toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="inline-block p-1 text-xs mb-4 border-black border italic">
                {post.categoryName}
              </p>
            </div>
            <div
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{
                __html: post.excerpt,
              }}
            />
            <div className="my-4">
              <Link
                className="border-black border-b"
                to={`/post/${post.slug}/`}
              >
                Read
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
