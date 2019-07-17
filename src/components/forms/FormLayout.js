import React from "react";
import styled from "styled-components";
import antStyled from "./../antStyled";

import { Icon as AntIcon, Form, Input as AntInput } from "antd";

const { TextArea } = AntInput;

export const Icon = antStyled(AntIcon)`
  color: rgba(0,0,0,.25);
`;

export const FormContainer = styled.div`
  width: 300px;
`;

// -----------------------------------------------
// Custom Input component to use with Redux Field.
// The following props are required for use: 
//    name, type (text or textarea), placeholder, errorMessage (if field is required)
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
          value={props.defaultValue}/>
      } { props.type === "textarea" &&
        <TextArea {...props.input} 
          type={props.type} 
          placeholder={props.placeholder} 
          autosize={{ minRows: 3 }} />
      } { props.type === "password" &&
        <AntInput {...props.input} type={props.type} placeholder={props.placeholder}/>
      }
    </Form.Item>
  );
}