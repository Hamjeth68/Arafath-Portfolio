import React, { useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import styles from './ContactMe.module.css';
import Particle from "../Particle";
import useEmailJs from "../../Hooks/useEmailJs"; // Ensure this path is correct for your project structure

const ContactMe = () => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: "all",
  });
  const { sendEmail, isLoading } = useEmailJs();
  const formRef = useRef(null);

  const onSubmit = useCallback(async (data, event) => {
    event.preventDefault(); // This is technically redundant with handleSubmit
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      await sendEmail(formData);
      reset(); // Optionally reset the form fields after submission
    }
  }, [sendEmail, reset]);

  const getFirstError = () => {
    if (errors.email) return errors.email.message;
    if (errors.message) return errors.message.message;
    return null;
  };

  return (
    <Container className={styles.contactSection} id="contact" fluid>
      <Particle />
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
            <h2 className="text-center">Contact Me</h2>
            <Alert variant="danger" show={!!getFirstError()}>{getFirstError()}</Alert>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message"
                {...register("message", { required: "Message is required" })}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit" disabled={isLoading || !isValid}>
                {isLoading ? 'Sending...' : 'Submit'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
