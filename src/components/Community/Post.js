import { useState, useRef } from "react";
import styled from "styled-components";
import { Editor  } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import Select from 'react-select';
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { COMMUNITY_CONTENT_POST_URL, SelectStyles, HEADER, SelectOptions } from "../../utils/community_constants";


export default function CommunityPost(){
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [board, setBoard] = useState("");
  const {corpId} = useParams();
  const editorRef = useRef();
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const _onPostClick = () => {
    const editorInstance = editorRef.current.getInstance();
    const content = editorInstance.getMarkdown();
    const body = {
      "title": title,
      "tags": tags,
      "mainText": content,
      "category": board,
    }
    axios.post(COMMUNITY_CONTENT_POST_URL, body, { headers: { Authorization: `Token ${token}` } }).then((res)=>{navigate(`/cid=${corpId}/community/content=`+res.data.contentId)});
  }
    
    return(
        <>
      <S.Scroll>
        <S.CHeader>
          <S.Title>게시판 글쓰기</S.Title>
          <S.Subtitle>제목과 본문, 태그를 입력하고 게시판 종류를 선택해 주세요.</S.Subtitle>
        </S.CHeader>
        <S.Body>
          <S.TitleBox>
            <S.TextInput placeholder="제목" value={title} onChange={(n)=>setTitle(n.target.value)} />
            <S.Select options={SelectOptions} onChange={(props)=>setBoard(props.value)} styles={SelectStyles} placeholder="게시판을 선택해주세요"/>
            <S.TagBox>
              <S.ReactTagInput tags={tags} onChange={(n)=>setTags(n)} placeholder="태그를 입력해주세요"/>
            </S.TagBox>
          </S.TitleBox>
          <S.EditBox>
           <Editor height="550px" initialEditType="wysiwyg" ref={editorRef}/>
          </S.EditBox>
        </S.Body>
      </S.Scroll>
      <S.CFooter>
        <S.Footer>
          <S.Button onClick={_onPostClick}>글쓰기</S.Button>
        </S.Footer>
      </S.CFooter>
    </>
    )
}

const S = {};

S.ReactTagInput = styled(ReactTagInput)`
  font-size: 12px;
`;

S.TagBox = styled.div`
  margin: 10px 0;
`;

S.Select = styled(Select)`
  z-index: 3;
`;

S.TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

S.TextInput = styled.input`
  margin: 10px 0;
  width: 100%;
  border: none;
  background-color: #efefef;
  height: 35px;
  border-radius: 5px;
  &:focus{
    outline: none;
  }
  padding: 15px;
`;

S.Scroll = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 1;
`;

S.EditBox = styled.div`
  z-index: 2;
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
  width: 41%;
  max-width: 1200px;
  font-size: 24px;
  font-weight: 500;
`;

S.Subtitle = styled.div`
  width: 41%;
  font-size: 12px;
  font-weight: 500;
  padding-top: 20px;
`;

S.Body = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  align-items: center;
  width: 41%;
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
  justify-content: end;
  align-items: center;
  width: 41%;
`;

S.Button = styled.button`
  padding: 12px 20px;
  border-radius: 5px;
  color: rgba(245, 245, 247, 0.8);
  background: #06c;
  border: none;
  ${props => !props.error ? '&:hover{cursor:pointer; color: #f5f5f7;}' : 'opacity: .3;'};
`;