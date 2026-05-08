// app/sitemap.js
  export const dynamic = 'force-static';
export default function sitemap() {
  const baseUrl = 'https://19bees.ru';

  // Статические страницы
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/promo`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
     {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/cookies`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1,
    },
      {
      url: `${baseUrl}/docs/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1,
    },
      {
      url: `${baseUrl}/docs/soglasie-polzovatelya-na-obrabotku-personalnyh-dannyh`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1,
    },
  ];
  
// changeFrequency: Частота изменения (always, hourly, daily, weekly, daily, yearly, never)
  // Динамические страницы (например, из API/CMS)
//   const posts = await getPosts();
//   const dynamicPages = posts.map((post) => ({
//     url: `${baseUrl}/blog/${post.slug}`,
//     lastModified: post.publishedAt,
//   }));

  return [...staticPages /*, ...dynamicPages */];
}