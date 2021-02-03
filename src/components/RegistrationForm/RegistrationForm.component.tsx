import React, { useState, useEffect } from 'react';

import { FormContainer, Label, SingUpButton, HiddenSwitch } from './RegistrationForm.styled'

import TextField from '../TextField';
import Switch from '../Switch';
import Agreements from '../Agreements';

interface IRegFormProps{
    onSignup: (user: {name:string, email:string, password:string, country:string, gender:string, terms: boolean})=> void;
    onTest: (email: string)=> void;
}

const RegForm = ({onSignup, onTest}:IRegFormProps) =>{

    const [userInfo, setUserInfo] = useState({name:'', email:'', password:'', country:'', gender:'', terms: false})
    const [isAccept, setIsAccept] = useState(false);
    const [testedEmail, setTestedEmail] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(()=>{
        if(userInfo.name!==''&&
            userInfo.email!==''&&
            userInfo.password!==''&&
            userInfo.country!==''&&
            userInfo.gender!==''&&
            userInfo.terms!==false) setIsAccept(true);
        else setIsAccept(false)
    },[userInfo])
    return(
        <div>
            <FormContainer>
                <Label>
                    Create a new account
                </Label>
                <TextField 
                    checkBeforeAccept={userInfo.name===''? true: false}
                    type="text" 
                    placeholder='Enter your name'
                    restriction={{restrict_type:'symbols', available_symbols:/^[a-zA-Z]+$/}}
                    returnedValue={(e)=>setUserInfo({...userInfo, name:e})}                
                    />
                <TextField 
                    checkBeforeAccept={userInfo.email===''? true: false}
                    type="email" 
                    placeholder='Email'
                    restriction={{restrict_type:"like pattern", pattern:/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/}}
                    returnedValue={(e)=>setUserInfo({...userInfo, email:e})}
                    />
                <TextField 
                    checkBeforeAccept={userInfo.password===''? true: false}
                    type='password' 
                    placeholder='Password'
                    restriction={{restrict_type:'lenght', lenght: 6}}
                    returnedValue={(e)=>setUserInfo({...userInfo, password:e})}
                    />
                <TextField 
                    checkBeforeAccept={userInfo.country===''? true: false}
                    type='dropdown' 
                    placeholder='Select Country'
                    restriction={{restrict_type:'not null'}}
                    returnedValue={(e)=>setUserInfo({...userInfo, country:e})}
                    />
                <Switch
                    checkBeforeAccept={userInfo.gender===''? true: false}
                    groupName='gender'
                    onChange={(e)=>setUserInfo({...userInfo, gender:e})}
                    optionList={['Male', 'Female']}
                />
                <Agreements
                    checkBeforeAccept={!userInfo.terms}
                    groupName='terms'
                    onAgree={(option, state)=>setUserInfo({...userInfo, terms:state})}
                    optionList={[{name:'terms', label:'Accept <a href="#">terms</a> and <a href="#">conditions</a>'}]}
                />
                <SingUpButton
                    disabled={isAccept? false: true}
                    onClick={()=>onSignup(userInfo)}
                >
                    Sign up
                </SingUpButton>
            </FormContainer>

            <FormContainer>
            <Label onClick={()=> setIsVisible((prevState)=>!prevState)}>Check Results</Label>
            <div hidden={isVisible}>
                <TextField 
                    checkBeforeAccept={false}
                    type='text' 
                    placeholder='Input Email'
                    returnedValue={(e)=>{setTestedEmail(e)}}
                    />
                <SingUpButton
                    onClick={()=>onTest(testedEmail)}
                >
                    Test!
                </SingUpButton>
            </div>
        </FormContainer>
    </div>
    )
}

export default RegForm;