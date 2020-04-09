import styled, {css} from "styled-components";

const inputStyles = css`
    background-color: transparent;
    padding: 10px;
    border: 1px solid #fff;
    color: #fff;
    outline: none;
    max-width: 100%;
    width: 100%;
`;

export const FormInputContainer = styled.div`
    margin: 10px;
    width: 100%;
`;

export const FormInputField = styled.input`
    ${inputStyles};
`;

export const FormTextArea = styled.textarea`
    ${inputStyles};
    resize: vertical;
`;
