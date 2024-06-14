import { ActivityIndicator, StyleSheet, View } from "react-native";
import tema from "../../constants/Colors";


export default function loading() {
    return (
        <View style={style.container}>
            <ActivityIndicator style={style.activeIndicator}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: tema.COLORS.GRAY_800
    },

    activeIndicator: {
        
    }
})