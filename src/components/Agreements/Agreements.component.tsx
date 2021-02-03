import React from 'react';

import { AgreementsContainer, StyledAgreement, ErrorText } from './Agreements.styled'

import { IRestrict } from '../RegistrationForm/RegistrationForm.restrictions'

interface IAgreementsProps{
    onAgree: (elem: string, agree: boolean)=>void;
    checkBeforeAccept: boolean;
    groupName: string;
    optionList: {
        name:string;
        label: string;
    }[];
    restriction?: IRestrict;
}

const Agreements = ({checkBeforeAccept, onAgree, groupName, optionList}:IAgreementsProps) =>{

    const onRadioChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
        onAgree(e.currentTarget.value, e.currentTarget.checked);
    }
    return(
        <AgreementsContainer>
            {optionList.map((option,i)=>{
                return(
                    <StyledAgreement key={groupName+i}>
                        <input 
                            type='checkbox' 
                            onClick={onRadioChange}
                            id={i.toString()} 
                            name={groupName} 
                            value={option.name}
                        />
                        <label htmlFor={i.toString()} dangerouslySetInnerHTML={{__html: option.label}}></label>
                    </StyledAgreement>
                )
            })}
            {checkBeforeAccept? 
              <ErrorText>
                     Please, select {groupName}         
                </ErrorText>
            :undefined}
        </AgreementsContainer>
    )
}

export default Agreements;