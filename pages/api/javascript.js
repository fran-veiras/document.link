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
