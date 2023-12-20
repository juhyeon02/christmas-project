import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/Postlist";
import PostListShow from "../list/Postlist";
import Button from "../ui/Button";
import data from "../../data.json";
const Background = styled.div`
  position: relative;
  width: 1280px;
  height: 832px;
`;
{
  /* 메인 왼쪽 - 트리꾸미기-방명록*/
}
const Main1 = styled.div`
  position: absolute;
  width: 832px;
  height: 832px;
  left: 0;
  background-image: url("img/bg3.png");
  background-size: contain;
`;

//방명록 등록하면 나타남
const PostWriteList = styled.div`
  width: 300px;
  heigth: 500px;
  background-color: black;
`;

{
  /* 메인 오른쪽 */
}
const Main2 = styled.div`
  width: 448px;
  height: 832px;
  position: absolute;
  background-color: rgba(252, 196, 191, 1);
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const Ribbon = styled.div`
  width: 448px;
  height: 200px;
  display: flex;
  justify-content: center;
  margin: 0;
`;
const RibbonImg = styled.div`
  width: 192px;
  height: 192px;
  background-image: url("img/ribbon.png");
  background-size: contain;
`;
const Showbg = styled.div`
  display: flex;
  justify-content: center;
`;
const Show = styled.div`
  width: 390px;
  height: 550px;
  background-color: rgba(242, 167, 177, 1);
  display: flex;
  justify-content: center;
`;

function MainPage(props) {
  const navigate = useNavigate();

  return (
    <Background>
      {/* 메인 왼쪽 - 트리꾸미기- 방명록*/}
      <Main1>
        <Button
          title="+"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostWriteList>
          <PostListShow
            posts={data}
            onClickItem={(item) => {
              navigate(`/post/${item.id}`);
            }}
          />
        </PostWriteList>
      </Main1>
      {/* 메인 오른쪽 */}

      <Main2>
        <Ribbon>
          <RibbonImg></RibbonImg>
        </Ribbon>

        <div
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          현지의 트리
        </div>
        <Showbg>
          <Show></Show>
        </Showbg>
      </Main2>
    </Background>
  );
}

export default MainPage;
