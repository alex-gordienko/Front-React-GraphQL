import React, { useState, useEffect, useRef } from 'react';
import Input from '../Input';
import Dropdown from '../Dropdown';

import { ReactComponent as EmailLogo } from '../../materials/Group 845.svg';
import { ReactComponent as PassLogo } from '../../materials/Group 846.svg';
import { ReactComponent as Arrow } from '../../materials/more.svg';
import countries from '../../materials/countries.json';

import {TextFieldContainer, ErrorText} from './TextField.styled';

import {IRestrict} from '../RegistrationForm/RegistrationForm.restrictions';

interface ITextFieldProps{
    type: 'text'|'email'|'password'|'dropdown';
    placeholder?: string;
    restriction?: IRestrict;
    checkBeforeAccept: boolean;
    returnedValue: (elem: string)=> void;
}

const TextField = ({type, placeholder, checkBeforeAccept, restriction, returnedValue}: ITextFieldProps) =>{

    const errList=[
      'Please enter a valid name',
      'Please enter a valid email adress',
      restriction&& restriction.restrict_type==='lenght'? `Must contain at least ${restriction.lenght} symbols`: 'Too short',
      'You must select it'
    ];
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [displayErr, setDisplayErr] = useState(false);

    const onFocus = ()=>{
        setVisible(!visible);
    }

    let style = {'transform': visible? 'rotate(0deg)': 'rotate(90deg)'};

    const onChange=(value: string)=>{
      if(value.length>0){
        if(restriction && restriction.restrict_type==='symbols'){
          if(restriction.available_symbols.test(value)) {
            returnedValue(value);
            setDisplayErr(false);
          }
          else {
            setDisplayErr(true); 
            returnedValue('')
          };

        }
        else if(restriction && restriction.restrict_type==='like pattern'){
          if(restriction.pattern.test(value)) {
            returnedValue(value);
            setDisplayErr(false);
          }
          else {
            setDisplayErr(true); 
            returnedValue('')
          };
        }
        else if(restriction && restriction.restrict_type==='lenght'){
          if(value.length>=restriction.lenght) {
            returnedValue(value);
            setDisplayErr(false);
          }
          else {
            setDisplayErr(true); 
            returnedValue('')
          };
        }
        else if(restriction && restriction.restrict_type==='not null'){
          if(value!=='') {
            returnedValue(value);
            setDisplayErr(false);
          }
          else {
            setDisplayErr(true); 
            returnedValue('')
          };
        }
        else if(!restriction){
          returnedValue(value);
        }
      }
      else{
        returnedValue('');
        setDisplayErr(false);
      }
    }

    useEffect(() => {
        if (visible) {
          const handleBodyClick = (e: MouseEvent) => {
            if (
              wrapperRef.current &&
              !wrapperRef.current.contains(e.target as HTMLElement)
            ) {
              setVisible(!visible);
            }
          };
          document.body.addEventListener("click", handleBodyClick);
          return () => {
            document.body.removeEventListener("click", handleBodyClick);
          };
        }
      }, [visible]);

    return(
        <TextFieldContainer 
            ref={wrapperRef}
            onClick={onFocus}
        >
            <Input
                onChange={onChange}
                prependComponent={type==="email"? <EmailLogo/>: type==="password"?<PassLogo/>: undefined}
                postpendComponent={type==='dropdown'? <Arrow onClick={onFocus} style={style}/>: undefined}
                type={type}
                readonly={type==='dropdown'? true: undefined}
                placeholder={placeholder}
            />
            {type==='dropdown'&&visible? 
                <Dropdown
                    inputList={Array.from(countries, elem=> elem.name)}
                    selectedValue={(e)=>{onChange(e); setVisible(false);}}
                /> 
                :undefined
            }
            {displayErr||checkBeforeAccept? 
              <ErrorText>
                {type==='text'? errList[0]: 
                 type==='email'? errList[1]:
                 type==='password'? errList[2]:
                 type==='dropdown'? errList[3]:
                 null
                 }</ErrorText>
            :undefined}
        </TextFieldContainer>
        
    )
}

export default TextField;