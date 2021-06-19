import { Author, Post } from "./types";

declare module "utils" {
  export const siteConfig: {
    title: string;
    description: string;
  };

  export function formatDate(date: string): string;

  export function getBannerImage(text: string): string;

  export function formatPosts(posts: any[]): Post[];

  export function formatPost(data: any): Post;

  export function formatAuthor(data: any): Author;
}
