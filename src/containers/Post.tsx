import React from "react";
import { Head, useRouteData } from "react-static";
import { Post } from "types";
import { formatDate, siteConfig } from "../../utils";
import Layout from "components/Layout";

export default () => {
  const { post }: { post: Post } = useRouteData();
  
  const content = post.content
    .replace(/<h1/g, '<h2 class="font-serif text-2xl font-bold mb-4"')
    .replace(/<h2/g, '<h2 class="font-serif text-2xl font-bold mb-4"')
    .replace(/<h3/g, '<h3 class="font-serif text-2xl font-bold mb-4"')
    .replace(/<h4/g, '<h4 class="text-lg italic mb-4"')
    .replace(/<p>/g, '<p class="text-base text-brand-gray-dark leading-loose mb-4">')
    .replace(
      /<a/g,
      `<a 
        target="_blank"
        rel="noreferrer noopener"
        class="
          transition duration-500 ease-in-out
          px-1 
          font-semibold
          border-gray-800 
          border-b
      `
    )
    .replace(/<img/g, '<img class="border-black border md:max-w-xs my-4 mx-auto"')
    .replace(/<figcaption/g, '<figcaption class="text-sm mt-2 mb-4 pb-2 text-center border-b"')
    .replace(/<pre/g, '<pre class="overflow-scroll bg-black text-white mb-4 p-4"')
    .replace(/<code/g, '<code class="bg-black text-white px-2"')
    ;
    
  return (
    <Layout>
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
      <div className="md:pr-24">
        <h1 className="font-serif font-bold text-2xl md:text-4xl mb-4">{post.title}</h1>
        <p className="text-brand-gray-dark mb-4">{formatDate(post.datePublished)}</p>
        <p className="text-brand mb-4">By {post.author.name}</p>
        <div className="overflow-x-hidden" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};
