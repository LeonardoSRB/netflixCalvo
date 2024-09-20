import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";

export default function Home() {
    const [id, setID] = useState('')
    const [filmeG, setFilmeG] = useState('')
    const [generoG, setGeneroG] = useState('')
    const [anoG, setAnoG] = useState('')
    const [classifG, setClassifG] = useState('')
    const [idiomaG, setIdiomaG] = useState('')
    const [filme, setFilme] = useState('')
    const [genero, setGenero] = useState('')
    const [ano, setAno] = useState('')
    const [classif, setClassif] = useState('')
    const [idioma, setIdioma] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('token')
        .then(
            (resp) => {
                if (token != null) {
                    console.log('Token Home:', resp)
                    setToken(resp)
                }
            }
        )
        .catch(
            (error) => {
                console.error("Erro ao ao salvar o token", error)
            }
        )
    }, [token])

    const capturar = async ()=>{
        try{
            const response = await axios.get(
                'http://127.0.0.1:8000/api/filme/' + id,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            const calvo = await axios.get(
                'http://127.0.0.1:8000/api/genero/' + response.data.genre
            )

            const classif = await axios.get(
                'http://127.0.0.1:8000/api/classif/' + response.data.classif
            )
            
            console.log(response.data)
            setFilmeG(response.data.titulo)
            setGeneroG(calvo.data.genre)
            setAnoG(response.data.ano)
            setClassifG(response.data.classif)
            setIdiomaG(response.data.idioma)
        }catch{
            console.log(Error)
        }
    }

    const enviar = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/listarfilmes',
                {
                    titulo: filme,
                    genero: genero,
                    ano: ano,
                    classif: classif,
                    idioma: idioma
                }
            )
            console.log('Dados inseridos com sucesso...')
            setFilme('')
            setGenero('')
            setAno('')
            setClassif('')
            setIdioma('')

        } catch (error) {  
            console.log('Erro ao inserir os dados...', error) 
        }
    }

    const atualizar = async () => {
        try {
            const response = await axios.put(
                'http://127.0.0.1:8000/api/filme/' + id,
                {
                    titulo: filmeG,
                    genero: generoG,
                    ano: anoG,
                    classif: classifG,
                    idioma: idiomaG
                },{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log('Alterado com sucesso...')
        } catch (error) {
            console.log('Erro ao atualizar', error)
        }
    }
    
    const apagar = async () => {
        try {
            const response = await axios.delete(
                'http://127.0.0.1:8000/api/filme/' + id
            )
            console.log('Apagado com sucesso...')
            setFilmeG('')
            setGeneroG('')
            setAnoG('')
            setClassifG('')
            setIdiomaG('')
        } catch (error) {
            console.log('Erro ao atualizar', error)
        }
    }

    
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    return (
        <View style={styles.container}>
          <View style={styles.stGet}>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text>ID:</Text>
              <TextInput
                value={id}
                onChangeText={(e) => {
                  setID(e);
                }}
                style={styles.caixaID}
              />
              <Pressable style={styles.btnGe} onPress={capturar}>
                <Text style={{ fontWeight: "bold" }}>GET</Text>
              </Pressable>
              <Pressable style={styles.btnPu} onPress={atualizar}>
                <Text style={{ fontWeight: "bold" }}>PUT</Text>
              </Pressable>
              <Pressable style={styles.btnDe} onPress={apagar}>
                <Text style={{ fontWeight: "bold" }}>DEL</Text>
              </Pressable>
            </View>
            <Text>Filme</Text>
            <TextInput
              style={styles.caixaGet}
              value={filmeG}
              onChangeText={(e) => setFilmeG(e)}
            />
    
            <Text>Gênero</Text>
            <TextInput
              style={styles.caixaGet}
              value={generoG}
              onChangeText={(e) => setGeneroG(e)}
            />
    
            <View style={styles.foto03}>
              <View style={styles.foto01}>
                <Text>Ano</Text>
                <TextInput
                  style={styles.caixaGet2}
                  value={anoG}
                  onChangeText={(e) => setAnoG(e)}
                />
    
                <Text>Idioma</Text>
                <TextInput
                  style={styles.caixaGet2}
                  value={idiomaG}
                  onChangeText={(e) => setIdiomaG(e)}
                />
    
                <Text>Classificação</Text>
                <TextInput
                  style={styles.caixaGet2}
                  value={classifG}
                  onChangeText={(e) => setClassifG(e)}
                />
              </View>
              <View style={styles.foto02}>
                {/* <Image
                  style={styles.foto04}
                  source={{ uri: imageSource}}
                /> */}
              </View>
              
            </View>
          </View>
    
          <View style={styles.stPost}>
            <Pressable style={styles.btnPo} onPress={enviar}>
              <Text style={{ fontWeight: "bold" }}>POST</Text>
            </Pressable>
            <Text>Filme</Text>
            <TextInput
              value={filme}
              onChangeText={(e) => {
                setFilme(e);
              }}
              style={styles.caixaPost}
            />
            <Text>Gênero</Text>
            <TextInput
              value={genero}
              onChangeText={(e) => {
                setGenero(e);
              }}
              style={styles.caixaPost}
            />
            <View style={styles.foto03}>
              <View style={styles.foto01}>
                <Text>Ano</Text>
                <TextInput
                  value={ano}
                  onChangeText={(e) => {
                    setAno(e);
                  }}
                  style={styles.caixaPost2}
                />
                <Text>Idioma</Text>
                <TextInput
                  value={idioma}
                  onChangeText={(e) => {
                    setIdioma(e);
                  }}
                  style={styles.caixaPost2}
                />
                <Text>Classificação</Text>
                <TextInput
                  value={classif}
                  onChangeText={(e) => {
                    setClassif(e);
                  }}
                  style={styles.caixaPost2}
                />
              </View>
              <Pressable style={styles.foto02} >
                {/* <Image
                  style={styles.foto04}
                  source={{
                    uri: base64,
                  }}
                /> */}
              </Pressable>
            </View>
          </View>
        </View>
      );
}