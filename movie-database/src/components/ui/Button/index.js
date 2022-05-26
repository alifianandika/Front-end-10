import styled, { css } from "styled-components";
import theme from "../../../utils/constants/theme";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  // PROPS VARIANT
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // PROPS FULL
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}


    //To Do for size button
    /*membuat size button dengan props yang diimport/digabungkan pada movies.js dengan ketentuan (sm,md,dan lg) 
    */
   
    //memberikan nilai props yang diimport pada theme.js
     
      font-size: ${(props) =>
      props.theme.size[props.size] || props.theme.colors["primary"]};

      padding: ${(props) =>
      props.theme.size[props.size] || props.theme.colors["secondary"]};

`;

export default Button;
