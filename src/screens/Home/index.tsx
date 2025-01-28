import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = ['João Medeiros', 'Bruna Chagas', 'Douglas Queiroz', 'Gabriel Medeiros', 'Guilherme Gallina', 'Gustavo Medeiros', 'Graça Medeiros', 'Leonardo Almeida', 'Mariana Campos', 'Danilo Campos', 'Luiza Satie', 'Leticia Chagas'];
  
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove() {
    console.log("Você clicou no botão de Remover!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleParticipantRemove}/>
        )}
      />

    </View>
  )
}