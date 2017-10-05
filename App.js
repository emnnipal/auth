import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component<{}> {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDJ4eXfazf_R7iTN9BOICJeZkWC-DdjKrw",
      authDomain: "auth-8dc06.firebaseapp.com",
      databaseURL: "https://auth-8dc06.firebaseio.com",
      projectId: "auth-8dc06",
      storageBucket: "auth-8dc06.appspot.com",
      messagingSenderId: "261521980800"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
