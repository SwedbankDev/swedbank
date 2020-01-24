import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../../components/layout';
import { Link } from 'react-router-dom';
import mock from './mock.json';
const axios = require('axios');

const header = [
  'Name',
  'Category',
  'Waiting time',
  'Status',
  'Assigned helper'
];
export const status = ['Pending', 'Chatting', 'Calling', 'Help on the way'];

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

const TableRow = styled.tr`
  height: 25px;
`;

const Reports = () => {
  const [reports, setReports] = useState([]);
  const ip = 'http://swedbankbackend.azurewebsites.net/getCaseList';

  useEffect(() => {
    axios
      .get(ip)
      .then(response => {
        if (!response && response.data) {
          setReports(mock);
        }
        setReports(response.data);
      })
      .catch(error => {
        console.log(error);
        setReports(mock);
      });
  }, []);

  return (
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
        {reports.map(data => {
          return (
            <TableRow>
              <Row>
                <Link to='/reports/1'>{data.name}</Link>
              </Row>
              <Row>{data.category}</Row>
              <Row>{data.waitingTime}</Row>
              <Row>{data.status}</Row>
              <Row>{data.assignedHelper}</Row>
            </TableRow>
          );
        })}
      </Table>
    </Container>
  );
};

export default Reports;
