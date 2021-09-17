/* eslint-disable import/no-anonymous-default-export */
const javascript = [
  {
    user: 'Dalto',
    title: 'Curso de javascript desde cero a experto',
    description:
      'Este es el curso de javascript desde cero a experto que vas a terminar, te prometo que no te vas a aburrir durante el aprendizaje de este curso de javascript, vas a aprender javascript fácil.',
    technologies: 'Javascript',
    link: 'https://www.youtube.com/watch?v=z95mZVUcJ-E&ab_channel=SoyDalto',
    photoUrl:
      'https://i.ytimg.com/vi/z95mZVUcJ-E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCdN5RseyymViexQxaKFDmoUBLJUw',
    format: 'Video',
  },
  {
    user: 'Fazt',
    title: 'Curso Javascript para Principiantes',
    description:
      'Este curso es una introducción práctica a Javascript, conoceremos su sintaxis básicas y aprenderás los fundamentos del Lenguaje.',
    technologies: 'Javascript',
    link: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE&ab_channel=Fazt',
    photoUrl:
      'https://i.ytimg.com/vi/RqQ1d1qEWlE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcRWn7llZLATmSmH1mta3KqcJ4lQ',
    format: 'Video',
  },
  {
    user: 'BaseClass',
    title: 'Working With Strings in Modern JavaScript',
    description:
      'This guide is intended to cover everything you need to know about creating, manipulating and comparing strings in JavaScript.',
    technologies: 'Javascript',
    link: 'https://www.baseclass.io/guides/string-handling-modern-js',
    photoUrl:
      'https://pbs.twimg.com/profile_images/1270692456036806657/J5jR6txV_400x400.jpg',
    format: 'Escrito',
  },
  {
    user: 'Leonardo Galante',
    title: '¿Qué es una IIFE y una HOF?',
    description: '',
    technologies: 'Javascript',
    link: 'https://www.youtube.com/watch?v=V-4JKxPJoJQ&ab_channel=LeonardoGalante',
    photoUrl:
      'https://i.ytimg.com/vi/V-4JKxPJoJQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2WfBRZ6rLwZmB89eQzeEE1BoxmQ',
    format: 'Video',
  },
  {
    user: 'Manz.dev',
    title: 'Fetch: Peticiones Asíncronas',
    description: 'Aprende a usar Fetch: Peticiones Asíncronas',
    technologies: 'Javascript',
    link: 'https://lenguajejs.com/javascript/peticiones-http/fetch/',
    photoUrl: 'https://manz.dev/manz-logo.png',
    format: 'Escrito',
  },
  {
    user: 'Fireship',
    title: 'The Async Await Episode I Promised',
    description:
      'The await is over! Learn how to make your JavaScript Promise code beautiful and concise with async-await',
    technologies: 'Javascript',
    link: 'https://www.youtube.com/watch?v=vn3tm0quoqE&ab_channel=Fireship',
    photoUrl:
      'https://i.ytimg.com/vi/vn3tm0quoqE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLVvgjaaBL3652ZpXLnnHMYsiu7w',
    format: 'Video',
  },
  {
    user: '4tomik',
    title: 'JS para gente que ya sabe programar',
    description:
      'Este vídeo es un tutorial que me hubiera gustado ver cuando empecé a programar en Javascript. Está pensado para gente que ya saber programar en otros lenguajes como Python o Java, y que conoce un poco sobre HTML y CSS.',
    technologies: 'Javascript',
    link: 'https://www.youtube.com/watch?v=CSWnqdhN5vk&ab_channel=4tomik',
    photoUrl:
      'https://i.ytimg.com/vi/CSWnqdhN5vk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyPzsRyIulUhKnwZU56ew_vwcyNg',
    format: 'Video',
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify(javascript));
};
