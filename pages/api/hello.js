/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [
  {
    technologies: 'Javascript',
  },
  {
    technologies: 'ReactJs',
  },
  {
    technologies: 'NextJs',
  },
  {
    technologies: 'CSS',
  },
  {
    technologies: 'HTML',
  },
  {
    technologies: 'CSS frameworks',
  },
  {
    technologies: 'Git',
  },
  {
    technologies: 'Comunidades de discord',
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify(data));
};
