import styled from '@emotion/styled';

export const ControlsBox = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: left;
  list-style: none;
`;

export const BtnFeedback = styled.button`
  width: 70px;
  height: 30px;
  font-weight: 700;
  font-family: inherit
  
  background-color: white;
  color: black;
  transition-property: background-color color border;
  transition: 200ms;
  :active {
   
    color: white;
    background-color: grey;
  }
`;
