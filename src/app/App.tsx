import { Route, Routes } from "react-router-dom";

import { Home, NoMatch } from "@/pages";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
