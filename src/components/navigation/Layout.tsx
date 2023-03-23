import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../../NotFound";
import { ContentPage } from "../content/ContentPage";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/:slug" element={<ContentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
