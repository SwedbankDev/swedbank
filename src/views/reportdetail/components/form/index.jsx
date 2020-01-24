import React from 'react';
import styled from 'styled-components';
import googleMap from '../../../../images/googleMapsImage.png';
import chat from '../../../../images/chat.png';

const Container = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
`;

const ColumnWrapper = styled.div.attrs(props => ({
  marginleft: props.marginLeft || 0
}))`
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.marginleft};
`;

const Img = styled.img`
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 1rem;
`;

export default class Form extends React.Component {
  render() {
    return (
      <Container>
        <ColumnWrapper marginLeft={'10%'}>
          <label htmlFor='category'>Category:</label>
          <div>Text</div>
          <label htmlFor='Details'>Details:</label>
          <div>Lorem ipsum</div>
        </ColumnWrapper>
        <ColumnWrapper>
          <Img src={googleMap} alt='gm'></Img>
          <Img src={chat} alt='chat'></Img>
        </ColumnWrapper>
      </Container>
    );
  }
}
