import React from "react";
import styled from "styled-components";
import PostListItemShow from "./PostlistItemShow";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex=start;
  justify-content: center;
`;

function PostListShow(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItemShow
            onClick={() => {
              onClickItem(post);
            }}
          ></PostListItemShow>
        );
      })}
    </Wrapper>
  );
}

export default PostListShow;
