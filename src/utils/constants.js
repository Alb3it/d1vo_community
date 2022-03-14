import { sortComma } from '@functions';

//contract
export const contractText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin dapibus elit a suscipit. Pellentesque volutpat suscipit tincidunt. Donec vitae elit id metus consequat posuere. Maecenas vitae arcu et lorem tristique porttitor. Praesent non arcu sit amet ligula fringilla auctor sed in metus. Duis mattis lorem velit, ut congue nibh sagittis non. In vestibulum turpis ac sapien faucibus, sed tincidunt dui semper. Proin sed erat sed tellus blandit tempor. Etiam sed eleifend augue, at consequat neque. Duis ullamcorper eros vel purus faucibus varius. Curabitur dictum purus id sapien faucibus lacinia. Fusce eu lobortis metus, id gravida ligula. Quisque laoreet velit eros, eget dignissim leo volutpat eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin dapibus elit a suscipit. Pellentesque volutpat suscipit tincidunt. Donec vitae elit id metus consequat posuere. Maecenas vitae arcu et lorem tristique porttitor. Praesent non arcu sit amet ligula fringilla auctor sed in metus. Duis mattis lorem velit, ut congue nibh sagittis non. In vestibulum turpis ac sapien faucibus, sed tincidunt dui semper. Proin sed erat sed tellus blandit tempor. Etiam sed eleifend augue, at consequat neque. Duis ullamcorper eros vel purus faucibus varius. Curabitur dictum purus id sapien faucibus lacinia. Fusce eu lobortis metus, id gravida ligula. Quisque laoreet velit eros, eget dignissim leo volutpat eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin dapibus elit a suscipit. Pellentesque volutpat suscipit tincidunt. Donec vitae elit id metus consequat posuere. Maecenas vitae arcu et lorem tristique porttitor. Praesent non arcu sit amet ligula fringilla auctor sed in metus. Duis mattis lorem velit, ut congue nibh sagittis non. In vestibulum turpis ac sapien faucibus, sed tincidunt dui semper. Proin sed erat sed tellus blandit tempor. Etiam sed eleifend augue, at consequat neque. Duis ullamcorper eros vel purus faucibus varius. Curabitur dictum purus id sapien faucibus lacinia. Fusce eu lobortis metus, id gravida ligula. Quisque laoreet velit eros, eget dignissim leo volutpat eget."

// iterable arrays

export const menuList = [
  {title: '키워드 분석', url: '/keyword-analysis'},
  {title: '검색 노출도', url: '/vp-rank'},
  {title: '매출액 분석', url: '/sales-analysis'},
  // {title: '트렌드 분석', url: '/'},
  // {title: '키워드 매출 연관성', url: '/'},
  {title: '음식점 순위', url: '/rank'},
  {title: '커뮤니티', url: '/community/board=information'},
];

