import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Viewer } from "@toast-ui/react-editor";
import CommentComponent from "./Comment";
import { ReactComponent as Like } from "@/assets/CommunityContentLike.svg";
import { ReactComponent as Scrap } from "@/assets/CommunityContentScrap.svg";
import { ReactComponent as ScrapF } from "@/assets/CommunityContentScrapFill.svg";
import { ReactComponent as Menu } from "@/assets/CommunityContentMenu.svg";
import { useFetch } from "@hooks";
import axios from "axios";
import { COMMUNITY_COMMENT_POST_URL, COMMUNITY_CONTENT_DETAIL_URL, COMMUNITY_CONTENT_LIKE_URL, COMMUNITY_CONTENT_SCRAP_URL, HEADER, token } from "../../utils/community_constants";
import { CategoryK } from "../../utils/community_function";
import { CategoryColor } from "../../utils/community_function";

export default function CommunityContent() {
  const { corpId, contentId } = useParams();
  const [changeLike, setChangeLike] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [like, setLike] = useState(false);
  const [scrap, setScrap] = useState(false);
  const [text, setText] = useState("");
  const [a, setA] = useState(false);
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [ commentN, setCommentNumber ] = useState(10);
  const token = localStorage.getItem('token');

  useEffect(() => {
    setLike(result?.isLiked);
    setScrap(result?.isScrap);
  }, [result]);

  useEffect(()=>{
    if(token) {
      axios.get(COMMUNITY_CONTENT_DETAIL_URL + contentId+"&display="+commentN+"&page=1", { headers: { Authorization: `Token ${token}` } })
    .then(res => {setResult(res.data);})
    .catch(e=>setError(true));
    } else {
      axios.get(COMMUNITY_CONTENT_DETAIL_URL + contentId)
    .then(res => {setResult(res.data);console.log(res.data)})
    .catch(e=>setError(true));
    }
  },[a])

  const navigate = useNavigate();

  const _onLikeClick = () => {
    setLike(!like);
    setChangeLike(!changeLike);
    axios.post(COMMUNITY_CONTENT_LIKE_URL + contentId, null, HEADER);
  };

  const _onScrapClick = () => {
    setScrap(!scrap);
    axios.post(COMMUNITY_CONTENT_SCRAP_URL + contentId, null, HEADER);
  };

  const _onCommentPostClick = () => {
    axios
      .post(COMMUNITY_COMMENT_POST_URL + contentId, { mainText: text }, HEADER)
      .then(() => {
        setText("");
        setLike(false);
        setChangeLike(false);
      })
      .then(setA(!a));
  };

  const _onDeleteClick = () => {
    axios.delete(COMMUNITY_CONTENT_DETAIL_URL + contentId, HEADER).then(() => navigate(`/cid=${corpId}/community/board=${result.category}`));
  };

  const _onCommentPrevClick = () => {
    setCommentNumber(commentN+10);
    setA(!a);
  }

  return error ? null : result ? (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <S.HeaderBox>
            <S.TagBox>
              <S.Board color={CategoryColor(result?.category)}>{CategoryK(result?.category)}</S.Board>
              {result?.tags.map((tag, i) => (
                <S.Tag color={CategoryColor(result?.category)} key={i}>
                  #{tag}
                </S.Tag>
              ))}
            </S.TagBox>
            <S.BacktoBoardButton onClick={() => navigate(`/cid=${corpId}/community/board=${result.category}`)}>목록으로</S.BacktoBoardButton>
          </S.HeaderBox>
          <S.Title>{result?.title}</S.Title>
          <S.HeaderBottom>
            <S.NameBox>
              <S.Nickname>{result?.writer}</S.Nickname>
              <S.Stats last={false} first={true}>
                {result?.lastEdited.replace("T", " ")} · 조회 {result?.viewCount} · 좋아요{" "}
                {result?.isLiked ? (changeLike ? result?.likeCount - 1 : result?.likeCount) : changeLike ? result?.likeCount + 1 : result?.likeCount}
              </S.Stats>
            </S.NameBox>
            {token ? <S.HeaderButtonBox>
              <S.HeaderButton onClick={_onLikeClick}>
                <S.Like width={24} height={24} fill={like ? "#F24E1E" : "none"} />
              </S.HeaderButton>
              <S.HeaderButton onClick={_onScrapClick}>{scrap ? <ScrapF /> : <Scrap />}</S.HeaderButton>
              {result?.isMine ? (
                <S.HeaderButton pushed={showMenu} onClick={() => setShowMenu(!showMenu)}>
                  <Menu />
                </S.HeaderButton>
              ) : null}
              {showMenu ? (
                <S.ContentMenu>
                  <S.ContentMenuList onClick={() => navigate(`/cid=${corpId}/community/content-modify/contentId=${contentId}`, { state: result })}>수정</S.ContentMenuList>
                  <S.ContentMenuList onClick={_onDeleteClick}>삭제</S.ContentMenuList>
                </S.ContentMenu>
              ) : null}
            </S.HeaderButtonBox> : <div></div>}
          </S.HeaderBottom>
        </S.ContentHeader>
        <S.ContentBody>
          <S.BodyContainer>
            <S.ViewerBox>
              <Viewer initialValue={result.mainText} />
            </S.ViewerBox>
            <S.CommentTitleBox>
              <S.CommentTitle>댓글</S.CommentTitle>
              <S.CommentNumber>{result?.commentCount}</S.CommentNumber>
            </S.CommentTitleBox>
          </S.BodyContainer>
          <S.CommentBox>
          {
              result?.lastCommentPage===1 ? null : <S.PrevCommentBox onClick={_onCommentPrevClick}>이전 댓글 보기...</S.PrevCommentBox>
            }
            {result?.comments.map((comObj, i) => (
              <CommentComponent key={i} comment={comObj} index={i} contentId={contentId} aa={a} setAA={setA} />
            ))}
            
            {token && <S.ReplyWR>
              <S.WhiteBox>
                <S.UpperBox>이미자는중</S.UpperBox>
                <S.Textarea
                  value={text}
                  onChange={(props) => {
                    setText(props.target.value);
                  }}
                  placeholder="댓글을 입력하세요"
                />
                <S.BottomBox>
                  <S.CommentPostButton onClick={_onCommentPostClick}>등록</S.CommentPostButton>
                </S.BottomBox>
              </S.WhiteBox>
            </S.ReplyWR>}
          </S.CommentBox>
        </S.ContentBody>
      </S.Content>
      <S.CFooter>
        <S.Footer>
          {token && <S.Button onClick={() => navigate(`/cid=${corpId}/community/post`)}>글쓰기</S.Button>}
          {!token && <S.UnloginButton>댓글 작성이나 게시글 작성을 위해서는 로그인이 필요합니다</S.UnloginButton>}
        </S.Footer>
      </S.CFooter>
    </S.Container>
  ) : null;
}

