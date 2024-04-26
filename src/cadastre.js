import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Cadastro = () => {

  const handleCadastro = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cadastro-form">
      <h2>Cadastre-se</h2>
     
      <Form onSubmit={handleCadastro}>
       
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirme a Senha</Form.Label>
          <Form.Control type="password" placeholder="Confirme a senha" />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default Cadastro;
