import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Button from './common/Button';
import { Link } from 'react-router-dom';

const LoginFormBlock = styled.div`
  h2 {
    font-size: 1.2rem;
    margin: 1.2rem 0;
  }
`;

const StyledInput = styled.input`
  display: block;
  outline: none;
  border: none;
  border-bottom: 1px solid ${oc.gray[5]};
  width: 100%;
  font-size: 1rem;
  padding-bottom: 2px;
  & + & {
    margin: 1rem 0;
  }

  &:focus {
    color: ${oc.teal[7]};
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${oc.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${oc.gray[9]};
    }
  }
`;

const LoginForm = ({ type }) => {
  return (
    <LoginFormBlock>
      <h2>{type === 'register' ? '회원가입' : '로그인'}</h2>
      <StyledInput placeholder="아이디" />
      <StyledInput type="password" placeholder="비밀번호" />
      {type === 'register' && (
        <StyledInput type="password" placeholder="비밀번호 확인" />
      )}
      <ButtonWithMarginTop fullWidth cyan>
        {type === 'register' ? '회원가입' : '로그인'}
      </ButtonWithMarginTop>
      <Footer>
        {type === 'register' ? (
          <Link to="/login">로그인</Link>
        ) : (
          <Link to="/register">회원가입</Link>
        )}
      </Footer>
    </LoginFormBlock>
  );
};

export default LoginForm;
