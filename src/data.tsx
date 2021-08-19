import faker from 'faker';

faker.seed(123);

export const eventsData = [...Array(3)].map((item) => ({
  id: faker.datatype.uuid(),
  title: faker.name.firstName(),
  date: faker.random.arrayElement([new Date(), new Date(2021, 8, 16, 15, 30), new Date(2021, 8, 20, 12), new Date(2021, 8, 17, 10, 30), new Date(2021, 8, 22, 8), new Date(2021, 8, 14, 10, 30), new Date(2021, 8, 24, 10)]),
  duration: faker.random.arrayElement([30, 60]),
}));
