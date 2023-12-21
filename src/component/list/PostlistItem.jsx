import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-img: url("img/white-star.png");
  width: 50px;
  height: 50px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  cursor: pointer;
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

function PostListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <TitleText> {post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;
