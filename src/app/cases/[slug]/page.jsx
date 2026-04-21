import Header from "../../blocks/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import SmCard from "../../components/SmCard";
import ButtonBlack from "../../components/ButtonBlack";
import PageCaseItem  from "../../pages/PageCaseItem";

export async function generateStaticParams() {
  // Fetch data from your CMS, database, or API
  // const posts = [{id: 1}]
const res = await fetch("https://back.19bees.ru/wp-json/wp/v2/cases?per_page=100", {
    // cache: "no-store",
    fallback: true,
  });
  let posts = await res.json()
  return posts.map((post) => ({
    slug: post.slug,
    revalidate: 60,
  }));
}

// export async function generateMetadata({ params }) {;
//    const {slug} = await params;
//    const res = await fetch(`https://back.19bees.ru/wp-json/wp/v2/cases?slug=${slug}`);
//   // const res = await fetch(`https://back.19bees.ru//wp-json/yoast/v1/get_head?url=https://back.19bees.ru/${slug}/`);
//   let post = await res.json();
//   post = post[0];
//   // let meta = await res.json();
//    let meta = post.yoast_head_json;
//   return {
//       title: `${meta.title}`,
//     description: `${meta.description}`,
//     // title: `Кейс: ${post.title.rendered}`,
//     // description: "Наши кейсы",
//   };
// }
export async function generateMetadata({ params }) {;
   const {slug} = await params;
   const res = await fetch(`https://back.19bees.ru/wp-json/wp/v2/cases?slug=${slug}`);
  // const res = await fetch(`https://back.19bees.ru//wp-json/yoast/v1/get_head?url=https://back.19bees.ru/${slug}/`);
  let post = await res.json();
  post = post[0];
  // let meta = await res.json();
   let meta = post.yoast_head_json;
  return {
    //   title: `${meta.title}`,
    // description: `${meta.description}`,
    title: `${post.title.rendered}`,
    description: `${post.cases_shortdescr}`,
  };
}
// Your Page component receives the params
export default async function Page({ params }) {
  // params.slug will be available here
  const {slug} = await params;
   const res = await fetch(`https://back.19bees.ru/wp-json/wp/v2/cases?slug=${slug}`);
  let post = await res.json()
  post = post[0];
  return (
    <PageCaseItem 
    next_post_id={post.next_post_id} 
    prev_post_id={post.prev_post_id} 
    title = {post.title.rendered}
    content = {post.content.rendered}
    card = {post.cases_cards}
    image = {post.cases_popup}
    vid={post.cases_vid_prew}
    />  
  )
}