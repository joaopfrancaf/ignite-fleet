import {Text, ActivityIndicator, StyleSheet, TouchableHighlightProps, TouchableOpacity } from "react-native";
import tema from "../../constants/Colors"

type Props = TouchableHighlightProps & {
    title: string,
    isLoading?: boolean
}

export default function Button({title, isLoading = false, ...rest}: Props) {
    return (
    <TouchableOpacity style={style.container} activeOpacity={0.7} disabled={isLoading} {...rest}>
        {isLoading ? <ActivityIndicator/> : <Text style={style.title}>{title}</Text>}
    </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 56,
        maxHeight: 56,
        borderRadius: 6,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: tema.COLORS.BRAND_MID
    },

    title: {
        color: tema.COLORS.WHITE,
        fontSize: tema.FONT_SIZE.MD,
        fontFamily: tema.FONT_FAMILY.BOLD,
        textAlign: "center"
    }
})