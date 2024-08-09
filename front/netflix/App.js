import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

export default function App() {
  const [id, setID] = useState('')
  const [filme, setFilme] = useState('')
  const [genero, setGenero] = useState('')
  const [ano, setAno] = useState('')
  const [classif, setClassif] = useState('')
  const [idioma, setIdioma] = useState('')

  return (
    <View style={styles.container}>

      <View style={styles.stGet}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text>ID:</Text>
          <TextInput
            value={id}
            onChangeText={(e) => { setID(e) }}
            style={styles.caixaID}
          />
          <Pressable
            style={styles.btn}
          >
            <Text style={{ fontWeight: 'bold', }}>GET</Text>
          </Pressable>
        </View>
        <Text>Filme</Text>
        <Text style={styles.caixaGet}>{filme}</Text>
        <Text>Gênero</Text>
        <Text style={styles.caixaGet}>{genero}</Text>
        <Text>Ano</Text>
        <Text style={styles.caixaGet}>{ano}</Text>
        <Text>Idioma</Text>
        <Text style={styles.caixaGet}>{idioma}</Text>
        <Text>Classificação</Text>
        <Text style={styles.caixaGet}>{classif}</Text>
      </View>

      <View style={styles.stPost}>
        <Pressable
            style={styles.btn}
          >
            <Text style={{ fontWeight: 'bold', }}>POST</Text>
          </Pressable>
        <Text>Filme</Text>
        <TextInput
          value={filme}
          onChangeText={(e) => { setFilme(e) }}
          style={styles.caixaPost}
        />
        <Text>Gênero</Text>
        <TextInput
          value={genero}
          onChangeText={(e) => { setGenero(e) }}
          style={styles.caixaPost}
        />
        <Text>Ano</Text>
        <TextInput
          value={ano}
          onChangeText={(e) => { setAno(e) }}
          style={styles.caixaPost}
        />
        <Text>Idioma</Text>
        <TextInput
          value={idioma}
          onChangeText={(e) => { setIdioma(e) }}
          style={styles.caixaPost}
        />
        <Text>Classificação</Text>
        <TextInput
          value={classif}
          onChangeText={(e) => { setClassif(e) }}
          style={styles.caixaPost}
        />
      </View>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  stGet: {
    flex: 1,
  },
  stPost: {
    flex: 1,
  },
  caixaGet: {
    height: 30,
    borderRadius: 8,
    padding: 5,
    backgroundColor: 'grey',
    width: '90%',
    marginBottom: 10
  },
  caixaPost: {
    height: 30,
    borderRadius: 8,
    padding: 5,
    width: '90%',
    marginBottom: 10,
    borderWidth: 1
  },
  caixaID: {
    width: '20%',
    height: 30,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft:5
  },
  btn: {
    width: '20%',
    height: 30,
    backgroundColor: '#ff6347',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  }
})