import React from "react";
import styled from "styled-components";
import antStyled from "../antStyled";

import { Icon as AntIcon, Form, Input as AntInput, Card } from "antd";

const { TextArea } = AntInput;

export const Icon = antStyled(AntIcon)`
  color: rgba(0,0,0,.25);
`;

export const FormContainer = styled.div`
  width: ${props => props.large ? '550px' : '300px'};
  .ant-form-item {
    margin-bottom: 0;
    min-height: 50px;
    transition: .3s;

    textarea {
      height: 80px;
    }
  }

  .ant-form-item.ant-form-item-with-help {
    min-height: 70px
    transition: .3s;
  }

  .ant-calendar-picker {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const Note = styled.p`
  text-align: center;
  margin: 20px 0;
  font-size: 13pt;
`;

export const Box = styled.div`
  min-height: ${props => props.large ? "383px": "300px"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// -----------------------------------------------
// Custom Input component to use with Redux Field.
// The following props are required for use: 
//    name, type (text or textarea), placeholder, errorMessage (if field is required).

//    In order for the errorMessage to appear, reduxForm validation must assign a valid 
//    ant design form validateStatus string ("error", "warning", "success", "validating") 
//    to the correct key on the error object.
// -----------------------------------------------

export const Input = (props) => {

  let status = props.meta.touched ? props.meta.error : "";
  return(
    <Form.Item 
      validateStatus={status}
      help={status && props.errorMessage}
    > { props.type === "text" && 
        <AntInput {...props.input} 
          type={props.type} 
          placeholder={props.placeholder}
          prefix={props.prefix}
        />
      } { props.type === "textarea" &&
        <TextArea {...props.input} 
          type={props.type} 
          placeholder={props.placeholder} 
          autosize={{ minRows: 3 }} />
      } { props.type === "password" &&
        <AntInput {...props.input} 
          type={props.type} 
          placeholder={props.placeholder}
          prefix={props.prefix}
        />
      }
    </Form.Item>
  );
}

export const InviteCard = antStyled(Card)`
  background-color: rgba(255, 255, 255, .9);
  max-width: 300px;

  h1 {
    font-weight: bold;
  }

  button {
    width: 100%;
    margin-bottom: 10px;
  }
`;