import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.div`
  display: grid;
  width: 50rem;
  grid-template-columns: 1fr 1fr 1fr;
  cursor: pointer;
  margin-bottom: 4rem;
`;

const ReportList = ({ title, list }) => (
  <div>
    <h2>{title}</h2>
    <List>
      {list.map(row => (
        <>
          <span>
            <Link to="/reports/1">{row.name}</Link>
          </span>
          <span>{row.category}</span>
          <span>{row.status}</span>
        </>
      ))}
    </List>
  </div>
);

export default ReportList;
