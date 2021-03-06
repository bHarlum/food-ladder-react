import React from "react";
import styled from "styled-components";
import { Icon, Row, Col } from "antd";

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.landing ? '570px' : '400px'};
  height: ${props => props.overlay ? '100vh' : 'default'};
  position: ${props => props.overlay ? 'fixed' : 'static'};
  width: ${props => props.overlay ? '100%' : 'default'};
  z-index: 3;
  background-color: ${props => props.overlay ? 'rgb(240, 242, 245)' : 'default'};
`;

export const FullPage = styled.div`
  min-height: 78vh;
`;

export const Capitalized = (props) => {
  return (
    props.text.charAt(0).toUpperCase() + props.text.slice(1)
  );
};

export const Excerpt = (props) => {
  if(props.text.length > 100){
    return (
      props.text.substr(0, 100) + "..."
    )
  } else {
    return (
      props.text
    )
  }
}

export const Section = styled.div`
  padding: 30px;
`;

export const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export const Note = styled.p`
  font-size: 18px;
`;

export const ColumnedSection = (props) => {
  return(
    <Row>
      <Col s={{ span: 24 }} md={{ span: 5 }}>
        {props.firstCol}
      </Col>
      <Col s={{ span: 24 }} md={{ span: 14 }}>
        {props.children}
      </Col>
      <Col s={{ span: 24 }} md={{ span: 5 }}>
        {props.thirdCol}
      </Col>
    </Row>
  );
}