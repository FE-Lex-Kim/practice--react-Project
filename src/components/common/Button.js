// 버튼 컴포넌트는 다양한 곳에서 사용할 예정이기때문에 미리 컴포넌트를 만들어 놓는다.
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
