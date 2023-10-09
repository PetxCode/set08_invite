import styled from "styled-components";
import video from "../../assets/vid.mp4";
import { FacebookShareButton } from "react-share";
import { useRef } from "react";
import html2canvas from "html2canvas";

const HomeScreen = () => {
  const printRef: any = useRef();

  const handleClick = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpeg";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <Container ref={printRef}>
      <Main>
        <Video src={video} loop muted autoPlay />
        <Black />
        <Comp>
          <Button onClick={handleClick}>Download</Button>
          <Button>
            <FacebookShareButton
              //   url="https://google.com"
              url="https://cdn.vanguardngr.com/wp-content/uploads/2019/04/bust.gif"
              quote="Brigding the Future"
              hashtag="#CodeLab#set08#Ajegunle"
            >
              Share
            </FacebookShareButton>
          </Button>
        </Comp>
      </Main>
    </Container>
  );
};

export default HomeScreen;

const Button = styled.div`
  padding: 10px 22px;
  background-color: white;
  color: black;

  margin: 0 20px;
  border-radius: 50px;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Comp = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Black = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
  left: 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #fff4e5;
`;
