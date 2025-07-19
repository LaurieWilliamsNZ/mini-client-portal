import { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import CheckboxInput from '@/src/components/checkbox';
import PasswordInput from '@/src/components/passwordInputField';
import TextInputField from '@/src/components/textInputField';
import LoginFooter from './components/LoginFooter';
import LoginHeader from './components/LoginHeader';
import LoginSecureConnection from './components/SecureConnection';
import PrimaryButton from '@/src/components/button/primaryButton';
import { theme } from '@/src/theme';
import { loginSchema, LoginFormData } from '@/src/validation/authValidation';
import { useAuthStore } from '@/src/store/authStore';

const LoginScreen = () => {
  const { login, isLoading, error, clearError } = useAuthStore();

  // Clear error when component mounts
  useEffect(() => {
    clearError();
  }, [clearError]);

  // Show error alert when there's an error
  useEffect(() => {
    if (error) {
      Alert.alert('Login Error', error);
    }
  }, [error]);

  const handleSubmit = async (
    values: LoginFormData,
    { setSubmitting }: FormikHelpers<LoginFormData>
  ) => {
    try {
      await login(values.email, values.password);
      // Navigation will be handled by the auth store state changes
    } catch (err) {
      // Error is handled by the store
    } finally {
      setSubmitting(false);
    }
  };

  const onForgotPassword = () => {
    // TODO: handle forgot password
    Alert.alert('Forgot Password', 'Forgot password functionality coming soon');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <LoginHeader />
        <View style={styles.cardContainer}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              remember: false,
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              isValid,
            }) => (
              <View>
                <Text style={styles.heading}>Welcome Back</Text>
                
                <Text style={styles.label}>Email Address</Text>
                <TextInputField
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="you@example.com"
                  leftIcon="email"
                  autoCapitalize="none"
                  error={touched.email && errors.email ? errors.email : undefined}
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
                
                <PasswordInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password ? errors.password : undefined}
                />
                
                <View style={styles.spacer24} />
                
                <CheckboxInput
                  value={values.remember}
                  onValueChange={(value) => setFieldValue('remember', value)}
                />
                
                <View style={styles.spacer24} />
                
                <PrimaryButton
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                  loading={isSubmitting || isLoading}
                >
                  Sign In
                </PrimaryButton>
              </View>
            )}
          </Formik>
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
