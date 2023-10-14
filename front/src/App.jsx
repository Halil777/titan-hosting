import Index from "./pages/Index";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SslPage from "./pages/ssl/SslPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="ssl" element={<SslPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
