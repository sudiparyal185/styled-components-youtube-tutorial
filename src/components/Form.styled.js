import styled from "styled-components";

const StyledForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: coral;
`;

const StyledHeader = styled.h2`
  width: 95%;
  height: 32px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 95%;
  height: 32px;
  margin: 8px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 95%;
  height: 32px;
  margin: 8px;
  border-radius: 8px;
  color: white;
  background-color: ${({ bg, theme }) => bg || theme.color.button};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export { StyledForm, StyledHeader, StyledInput, StyledButton };
