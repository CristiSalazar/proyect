import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

export const Welcome = () => {
    return(
    <SafeAreaView style={styles.safeArea}>
      <Image source={require('../assets/Welcome/1.png')}/>
      <View style={styles.texts}>
       <Text style={styles.title}>Harry Potter</Text>
       <Text style={styles.body}>Todo tipo de artículos</Text>
      </View>
      <Pressable>
        <Text style={styles.button}>
          Más información
        </Text>
      </Pressable>

    </SafeAreaView>     
)}

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: '#fff',
      flex:1,
      padding:16,
      alignItems: "center",
      justifyContent: "center",
      gap: 32,
    },
    texts: {
      alignItems: "center",
      gap:8
    },
    title:{
      fontSize: 60,
      fontWeight: "bold",
    },
    body:{
      fontSize: 20
    },
    button:{
      backgroundColor: "skyblue",
      borderRadius: 8,
      padding: 16
    }
});
  