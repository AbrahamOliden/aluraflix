import styled from "styled-components";
import VideoForm from "../Form/VideoForm";

function NewVideo() {
  return (
    <section>
        <h1>New Video</h1>
        <p>Fill the form to create a new video card</p>
        <VideoForm />
    </section>
  );
};

export default NewVideo;