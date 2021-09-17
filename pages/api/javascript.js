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
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify(javascript));
};
