import logo from "../../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Main>
        <Link to="/">
          <Logo src={logo} />
        </Link>

        <Button to="/register">Get Started</Button>
      </Main>
    </Container>
  );
};

export default Header;

const Button = styled(Link)`
  text-decoration: none;
  color: black;
  border-radius: 30px;
  padding: 10px 32px;
  background-color: #fff4e5;
  border: 1px solid darkorange;
  transition: all 360ms;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;

const Logo = styled.img`
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  border-radius: 300px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1;
`;
