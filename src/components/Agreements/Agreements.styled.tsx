import styled from '../../styled/styled';

export const AgreementsContainer = styled.div`
    width: 100%;
    margin: 15px 30px;
`

export const StyledAgreement = styled.div`
    margin-right: 25px;
    display: inline-flex;
    label{
        margin-left: 5px;
    }
`;

export const ErrorText = styled.div`
    margin-left: 15px;
    position: absolute;
    font: ${props => props.theme.fontFamily.exception};
    font-size: ${props => props.theme.fontSize.exception};
    color: ${props => props.theme.colors.errorMessage};
`;