import { useRoutes } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import CorpAddition from "@/routes/CorpAddition";
import CorpManagement from "@/routes/CorpManagement";
import Home from "@/routes/Home";
import KeywordAnalysis from "@/routes/KeywordAnalysis";
import KeywordAnalysisBlank from "@/routes/KeywordAnalysisBlank";
import Login from "@/routes/Login";
import SalesAnalysis from "@/routes/SalesAnalysis";
import Signup from "@/routes/Signup";
import KeywordAdmin from "@/routes/KeywordAdmin";
import CorpAuth from "@/routes/CorpAuth";
import SyncYeoshin from "@/routes/SyncYeoshin";
import Rank from "@/routes/Rank";
import Community from "@/routes/Community";
import ViewPlaceRank from "@/routes/ViewPlaceRank";
import CommunityBoard from "@/components/Community/Board";
import CommunityPost from "@/components/Community/Post";
import CommunityContent from "@/components/Community/Content";
import CommunityModify from "./components/Community/Modify";
import CommunityMyProfile from "./components/Community/MyProfile";
import CommunitySearch from "./components/Community/Search";

export default function App(){

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/keyword-analysis', element: <KeywordAnalysisBlank /> },
        { path: '/keyword-analysis/keyword=:keyword', element: <KeywordAnalysis /> },
        { path: '/sales-analysis', element: <SalesAnalysis /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/rank', element: <Rank /> },
        { path: '/community', element: <Community /> },
        { path: '/vp-rank', element: <ViewPlaceRank /> },
        { path: '/community', element: <Community />, children: [
          { path: '/community/board=:board', element: <CommunityBoard />},
          { path: '/community/content=:contentId', element: <CommunityContent /> },
          { path: '/community/search/criteria=:criteria&keyword=:keyword', element: <CommunitySearch /> },
      ],}]
    },
    {
      path: '/cid=:corpId',
      element: <Layout />,
      children: [
        { path: '/cid=:corpId/keyword-analysis', element: <KeywordAnalysisBlank /> },
        { path: '/cid=:corpId/keyword-analysis/keyword=:keyword', element: <KeywordAnalysis /> },
        { path: '/cid=:corpId/sales-analysis', element: <SalesAnalysis /> },
        { path: '/cid=:corpId/corp-management', element: <CorpManagement /> },
        { path: '/cid=:corpId/corp-addition', element: <CorpAddition /> },
        { path: '/cid=:corpId/keyword-admin', element: <KeywordAdmin /> },
        { path: '/cid=:corpId/corp-auth', element: <CorpAuth /> },
        { path: '/cid=:corpId/sync-ys', element: <SyncYeoshin /> },
        { path: '/cid=:corpId/rank', element: <Rank /> },
        { path: '/cid=:corpId/community', element: <Community />, children: [
          { path: '/cid=:corpId/community/board=:board', element: <CommunityBoard />},
          { path: '/cid=:corpId/community/content=:contentId', element: <CommunityContent /> },
          { path: '/cid=:corpId/community/post', element: <CommunityPost /> },
          { path: '/cid=:corpId/community/my-profile/type=:type', element: <CommunityMyProfile /> },
          { path: '/cid=:corpId/community/content-modify/contentId=:contentId', element: <CommunityModify /> },
          { path: '/cid=:corpId/community/search/criteria=:criteria&keyword=:keyword', element: <CommunitySearch /> },
        ] },
        { path: '/cid=:corpId/vp-rank', element: <ViewPlaceRank /> },
      ]
    },
    {
      path: '/',
      element: <Layout sticky />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
    {
      path: '/cid=:corpId',
      element: <Layout sticky />,
      children: [
        { index: true, element: <Home /> },
      ]
    },
  ];

  return useRoutes(routes);
}
