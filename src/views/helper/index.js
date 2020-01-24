import React from "react";
import styled from "styled-components";
import { Container } from "../../components/layout";
import ReportList from "./components/reportList";
import { status } from "../reports";

const PageHeading = styled.div`
  font-size: 72px;
  text-align: center;
  padding: 4rem 0;
`;

const Overview = styled.div`
  padding: 8rem;
  margin 0 auto;
`;

//Get from API
const ctaList = [
  { name: "Lina", category: "Scratched car", status: status[0] }
];

const pendingList = [
  { name: "Kalle", category: "Cracked front window", status: status[1] }
];

const Helper = () => (
  <Container>
    <PageHeading>My reports</PageHeading>
    <Overview>
      <ReportList title="Not yet handled" list={ctaList} />
      <ReportList title="Waiting for client to act" list={pendingList} />
    </Overview>
  </Container>
);

export default Helper;
