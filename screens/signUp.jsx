import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/routes';
import { useState, useEffect } from 'react';
import { useSignUpMutation } from '../services/authService';
import { signupSchema } from '../validations/signupSchema';

export const SignUp = () => {
  const { navigate } = useNavigation();
  const [triggerSignUp, result] = useSignUpMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setErrorEmail('');
    setErrorPassword('');
    setErrorConfirmPassword('');
    
    try {
      await signupSchema.validate({
        email,
        password,
        confirmPassword,
      });

      setIsLoading(true);
      const payload = await triggerSignUp({ email, password });
      console.log('Sign Up Payload:', payload);
      
    } catch (error) {
      if (error.name === 'ValidationError') {
        switch (error.path) {
          case 'email':
            setErrorEmail(error.message);
            break;
          case 'password':
            setErrorPassword(error.message);
            break;
          case 'confirmPassword':
            setErrorConfirmPassword(error.message);
            break;
          default:
            break;
        }
      } else {
        console.error('Error en la solicitud de registro:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (result.error) {
      console.error('Error en la solicitud de registro:', result.error);
    } else if (result.data) {
      console.log('Registro exitoso:', result.data);
      // Aquí puedes navegar a otra pantalla o mostrar un mensaje de éxito.
      navigate(ROUTE.LOGIN); // Por ejemplo, redirigir a Login
    }
  }, [result]);

  const goToLogin = () => navigate(ROUTE.LOGIN);

  return (
    <View style={styles.signUp}>
      <View style={styles.section}>
        <Input
          error={errorEmail}
          label='Correo electronico'
          placeholder='cristina.salazar125@gmail.com'
          onChangeText={setEmail}
          value={email}
        />
        <Input
          error={errorPassword}
          label='Contraseña'
          placeholder='ingrese su contraseña'
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Input
          error={errorConfirmPassword}
          label='Confirmar contraseña'
          placeholder='repita la contraseña'
          secureTextEntry
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Button onPress={handleSignUp} disabled={isLoading}>
          {isLoading ? 'Registrando...' : 'Registrarse'}
        </Button>
      </View>
      <View style={styles.section}>
        <Text>¿Ya tienes una cuenta?</Text>
        <Button onPress={goToLogin}>Ingresar</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  section: {
    width: '100%',
    gap: 16,
  },
});