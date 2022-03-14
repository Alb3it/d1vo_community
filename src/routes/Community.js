import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoginRequired from '@/components/errorPage/LoginRequired';
import NotReady from '@/components/errorPage/NotReady';
import { Outlet } from 'react-router-dom';

export default function Community(){
  return (
    <S.Content>
      <Outlet />
    </S.Content>
  );
}

const S = {};

S.Content = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  color: #1d1d1f;
  max-height: calc(100vh - 48px);
`;