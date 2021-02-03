import styled from '../../styled/styled';

export const TextFieldContainer = styled.div`
    margin: 25px 30px;
`;

export const ErrorText = styled.div`
    margin-left: 15px;
    position: absolute;
    font: ${props => props.theme.fontFamily.exception};
    font-size: ${props => props.theme.fontSize.exception};
    color: ${props => props.theme.colors.errorMessage};
`;