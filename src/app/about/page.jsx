import AboutPage  from "../pages/AboutPage";

export async function generateMetadata() {;
  const res = await fetch("https://back.19bees.ru//wp-json/yoast/v1/get_head?url=https://back.19bees.ru/o-kompanii/");
   let meta = await res.json();
   meta = meta.json;
  // console.log(meta.schema);
  return {
    title: `${meta.title}`,
    description: `${meta.description}`,
  };
}

export default  function Page() {
 
  return (
    <AboutPage></AboutPage>
  )
}