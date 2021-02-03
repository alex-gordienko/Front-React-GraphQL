import React from 'react';

import { SwitchContainer, StyledSwitch, ErrorText } from './Switch.styled'

import { IRestrict } from '../RegistrationForm/RegistrationForm.restrictions'

interface ISwitchProps{
    onChange: (elem: string)=>void;
    checkBeforeAccept: boolean;
    groupName: string;
    optionList: string[];
    restriction?: IRestrict;
}

const Switch = ({checkBeforeAccept, onChange, groupName, optionList}:ISwitchProps) =>{

    const onRadioChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
        onChange(e.currentTarget.value);
    }
    return(
        <SwitchContainer>
            {optionList.map((option,i)=>{
                return(
                    <StyledSwitch key={i}>
                        <input 
                            type='radio' 
                            onClick={onRadioChange}
                            id={i.toString()} 
                            name={groupName} 
                            value={option}
                        />
                        <label htmlFor={i.toString()}>{option}</label>
                    </StyledSwitch>
                )
            })}
            {checkBeforeAccept? 
              <ErrorText>
                     Please, select {groupName}         
                </ErrorText>
            :undefined}
        </SwitchContainer>
    )
}

export default Switch;