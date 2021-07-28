import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Footer = (): JSX.Element => {

  return (
    <S.Footer>
        <a target="_blank" href="https://github.com/Rkimball2021">
        <span> Developéd by Ruth Kimball &copy;</span>
        <span> Challenge #2 Hiring Coders</span>
        </a>
    </S.Footer>
  );
};

export default Footer;

