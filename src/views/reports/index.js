import React from "react";
import styled from "styled-components";
import { Container } from "../../components/layout";
import { Link } from "react-router-dom";

// const Container = styled.div`
//   height: 100vh;
//   display: grid;
//   grid-template-rows: 20% auto;
// `;
const header = [
  "Name",
  "Category",
  "Waiting time",
  "Status",
  "Assigned helper"
];
export const status = ["Pending", "Chatting", "Calling", "Help on the way"];

const json = [
  {
    name: "Lina",
    category: "Scratch",
    waitingTime: "5",
    status: status[0],
    helper: "Tim"
  },
  {
    name: "Arne",
    category: "Crashed car",
    waitingTime: "5",
    status: status[2],
    helper: "Tim"
  }
];

const PageHeading = styled.div`
  font-size: 72px;
  text-align: center;
  padding: 4rem 0;
`;

const Row = styled.td`
  text-align: center;
  cursor: pointer;
`;

const Table = styled.table`
  padding: 0 15%;
`;

const Reports = () => (
  <Container>
    <PageHeading>All ongoing reports</PageHeading>
    <Table>
      <tr>
        {header.map(h => (
          <th>
            <h3>{h}</h3>
          </th>
        ))}
      </tr>
      {json.map(data => {
        return (
          <tr>
            <Row>
              <Link to="/reports/1">{data.name}</Link>
            </Row>
            <Row>{data.category}</Row>
            <Row>{data.waitingTime}</Row>
            <Row>{data.status}</Row>
            <Row>{data.helper}</Row>
          </tr>
        );
      })}
    </Table>
  </Container>
);

export default Reports;
