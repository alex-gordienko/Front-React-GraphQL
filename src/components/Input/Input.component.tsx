import React from 'react';

import {StyledInput} from './Input.styled';

interface IInputProps{
    onChange: (elem: string)=>void;
    prependComponent?: React.ReactNode; 
    postpendComponent?: React.ReactNode; 
    type?: string;
    readonly?: boolean;
    placeholder?: string;
}

const Input = ({onChange, prependComponent, postpendComponent, type, readonly, placeholder}:IInputProps) =>{

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        onChange(e.currentTarget.value);
    }
    return(
        <StyledInput type={type}>
            {prependComponent? 
                <div className="Prepend">
                    {prependComponent}
                </div>
            :null
            }
            <div className="Field">
                <input
                    onChange={onInputChange}
                    readOnly={readonly}
                    type={type}
                    placeholder={placeholder}
                />
            </div>
            {postpendComponent? 
                <div className="Postpend">
                    {postpendComponent}
                </div>
            :null
            }
        </StyledInput>
    )
}

export default Input;