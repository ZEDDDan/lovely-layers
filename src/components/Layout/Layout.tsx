import { FC } from "react";
import Navigation from "../Navigation/Navigation";

type Props = {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <header className="layout">
      <Navigation />
      {children}
    </header>
  );
};

export default Layout;
