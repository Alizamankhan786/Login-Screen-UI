import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore now</Text>
      <Text style={styles.subtitle}>Join SO today.</Text>

      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={24} color="black" />
        <Text style={styles.socialButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
        <FontAwesome name="apple" size={24} color="black" />
        <Text style={styles.socialButtonText}>Sign up with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create account</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text onPress={() => router.push({
            pathname: "/signin` | "
          })}  style={styles.signInLink}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        By signing up, you agree to the 
        <Text style={styles.linkText}> Terms of Service </Text>
        and
        <Text style={styles.linkText}> Privacy Policy</Text>, including
        <Text style={styles.linkText}> Cookie Use</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    width: '100%',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    width: '100%',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
  },
  socialButtonText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 20,
  },
  createAccountButton: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  createAccountText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    fontSize: 14,
    color: '#666',
  },
  signInLink: {
    fontSize: 14,
    color: '#4285F4',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  linkText: {
    color: '#4285F4',
  },
});
