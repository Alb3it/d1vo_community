import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { menuList  } from '@constants';
import CorpListModal from '@/components/CorpListModal';
import { useDetectOutsideClick, useFetch } from '@hooks';
import { DEL_CORP_URL } from '@api';

export default function Header({ sticky = false, dark = true }){
  const { corpId } = useParams();
  const [ input, setInput ] = useState('');
  let token = localStorage.getItem('token');

  const navigate = useNavigate();

  const searchRef = useRef(null);
  const dropDownRef = useRef(null);
  const modalRef = useRef(null);
  const [ isSearching, setIsSearching ] = useDetectOutsideClick(searchRef, false);
  const [ showDropDown, setShowDropDown ] = useDetectOutsideClick(dropDownRef, false);
  const [ showModal, setShowModal ] = useDetectOutsideClick(modalRef, false);

  const CORP_URL = !corpId ? '' : `/cid=${corpId}`;

  const { payload, error } = useFetch(
    DEL_CORP_URL + corpId,
    null,
    'GET',
    [corpId]
  );

  const handleLogin = e => {
    e.preventDefault();
    navigate('/login');
    setShowDropDown(false);
  }

  const handleSignup = e => {
    e.preventDefault();
    navigate('/signup');
    setShowDropDown(false);
  }

  const handleLogout = e => {
    e.preventDefault();
    localStorage.clear();
    token = null;
    navigate('/');
    setShowDropDown(false);
  }

  const handleSearch = e => {
    e.preventDefault();
    if(input){
      navigate(`keyword-analysis/keyword=${input}`);
      setIsSearching(false);
      setInput('');
    }
  }

  const handleKeyPressSearch = e => {
    if(e.key !== 'Enter') return;
    if(input){
      navigate(`keyword-analysis/keyword=${input}`);
      setIsSearching(false);
      setInput('');
    }
  }

  return (
    <>
      <S.Flex sticky={sticky}>
        {!isSearching ? 
        <S.Header dark={dark}>
          <S.Logo onClick={() => navigate(corpId!==undefined ? `/cid=${corpId}` : '/')}>Divo</S.Logo>
          {menuList.map((menuObj, i) => (
            <S.Menu dark={dark} key={menuObj.title} onClick={() => navigate(CORP_URL + menuObj.url)}>{menuObj.title}</S.Menu>
          ))}
          <S.Logo onClick={() => {setIsSearching(true);}}><i className="fas fa-search"></i></S.Logo>
          <S.LogoBox>
            <S.Logo onClick={() => setShowDropDown(d => !d)}>
              <i className="fas fa-user"></i>
              <S.Brand>{payload?.corpName || 'Guest'}</S.Brand>
            </S.Logo>
            {showDropDown && 
              (!token ?
              <S.Dropdown ref={dropDownRef}>
                <S.Drop onClick={handleLogin}>?????????</S.Drop>
                <S.Drop onClick={handleSignup}>????????????</S.Drop>
              </S.Dropdown> :
              <S.Dropdown ref={dropDownRef}>
                <S.Drop onClick={() => setShowModal(true)}>????????? ??????</S.Drop>
                <S.Drop onClick={() => { navigate('corp-management'); setShowDropDown(false); }}>????????? ??????</S.Drop>
                <S.Drop onClick={handleLogout}>????????????</S.Drop>
              </S.Dropdown>)
            }
          </S.LogoBox>
        </S.Header> :
        <S.Header dark={dark} ref={searchRef}>
          <S.Logo onClick={handleSearch}><i className="fas fa-search"></i></S.Logo>
          <S.Input dark={dark} placeholder="????????? ???????????? ???????????????" value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPressSearch} />
          <S.Logo onClick={() => setIsSearching(false)}><i className="fas fa-times"></i></S.Logo>
        </S.Header>}
        {/* {menu>=0 && 
        <S.SubMenus>
          {subMenuList[menu].map((subMenu, i) => (
            <S.SubMenu key={subMenu} onClick={() => navigate(subMenuUrlList[menu][i])}>{subMenu}</S.SubMenu>
          ))}
        </S.SubMenus>} */}
      </S.Flex>
      {showModal && <CorpListModal setShowModal={setShowModal} modalRef={modalRef} />} 
    </>
  );
}

const S = {};

S.Flex = styled.div`
  z-index: 3;
  ${props => props.sticky ? 'position: sticky; top: 0;' : ''}
`;

S.SubMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //background: rgba(245, 245, 247, 0.7);
  background: rgba(0, 0, 0, 0.7);
  //color: #1d1d1f;
  color: #f5f5f7;
  padding: 20px 0;
  font-size: 12px;
  position: absolute;
  top: 48px;
`;

S.SubMenu = styled.div`
  margin: 0 20px;
  transition: opacity 0.3s;
  opacity: .8;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
`;

S.Header = styled.div`
  height: 48px;
  min-height: 48px;
  flex: 1;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  //${props => props.dark ? 'box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.3);' : 'box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);'}
  ${props => props.dark ? 'background: rgba(0, 0, 0, 0.7); color: #f5f5f7;' : 'background: rgba(245, 245, 247, 0.7); color: #1d1d1f;'}
  backdrop-filter: saturate(180%) blur(20px);
`;

S.Menu = styled.div`
  margin: 0 20px;
  opacity: .8;
  transition: opacity 0.3s;
  //font-weight: bold;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
`;

S.Logo = styled(S.Menu)`
  font-family: 'Montserrat', 'SUIT';
  font-size: 17px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

S.LogoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

S.Input = styled.input`
  width: 320px;
  height: 24px;
  line-height: 24px;
  background: none;
  border: none;
  &:focus{
    outline: none;
  }
  &::placeholder{
    //color: #f5f5f7;
    color: #1d1d1f;
    opacity: .8;
    font-size: 14px;
  }
  font-size: 16px;
  ${props => props.dark ? 'color: white; &::placeholder{color:#f5f5f7;}' : ''}
`;

S.Dropdown = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  backdrop-filter: saturate(180%) blur(20px);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid #d2d2d7;
  top: 40px;
  border-radius: 15px;
`;

S.Drop = styled.div`
  padding: 20px 5px;
  width: 90px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  opacity: .8;
  color: #1d1d1f;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
`;

S.Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #d2d2d7;
`;

S.Brand = styled.div`
  font-size: 12px;
  margin-left: 10px;
  width: 55px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;