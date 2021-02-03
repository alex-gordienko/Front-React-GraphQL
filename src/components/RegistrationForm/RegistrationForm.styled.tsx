import styled from '../../styled/styled';

export const FormContainer = styled.div`
    width: 400px;
    max-height: 605px;
    background: ${(props:any)=>props.theme.colors.primaryBackground};
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 8px;
    margin: 10px auto;
`;

export const Label = styled.div`
    width: 100%;
    margin: 25px auto;
    display: inline-block;
    font: ${props => props.theme.fontFamily.bigTitle};
    font-size: ${props => props.theme.fontSize.bigTitle};
    font-weight: bolder;
    text-align: center;
`;

export const SingUpButton = styled.button`
    margin: 40px 28px 40px 28px;
    width: 345px;
    height: 60px;
    border-radius: 30px;
    border: none;
    font: ${props => props.theme.fontFamily.title};
    font-size: ${props => props.theme.fontSize.button};
    background: ${props=> props.theme.colors.button};
    color: ${(props:any)=>props.theme.colors.primaryBackground};
    &:disabled{
        background: ${props=> props.theme.colors.disabledButton};
    }
`;

export const HiddenSwitch = styled.input`
    display:none;
`