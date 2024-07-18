import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useLoginMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { insertSession } from '../db'


const logo = require('../assets/myProfile/profile_placeholder.png')

export const Login = () => {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const [triggerLogin, result] = useLoginMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await triggerLogin({ email, password });
      console.log('Login Response:', response); // Imprime la respuesta de la API
  
      // Verifica si hay un error en la respuesta
      if (response.error) {
        console.error('API Error:', response.error);
        Alert.alert('Error', 'Correo o contraseña incorrectos');
        return; // Sale de la función si hay un error
      }
      
      // Si la respuesta es exitosa, maneja los datos aquí
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Correo o contraseña incorrectos');
    } finally {
      setIsLoading(false);
    }
  };

  const goToSignUp = () => navigate(ROUTE.SIGN_UP)

  useEffect(() => {
    if (result.data) {
      const { email, localId, idToken: token } = result.data
      console.log('token =>', token)

      dispatch(setUser({ email, localId, token }))
      insertSession({ email, localId, token })
    }
  }, [result.data])

  return (
    <View style={styles.login}>
      <Image
        source={logo}
        style={styles.image}
      />
      <View style={styles.section}>
        <Input
          label='Correo electronico'
          placeholder='cristina.salazar125@gmail.com'
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label='Contraseña'
          placeholder='ingrese su contraseña'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={handleLogin}>
          {isLoading ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </View>
      <View style={styles.section}>
        <Text>¿Aun no tienes cuenta?</Text>
        <Button onPress={goToSignUp}>Registrate</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  image: {
    width: 100, 
    height: 100,
    marginBottom: 32, 
  },
  section: {
    width: '100%',
    gap: 16,
  },
})