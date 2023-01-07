import { nanoid } from "nanoid";
import React, {Component} from "react";
import styled from '@emotion/styled'
import PropTypes from 'prop-types';

class Phonebook extends Component {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: ''
        }

    handelInputChange = event => {
          this.setState({
            [event.currentTarget.name]: event.currentTarget.value})
        };

    
    handelSubmit = event =>{
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
        }

    reset = () => {
      this.setState({name:'', number:''});
    };

    id = nanoid();  

    render () {
        return (
          <div>
            <Form onSubmit={this.handelSubmit}>
              <Label htmlFor={this.id}>
                  Name
                <Input
                  type="text"
                  value={this.state.name}
                  onChange={this.handelInputChange}
                  name="name"
                  id = {this.id}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </Label>

              <Label htmlFor={this.id}>
                  Number
                <Input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    id = {this.id}
                    onChange={this.handelInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
              </Label>
              <button type="submit" style={{marginTop: "10px"}}>Add contact</button>
            </Form>
          </div>
          );
        };
}

export default Phonebook


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