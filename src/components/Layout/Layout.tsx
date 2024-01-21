import { FC } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

type Props = {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <header className="layout">
      <Navigation />
      {children}
      <Footer />
    </header>
  );
};

export default Layout;
