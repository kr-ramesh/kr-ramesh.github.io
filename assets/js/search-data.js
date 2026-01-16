// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-our-paper-fairness-in-language-models-beyond-english-gaps-and-challenges-was-accepted-to-the-findings-of-eacl-2023",
          title: 'Our paper Fairness in Language Models Beyond English: Gaps and Challenges was accepted...',
          description: "",
          section: "News",},{id: "news-i-ll-be-starting-my-ph-d-at-johns-hopkins-clsp-this-fall",
          title: 'I’ll be starting my Ph.D. at Johns Hopkins CLSP this fall.',
          description: "",
          section: "News",},{id: "news-our-paper-a-comparative-study-of-model-compression-techniques-on-fairness-in-language-models-was-accepted-to-acl-2023",
          title: 'Our paper A Comparative Study of Model Compression Techniques on Fairness in Language...',
          description: "",
          section: "News",},{id: "news-our-paper-evaluating-differentially-private-synthetic-data-generation-in-high-stakes-domains-was-accepted-to-the-findings-of-emnlp-2024",
          title: 'Our paper Evaluating Differentially Private Synthetic Data Generation in High-Stakes Domains was accepted...',
          description: "",
          section: "News",},{id: "news-we-released-synthtexteval-a-framework-for-generating-and-evaluating-synthetic-data-for-high-stakes-domains",
          title: 'We released SynthTextEval, a framework for generating and evaluating synthetic data for high-stakes...',
          description: "",
          section: "News",},{id: "news-synthtexteval-has-been-accepted-as-a-system-demonstration-at-emnlp-2025",
          title: 'SynthTextEval has been accepted as a system demonstration at EMNLP 2025!',
          description: "",
          section: "News",},{id: "news-i-ll-be-interning-with-the-amazon-agi-foundations-team-this-fall",
          title: 'I’ll be interning with the Amazon AGI Foundations team this fall.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%72%61%6D%65%73%68%33@%6A%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/krithika-ramesh-stolenpyjak", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=N5Wj_44AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kr-ramesh", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/1455192856", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
