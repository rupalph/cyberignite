import React, {useState} from "react";
import PageContent from "./PageContent";
import styled from "styled-components";

const FormContainer = styled.form`
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      max-width: 600px;
      margin: 50px auto;
      background-color: #f9f9f9;
    `;

    const Input = styled.input`
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    `;

    const TextArea = styled.textarea`
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
      min-height: 200px;
    `;

    const Button = styled.button`
      padding: 12px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        background-color: #0056b3;
      }
    `;
const Contact = () => {
const [subject, setSubject] = useState("");
const [feedback, setFeedback] = useState("");
const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${subject}`)
  }
    return (

            <FormContainer>
              <h2>Contact Us</h2>
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <TextArea placeholder="Your Message"></TextArea>
              <Button type="submit">Send Message</Button>
            </FormContainer>
    );
};

export default Contact;