import React from 'react';
import Button from '../../components/button';
import Form from './components/form';
export default class ReportDetail extends React.Component {
  render() {
    return (
      <h2>
        ReportDetails <Button text={'button'} />
        <Form />
      </h2>
    );
  }
}
