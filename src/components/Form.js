import React from "react";
import {
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledButton,
} from "./Form.styled";
const Form = () => {
  return (
    <div className='container'>
      <>
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <>
            <StyledHeader>Create an Account</StyledHeader>
          </>
          <>
            <StyledInput placeholder='Enter the name' type='text' />
          </>
          <>
            <StyledInput placeholder='Enter the email' type='text' />
          </>
          <>
            <StyledInput placeholder='Enter the password' type='password' />
          </>
          <>
            <StyledButton bg='red' type='submit'>
              Submit
            </StyledButton>
          </>
          <>
            <StyledButton type='submit'>Cancel</StyledButton>
          </>
        </StyledForm>
      </>
    </div>
  );
};

export default Form;
