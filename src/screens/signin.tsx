import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { setCustomUserId } from "react-native-clarity";
import { RootStackParamList } from "../utils/root-stack-param-list";

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

const SignInScreen: React.FC<{navigation: SignInScreenNavigationProp}> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsSubmitDisabled(!text || !password);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setIsSubmitDisabled(!email || text.length < 8);
  };

  const handleSubmit = () => {
    // Handle sign in logic here
    navigation.navigate('Welcome');
    setCustomUserId(email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Button
        title="Sign In"
        onPress={handleSubmit}
        disabled={isSubmitDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
});

export default SignInScreen;