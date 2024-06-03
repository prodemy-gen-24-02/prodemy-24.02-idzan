import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-16"></div>
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
