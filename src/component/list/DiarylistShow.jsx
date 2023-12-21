import React from "react";
import styled from "styled-components";
import DiaryListItemShow from "./DiarylistItemShow";
const Wrapper = styled.div`
  display: flex;
  display-direction: row;
`;

function DiaryListShow(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <DiaryListItemShow
            onClick={() => {
              onClickItem(post);
            }}
          ></DiaryListItemShow>
        );
      })}
    </Wrapper>
  );
}

export default DiaryListShow;
