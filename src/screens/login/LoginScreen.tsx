import { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import CheckboxInput from '@/src/components/checkbox';
import PasswordInput from '@/src/components/passwordInputField';
import TextInputField from '@/src/components/textInputField';
import LoginFooter from './components/LoginFooter';
import LoginHeader from './components/LoginHeader';
import LoginSecureConnection from './components/SecureConnection';
import PrimaryButton from '@/src/components/button/primaryButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onSubmit = () => {
    // TODO: login logic + navigation
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginHeader />
      <View style={styles.form}>
        <TextInputField
          label="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <PasswordInput value={password} onChangeText={setPassword} />
        <CheckboxInput value={remember} onValueChange={setRemember} />
        <PrimaryButton onPress={onSubmit}>Sign In</PrimaryButton>
      </View>
      <LoginFooter />
      <LoginSecureConnection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 32, backgroundColor: '#F9FAFB' },
  form: { marginTop: 24 },
});

export default LoginScreen;