import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useConnection} from '@sendbird/uikit-react-native';
import {useCameraPermission} from './hooks/useCameraPermission';

const SignInScreen = () => {
  const {connect} = useConnection();
  const {showRequest,requestAccess} = useCameraPermission();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        style={{
          width: 120,
          height: 30,
          backgroundColor: '#742DDD',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => connect('USER_ID', {nickname: 'NICKNAME'})}>
        <Text>{'Sign in'}</Text>
      </Pressable>
      {showRequest && (
        <Pressable
          style={{
            width: 120,
            height: 30,
            backgroundColor: '#742DDD',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={requestAccess}>
          <Text>{'Camera Access'}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SignInScreen;