export const subMenuUrlList = [
  ['/keyword-analysis/search-qty', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/'],
];

export const subMenuList = [
  ['키워드 검색량 및 추세', '콘텐츠 발행량 및 추세', '검색자 특성', '온라인 마케팅 정보', '검색량 현황 및 추세 분석'],
  ['매출액 현황', '결제단가 현황', '결제건수 현황', '재방문 고객 현황', '신규 고객 현황'],
  ['최석우', '주형진', '이상현'],
  ['검색량', '요일별 검색 비율', '평일/주말 검색 비율', '연령별 검색 비율', '성별 검색 비율', '기기별 검색 비율'],
  ['내 순위', '상권별 순위', '업종별 순위'],
  ['커뮤니티']
]

export const keywordCommentList = [
  {
    title: '검색량 현황',
    details: [
      '키워드 조회수 증감은 시장 수요의 증감으로 연결됩니다.',
      '지속적으로 소비자들이 자사 관련 키워드를 검색할 수 있도록 온라인 마케팅 활동을 해야 합니다.'
    ]
  },
  {
    title: '검색량 단기 추세',
    details: [
      '일반적으로 단기 추세는 점포, 업종, 상권의 도입기와 성장기 단계로 볼 수 있습니다. ',
      '정상적으로 도입기를 지나 성장기로 진입하고 있는지 판단하여 성장세로 진입할 수 있는 전략을 수립해야 합니다.'
    ]
  },
  {
    title: '검색량 중기 추세',
    details: [
      '일반적으로 중기 추세는 점포, 업종, 상권의 성장기와 성숙기 단계로 볼 수 있습니다. ',
      '정상적으로 성장세를 이어가고 있는지, 아니면 이미 성숙기를 넘어서고 있는지 판단하여 전략을 수립해야 합니다.'
    ]
  },
  {
    title: '검색량 장기 추세',
    details: [
      '일반적으로 장기 추세는 점포, 업종, 상권의 성숙기에서 쇠퇴기로 넘어갈 수 있는 단계로 볼 수 있습니다.',
      '점포, 업종, 상권이 쇠퇴기로 접어드는 증상이 나타나고 있다면 새롭게 상승세를 유지할 수 있는 전략을 수립해야 합니다.'
    ]
  },
]

export const userStatComment = [
  '검색자들이 이용하는 키워드 유형과 연령, 성별에 따라 기기의 비중이 달라집니다.',
  '일반적으로 검색자 중 여성이 비중이 높을수록 매출이 높은 경향이 있습니다.',
  '검색자의 요일별 비중이 실제 매장을 이용하는 고객의 요일별 비중과 유사한지 확인해야 합니다.',
  '월별 멘트',
  '검색자의 연령별 비중이 실제 매장을 이용하는 고객의 연령별 비중과 유사한지 확인해야 합니다.'
]

export const marketIndexComment = {
  title: '마케팅 데이터',
  details: [
    '네이버 색션 배치 순서, View 검색결과, 연관검색어 등 키워드 마케팅에 필요한 정보를 제공합니다'
  ]
};

export const compareMenuList = [
  ['일 매출액', '결제단가', '결제건수', '재방문자 매출 비율'],
  ['일 매출액', '결제단가', '결제건수', '저녁 매출 비율', '재방문자 매출 비율'],
  ['일 매출액', '결제단가', '결제건수']
]

export const maxChartTab = [3, 4, 2]; //for SalesCompare.js

export const compareChartUnit = ['원', '원', '건', '%', '%'];

//chart options

export const lineOptions = (unit, showLegend = true, isWhite = false, maintainAspectRatio = true) => (
  Object.assign({
    maintainAspectRatio: maintainAspectRatio,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: showLegend
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => {
            return tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + unit
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
  }, isWhite ? 
    {
      scales: {
        x: {
          grid: {
            borderColor: 'rgba(245, 245, 247, 0.3)',
            color: 'rgba(245, 245, 247, 0.3)',
            tickColor: 'rgba(245, 245, 247, 0.3)'
          },
          ticks: {
            color: 'rgba(245, 245, 247, 0.8)'
          }
        },
        y: {
          grid: {
            borderColor: 'rgba(245, 245, 247, 0.3)',
            color: 'rgba(245, 245, 247, 0.3)',
            tickColor: 'rgba(245, 245, 247, 0.3)'
          },
          ticks: {
            color: 'rgba(245, 245, 247, 0.8)'
          }
        }
      },
      color: 'rgba(245, 245, 247, 0.8)'
    } 
    : 
    {}
  )
);

export const barOptions = unit => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        label: tooltipItem => tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + unit
      }
    }
  },
  maxBarThickness: 80,
  interaction: {
    intersect: false,
    mode: 'index'
  }
});

export const radarOptions = (unit='', isWhite = false) => (
  Object.assign({
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + unit
        }
      }
    },
    elements: {
      point:{
        pointRadius: 1,
        pointHoverRadius: 2
      },
      line: {
        borderWidth: 1.5
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      r: {
        min: 0,
        pointLabels: {
          font: {
            size: 11
          }
        },
        ticks: {
          showLabelBackdrop: false,
          stepSize: 1,
          font: {
            weight: 'bold'
          }
        },
      }
    }
  }, isWhite ? 
  {
    color: '#f5f5f7',
    scales: {
      r: {
        min: 0,
        pointLabels: {
          color: '#f5f5f7',
          font: {
            size: 12
          }
        },
        ticks: {
          showLabelBackdrop: false,
          stepSize: 1,
          color: '#f5f5f7',
          font: {
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(245, 245, 247, 0.3)'
        },
        angleLines: {
          color: 'rgba(245, 245, 247, 0.3)'
        }
      }
    }
  }
   : {})
);

//chart data

