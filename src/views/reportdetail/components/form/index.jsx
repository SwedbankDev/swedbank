import React from "react";
import styled from "styled-components";
import googleMap from "../../../../images/googleMapsImage.png";
import chat from "../../../../images/chat.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 15rem;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  max-height: 300px;
`;

export default class Form extends React.Component {
  render() {
    return (
      <Container>
        <ColumnWrapper>
          <h3>Information</h3>
          <div>
            <label htmlFor="category">Category:</label>
            <div>Text</div>
          </div>
          <div>
            <label htmlFor="Details">Details:</label>
            <div>Lorem ipsum</div>
          </div>
        </ColumnWrapper>
        <div>
          <h3>Location of car</h3>
          <Img src={googleMap} alt="gm" />
        </div>
        <div>
          <h3>Ongoing chat</h3>
          <Img src={chat} alt="chat" />
        </div>
      </Container>
    );
  }
}
