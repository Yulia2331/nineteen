import HomePage  from "./pages/HomePage";

export async function generateMetadata() {;
  const res = await fetch("https://back.19bees.ru//wp-json/yoast/v1/get_head?url=https://back.19bees.ru/glavnaya/");
   let meta = await res.json();
   meta = meta.json;
  // console.log(meta.schema);
  return {
    title: `${meta.title}`,
    description: `${meta.description}`,
  //    schema: {

  // }
    // title: 'Кейсы',
    // description: "Наши кейсы",
  };
}

export default  function Page() {
 
  return (
    <HomePage></HomePage>
  )
}