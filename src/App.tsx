import { HashRouter, Routes, Route } from "react-router-dom";
import Music from "./pages/Music";
import Statistics from "./pages/Statistics";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Music />} />
          <Route path="music" element={<Music />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
