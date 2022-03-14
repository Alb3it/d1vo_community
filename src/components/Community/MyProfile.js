import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostComponent from "./BoardList";
import MyCommentComponent from "./MyComment";
import MyContentComponent from "./MyContent";
import { COMMUNITY_MYPROFILE_URL, proList, HEADER } from "../../utils/community_constants";
import { TypeE, TypeK } from "../../utils/community_function";
import axios from "axios";


export default function CommunityMyProfile() {
  const { corpId, type } = useParams();
  const [ error, setError ] = useState(false);
  const [ Data, setData ] = useState();
  const [selectedCat, setSelectedCat] = useState(type);
  const [ current, setCurrent ] = useState(1);
  const maxPage = Data ? Data.lastPage : 1;
  const token = localStorage.getItem('token');
  
  const navigate = useNavigate();  

  useEffect(() => {
    axios.get(COMMUNITY_MYPROFILE_URL+type+"&display=10&page="+current, { headers: { Authorization: `Token ${token}` } })
    .then((res) => {setData(res.data);console.log(res.data);})
    .catch((e) => setError(true));
  }, [type, current])

  const _onCategoryClick = (props) => {
    setSelectedCat(TypeE(props.nativeEvent.srcElement.innerHTML));
    navigate(`/cid=${corpId}/community/my-profile/type=${TypeE(props.nativeEvent.srcElement.innerHTML)}`);
  };

  const ComponentbyType = (type) => {
    if(Data===null) return <div></div>;
    switch(type){
      case 'myContent': 
        return (Data?.contentList.map((sum, i) => (
          <MyContentComponent key = {i} sum = {sum} i = {i} />)))
      case 'myComment':
        return (Data?.contentList.map((sum, i) => (
          <MyCommentComponent key = {i} sum = {sum} i = {i} />)))
      case 'liked':
        return (Data?.contentList.map((sum, i) => (
          <PostComponent key = {i} sum = {sum} i = {i} />)))
      case 'scrap':
        return (Data?.contentList.map((sum, i) => (
          <PostComponent key = {i} sum = {sum} i = {i} />)))
    }
  }

  
  const getCurrentPages = (current) => {
    if(maxPage<5) {
      const result = [];
      for(var i=0;i<maxPage;i++) {
        result.push(i+1);
      }
      return result;
    }
    if(current===1 || current===2) {
      return [1, 2, 3, 4, 5];
    } else if(current===maxPage || current===maxPage-1){
      return [maxPage-4, maxPage-3, maxPage-2, maxPage-1, maxPage];
    } else {
      return [current-2, current-1, current, current+1, current+2];
    }
  }

  const _onNextClick = () => {
    if(current===maxPage) {
      return;
    } else {
      setCurrent(current+1);
    }
  }

  const _onPrevClick = () => {
    if(current===1) {
      return;
    } else {
      setCurrent(current-1);
    }
  }

  return (
    error? null : Data ? <S.Container>
      <S.Scroll>
        <S.CHeader>
          <S.Title>내 프로필</S.Title>
          <S.Flex>
            <S.Category>
              {proList.map((title, i) => (
                <S.Board key={i} title={title} selected={selectedCat} onClick={_onCategoryClick}>
                  {TypeK(title)}
                </S.Board>
              ))}
            </S.Category>
            <S.Alarm onClick={()=>navigate(`/cid=${corpId}/community/board=information`)}>
              게시판으로
            </S.Alarm>
          </S.Flex>
        </S.CHeader>
        <S.Posts>
          {ComponentbyType(type)}
          <S.PaginationBox>
            <S.PaginationLetterButton onClick={()=>setCurrent(1)}>{"처음"}</S.PaginationLetterButton>
            <S.PaginationLetterButton onClick={_onPrevClick}>{"<"}</S.PaginationLetterButton>
            {getCurrentPages(current).map((n, i) => (
              <S.PaginationNumberButton key={i} selected={current} index={n} onClick={() => setCurrent(n)}>{n}</S.PaginationNumberButton>
              ))}
            <S.PaginationLetterButton onClick={_onNextClick}>{">"}</S.PaginationLetterButton>
            <S.PaginationLetterButton onClick={()=>setCurrent(maxPage)}>{"마지막"}</S.PaginationLetterButton>
          </S.PaginationBox>
        </S.Posts>
      </S.Scroll>
      <S.CFooter>
        <S.Footer>
          <S.Search>
            <S.SearchIcon>
              <i className="fas fa-search"></i>
            </S.SearchIcon>
            <S.Input placeholder="검색어를 입력하세요" />
          </S.Search>
          {token && <S.FooterButtonBox>
            <S.MyProfile>내 프로필</S.MyProfile>
            <S.Button onClick = {()=> token? navigate(`/cid=${corpId}/community/post`) : navigate(`/community/post`)}>글쓰기</S.Button>
          </S.FooterButtonBox>}
        </S.Footer>
      </S.CFooter>
    </S.Container> : null
  );
}

const S = {};

S.PaginationBox = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;

S.PaginationLetterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 15px;
  opacity: 70%;
  &:hover{
    cursor: pointer;
    opacity: 100%;
  }
`;

S.PaginationNumberButton = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  border-radius: 20px;
  margin: 0 5px;
  padding-top: 6px;
  width: 30px;
  height: 30px;
  ${(props) => (props.index===props.selected ? "border: 1px solid #aaaaaa;": null)}
  &:hover{
    background-color: #aaaaaa;
    color: #ffffff;
    cursor: pointer;
  }
`;
S.FooterButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.MyProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  opacity: 70%;
  font-size: 14spx;
  &:hover{cursor: pointer;opacity: 100%;}
`;

S.Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  height: 100%;
`;

S.Scroll = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  flex: 1;
`;

S.CHeader = styled.div`
  width: 100%;
  background: #f5f5f7b3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 40px 0 20px 0;
`;

S.Title = styled.div`
  width: 40%;
  max-width: 1200px;
  font-size: 24px;
  font-weight: 500;
`;

S.Category = styled.div`
  display: flex;
  color: #515154;
`;

S.Alarm = styled.div`
  font-size: 14px;
  &:hover {
    cursor: pointer;
    opacity: 100%;
  }
  color: #1d1d1f;
  opacity: 80%;
  padding-right: 5px;
`;

S.Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  padding-top: 20px;
`;

S.Board = styled.div`
  ${(props) => (props.title === "myContent" ? "padding-right: 15px;" : "padding: 0 15px;border-left: 1px solid #d2d2d7;")}
  font-size: 12px;
  ${(props) => (props.selected === props.title ? "font-weight: bold;" : "")}
  &:hover {
    cursor: pointer;
  }
`;

S.Posts = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

S.Search = styled.div`
  display: flex;
  background: white;
  align-items: center;
  height: 100%;
  padding: 0;
  border-radius: 10px;
`;

S.SearchIcon = styled.div`
  font-size: 14px;
  padding: 0 10px 0 15px;
`;

S.Input = styled.input`
  border: none;
  &:focus{
    outline: none;
  }
  width: 200px;
`;

S.CFooter = styled.div`
  background: #f5f5f7b3;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  color: #1d1d1f;
`;

S.Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

S.Button = styled.button`
  padding: 12px 20px;
  border-radius: 5px;
  color: rgba(245, 245, 247, 0.8);
  background: #06c;
  border: none;
  ${props => !props.error ? '&:hover{cursor:pointer; color: #f5f5f7;}' : 'opacity: .3;'};
`;