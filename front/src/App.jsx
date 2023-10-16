import Index from "./pages/Index";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SslPage from "./pages/ssl/SslPage";
import News from "./pages/News/News";
import HiCpu from "./pages/hiCpu/HiCpu";
import VdsStorage from "./pages/vds-storage/VdsStorage";
import { HelmetProvider } from "react-helmet-async";
import Chat from "./chat/Chat";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route index element={<Home />} />
              <Route path="ssl" element={<SslPage />} />
              <Route path="news" element={<News />} />
              <Route path="hi-cpu" element={<HiCpu />} />
              <Route path="vds-storage" element={<VdsStorage />} />
              <Route path="chat" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
