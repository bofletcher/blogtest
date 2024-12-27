import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const CATEGORIES_QUERY = defineQuery(`*[_type == "category"]{
  title, order, slug
}`);
export const POSTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)]{
    _id,
    title,
    slug,
    mainImage,
    author->{name},
    publishedAt,
    categories[]->{title, slug}
  }
`);
