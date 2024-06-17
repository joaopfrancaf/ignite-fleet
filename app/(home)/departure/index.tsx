import { Text, StyleSheet, View } from "react-native";
import tema from "@/constants/Colors"
import Header2 from "@/components/Header2";
import { LicensePlateInput } from "@/components/LicensePlateInput";
import { TextAreaInput } from "@/components/TextAreaInput";
import Button from "@/components/Button";

export default function Departure() {

    return (
        <View style={style.container}> 
            <Header2 title="Saida"/>

            <View style={style.containt}>
                <LicensePlateInput label="Placa do Veiculo" placeholder="BRA1234"/>

                <TextAreaInput label="Finalidade" placeholder="Vou utilizar para..."/>

                <Button title="Registrar Saida"/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: tema.COLORS.GRAY_800
    },

    containt: {
        flex: 1,
        gap: 16,
        padding: 32,
        marginTop: 16
    }
})