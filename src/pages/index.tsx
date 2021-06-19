import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import { Post } from "types";
import Layout from "components/Layout";
import { formatDate } from "utils";

export default () => {
  const { posts }: { posts: Post[] } = useRouteData();

  return (
    <Layout>
      <ul className="list-none">
        {posts.map((post) => (
          <li className="mb-12 pb-6 border-gray-400 border-b" key={post.id}>
            <Link to={`/post/${post.slug}/`}>
              <div className=" transition-transform transform hover:translate-x-12 pr-12">
                <h2 className="font-serif font-bold text-xl mb-4">
                  {post.title}
                </h2>
                <div
                  className="text-gray-600 text-base mb-4"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}
                />
                <div className="flex items-center text-brand text-sm gap-3">
                  <p>
                    {post.categoryName}
                    &nbsp;-&nbsp;
                    {formatDate(post.datePublished)}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
