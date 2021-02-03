import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "emotion-theming";

import gql from 'graphql-tag';
import {graphql, useQuery, useMutation, useLazyQuery} from 'react-apollo';


import light from "./styled/styles/light";
import RegistrationForm from './components/RegistrationForm';

enum Gender{
  MALE,
  FEMALE
}

const repoQuery = gql`
      mutation signup($name: String!, $email: String!, $password: String!, $country: String!, $gender: Gender!){
        signup (input: {name: $name, email: $email, password:$password, country:$country, gender: $gender}){
          name,
          email,
          country,
          gender
        }
      }
    `;

const testQuery = gql`
      query user($email: String!){
        user (email: $email){
          name,
          email,
          country,
          gender
        }
      }
    `;

const App = () => {
  const [send,{loading: MutationLoading, error: MutationError, data: MutationData}] = useMutation(repoQuery);
  const [runTest, {loading: QueryLoading, error: QueryError, data: QueryData}] = useLazyQuery(testQuery);
  
  const sendInfo = (user: {name:string, email:string, password:string, country:string, gender:string, terms: boolean})=>{
    send({
      variables:{
        name: user.name, 
        email: user.email, 
        password: user.password, 
        country: user.country, 
        gender: user.gender==='Male'? "MALE": "FEMALE"
      }
    })
    if(MutationLoading) console.log('Loading mutation');
    if(MutationError) console.error(MutationError);
    if(MutationData) console.log(MutationData);
  }

  const test = (email: string)=>{
    runTest({variables: {email}});
    if(QueryLoading) console.log('Loading query');
    if(QueryError) console.log(QueryError);
    if(QueryData) console.log(QueryData);
  }

  return (
      <ThemeProvider theme={light}>
        <RegistrationForm onSignup={sendInfo} onTest={test}/>
      </ThemeProvider>
  );
}

export default App;
