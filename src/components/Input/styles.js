import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 15px;
    height: 56px;
    background: #ffffff;
    border-color: #E5E5E5;
    border-radius: 12px;
    margin-top: 40px;

    flex-direction: row;
    align-items: center;
`;

export const TInput = styled.TextInput.attrs({
    placeholderTextColor: '#535353',
})`
    flex:1;
    font-size: 20px;
    margin-left: 10px;
    color: #535353;
`;

export const TextInvalid = styled.Text`
font-size: 14px;
color:#EB2D2D;

 `;
 
export const UserInvalid = styled.Text`
font-size: 14px;
color:#EB2D2D;

 `;