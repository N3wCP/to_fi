import React, {useRef} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import axios from 'axios';
import localInfo from '../../../localInfo';

const styles = StyleSheet.create({
  signInInputContainer: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    width: '90%',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: '10%',
    backgroundColor: '#0000',
    zIndex: 9,
  },
  inputBox: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    height: 55,
    width: '100%',
    padding: 5,
  },
});

export default function SignInContainer() {
  const idInputRef = useRef<TextInput>(null);
  const passInputRef = useRef<TextInput>(null);

  const onSubmitHandler = () => {
    if (idInputRef.current === null) throw new Error('ID를 입력하세요.');
    else if (passInputRef.current === null)
      throw new Error('비밀번호를 입력하세요.');
    axios
      .post(`${localInfo.hostIp}/signIn`, {
        id: idInputRef.current,
        password: passInputRef.current,
      })
      .then(result => {
        if (result.status === 201) return console.log('success');
        throw new Error('몬가.. 몬가 잘못됐다..');
      })
      .catch(e => {
        throw e;
      });
  };
  return (
    <View style={styles.signInInputContainer}>
      <Text style={{fontWeight: 'bold'}}>Sing In</Text>
      <TextInput
        ref={idInputRef}
        style={styles.inputBox}
        placeholder="ID"
        returnKeyType="send"
        onSubmitEditing={() => passInputRef.current?.focus()}
      />
      <TextInput
        ref={passInputRef}
        style={{...styles.inputBox, marginTop: '15%'}}
        placeholder="PASSWORD"
        returnKeyType="send"
        onSubmitEditing={onSubmitHandler}
        onBlur={() => {
          passInputRef.current?.clear();
          idInputRef.current?.clear();
        }}
      />
    </View>
  );
}
