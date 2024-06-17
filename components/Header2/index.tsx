import { Text, StyleSheet, View, Touchable, TouchableOpacity } from "react-native";
import tema from "@/constants/Colors"
import { ArrowLeft } from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

type Props = {
    title: string
}

export default function Header2({title}: Props) {
    const insets = useSafeAreaInsets()
    const paddingTop = insets.top + 42

    return(
        <View style={[style.container, { paddingTop }]}>
            <TouchableOpacity activeOpacity={0.7} onPress={router.back}>
                <ArrowLeft size={24} weight="bold" color={tema.COLORS.BRAND_LIGHT}></ArrowLeft>
            </TouchableOpacity>

            <Text style={style.title}>{title}</Text>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: 0,
        paddingHorizontal: 32,
        paddingBottom: 24,
        flexDirection: "row",
        justifyContent: "space-between",

        backgroundColor: tema.COLORS.GRAY_700,
        zIndex: 1,
    },

    title: {
        color: tema.COLORS.GRAY_100,
        fontSize: tema.FONT_SIZE.XL,
        fontFamily: tema.FONT_FAMILY.BOLD
    }
})