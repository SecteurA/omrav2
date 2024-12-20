interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const updateMetaTags = ({
  title,
  description,
  keywords,
  ogImage = 'https://data.wget.ma/travel4you/slide.avif'
}: MetaTags) => {
  // Update title
  document.title = title;

  // Update meta tags
  const metaTags = {
    'description': description,
    'keywords': keywords,
    'og:title': title,
    'og:description': description,
    'og:image': ogImage,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': ogImage,
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    if (content) {
      // Update existing meta tags
      let meta = document.querySelector(`meta[name="${name}"]`) ||
                 document.querySelector(`meta[property="${name}"]`);
      
      if (meta) {
        meta.setAttribute('content', content);
      }
    }
  });
};