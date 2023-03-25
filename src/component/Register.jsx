import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  cpassword: '',
  picture: null,
  location: '',
  occupation: ''
};

const Register = () => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setFormState({ ...formState, picture: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    // TODO: submit form data to server

    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in formState) {
      formData.append(value, formState[value]);
    }
    fetch(
        "http://localhost:3001/auth/register",
        {
          method: "POST",
          body: formData,
        }
      );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="cpassword">Confirm Password</Label>
        <Input
          type="password"
          name="cpassword"
          id="cpassword"
          value={formState.cpassword}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={formState.firstName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          value={formState.lastName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="picture">Picture</Label>
        <Input
          type="file"
          name="picture"
          id="picture"
          onChange={handlePictureChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          value={formState.location}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="occupation">Occupation</Label>
        <Input
          type="text"
          name="occupation"
          id="occupation"
          value={formState.occupation}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button color="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default Register;