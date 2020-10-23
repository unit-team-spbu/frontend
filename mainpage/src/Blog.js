import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Events from './Events';

const sections = [
  { title: 'Конференции', url: '#' },
  { title: 'Хакатоны', url: '#' },
  { title: 'Вебинары', url: '#' },
  { title: 'Форумы', url: '#' },
  { title: 'Онлайн-курсы', url: '#' },
  { title: 'Стажировки', url: '#' },
  { title: 'Семинары', url: '#' },
  { title: 'Лекции', url: '#' },  
];

const events = [
  {
    title: "Directum Day 2020",
    image_url: "https://izhlife.ru/uploads/posts/newsimg/imgs-1523947921.jpg",
    short_info: "24 октября 9:30",
  },
  {
    title: "Directum Day 2020",
    image_url: "https://izhlife.ru/uploads/posts/newsimg/imgs-1523947921.jpg",
    short_info: "24 октября 18:00",
  },
  {
    title: "Directum Day 2020",
    image_url: "https://izhlife.ru/uploads/posts/newsimg/imgs-1523947921.jpg",
    short_info: "25 октября 16:30",
  },
  {
    title: "Directum Day 2020",
    image_url: "https://izhlife.ru/uploads/posts/newsimg/imgs-1523947921.jpg",
    short_info: "26 октября 9:30",
  },
  {
    title: "Directum Day 2020",
    image_url: "https://izhlife.ru/uploads/posts/newsimg/imgs-1523947921.jpg",
    short_info: "26 октября 9:30",
  },
  {
    title: "Directum Day 2020",
    image_url: "https://izhlife.ru/uploads/posts/newsimg/imgs-1523947921.jpg",
    short_info: "26 октября 9:30",
  },
];

export default function Blog() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
          <Events events={events} />
        </main>
      </Container>
    </React.Fragment>
  );
}
