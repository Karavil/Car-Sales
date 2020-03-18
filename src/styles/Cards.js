import styled from "styled-components";

export const Card = styled.div`
   width: ${props => props.width || "100%"};

   overflow: hidden;

   background-color: #fff;
   border-radius: 2px;
   box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.25), 1px 1px 3px rgba(0, 0, 0, 0.1);

   padding: 10px;
`;