const S = {};

S.UnloginButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

S.PrevCommentBox = styled.div`
  width: 100%;
  background-color: #fefefe;
  border-bottom: 1px solid #cccccc;
  font-size: 15px;
  padding: 10px 0;
  &:hover{
    cursor: pointer;
  }
`;

S.HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.BacktoBoardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 9px;
  margin: 10px 0 20px 0;
  border: 1px solid #ffffff;
  &:hover {
    background-color: #efefef;
    cursor: pointer;
    border: 1px solid #dddddd;
    border-radius: 10px;
  }
  font-size: 13px;
  color: #aaaaaa;
`;

S.ContentMenu = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  right: 0px;
  top: 40px;
  width: 70px;
  height: 90px;
  justify-content: space-around;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
  z-index: 3;
`;

S.ContentMenuList = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: center;
  font-size: 14px;
  color: #aaaaaa;
  &:hover {
    cursor: pointer;
    color: #666666;
  }
`;

S.Like = styled(Like)`
  margin-bottom: 1.5px;
`;

S.ReplyWR = styled.div`
  display: flex;
  flex-flow: column;
  padding: 5px;
  background-color: #f0f0f0;
  height: 170px;
  border-radius: 5px;
`;

S.WhiteBox = styled.div`
  padding: 6px;
  display: flex;
  flex-flow: column;
  flex: 1;
  background-color: white;
  border-radius: 5px;
`;

S.UpperBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: #1d1d1f;
  padding: 2px 0 5px 0;
  font-size: 13px;
`;

S.Textarea = styled.textarea`
  display: flex;
  flex: 1;
  border: none;
  outline-color: #eeeeee;
  border-radius: 5px;
  resize: none;
`;

S.BottomBox = styled.div`
  display: flex;
  padding: 5px 0;
  justify-content: end;
  color: #aaaaaa;
  font-size: 14px;
`;

S.CommentPostButton = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

S.HeaderButton = styled.div`
  height: 27px;
  width: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-left: 3px;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

S.HeaderButtonBox = styled.div`
  display: flex;
  align-items: end;
  position: relative;
  transform: translateY(4px);
`;

S.CommentBox = styled.div`
  display: flex;
  flex-flow: column;
`;

S.CommentTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

S.CommentNumber = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-left: 5px;
  color: #c70000;
`;

S.CommentTitleBox = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

S.BodyContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  border-bottom: 1px solid #d2d2d7;
  margin-bottom: 2px;
`;

S.ViewerBox = styled.div`
  display: flex;
  padding-bottom: 10px;
  min-height: 400px;
`;

S.TagBox = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 0 20px 0;
  margin-top: 10px;
`;

S.Board = styled.div`
  padding: 8px 10px;
  font-size: 12px;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 14px;
`;

S.Tag = styled.div`
  padding: 8px 0 8px 8px;
  font-size: 12px;
  color: ${(props) => props.color};
`;

S.Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;
`;

S.HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.NameBox = styled.div`
  display: flex;
  flex-flow: column;
`;

S.Nickname = styled.div`
  font-size: 14px;
  padding-bottom: 7px;
`;

S.Stats = styled.div`
  font-size: 14px;
  color: #aaaaaa;
`;

S.Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  height: 100%;
`;

S.Content = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  flex: 1;
  align-items: center;
`;

S.ContentHeader = styled.div`
  min-height: 180px;
  border-bottom: 1px solid #d2d2d7;
  width: 40%;
  display: flex;
  flex-flow: column;
  padding: 15px 0;
`;

S.ContentBody = styled.div`
  width: 40%;
  padding: 20px 0 10px 0;
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
  ${(props) => (!props.error ? "&:hover{cursor:pointer; color: #f5f5f7;}" : "opacity: .3;")};
`;
