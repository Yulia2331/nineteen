import Header from "../../blocks/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import SmCard from "../../components/SmCard";
import ButtonBlack from "../../components/ButtonBlack";
import PostItem  from "../../pages/PostItem";
export async function generateStaticParams() {
  // Fetch data from your CMS, database, or API
  // const posts = [{id: 1}]
const res = await fetch("https://back.19bees.ru/wp-json/wp/v2/posts", {
    cache: "no-store",
  });
  let posts = await res.json()
  console.log(res)

  return posts.map((post) => ({
    slug: post.slug
  }));
}

// Your Page component receives the params
export default async function Page({ params }) {
  // params.slug will be available here
  const {slug} = await params;
   const res = await fetch(`https://back.19bees.ru/wp-json/wp/v2/posts?slug=${slug}`);
  let post = await res.json()
  post = post[0]
  console.log(post);
  return (
    <PostItem
    title = {post.title.rendered}
    content = {post.content.rendered}
    />
  )
}