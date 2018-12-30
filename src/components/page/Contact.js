import React, { Component } from 'react'
import styled from 'styled-components'


const PageWrap = styled.div`
  width:100%;
  height:2000px;
  color:green;
  padding:150px 0;
`;

export default class Contact extends Component {
  render() {
    return (
      <PageWrap>
        <h1>Contact</h1>
      </PageWrap>
    )
  }
}
