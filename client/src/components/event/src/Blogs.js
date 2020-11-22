import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Headers from './Headers';
import Event from './Event';

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

const event = {
    title: "Directum Day 2020",
    image_url: "https://izhlife.ru/uploads/posts/newsimg/imgs-1523947921.jpg",
    short_info: "3 часа о самых актуальных кейсах. Авторитетные эксперты. Все, что нужно знать, чтобы выстроить эффективное взаимодействие сотрудников, повысить устойчивость компании и уверенно работать в любых условиях.",
    full_info: "a",
    date: "22 октября 2020",
    format: "b",
    where: "г. Санкт Петербург ул. проспект Просвещения дом 13 офис 405 ",
    price: "Бесплатно",
    time: "9:30"
};

export default function Blogs() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Headers sections={sections} />
        <main>
          <Event event={event} />
        </main>
      </Container>
    </React.Fragment>
  );
}
