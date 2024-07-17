import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export const Banner = () => (
  <ImageBackground
    source={require('../assets/home/banner_background-1.png')}
    resizeMode='cover'
    style={{ borderRadius: 10, overflow: 'hidden' }}
  >
    <View style={styles.banner}>
      <Text style={styles.text}>Todo en accesorios de Harry Potter</Text>
    </View>
  </ImageBackground>
)

const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
    width: '100%',
  },
  text: {
    color: 'white',
    fontFamily: 'Rubik-Regular',
    fontSize: 18,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
})