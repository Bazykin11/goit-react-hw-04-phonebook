import { nanoid } from "nanoid";
import styled from '@emotion/styled'
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Phonebook ({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelInputChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handelInputChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const idName = nanoid();
  const idNumber = nanoid();

  return (
    <div>
      <Form onSubmit={handelSubmit}>
        <Label htmlFor={idName}>
          Name
          <Input
            type="text"
            value={name}
            onChange={handelInputChangeName}
            name="name"
            id={idName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={idNumber}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            id={idNumber}
            onChange={handelInputChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <button type="submit" style={{ marginTop: '10px' }}>
          Add contact
        </button>
      </Form>
    </div>
  );
};


Phonebook.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}



/////////////////////////////// STYLE /////////////////////////

const Form = styled.form`
  border: 1px solid;
  width: 300px;
  padding: 20px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem; 
`

const Input = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`