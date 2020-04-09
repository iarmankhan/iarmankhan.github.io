import React from "react";
import {FormInputContainer, FormInputField, FormTextArea} from "./FormInput.styles";

const FormInput = ({size, handleChange, label, TextArea, ...otherProps}) => {
    return (
        <FormInputContainer size={size}>
            {
                TextArea
                ?   <FormTextArea placeholder={label} onChange={handleChange} {...otherProps} />
                :   <FormInputField placeholder={label} onChange={handleChange} {...otherProps} />
            }
        </FormInputContainer>
    )
};

export default FormInput
