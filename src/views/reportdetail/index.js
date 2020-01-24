import React from "react";
import Form from "./components/form";
import styled from "styled-components";
import googleMap from "../../images/googleMapsImage.png";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 20% auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export default class ReportDetail extends React.Component {
  render() {
    console.log(this.props);

    return (
      <Container>
        <Header>
          <h1>
            Report{" "}
            {this.props.match.params.id && !isNaN(this.props.match.params.id)
              ? `#${this.props.match.params.id}`
              : ""}
          </h1>
        </Header>
        <Form />
      </Container>
    );
  }
}
