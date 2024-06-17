import { TextInputProps, StyleSheet, View, Text, TextInput } from 'react-native';
import tema from "@/constants/Colors"

type Props = TextInputProps & {
  label: string;
}

export function LicensePlateInput({ label, ...rest }: Props) {

  return (
    <View style={style.container}>
      <Text style={style.label}>
        {label}
      </Text>

      <TextInput
        style={style.Input}
        maxLength={7}
        autoCapitalize='characters'
        placeholderTextColor={tema.COLORS.GRAY_400}
        {...rest}
      />
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        borderRadius: 6,
        backgroundColor: tema.COLORS.GRAY_700,
    },

    label: {
        color: tema.COLORS.GRAY_300,
        fontSize: tema.FONT_SIZE.SM,
        fontFamily: tema.FONT_FAMILY.REGULAR
    },

    Input: {
        color: tema.COLORS.GRAY_200,
        fontSize: tema.FONT_SIZE.XXXL,
        fontFamily: tema.FONT_FAMILY.BOLD,
        textAlign: "center",
        marginTop: 16,
    }
})