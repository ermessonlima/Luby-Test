import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS == 'ios',
    behavior: 'padding',
})`
    flex:1;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
`;

export const Logo = styled.Image`
width :98.12px;
height: 96.78px;
`;

export const Form = styled.View`
    align-self: stretch;
  
`;