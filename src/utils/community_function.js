export const CategoryK = (category) => {
  switch(category) {
    case "information":
      return "정보";
    case "qna":
      return "질문";
    case "general":
      return "자유";
    case "bug":
      return "오류";
    case "notice":
      return "공지사항";
    default:
      return "에러가 발생하였습니다.";
  }
}
//korean -> english
export const CategoryE = (category) => {
  switch(category) {
    case "정보":
      return "information";
    case "질문":
      return "qna";
    case "자유":
      return "general";
    case "오류":
      return "bug";
    case "공지사항":
      return "notice";
    default:
      return "에러가 발생하였습니다.";
  }
}

export const TypeK = (category) => {
  switch(category) {
    case "myContent":
      return "내가 쓴 글";
    case "liked":
      return "추천한 글";
    case "scrap":
      return "스크랩한 글";
    case "myComment":
      return "내가 쓴 댓글";
    default:
      return "에러가 발생하였습니다.";
  }
}
//korean -> english
export const TypeE = (category) => {
  switch(category) {
    case "내가 쓴 글":
      return "myContent";
    case "추천한 글":
      return "liked";
    case "스크랩한 글":
      return "scrap";
    case "내가 쓴 댓글":
      return "myComment";
    default:
      return "에러가 발생하였습니다.";
  }
}

export const CategoryColor = (category) => {
  switch (category) {
    case "information":
      return "#265828";
    case "qna":
      return "#001b55";
    case "general":
      return "#ef5200";
    case "bug":
      return "#bfa194";
    case "notice":
      return "#028a9b";
    default:
      return "#aaaaaa";
  }
};