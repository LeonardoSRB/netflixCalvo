import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from './styles';

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

    const capturar = async ()=>{
        try{
            const response = await axios.get(
                'http://127.0.0.1:8000/api/filme/' + id
            )
            console.log(response.data)
            setFilmeG(response.data.titulo)
            setGeneroG(response.data.genero)
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

        } catch (error) {
            
        }
    }


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
                        onPress={capturar}
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


