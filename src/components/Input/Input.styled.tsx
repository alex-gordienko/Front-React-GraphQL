import styled from '../../styled/styled';

export const StyledInput = styled.div<{type?:string}>`
display: flex;
align-items: center;
width: 100%;
border-radius: 8px;
background: ${props => props.theme.colors.inputBackground};



.Prepend{
  margin-left: 15px;
}
.Postpend{
  margin-right: 15px;
}
.Field{
  width: 100%;
  display: flex;
  input {
    cursor: ${props=> props.type==="dropdown"? 'context-menu': 'text'};
    font: ${props => props.theme.fontFamily.title};
    font-size: ${props => props.theme.fontSize.title};
    padding: 15px 15px;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
}

}
`