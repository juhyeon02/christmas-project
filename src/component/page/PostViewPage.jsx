// 방명록
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/Textinput";
import Button from "../ui/Button";
import data from "../../data.json";

const Background = styled.div`
  position: relative;
  width: 1280px;
  height: 832px;
`;
const Wrapper = styled.div`
  width: 390px;
  height: 500px;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 40%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

function PostViewPage(props) {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => {
    return item.id == postId;
  });

  const [comment, setComment] = useState("");

  return (
    <Background>
      <Wrapper>
        <Container>
          <PostContainer>
            <TitleText>{post.title}</TitleText>
            <ContentText>{post.content}</ContentText>
          </PostContainer>
        </Container>
      </Wrapper>
    </Background>
  );
}

export default PostViewPage;
