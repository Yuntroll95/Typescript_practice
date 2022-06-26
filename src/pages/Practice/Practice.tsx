import React, { useState } from 'react';
import { workerData } from 'worker_threads';
import * as t from '../Type/common/Type';
import './Practice.scss';

const Practice = (): JSX.Element => {
  // ----- Generic 수에 타입도 파라미터로 입력가능
  // Generic 함수 만들기(파라미터로 타입을 입력하는 함수
  const name = (x: t.Name) => {};

  // ---------type을 import
  return (
    <div className="practiceContainer">
      <div className="practice">
        <div className="navPosition">여기는 nav 입니다.</div>
      </div>
    </div>
  );
};

export default Practice;
