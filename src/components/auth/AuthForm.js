import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import Button from '../common/Button';

// 회원가입 로그인 폼을 보여준다.
// 모든 태그요소들을 담고있는 스타일 div 따라서 최상위 컴포넌트이기 때문에 Block을 마지막에 네이밍했다.
const AuthFormBlock = styled.div`
  .h3{
    font-size: 1.2rem;
  }
`;

// 스타일링된 input요소
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${oc.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus{
    color: ${oc.teal[7]};
    border-bottom: 1px solid ${oc.gray[7]}
  }

  & + & {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${oc.gray[6]};
    text-decoration: underline;
    &:hover{
      color: ${oc.gray[9]};
    }
  }
`;

const AuthForm = () => {
  return (
  <AuthFormBlock>
    <h3>로그인</h3>
    <form>
      <StyledInput placeholder='아이디'/>
      <StyledInput placeholder='비밀번호'/>
      <Button>로그인</Button>
    </form>
    <Footer>
      <Link className='toregister'>회원가입</Link>
    </Footer>
  </AuthFormBlock>
  );
};

export default AuthForm;
