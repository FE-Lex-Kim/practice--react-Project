// 버튼 컴포넌트는 다양한 곳에서 사용할 예정이기때문에 미리 컴포넌트를 만들어 놓는다.
import React from 'react';
import styled, {css} from 'styled-components';
import oc from 'open-color';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${oc.gray[8]};
  &:hover {
    background: ${oc.gray[6]};
  }

  ${props => 
    props.fullWidth && css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `
  }

  ${props => 
    props.cyan && css`
      background: ${oc.cyan[5]};
      &:hover{
        background:${oc.cyan[4]};
      }
    `
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
