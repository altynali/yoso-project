import { FC, PropsWithChildren } from "react";
import Container from "react-bootstrap/Container";
import Header from "./Header";

export type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-vh-100">
      <Header />
      <Container className="py-4">{children}</Container>
    </div>
  );
};
export default Layout;
