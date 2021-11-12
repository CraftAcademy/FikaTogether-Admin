import React from "react";
import { Container } from "@mui/material";

const Login = () => {
  return (
    <Container>
      <Grid stackable columns="2" padded column="equal">
        <Grid.Row />
        <Grid.Row />
        <Grid.Row verticalAlign="middle">
          <Grid.Column width="8">
          </Grid.Column>
          <Grid.Column width="8">
            <Form data-cy="sign-in-form" >
              <Form.Field
                name="email"
                data-cy="email-input"
                control={Input}
                label="Email"
                placeholder="example@email.com"
              />
              <Form.Field
                name="password"
                data-cy="password-input"
                control={Input}
                label="Password"
                type="password"
              />
              <Form.Field
                data-cy="btn-login"
                control={Button}
                content="Submit"
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Login;
