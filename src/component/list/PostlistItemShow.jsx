import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  width: 67px;
  height: 120px;

  ${({ post }) =>
    post ? `background-image: url(${post.image});` : `background-image: none;`};

  background-size: contain;
`;

function PostListItemShow(props) {
  const { post, onClick } = props;

  return <Wrapper onClick={onClick}>{post}</Wrapper>;
}

export default PostListItemShow;
