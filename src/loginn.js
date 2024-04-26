import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-form">
      <h2>Entre com sua conta</h2>
     
      <Form onSubmit={handleLogin}>
       
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Entrar
        </Button>

        <hr />

        <Button variant="danger" block>
          Logar com Google
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;