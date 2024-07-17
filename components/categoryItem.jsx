import { Pressable, StyleSheet, Text } from 'react-native'

export const CategoryItem = ({ name, onPress }) => (
  <Pressable style={styles.category} onPress={onPress}>
    <Text style={styles.name}>{name}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    backgroundColor: '#B2EBF2', 
    borderRadius: 8,
    height: 64,
    justifyContent: 'center',
    width: 200,
  },
  name: {
    color: '#00796B',  
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});