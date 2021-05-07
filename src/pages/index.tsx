import Header from "next/head";
import styled from "styled-components";

const Home = () => (
  <Container>
    <Header>
      <title>Home</title>
    </Header>
    <Image src="volve.png" alt="Volve Agencia" />
  </Container>
);

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const Image = styled.img`
  margin: 0 auto;
`;

export default Home;
