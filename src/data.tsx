import faker from 'faker';

faker.seed(123);

export const eventsData = [...Array(2)].map((item) => ({
  id: faker.datatype.uuid(),
  title: faker.name.findName(),
  //   date: faker.datatype.datetime(),
  // date: new Date(2021, 8, 17),
  // date: new Date(),
  date: faker.random.arrayElement([new Date(), new Date(2021, 8, 16), new Date(2021, 8, 20)]),
  duration: faker.random.arrayElement([30, 60]),
}));
