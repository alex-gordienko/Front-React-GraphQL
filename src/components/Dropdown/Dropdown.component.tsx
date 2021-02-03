import React from 'react';

import {StyledDropdown, Option} from './Dropdown.styled'

interface IDropDownProps{
    inputList: string[];
    selectedValue: (elem:string)=>void;
}

const Dropdown = ({inputList, selectedValue}:IDropDownProps) =>{

    return(
        <StyledDropdown>
            {
            inputList.map((element, i)=>(
                <Option 
                    key={i}
                    onClick={()=>selectedValue(element)}
                >
                    {element}
                </Option>
            ))
            }
        </StyledDropdown>
        
    )
}

export default Dropdown;