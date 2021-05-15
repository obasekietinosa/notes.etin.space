import he from "he";

export const formatPosts = (posts) => posts.map(formatPost)

export const formatPost = (data) => ({
  title: he.decode(data.title),
  id: data.ID,
  datePublished: data.date,
  image: data.featured_image,
  categoryId: (Object.values(data.terms.category)[0])?.ID,
  categoryName: (Object.values(data.terms.category)[0])?.name,
  excerpt: data.excerpt,
  content: data.content,
  author: formatAuthor(data.author),
  slug: data.slug,
});

export const formatAuthor = (data) => ({
  name: data.name,
  slug: data.slug,
  avatar: data.avatar_url,
});
