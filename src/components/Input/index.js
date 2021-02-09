import React, { forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Container, TInput, TextInvalid, UserInvalid} from './styles';
import {
Text
} from 'react-native';
// import { Container, TInput } from './styles';

function Input ({style, textInvalid, userInvalid, ...rest}, ref) {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />
      {textInvalid && <TextInvalid >Campo obrigatório</TextInvalid>}
      {userInvalid && <TextInvalid >Úsuario invalido</TextInvalid>}
    </Container>
  );
};

Input.propTypes = {
  textInvalid: PropTypes.string,
  UserInvalid: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Input.defaultProps = {
  textInvalid: "",
  UserInvalid:"",
  style:{}
};

export default  forwardRef(Input);