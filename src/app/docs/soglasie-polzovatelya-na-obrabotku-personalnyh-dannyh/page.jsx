import DocsPage  from "../../pages/DocsPage";

export async function generateMetadata() {;
  const res = await fetch("https://back.19bees.ru//wp-json/yoast/v1/get_head?url=https://back.19bees.ru/soglasie-polzovatelya-na-obrabotku-personalnyh-dannyh/");
   let meta = await res.json();
   meta = meta.json;

  return {
    title: `${meta.title}`,
    description: `${meta.description}`,
  };
}

export default  function Page() {
 
  return (
    <DocsPage slug="soglasie-polzovatelya-na-obrabotku-personalnyh-dannyh"></DocsPage>
  )
}