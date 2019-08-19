// cmd + shft + p -> typescript restart server

import express from 'express';

const add = (a: number, b?: number) => {
  // a way to get rid of the ts error (the red squiggling line):
  // if (b) {
  //   return a + b;
  // } else {
  //   return a;
  // }
  // another way to solve the ts error:
  // return a + (b as number);
  // and one more:
  return a + b!;
}

const app = express();

app.get('/', (req: any) => {
  add(1);
})

app.listen(3000, () => {
  console.log('started!');
});