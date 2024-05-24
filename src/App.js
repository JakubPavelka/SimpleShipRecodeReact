import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Pricing from "./pages/pricing/Pricing";
import Services from "./pages/services/Services";

import i18n from "./i18n";
import { Suspense, useState } from "react";
import LocaleContext from "./LocaleContext";

function Loading() {
  return <>Loading...</>;
}

const App = () => {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on("languageChanged", () => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value); // cs nebo en
  };

  return (
    <>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loading />}>
          <div>
            <select value={locale} onChange={handleChange} name="" id="">
              <option value="en">English</option>
              <option value="cs">Czech</option>
            </select>
          </div>
        </Suspense>
      </LocaleContext.Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/#faq" />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
