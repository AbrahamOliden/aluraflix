import styled from "styled-components";
import VideoForm from "../../Form/VideoForm";
import Form from "../../Form";

const StyledSection = styled.section`
  min-height: fit-content;
  padding: 50px 100px;
  &>h1 {
    text-transform: uppercase;
  }
`;

function NewVideo() {
  return (
    <StyledSection>
      <h1>New Video</h1>
      <p>Fill the form to create a new video card</p>
      <VideoForm />
    </StyledSection>
  );
};

export default NewVideo;