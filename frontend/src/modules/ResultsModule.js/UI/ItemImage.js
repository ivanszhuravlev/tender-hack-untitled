import styled from "styled-components";

export const ItemImage = styled.div`
  width: 180px;
  height: 125px;
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;
