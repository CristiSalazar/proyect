import { StyleSheet, Text, View} from "react-native"
import { Varita } from "../icons/icono"

export const Header = () => (
    <View style = {styles.header}>
        <Varita/>
        <Text style = {styles.text}>Harry Potter</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})