/* 
從 navLinks, services, technologies, experiences, testimonials, projects
各項結構以 [{}, {}, {}] 型態做資料常數制定。
*/

import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap5,
  styledComponents,
  MaterialUI,
  scss,
  zustand,
  books,
  short,
  dataStructure,
  army6,
  ndu,
  coreslink,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: '短期目標',
    icon: short,
    description: 'Javascript 與 React 原理熟稔了解',
  },
  {
    title: '中期目標',
    icon: books,
    description: '接觸更多不同第三方庫並可以依需求活用',
  },
  {
    title: '長期目標',
    icon: dataStructure,
    description: '演算法 與 資料結構 基礎加強並熟悉',
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Zustand',
    icon: zustand,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Bootstrap 5',
    icon: bootstrap5,
  },
  {
    name: 'Material UI',
    icon: MaterialUI,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'styled-components',
    icon: styledComponents,
  },
  {
    name: 'SCSS',
    icon: scss,
  },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
]

const experiences = [
  {
    title: '學生',
    company_name: '國防大學理工學院',
    icon: ndu,
    iconBg: '#383E56',
    date: '2011.07 - 2015.07',
    points: [
      '擔任學生幹部，週期性負責全隊120人秩序管理。',
      '擔任系學會幹部，負責統籌與活動規劃。',
    ],
  },
  {
    title: '代理連長、副連長、排長(主管職)',
    company_name: '國防部陸軍六軍團三三化學兵群',
    icon: army6,
    iconBg: '#e9e9e9',
    date: '2015.07 - 2019.02',
    points: [
      '常態管理單位人員約40-50名。',
      '負責「裝備後勤管理」及「人員訓練」。',
      '規劃規範與建立標準程序。',
      '引導演習各項事宜。',
    ],
  },
  {
    title: '群訓練官、營訓練官(幕僚職)',
    company_name: '國防部陸軍六軍團三三化學兵群',
    icon: army6,
    iconBg: '#e9e9e9',
    date: '2015.07 - 2022.02',
    points: [
      '負責訓練相關計畫制(修)定',
      '提供訓練指導及掌握人員訓練狀況',
      '提供上級主管部隊訓練指導建議參考',
      '曾與政府單位(衛生福利部、行政院原能會)共同辦理新冠疫情消毒、北部核安演習事宜。',
    ],
  },
  {
    title: '前端工程師(React)',
    company_name: '合凌科技 CoresLink',
    icon: coreslink,
    iconBg: '#383E56',
    date: '2022.12 -',
    points: [
      '負責公司自動化產品前端維護與部分功能開發(React beautiful dnd, React Hook Form...)。',
      '負責開發三維坐標可視化呈現(海底地形探測數據)。',
      '負責公司軟體版本控制規劃。',
      '負責公司新版軟體使用手冊撰寫。',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'HCW | 前端工程師',
    description:
      '利用 React 框架所製作的 個人作品集網站，主要提供個人近期作品展示，並使用 Three.js, Email.js, i18n等等, 以及其他動畫庫製作。',
    // 'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three.js in React',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'Email.js',
        color: 'white',
      },
      {
        name: 'Other animation libs',
        color: 'orange-text-gradient',
      },
    ],
    image: carrent,
    website_link: 'https://3d-portfolio-lake.vercel.app/',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'HCW | 部落格',
    description:
      '以 Docusaurus 為主要框架的筆記網站，主要記述了過去個人筆記檔案，以及套件學習進度，持續保持個人筆記學習習慣，與瀏覽者彼此教學相長。',
    // 'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Docusaurus',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    website_link: 'https://hcwblog.vercel.app/',
    source_code_link: 'https://github.com/',
  },
  {
    name: '3D 跑車',
    description:
      '第一個復刻網路YT 3D作品內容，本專案除了學習 Three.js 基礎API以外，尚針對WebGL知識有基礎認識，像是 .glb .gtlf 等等模型檔案，以及對 3D模型軟體有基礎認識。',
    // 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    website_link: 'https://car-react-three.vercel.app/',
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
