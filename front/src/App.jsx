import Index from "./pages/Index";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SslPage from "./pages/ssl/SslPage";
import News from "./pages/News/News";
import HiCpu from "./pages/hiCpu/HiCpu";
import VdsStorage from "./pages/vds-storage/VdsStorage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="ssl" element={<SslPage />} />
            <Route path="news" element={<News />} />
            <Route path="hi-cpu" element={<HiCpu />} />
            <Route path="vds-storage" element={<VdsStorage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
