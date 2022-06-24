import React, { useState } from 'react';

const Main = () => {
  const myFavorite: { singer: string; song: string } = {
    singer: '아이유',
    song: '아이와나의바다',
  };

  const project: { member: string[]; days: number; started: boolean } = {
    member: ['kim', 'yun'],
    days: 30,
    started: true,
  };

  const name = (name?: string): void => {
    if (name) {
      console.log('안녕하세요' + name);
    } else {
      console.log('입력하세용');
    }
  };

  const myFunction = (x: number | string) => {
    if (typeof x === 'number') {
      return x + 1;
    }
    if (typeof x === 'string') {
      return x + 1;
    } else {
      return 0;
    }
  };
  // if문 사용할때 else 없으면 에러남

  const myNew = (x: string | number) => {
    return (x as number) + 1;
  }; // 매개변수 as 타입: 매개변수를 '타입'이라고 생각해주세요
  console.log(myNew(123));

  const countNumber = (num: string | number): number => {
    return name.toString().length;
  };
  console.log(myNew('10'));

  return <div>main</div>;
};

export default Main;
