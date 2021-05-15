export interface Post {
  title: string
  id: number
  slug: string
  content: string
  excerpt: string
  image: string
  datePublished: string
  categoryId: string
  categoryName: string
  author: Author
}

export interface Author {
  name: string
  id?: number
  avatar?: string
  slug?:string
}
