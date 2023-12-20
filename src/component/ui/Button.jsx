// 방명록 작성 버튼
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 80px;
  height: 80px;
  padding: 8px 16px;
  font-size: 30px;
  font-weight: bold;
  border-width: 3px;
  border-radius: 60px;
  cursor: pointer;
  background-color: white;
  border-color: white;
  color: gray;
  position: absolute;
  right: 20%;
  top: 55%;
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
