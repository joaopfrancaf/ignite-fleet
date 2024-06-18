import CarStatus from "@/components/CarStatus"
import Header from "@/components/Header"
import { useUser } from "@realm/react"
import { Text, StyleSheet, View} from "react-native"
import tema from "@/constants/Colors"
import { router } from "expo-router"

export default function Home() {
    const user = useUser()

    function handleRegisterMovement() {
         router.navigate("/departure")
    }

    return (
        <View style={style.container}>
            <Header picture={user?.profile.pictureUrl} name={user?.profile.name} />

            <View style={style.content}>
                <CarStatus onPress={handleRegisterMovement}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: tema.COLORS.GRAY_800
    },

    content: {
        flex: 1,
        padding: 32
    }


})