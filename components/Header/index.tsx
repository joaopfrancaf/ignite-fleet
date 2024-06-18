import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import tema from "../../constants/Colors"
import {Power} from "phosphor-react-native"
import { Image } from 'expo-image';
import { useApp } from "@realm/react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

type props = {
    picture?: string,
    name?: string
}

export default function Header(user:props) {
    const app = useApp()

    function handleLogOut() {
        GoogleSignin.signOut()
        app.currentUser?.logOut()
    }

    return(
        <View style={style.container}>
            <Image style={style.picture} source={{uri: user.picture}} placeholder="L184i9ofbHof00ayjsay~qj[ayj@"/>
            <View style={style.greeting}>
                <Text style={style.Message}>Olá</Text>
                <Text style={style.name}>{user.name}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={handleLogOut}>
                <Power size={32} color={tema.COLORS.GRAY_400}/>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        padding: 32,
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: tema.COLORS.GRAY_700
    },

    greeting: {
        flex: 1,
        marginLeft: 12
    },

    Message: {
        color: tema.COLORS.GRAY_100,
        fontSize: tema.FONT_SIZE.MD,
        fontFamily: tema.FONT_FAMILY.REGULAR
    },

    name: {
        color: tema.COLORS.GRAY_100,
        fontSize: tema.FONT_SIZE.LG,
        fontFamily: tema.FONT_FAMILY.BOLD
    },

    picture: {
        width: 54,
        height: 54,
        borderRadius: 7
    }
})