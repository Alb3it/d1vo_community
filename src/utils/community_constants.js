export const COMMUNITY_CONTENT_LIST_URL = "https://test.divo.kr/content/list?type=category&cat=";
export const COMMUNITY_CONTENT_DETAIL_URL = "https://test.divo.kr/content/?content_id=";
export const COMMUNITY_CONTENT_LIKE_URL = "https://test.divo.kr/content/like?content_id=";
export const COMMUNITY_CONTENT_SCRAP_URL = "https://test.divo.kr/content/scrap?content_id=";
export const COMMUNITY_COMMENT_POST_URL = "https://test.divo.kr/content/comment/?content_id=";
export const COMMUNITY_REPLY_LIST_URL = "https://test.divo.kr/content/comment/reply/?comment_id=";
export const COMMUNITY_COMMENT_LIKE_URL = "https://test.divo.kr/content/comment/like?comment_id=";
export const COMMUNITY_COMMENT_DELETE_URL = "https://test.divo.kr/content/comment/?content_id=";
export const COMMUNITY_CONTENT_POST_URL = "https://test.divo.kr/content/";
export const COMMUNITY_CONTENT_MODIFY_URL = "https://test.divo.kr/content/?content_id=";
export const COMMUNITY_MYPROFILE_URL = "https://test.divo.kr/content/list?type=";
export const COMMUNITY_SEARCH_TITLE_URL = "https://test.divo.kr/content/list?type=searched&criteria=title&query="

export const catList = [ "information", "qna", "general", "bug", "notice"];
export const proList = [ "myContent", "myComment", "scrap", "liked"];

export let token = localStorage.getItem("token");
export const HEADER = { headers: { Authorization: `Token ${token}` } };

export const NotStaffSelectOptions = [
  { value: 'information', label: '정보' },
  { value: 'qna', label: '질문' },
  { value: 'general', label: '자유' },
  { value: 'bug', label: '오류' },
];

export const StaffSelectOptions = [
  { value: 'information', label: '정보' },
  { value: 'qna', label: '질문' },
  { value: 'general', label: '자유' },
  { value: 'bug', label: '오류' },
  { value: 'notice', label: '공지사항' },
];

export const SelectStyles = {
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      background: isFocused
      ? "#f4f4f4"
      : isSelected
      ? "#eeeeee"
      : "#ffffff",
      color: "#1d1d1f",
      opacity: 0.8,
      padding: 10,
      fontSize: "14px",
      border: "none",
      outline: "none"
    }),
    control: (provided, {isFocused}) => ({
      ...provided,
      background: "#efefef",
      border: "none",
      outline: isFocused
      ? "#555555 solid 1.5px"
      : "none",
      transition: "outline 0.1s"
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "14px",
      padding: 4,
      border: "none",
      outline: "none",
      focus: {outline: "black solid 1px"},
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "14px",
      padding: 4,
      color: "#1d1d1f",
      border: "none",
      outline: "none",
      
    }),
};