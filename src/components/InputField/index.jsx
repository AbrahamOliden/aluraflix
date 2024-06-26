import styled from "styled-components";

const FlexContainer = styled.div`
    width: ${props => props.$width ? `${props.$width}` : "350px"};
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
    &>textarea {
        width: 50%;
        min-width: 350px;
    }
`;

const StyledLabel = styled.label`
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 24px;
`;

const StyledInput = styled.input`
    background-color: var(--dark-gray);
    padding: 16px;
`;

function Input({inputsArray}) {

    return (
        {
            ...inputsArray.map(input => {
                return (
                    <FlexContainer key={input.id} role="none" >
                        <StyledLabel htmlFor={input.title}> {input.title} </StyledLabel>
                        <StyledInput type={input.type} name={input.title} ></StyledInput>
                    </FlexContainer>
                )
            })
        }
    );
};

export default Input;