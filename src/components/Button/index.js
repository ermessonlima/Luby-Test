import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ActivityIndicator} from 'react-native';
import { Container, Text } from './styles';
import PropTypes from 'prop-types';

export default function Button ({ children, icon, loading, ...rest}) {
  return (
    <Container { ... rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
        <Text>{children}</ Text>
        <Icon name={icon} size= {25} color ="#000" />
        </>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};