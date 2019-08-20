// sometimes typescript marks smth as an error (with a red squiggling line)
// in such a case typescript server needs to be restarted by pressing 'cmd + shft + p'

import express from 'express';

// when to use interface and when type?
// interface is better to use for objects and type for all other things

interface Params {
  a: number;
  b: number;
};

type Add = ( x: Params ) => number;

const add: Add = x => {
  return x.a + x.b;
};

// const add = (a: number, b?: number) => {
//   // a way to get rid of the ts error (the red squiggling line):
//   // if (b) {
//   //   return a + b;
//   // } else {
//   //   return a;
//   // }
//   // another way to solve the ts error:
//   // return a + (b as number);
//   // and one more:
//   return a + b!;
// }

const app = express();

app.get('/', (req: any) => {
  add({a: 1, b: 2});
})

app.listen(3000, () => {
  console.log('started!');
});