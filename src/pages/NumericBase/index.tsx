import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';



const NumericBase = () => {
  return(
    <Container>
      <Input />
      <Input/> 
      <Button>Converter</Button>
    </Container>
  );
}

export default NumericBase;