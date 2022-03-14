import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";


export default function MyCommentComponent({sum, i}){
  const {corpId} = useParams();
  const navigate = useNavigate();
  let token = localStorage.getItem('token');

  const _onPostClick = () => {
    if(token) {
      navigate(`/cid=${corpId}/community/content=`+sum.contentId);
    } else {
      navigate(`/community/content=`+sum.contentId);
    }
  }

  return (
    <S.Post key = {i} onClick={_onPostClick}>
            <S.PostTitle>{sum.mainText}</S.PostTitle>
            <S.PostContent>{sum.content}</S.PostContent>
            <S.BottomBox>
              <S.PostAuthor>{sum.lastEdited?.replaceAll('T', ' ').slice(0, -4)}</S.PostAuthor>
            </S.BottomBox>
          </S.Post>
  );
}

const S = {};

S.Post = styled.div`
  display: flex;
  flex-flow: column;
  width: 40%;
  border-bottom: 1px solid #d2d2d7;
  padding: 20px 0;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  opacity: 0.8
`;

S.PostTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 15px;
`;

S.PostContent = styled.div`
  font-size: 14px;
  color: #515154;
  margin-bottom: 25px;
`;

S.BottomBox = styled.div`
  display: flex;
`;

S.PostAuthor = styled.div`
  font-size: 12px;
`;