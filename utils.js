import he from "he";

export const siteConfig = {
  title: "Etin's Notes",
  description:
    "A Seed, learning to become a Tree. I write about the experiences that shape me.",
};

export const formatDate = (date) => (
  new Date(date).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
)

export const formatPosts = (posts) => posts.map(formatPost);

export const formatPost = (data) => ({
  title: he.decode(data.title),
  id: data.ID,
  datePublished: data.date,
  image: data.featured_image?.length
    ? data.featured_image
    : `https://services.etin.space/notes/generate-image/?title=${encodeURI(
        data.title
      )}`,
  categoryId: Object.values(data.terms.category)[0]?.ID,
  categoryName: Object.values(data.terms.category)[0]?.name,
  excerpt: he.decode(data.excerpt),
  content: data.content,
  author: formatAuthor(data.author),
  slug: data.slug,
});

export const formatAuthor = (data) => ({
  name: data.name,
  slug: data.slug,
  avatar: data.avatar_url,
});