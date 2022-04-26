// Core
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Pages
import { HomePage } from "./frontend/pages/HomePage/HomePage";
import { MoreInfoPage } from "./frontend/pages/MoreInfoPage/MoreInfoPage";
import { SpecificInfoPage } from "./frontend/pages/SpecificInfoPage/SpecificInfoPage";
import { SignUpPage } from "./frontend/pages/SignUpPage/SignUpPage";
import { SignInPage } from "./frontend/pages/SignInPage/SignInPage";
import { MorePage } from "./frontend/pages/MorePage/MorePage";
import { SpecificMoreInfoPage } from "./frontend/pages/SpecificMoreInfoPage/SpecificMoreInfoPage";

// Components
import { Header } from "./frontend/components/Header/Header";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/more-info"} element={<MoreInfoPage />} />
          <Route path={"/specific-info"} element={<SpecificInfoPage />} />
          <Route path={"/sign-up"} element={<SignUpPage />} />
          <Route path={"/sign-in"} element={<SignInPage />} />
          <Route path={"/more"} element={<MorePage />} />
          <Route path={"/specific-more-info"} element={<SpecificMoreInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
