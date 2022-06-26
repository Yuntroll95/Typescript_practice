import React, { useState } from 'react';
import BannerImage from '../../components/BannerImage/BannerImage';
import Nav from '../../components/Nav/Nav';
import './Main.scss';

const Main = () => {
  // ----------- type alias에 함수 type 저장해서 사용하는 방법
  type functionType = (a: string) => number; // 함수 type alias 부착하려면 함수 표현식 사용해야함
  const numberFunction: functionType = function (a) {
    return 10;
  };
  // object 안에 함수 만들 수 있음
  type PERSON = {
    name: string;
    plusOne: (x: number) => number;
    changeName: () => void;
  };
  const personInfo: PERSON = {
    name: 'kim',
    plusOne(x: number) {
      return x + 1;
    }, //object 안의 함수 지정은 어떻게?(만약 parameter는 number, return 값도 number라면?)
    changeName: () => {},
  };

  type Cut = (x: string) => string;

  const cutZero: Cut = x => {
    const result = x.replace('/0/g', '');
    return result;
  };
  console.log(cutZero('02560328'));

  const removeDash = (x: string): number => {
    const result = x.replace(/-/g, '');
    console.log(result);
    return Number(result);
  };
  console.log(removeDash('010-3392-0580'));

  //변수 안에 있는 함수를 가져다줌, 함수 안에 있는 코드 실행

  // ----------- literal types(더 엄격한 타입지정 가능)
  // 예를 들어 stirng을 받는데 내가 사전에 '정의한 stirng만 받음', 'kim' or 'park'만 받겠다
  // 변수에 뭐가 더 들어올지 엄격하게 검사 가능 , 자동완성 힌트 굳!
  const firstName: 'kim' | 'park' = 'park';

  // 함수도 되나?
  const newFunction = (a: 'hello') => {
    //이렇게 하면 앞으로 parameter 자리에는 무조건 'hello'만 올 수 있음
  };

  // 함수에 return 값도 지정가능
  const anotherFunction = (b: 'bye'): 1 | 0 => {
    return 1;
  };
  // 문제(가위, 바위, 보 세개중에 하나만 parameter로 입력가능, array로 리턴)
  const game = (a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] => {
    return [a];
  };

  // ----------- 타입변수(type alias)
  type Animal = string | number | undefined; // union type
  const sort: Animal = 123;

  // 객체에 타입을 변수에
  type Fruit = { name: string; num: number };
  const fruits: Fruit = { name: 'watermelon', num: 5 };

  // type keyword 합치기
  type Cup = string;
  type CupNum = number;
  type Total = Cup | CupNum; //union type으로 합치기

  // 연산자로 object 합치기(&연산자로 object 타입 extend), 같은 이름의 type 변수 재정의 불가능함!
  type PositionX = { x: number };
  type PositionY = { y: number };
  type NewType = PositionX & PositionY; //결과: {X: number, y: number}
  const position: NewType = { x: 20, y: 30 }; //에러 안남

  // const value 변경 못하도록
  type Singer = { readonly name: string }; // readonly를 사용하면 변경 인위적으로 변경못함
  const favoriteSinger: Singer = { name: '레드벨벳' };

  const newArray = (x: (number | string)[]) => {
    const clean: number[] = [];
    x.forEach(b => {
      if (typeof b === 'string') {
        clean.push(Number(x));
      } else {
        clean.push(b);
      }
    });
  };

  const teacher = (x: { subject: string | string[] }) => {
    if (typeof x.subject === 'string') {
      return x.subject;
    }
    if (Array.isArray(x.subject)) {
      return x.subject[x.subject.length - 1];
    } else {
      return '없는디';
    }
  };

  // ----------- Narrow & Assertion
  const name = (name?: string): void => {
    // name에 값이 들어 올지 안들어올지 모르는데 들어오면 'string으로 들어옴'
    if (name) {
      console.log('안녕하세요' + name);
    } else {
      console.log('입력하세용');
    }
  };

  const myFunction = (x: number | string) => {
    // 인자로 number 혹은 string이 들어오는디
    if (typeof x === 'number') {
      // type 검사해서 number 면
      return x + 1;
    }
    if (typeof x === 'string') {
      //type 검사해서 string이면
      return x + 1;
    } else {
      return 0;
    }
  }; // if문 사용할때 else 없으면 에러남

  const myNew = (x: string | number) => {
    return (x as number) + 1; // 일시적으로 해제 해주는거 어지간하면 이렇게 사용하지 말긔
  }; // 매개변수 as 타입: 매개변수를 '타입'이라고 생각해주세요
  console.log(myNew(123));

  const countNumber = (num: string | number): number => {
    //인자에 string 아니면 numebr 옴, 근데 return은 무조건 number임
    return num.toString().length; // number을 stirng로
  };

  const newFunction1 = (x: unknown[]) => {
    return x[0];
  };
  const a = newFunction1([4, 2]);
  console.log(a);

  // ----------------변수에 타입지정
  const box: JSX.Element = <div></div>;
  const box1: JSX.IntrinsicElements['h4'] = <h4>dfsdfsdfsdfsdf</h4>; // 여러가지 tag를 지정해준것

  // -------------useState는 type지정이 자동으로 됨
  const [people, setPeople] = useState('kim');

  return (
    <div className="mainContainer">
      <Nav />
      <BannerImage />
    </div>
  );
};

export default Main;
