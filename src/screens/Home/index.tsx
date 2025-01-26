import { Text, View } from "react-native"
import { styles } from "./styles"

export default function Home() {
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Data do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sábado, 25 de Janeiro de 2025
      </Text>
    </View>
  )
}