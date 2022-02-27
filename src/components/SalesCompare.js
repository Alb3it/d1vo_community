import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { compareMenuList, salesCompareTitle, lineOptions } from '@constants';
import { Line } from 'react-chartjs-2';
import { applyColorToChart } from '@functions';
import { SA_COMPARE_URL } from '@api';
import { useFetch } from '@hooks';
import { useParams } from 'react-router-dom';
import { maxChartTab, compareChartUnit } from '@constants';

export default function SalesCompare({ compareRef }){
  const { corpId } = useParams();
  const [ tab, setTab ] = useState(0);
  const [ chartTab, setChartTab ] = useState(0);

  useEffect(() => setChartTab(0), [tab]);

  const { payload, error } = useFetch(
    SA_COMPARE_URL(corpId),
    null,
    'GET'
  );

  const data = payload?.analysisList;

  return (
    <S.Fill ref={compareRef} color={'#2a3142'} id="compare">
      <S.Width>
        <S.Title>점포 특성 분석</S.Title>
        <S.Comment>다양한 매출 지표를 통해 점포 및 방문고객 특성을 도출하여 마케팅 방향성을 제시합니다.</S.Comment>
        <S.Tabs>
          <S.Tab onClick={() => setTab(0)} isSelected={tab===0}>시간별</S.Tab>
          <S.Tab onClick={() => setTab(1)} isSelected={tab===1}>요일별</S.Tab>
          <S.Tab onClick={() => setTab(2)} isSelected={tab===2}>재방문</S.Tab>
        </S.Tabs>
        <S.Row isTitle={true}>
          <S.Stat isTitle={true}>{salesCompareTitle[tab][0]}</S.Stat>
          <S.Menu></S.Menu>
          <S.Stat isTitle={true}>{salesCompareTitle[tab][1]}</S.Stat>
        </S.Row>
        {compareMenuList[tab].map((menu, i) => (
          <S.Row key={i}>
            <S.Stat>{data?.[tab]?.leftAvg[i]}</S.Stat>
            <S.Menu><S.Highlight isSelected={i === chartTab} onClick={() => setChartTab(i)}>{menu}</S.Highlight></S.Menu>
            <S.Stat>{data?.[tab]?.rightAvg[i]}</S.Stat>
          </S.Row>
        ))}
        <S.ChartBox>
          <S.ButtonBox><S.Button tab={chartTab} left={true} onClick={() => chartTab>0 ? setChartTab(t => t-1) : null}><i className="fas fa-angle-left"></i></S.Button></S.ButtonBox>
          <S.Chart>
            {data && <Line options={lineOptions(compareChartUnit[chartTab], true, true)} data={applyColorToChart(data?.[tab]?.graphList[chartTab<=maxChartTab[tab] ? chartTab : 0], 'dark')} />}
          </S.Chart>
          <S.ButtonBox><S.Button tab={chartTab} maxTab={maxChartTab[tab]} right={true} onClick={() => chartTab<maxChartTab[tab] ? setChartTab(t => t+1) : null}><i className="fas fa-angle-right"></i></S.Button></S.ButtonBox>
        </S.ChartBox>
      </S.Width>
    </S.Fill>
  );
}

const S = {};

S.Tip = styled.div`
  justify-content: center;
  display: flex;
  margin: 100px 0 0 0;
  font-size: 24px;
`;

S.Fill = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;  
  background: ${props => props.color};
`;

S.Width = styled.div`
  width: 60%;
  max-width: 1200px;
  display: flex;
  padding: 50px 0;
  color: #f5f5f7;
  justify-content: center;
  flex-flow: column;
`;

S.Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;

S.Comment = styled.div`
  margin: 10px 0;
`;

S.StatRow = styled.div`
  display: flex;
  width: 100%;
  ${props => props.right ? 'justify-content: right;' : ''}
`;

S.Tabs = styled.div`
  display: flex;
  margin: 40px 0;
  color: #f5f5f7;
  justify-content: center;
`;

S.Tab = styled.div`
  padding: 15px 10px;
  margin: 0 10px;
  color: #f5f5f7;
  opacity: .8;
  transition: opacity 0.3s;
  &:hover{
    opacity: 1;
    cursor: pointer;
    font-weight: bold;
  }
  ${props => props.isSelected ? 'opacity: 1; border-bottom: 1px solid #f5f5f7; font-weight: bold;' : ''}
`;

S.Row = styled.div`
  display: flex;
  ${props => props.isTitle ? 'margin: 40px 0 20px 0;' : 'margin-top: 60px;'}
  align-items: center;
`;

S.Stat = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  font-weight: bold;
  ${props => props.isTitle ? 'font-size: 24px; font-weight: 500;' : 'font-size: 36px;'}
`;

S.Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

S.Highlight = styled.div`
  height: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  ${props => props.isSelected ? 'background-color: #f5f5f7; color: #2a3142;' : ''}
  &:hover{
    cursor: pointer;
    background-color: #f5f5f7;
    color: #2a3142;
  }
  transition: 0.3s;
`;

S.Chart = styled.div`
  flex: 1;
`;

S.ButtonBox = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
`;

S.Button = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(245, 245, 247, 0.3);
  color: #f5f5f7;
  font-size: 20px;
  &:hover{
    cursor: pointer;
    background: rgba(245, 245, 247, 0.5);
  }
  ${props => !props.tab && props.left ? 'visibility: hidden;' : ''}
  ${props => props.tab===props.maxTab && props.right ? 'visibility: hidden;' : ''}
`;

S.ChartBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 5% 0 5%;
  &:hover ${S.ButtonBox}{
    opacity: 1;
  }
`;

