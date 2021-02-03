import styled from '../../styled/styled';

export const StyledDropdown = styled.div`
    margin-top: 5px;
    max-height: 200px;
    box-shadow: 0 5px 5px rgba(0,0,0, 0.3);
    width: inherit;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    z-index: 50;
    background: ${(props:any)=>props.theme.colors.primaryBackground};
    border-radius: 0 0 10px 10px;

    ::-webkit-scrollbar{
        width:0px;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
`;

export const Option = styled.div`
    padding: 10px 0px 10px 15px;
    z-index: 50;
    cursor: pointer;
    &:hover{
        background: ${props=> props.theme.colors.inputBackground}
    }
`;