export const lineData = [
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: 'PC',
        data: [10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40],
        borderColor: '#0063b2', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
      {
        label: '모바일',
        data: [90, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
        borderColor: '#9cc3d5',
        backgroundColor: 'rgba(156, 195, 213, 0.5)',
        fill: 'origin'
      },
    ]
  },
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: '남성',
        data: [40, 20, 30, 40, 50, 20, 30, 20, 10, 30, 30, 40],
        borderColor: '#0063b2', 
        backgroundColor: '#0063b2'
      },
      {
        label: '여성',
        data: [10, 80, 70, 60, 40, 60, 70, 80, 50, 80, 70, 60],
        borderColor: '#9cc3d5',
        backgroundColor: '#9cc3d5'
      },
    ]
  },
  {
    labels: ['1월 1주차', '1월 2주차', '1월 3주차', '1월 4주차', '1월 5주차', '2월 1주차', '2월 2주차', '2월 3주차', '2월 4주차', '3월 1주차', '3월 2주차', '3월 3주차'],
    datasets: [
      {
        label: '평일',
        data: [10, 90, 30, 40, 30, 20, 30, 50, 10, 20, 30, 40],
        borderColor: '#0063b2', 
        backgroundColor: '#0063b2'
      },
      {
        label: '주말',
        data: [90, 10, 70, 60, 30, 60, 40, 80, 90, 80, 30, 60],
        borderColor: '#9cc3d5',
        backgroundColor: '#9cc3d5'
      },
    ]
  },
  {
    labels: ['2017', '2018', '2019', '2020',' 2021'],
    datasets: [
      {
        label: '1월',
        data: [1, 1, 1, 1, 1],
        borderColor: '#0063b2', 
        backgroundColor: '#0063b2'
      },
      {
        label: '2월',
        data: [2, 2, 2, 2, 2],
        borderColor: '#9cc3d5',
        backgroundColor: '#9cc3d5'
      },
      {
        label: '3월',
        data: [3, 3, 3, 3, 3]
      },
      {
        label: '4월',
        data: [4, 4, 4, 4, 4]
      }
    ]
  },
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: '10대',
        data: [10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40],
        borderColor: '#0063b2', 
        backgroundColor: '#0063b2'
      },
      {
        label: '20대',
        data: [90, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
        borderColor: '#9cc3d5',
        backgroundColor: '#9cc3d5'
      },
      {
        label: '30대',
        data: [10, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
      },
      {
        label: '40대',
        data: [20, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
      },
      {
        label: '50대 이상',
        data: [30, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
      },
    ]
  },
];

export const barData = {
  labels: ['PC', '모바일'],
  datasets: [
    {
      label: '최근 30일',
      data: [40, 60],
      backgroundColor: 'rgba(0, 99, 178, 0.5)',
      borderColor: '#0063b2'
    },
    {
      label: '최근 3개월',
      data: [50, 50],
      backgroundColor: 'rgba(156, 195, 213, 0.5)',
      borderColor: '#9cc3d5'
    }
  ]
}

export const radarData = {
  labels: ['일 검색량', '주말 검색 비율', 'MZ 검색 비율', '여성 검색 비율', '모바일 검색 비율'],
  datasets: [
    {
      label: '당산오돌 본점',
      data: [1, 4, 2, 5, 4],
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'white',
      borderWidth: 2
    },
    {
      label: '평균',
      data: [3, 2, 1, 4, 5],
      backgroundColor: 'rgba(18, 31, 17, 0.2)',
      borderColor: 'rgba(18, 31, 17)',
      borderWidth: 2
    },
  ]
}

export const salesRadarData = {
  labels: ['매출액', '주말 매출 비율', '저녁 매출 비율', '결제단가', '결제건수', '재방문 매출 비율'],
  datasets: [
    {
      label: '당산오돌 본점',
      data: [3, 2, 1, 4, 5, 1],
      backgroundColor: 'rgba(0, 99, 178, 0.5)',
      borderColor: 'rgba(0, 99, 178)',
      borderWidth: 2
    },
    {
      label: '과거 1개월',
      data: [1, 5, 2, 4, 4, 3],
      backgroundColor: 'rgba(156, 195, 213, 0.5)',
      borderColor: 'rgba(156, 195, 213)',
      borderWidth: 2
    },
    {
      label: '평균',
      data: [1, 4, 2, 5, 4, 5],
      backgroundColor: 'rgba(221, 221, 224, 0.2)',
      borderColor: '#dddde0',
      borderWidth: 2
    },
  ]
}

export const salesLineData = [
  {
    labels: ['2022.02.16', '2022.02.17', '2022.02.18', '2022.02.19', '2022.02.20', '2022.02.21', '2022.02.22'],
    datasets: [
      {
        label: '매출액',
        data: [40, 30, 40, 50, 30, 20, 40],
        borderColor: 'rgba(0, 99, 178)', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
    ]
  },
  {
    labels: ['1월 1주차', '1월 2주차', '1월 3주차', '1월 4주차', '1월 5주차', '2월 1주차', '2월 2주차', '2월 3주차', '2월 4주차', '3월 1주차', '3월 2주차', '3월 3주차'],
    datasets: [
      {
        label: '매출액',
        data: [10, 90, 30, 40, 30, 20, 30, 50, 10, 20, 30, 40],
        borderColor: 'rgba(0, 99, 178)', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
    ]
  },
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: '매출액',
        data: [10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40],
        borderColor: 'rgba(0, 99, 178)', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
    ]
  },
];

export const salesCompareTitle = [
  ['점심', '저녁'],
  ['평일', '주말'],
  ['재방문', '신규']
]

export const salesCompareData = [
  {
    labels: ['1월 2주차', '1월 3주차', '1월 4주차', '1월 5주차', '2월 1주차', '2월 2주차', '2월 3주차'],
    datasets: [
      {
        label: '점심 매출액',
        data: [40, 30, 40, 50, 30, 20, 40],
        borderColor: 'rgba(142, 202, 230)', 
        backgroundColor: 'rgba(142, 202, 230, 0.1)',
        fill: 'origin'
      },
      {
        label: '저녁 매출액',
        data: [20, 10, 60, 40, 30, 30, 80],
        borderColor: 'rgba(255, 183, 3)', 
        backgroundColor: 'rgba(255, 183, 3, 0.1)',
        fill: 'origin'
      },
    ]
  },
  {
    labels: ['1월 1주차', '1월 2주차', '1월 3주차', '1월 4주차', '1월 5주차', '2월 1주차', '2월 2주차', '2월 3주차', '2월 4주차', '3월 1주차', '3월 2주차', '3월 3주차'],
    datasets: [
      {
        label: '매출액',
        data: [10, 90, 30, 40, 30, 20, 30, 50, 10, 20, 30, 40],
        borderColor: 'rgba(0, 99, 178)', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
    ]
  },
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: '매출액',
        data: [10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40],
        borderColor: 'rgba(0, 99, 178)', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
    ]
  },
];

