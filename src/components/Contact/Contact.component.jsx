import React from "react";
import FormInput from "../FormInput/FormInput.component";
import {ContactContainer, ContactFormButton, FieldWrapper} from "./Contact.styles";

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {name, email, subject, message} = this.state;
        console.log({name, email, subject, message})
    };

    render() {
        const {name, email, subject, message} = this.state;
        return (
            <ContactContainer>
                <form onSubmit={this.handleSubmit}>
                    <FieldWrapper>
                        <FormInput
                            label='Your Name'
                            name='name'
                            value={name}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            label='Your e-mail'
                            name='email'
                            type='email'
                            value={email}
                            handleChange={this.handleChange}
                            required
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FormInput
                            label='Subject'
                            name='subject'
                            value={subject}
                            handleChange={this.handleChange}
                            required
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FormInput
                            TextArea={true}
                            rows={5}
                            label='Message'
                            name='message'
                            value={message}
                            handleChange={this.handleChange}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <ContactFormButton>Send a Message</ContactFormButton>
                    </FieldWrapper>
                </form>
            </ContactContainer>
        );
    }
}

export default Contact
