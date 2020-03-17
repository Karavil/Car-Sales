import styled from "styled-components";

const FeatureButton = styled.button`
   position: relative;
   display: inline-block;

   box-sizing: border-box;
   border-radius: 4px;

   padding: 0.05rem 1rem;
   margin: 0 0.5rem;

   text-align: center;
   text-transform: uppercase;

   background: black;
   color: white;

   font-size: 14px;
   overflow: hidden;
   outline: none;
   cursor: pointer;
   transition: box-shadow 0.2s;

   /* Disabled */
   :disabled {
      opacity: 0.5;
      box-shadow: none;
      cursor: initial;
   }

   :disabled::before {
      opacity: 0;
   }

   :disabled::after {
      opacity: 0;
   }
`;

export default FeatureButton;