//map dummy objects

export const mapCorpList = [
  {
    lat: 37.36,
    lng: 127.106,
    corpName: '당산오돌 본점',
    inAreaRank: 25,
    rank: '1,541',
    category: '육류·고기요리',
    reviewNum: '153',
    ratio: 11.5,
    delta: 5,
    chart: [],
    inAreaRatio: 5.8,
    inCatRatio: 9.3,
    inAreaCatRatio: 3.2
  },
  {
    lat: 37.358,
    lng: 127.1056,
    corpName: '담양앞집 떡갈비국수전문점',
    inAreaRank: 1,
    rank: '151',
    category: '육류·고기요리',
    reviewNum: '2,154',
    ratio: 9.4,
    delta: -13,
    chart: [],
    inAreaRatio: 4.8,
    inCatRatio: 10.3,
    inAreaCatRatio: 2.2
  },
  {
    lat: 37.361,
    lng: 127.1058,
    corpName: '산내돌짜장',
    inAreaRank: 2,
    rank: '923',
    category: '한식',
    reviewNum: '1,009',
    ratio: 9.6,
    delta: 102,
    chart: [],
    inAreaRatio: 6.1,
    inCatRatio: 9.4,
    inAreaCatRatio: 1.2,
  },
]

//table columns

export const keywordCols = [
  {
    accessor: 'keyword',
    Header: '키워드'
  },
  {
    accessor: 'pcSearch',
    Header: '월간 검색량(PC)',
    sortType: sortComma
  }, 
  {
    accessor: 'mobileSearch',
    Header: '월간 검색량(Mobile)',
    sortType: sortComma
  },
  {
    accessor: 'totalSearch',
    Header: '월간 검색량(전체)',
    sortType: sortComma
  },
  {
    accessor: 'totalBlog',
    Header: '월간 블로그 발행량',
    sortType: sortComma
  },
];

export const viewCols = [
  {
    accessor: 'rank',
    Header: '순위'
  },
  {
    accessor: 'type',
    Header: '유형'
  }, 
  {
    accessor: 'author',
    Header: '작성자'
  },
  {
    accessor: 'title',
    Header: '제목'
  },
  {
    accessor: 'date',
    Header: '콘텐츠 발행일'
  },
  {
    accessor: 'visitor',
    Header: '방문자 수'
  }
];