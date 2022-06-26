import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

interface Category {
  id: number;
  name: string;
}

const Nav = (): JSX.Element => {
  const [selectId, setSelectId] = useState();
  const navigate = useNavigate();

  const moveCategory = (id: number) => {}; //네비게이트 url 넘겨주는

  return (
    <div className="navWrapper">
      <ul className="categoryContainer">
        {CATEGORY.map(({ id, name }: Category) => {
          return (
            <li
              className="categoryName"
              key={id}
              onClick={() => moveCategory(id)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CATEGORY = [
  { id: 1, name: 'About' },
  { id: 2, name: 'Projects' },
  { id: 3, name: 'Contact' },
];

export default Nav;
