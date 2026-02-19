
import Header from "../../blocks/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import SmCard from "../../components/SmCard";
export async function generateStaticParams() {
  // Fetch data from your CMS, database, or API
  const posts = [{id: 1}]

  // Return an array of objects, where each object
  // has the parameter name (e.g., 'slug') as a key
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// Your Page component receives the params
export default function Page({ params }) {
  // params.slug will be available here
  return (
    <div className="">
      <Header></Header>
      <div className="bg-[url('/img/sot.png')] bg-size-[50%_100%] bg-right bg-no-repeat py-6 max-w-[1450px] m-auto">
      <div className="container">
        <BreadCrumbs></BreadCrumbs>
        <h1 className="text-4xl sm:text-5xl lg:text-[68px] xl:text-[86px] leading-none tracking-[-4] font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% mt-40">Nail Master</h1>
      </div>
    </div>
    <div className="container">
      <div className="grid grid-cols-2 gap-5 mt-20">
      <div className="">
        <p className="text-2xl">Руководство по маникюру! Методическое пособие по маникюру и педикюру для учеников и инструкторов! Наше пособие — это новые пошаговые уроки маникюра. По этому курсу уже обучают в России и странах Европы. Мы разработали настоящую обучающую книгу, в ней есть абсолютно все, что касается маникюра. По простым и понятным схемам справится с новой профессией даже самый неопытный новичок. На 101 странице пошаговой инструкции к маникюру, собран опыт лучших мастеров. При покупке методички вы получите 2 PDF файла, которые подойдут как для демонстрации, так и для качественной печати.</p>
        <div className="mt-12">
          <span className="text-[32px]">Что сделано:</span>
          <div className="mt-12 grid grid-cols-2 gap-5">
            <SmCard text="Запустили лендинг — Подключили к сайту согласованный дизайн"></SmCard>
            <SmCard text="Подключили доменное имя"></SmCard>
            <SmCard text="SSL-шифрование для сайта"></SmCard>
            <SmCard text="Зарегистрировали сайт в поисковых системах Yandex, Google"></SmCard>
            <SmCard text="Установили счетчик статистики посещаемости сайта Яндекс.Метрика"></SmCard>
          </div>
        </div>
      </div>
      <div className="">
        <img className="w-full" src="/img/prew.png" alt="" />
      </div>
      </div>
    </div>
    </div>
  )
}