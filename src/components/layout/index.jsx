import React from "react";
import styled from "styled-components";

const ContainerComponent = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 20% auto;
`;

export const Container = props => (
  <ContainerComponent>{props.children}</ContainerComponent>
);
