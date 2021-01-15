import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const LoginBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${oc.gray[6]};
`;

const WhiteBox = styled.div`
  padding: 30px;
  background: white;
  width: 360px;
  border-radius: 3px;
  h1 {
    padding-bottom: 2rem;
    text-align: center;
    letter-spacing: 2px;
    font-size: 1.2rem;
  }
`;

const LoginTemplet = ({ children }) => {
  return (
    <LoginBlock>
      <WhiteBox>
        <h1>REACTERS</h1>
        {children}
      </WhiteBox>
    </LoginBlock>
  );
};

export default LoginTemplet;
