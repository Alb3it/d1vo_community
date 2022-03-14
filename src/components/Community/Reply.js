import styled from "styled-components";

export default function ReplyComponent({reply, i}) {
  return (
    <S.Reply>
      <S.CommentFirst>
        <S.CommentWriter>{reply.writer}</S.CommentWriter>
        <S.CommentDate>{reply.lastEdited}</S.CommentDate>
      </S.CommentFirst>
      <S.ReplyContent>{reply.mainText}</S.ReplyContent>
    </S.Reply>
  );
}

const S = {};

S.Reply = styled.div`
  display: flex;
  flex-flow: column;
  padding: 15px 5px 15px 35px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #d2d2d7;
`;

S.CommentFirst = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 7px;
`;

S.CommentWriter = styled.div`
  font-size: 13px;
  padding-right: 3px;
`;

S.CommentDate = styled.div`
  font-size: 11px;
  color: #aaaaaa;
`;

S.ReplyContent = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 4px 0;
  white-space: pre-wrap;
`;