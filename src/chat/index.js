import React from "react";
import { HomePage } from "./home";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Page2 } from "./page2";
import { Page3 } from "./page3";
import { SupportPage } from "./support";
import { FaqPage } from "./FAQ";
import { PoliticPage } from "./politic";
import { ChatPage } from "./chatPage1";
import { ChatPage2 } from "./chatPage2";
import { ChatPage3 } from "./chatPage3";
import { ChatPage4 } from "./chatPage4";
import { ChatPage5 } from "./chatPage5";
import { ChatPage6 } from "./chatPage6";
import { ChatPage7 } from "./chatPage7";
import { ChatPage8 } from "./chatPage8";
import { ChatPage9 } from "./chatPage9";
import { ChatPage10 } from "./chatPage10";
const OnlineChatPage = () => {
    return(
        <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/politic" element={<PoliticPage />} />
          <Route path="/chat/1" element={<ChatPage />} />
          <Route path="/chat/2" element={<ChatPage2 />} />
          <Route path="/chat/3" element={<ChatPage3 />} />
          <Route path="/chat/4" element={<ChatPage4 />} />
          <Route path="/chat/5" element={<ChatPage5 />} />
          <Route path="/chat/6" element={<ChatPage6 />} />
          <Route path="/chat/7" element={<ChatPage7 />} />
          <Route path="/chat/8" element={<ChatPage8 />} />
          <Route path="/chat/9" element={<ChatPage9 />} />
          <Route path="/chat/10" element={<ChatPage10 />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

      </Router>
    )
}

export default OnlineChatPage