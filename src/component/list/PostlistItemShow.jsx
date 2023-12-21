import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  width: 67px;
  height: 120px;
  background-image: ${({ post }) =>
    post ? `url("${post}")` : 'url("img/white_star.png")'};
  background-size: contain;
`;

function PostListItemShow(props) {
  const { post, onClick } = props;

  return <Wrapper onClick={onClick}></Wrapper>;
}

export default PostListItemShow;
