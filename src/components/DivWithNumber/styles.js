import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  align-items: center;
  padding: 2px 10px;
  border-radius: 5px;
  margin-right: 10px;
`;
