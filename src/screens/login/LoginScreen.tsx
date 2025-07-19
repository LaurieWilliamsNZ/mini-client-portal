import { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckboxInput from '@/src/components/checkbox';
import PasswordInput from '@/src/components/passwordInputField';
import TextInputField from '@/src/components/textInputField';
import LoginFooter from './components/LoginFooter';
import LoginHeader from './components/LoginHeader';
import LoginSecureConnection from './components/SecureConnection';
import PrimaryButton from '@/src/components/button/primaryButton';
import { theme } from '@/src/theme';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onSubmit = () => {
    // TODO: login logic + navigation
  };

  const onForgotPassword = () => {
    // TODO: handle forgot password
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <LoginHeader />
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.label}>Email Address</Text>
            <TextInputField
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              leftIcon="email"
              mode="outlined"
            />
            <View style={styles.labelRow}>
              <Text style={styles.label}>Password</Text>
              <TouchableOpacity
                onPress={onForgotPassword}
                style={styles.forgotPasswordBtn}
              >
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <PasswordInput value={password} onChangeText={setPassword} />
            <View style={styles.spacer24} />
            <CheckboxInput value={remember} onValueChange={setRemember} />
            <View style={styles.spacer24} />
            <PrimaryButton onPress={onSubmit}>Sign In</PrimaryButton>
          </View>
        </View>
        <LoginFooter />
        <LoginSecureConnection />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: theme.colors.background,
  },
  cardContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: 32,
    marginTop: theme.spacing(3.5), // 28px
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 77,
    // More prominent shadow for iOS and Android
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 16,
  },
  spacer24: {
    height: theme.spacing(1.5), // 24px
  },
  label: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: theme.fonts.medium.fontWeight,
    fontSize: theme.fontSize.sm,
    color: theme.colors.label,
    marginBottom: 5.2,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
  forgotPassword: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: theme.fonts.medium.fontWeight,
    fontSize: theme.fontSize.sm,
    marginBottom: 4.5,
  },
  forgotPasswordBtn: {
    padding: 4,
  },
  heading: {
    fontFamily: theme.fonts.bold.fontFamily,
    fontWeight: theme.fonts.bold.fontWeight,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
    marginBottom: 28.34,
  },
});

export default LoginScreen;
