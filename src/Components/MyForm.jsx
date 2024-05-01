import React, { useState } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    company: "",
    referral: "",
    interest: "",
    howDidYouHear: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className="p-5 bg-white">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="registerInterest" className="h4">
            Register Your Interest
          </Label>
        </FormGroup>
        <Row form>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <FormFeedback>Name is required</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="interest">Interest</Label>
              <Input
                type="text"
                name="interest"
                id="interest"
                placeholder="Your Interest"
                value={formData.interest}
                onChange={handleInputChange}
                required
              />
              <FormFeedback>Interest is required</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <FormFeedback>Email is required</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
              <FormFeedback>Country is required</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label for="howDidYouHear">How did you hear about us?</Label>
              <Input
                type="text"
                name="howDidYouHear"
                id="howDidYouHear"
                placeholder="Source"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                required
              />
              <FormFeedback>Source is required</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label for="company">Company</Label>
              <Input
                type="text"
                name="company"
                id="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
              <FormFeedback>Company is required</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label for="referral">Referral</Label>
              <Input
                type="text"
                name="referral"
                id="referral"
                placeholder="Referral"
                value={formData.referral}
                onChange={handleInputChange}
                required
              />
              <FormFeedback>Referral is required</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="subject">Subject</Label>
          <Input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <FormFeedback>Subject is required</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <FormFeedback>Message is required</FormFeedback>
        </FormGroup>
        <Col
          className="d-flex flex-column align-items-center justify-content-center"
          xs={{ size: 12 }}
        >
          <FormGroup check className="mb-3">
            <Label check>
              <Input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
              />{" "}
              Subscribe to newsletter
            </Label>
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Col>
      </Form>
    </Container>
  );
};

export default MyForm;
