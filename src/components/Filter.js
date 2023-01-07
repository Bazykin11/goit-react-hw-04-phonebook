import React from "react";
import styled from '@emotion/styled'
import PropTypes from 'prop-types';


const Filter = ({value, onChange}) => (
  <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange}/>
  </Label>
);

export default Filter;


Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};




/////////////////////////////// STYLE /////////////////////////

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


