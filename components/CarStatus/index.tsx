import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native"
import tema from "@/constants/Colors"
import { Key, Car } from 'phosphor-react-native';

type Props = TouchableOpacityProps & {
    licensePlate?: string | null,

}

export default function CarStatus({licensePlate = null, ...rest}:Props) {
    const Icon = licensePlate ? Key : Car
    const message = licensePlate ? `Veículo ${licensePlate} em uso. ` : 'Nenhum veículo em uso. '
    const status = licensePlate ? 'chegada' : 'saída';

    return (
        <TouchableOpacity style={style.container} {...rest}>
            <View style={style.Iconbox}>
                <Icon color={tema.COLORS.BRAND_LIGHT} size={32}></Icon>
            </View>

            <Text style={style.message}>
                {message}
                <Text style={style.TextHighlight}>
                    Clique aqui para registrar a {status}
                </Text>
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        margin: 32,
        marginLeft: 0,
        marginRight: 0,
        padding: 22,
        borderRadius: 6,
        backgroundColor: tema.COLORS.GRAY_700,
        flexDirection: "row",
        alignItems: "center",
        
    },

    Iconbox: {
        width: 77,
        height: 77,
        borderRadius: 6,
        backgroundColor: tema.COLORS.GRAY_600,
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
    },

    message: {
        color: tema.COLORS.GRAY_100,
        fontSize: tema.FONT_SIZE.SM,
        fontFamily: tema.FONT_FAMILY.REGULAR,
        flex: 1,
        textAlign: "justify",
        textAlignVertical: "center",
    },

    TextHighlight: {
        color: tema.COLORS.BRAND_LIGHT,
        fontSize: tema.FONT_SIZE.SM,
        fontFamily: tema.FONT_FAMILY.BOLD    
    }
})