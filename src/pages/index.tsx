import React from "react";
import { useRouteData, Head } from "react-static";
import { Link } from "@reach/router";
import { Post } from "types";
import Layout from "components/Layout";
import { formatDate, getBannerImage, siteConfig } from "utils";

export default () => {
  const { posts }: { posts: Post[] } = useRouteData();

  return (
    <Layout>
      <Head>
        <title>
          {siteConfig.title}
        </title>
        <meta name="description" content={siteConfig.description} />
        <meta
          property="og:title"
          content={`${siteConfig.title}`}
        />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={getBannerImage('Etin\'s Notes')} />
        <meta
          property="og:url"
          content={`https://notes.etin.space/`}
        />
        <meta
          name="twitter:title"
          content={`${siteConfig.title}`}
        />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={getBannerImage('Etin\'s Notes')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
                    __html: siteConfig.description,
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
