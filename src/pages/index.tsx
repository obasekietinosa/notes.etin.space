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
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={`${siteConfig.title}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={getBannerImage("Etin's Notes")} />
        <meta property="og:url" content={`https://notes.etin.space/`} />
        <meta name="twitter:title" content={`${siteConfig.title}`} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={getBannerImage("Etin's Notes")} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
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
