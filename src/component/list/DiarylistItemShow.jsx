import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  display-direction: row;
  align-items: flex-end;
  cursor: pointer;
  width: 500px;
  height: 80px;
  background-image: ${({ post }) =>
    post ? `url("${post}")` : 'url("img/gift1.png")'};
  background-size: contain;
`;

function DiaryListItemShow(props) {
  const { post, onClick } = props;

  return <Wrapper onClick={onClick}></Wrapper>;
}

export default DiaryListItemShow;
