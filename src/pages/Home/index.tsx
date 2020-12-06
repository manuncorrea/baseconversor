import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Conatiner, Title } from './styles';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return(
    <>
      <Conatiner>
        <Title>BASE CONVERSOR</Title>
        <Button onPress={() => {navigation.navigate('NumericBase')}}>INICIAR</Button>
      </Conatiner>
    </>
  );
}

export default Home;