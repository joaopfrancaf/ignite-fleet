import { TextInputProps, StyleSheet, View, Text, TextInput } from 'react-native';
import tema from "@/constants/Colors"

type Props = TextInputProps & {
  label: string;
}

export function TextAreaInput({ label, ...rest }: Props) {

  return (
    <View style={style.container}>
      <Text style={style.label}>
        {label}
      </Text>

      <TextInput
        style={style.input}
        placeholderTextColor={tema.COLORS.GRAY_400}
        multiline
        autoCapitalize='sentences'
        {...rest}
      />
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        padding: 16,
        borderRadius: 6,
        backgroundColor: tema.COLORS.GRAY_700,
    },

    label: {
        fontSize: tema.FONT_SIZE.SM,
        color: tema.COLORS.GRAY_300,
        fontFamily: tema.FONT_FAMILY.REGULAR
    },

    input: {
        fontSize: tema.FONT_SIZE.MD,
        color: tema.COLORS.GRAY_200,
        fontFamily: tema.FONT_FAMILY.REGULAR,
        verticalAlign: "top",
        marginTop: 16,
    }


})