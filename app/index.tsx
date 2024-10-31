import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SO</Text>
      <Text style={styles.subtitle}>Login or Sign up to access your account</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text onPress={() => router.push({
            pathname: "/signup",
          })}  style={styles.tabText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={24} color="white" />
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
        <FontAwesome name="apple" size={24} color="white" />
        <Text style={styles.socialButtonText}>Login with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with email</Text>

      <TextInput placeholderTextColor={"black"} placeholder="Email Address" style={styles.input} />
      <TextInput placeholderTextColor={"black"} placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By signing in with an account, you agree to SO's
        <Text style={styles.linkText}> Terms of Service</Text> and
        <Text style={styles.linkText}> Privacy Policy</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e3f2fd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  orText: {
    color: '#888',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#4285F4',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  linkText: {
    color: '#4285F4',
  },
});
