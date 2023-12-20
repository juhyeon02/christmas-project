//일기 작성
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/Textinput";
import Button from "../ui/Button";

const Wrapper = styled.div`
  width: 1280px;
  height: 832px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("img/bg2.png");
  background-size: 100% 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

function DiaryWritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <TextInput
          height={480}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />

        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default DiaryWritePage;
