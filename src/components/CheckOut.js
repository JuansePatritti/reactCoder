import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewForm=
function newForm({endBuy}) {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="email" placeholder="Nombre" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="email" placeholder="Direccion" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={endBuy} variant="primary">
        Submit
      </Button>
    </Form>
  );
}

export default NewForm