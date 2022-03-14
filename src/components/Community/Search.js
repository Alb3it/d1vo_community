import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostComponent from "./BoardList";
import { COMMUNITY_SEARCH_TITLE_URL } from "../../utils/community_constants";
import axios from "axios";


export default function CommunitySearch() {
  const { corpId, criteria, keyword } = useParams();
  const [ error, setError ] = useState(false);
  const [ Data, setData ] = useState();
  const [ text, setText ] = useState(keyword);
  const token = localStorage.getItem('token');
  
  const navigate = useNavigate();  

  useEffect(() => {
    axios.get(COMMUNITY_SEARCH_TITLE_URL+keyword)
    .then((res) => setData(res.data))
    .catch((e) => setError(true));
  }, [keyword])

  const goSearch = (e) => {
    if(token) {
      navigate(`/cid=${corpId}/community/search/criteria=title&keyword=${text}`);
    } else {
      navigate(`/community/search/criteria=title&keyword=${text}`);
    }
  }

  return (
    // error? null : Data ? 
    <S.Container>
      <S.Scroll>
        <S.CHeader>
          <S.HeaderBox>
          <S.Title>총 {Data?.contentList.length}건의 검색결과가 있습니다.</S.Title>
          <S.Alarm onClick={()=>token? navigate(`/cid=${corpId}/community/board=information`) : navigate(`/community/board=information`)}>
              게시판으로
            </S.Alarm>
          </S.HeaderBox>
          <S.Flex>
          <S.Search>
            <S.SearchIcon>
              <i className="fas fa-search"></i>
            </S.SearchIcon>
            <S.Input value={text} onChange={props => setText(props.target.value)} onKeyPress={e => e.key==='Enter' ?  goSearch(e) : null}/>
          </S.Search>
          </S.Flex>
        </S.CHeader>
        <S.Posts>
          {Data?.contentList.map((sum, i) => (
            <PostComponent key = {i} sum = {sum} i = {i} />
          ))}
        </S.Posts>
      </S.Scroll>
      <S.CFooter>
        <S.Footer>
          {token && <S.FooterButtonBox>
            <S.MyProfile onClick={()=>navigate(`/cid=${corpId}/community/my-profile/type=myContent`)}>내 프로필</S.MyProfile>
            <S.Button onClick = {()=> navigate(`/cid=${corpId}/community/post`)}>글쓰기</S.Button>
          </S.FooterButtonBox>}
        </S.Footer>
      </S.CFooter>
    </S.Container> 
    // : null
  );
}

const S = {};

S.HeaderBox = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
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
  ${(props) => (props.title === "information" ? "padding-right: 15px;" : "padding: 0 15px;border-left: 1px solid #d2d2d7;")}
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
  padding: 5px 0;
  border-radius: 10px;
  border: 1px solid #dddddd;
  &:focus-within{outline: 1px solid #888888;}
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
  width: 500px;
`;

S.CFooter = styled.div`
  background: #f5f5f7b3;
  display: flex;
  justify-content: end;
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