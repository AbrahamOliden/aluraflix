import styled from "styled-components";
import Form from "../../Form";
import VideoForm from "../../Form/VideoForm";

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
    
      <VideoForm/>
      
    </StyledSection>
  );
};

export default NewVideo;