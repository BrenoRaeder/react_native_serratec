import { 
    View,
    Text, 
    StyleSheet, 
    FlatList, 
    Image,
    ImageBackground,
} from 'react-native';
import {
    Container,
    PublishingCompanyCard,
    BookCard,
} from './style.js';
import AxiosInstance from '../../api/AxiosInstance.js';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../context/DataContext.js';

function Home() {

    const { dadosUsuario } = useContext(DataContext);
    const [dadosLivros, setDadosLivros] = useState([]);
    const [dadosEditora, setDadosEditora] = useState([]);

    const getAllEditoras = async () => {
        await AxiosInstance.get(
            '/editoras', 
            {headers: {"Authorization" : `Bearer ${dadosUsuario?.token}`}}    
        ).then(response => {
            setDadosEditora(response.data);
        }).catch(err => {
            console.log('erro na requisição editoras: ' + err);
        })
    }

    const getAllLivros = async () => {
        await AxiosInstance.get(
            '/livros',
            {headers: {"Authorization" : `Bearer ${dadosUsuario?.token}`}}
        ).then(response => {
            setDadosLivros(response.data);
        }).catch(err => {
            console.log('erro na requsiição de livros: ' + err);
        })
    }

    useEffect(() => {
        getAllLivros();
        getAllEditoras();
    }, []);

    return (
        <Container>
            <FlatList
                style={styles.flatList}
                horizontal={true}
                data={dadosEditora}
                showsHorizontalScrollIndicator={false}
                keyExtrator={item => item.codigoEditora}
                renderItem={({ item }) => 
                <ImageBackground source={{uri: `data:image/png;base64,${item?.img}`}}>
                    <PublishingCompanyCard>{item?.nomeEditora}</PublishingCompanyCard>
                </ImageBackground>
                }
            />

            <View>
                <Text style={styles.title}>Recentes</Text>
                <FlatList
                    style={styles.flatList}
                    horizontal={true}
                    data={dadosLivros}
                    showsHorizontalScrollIndicator={false}
                    keyExtrator={item => item?.codigoLivro}
                    renderItem={({ item }) =>
                        <BookCard>
                            <Image style={{ width: '100%', height: '70%' }} source={{ uri: `data:image/png;base64,${item?.imagem}` }} />
                            <View style={styles.bookDetailsContainer}>
                                <Text style={styles.bookTitle}>{item?.nomeLivro}</Text>
                                <Text style={styles.bookDescription}>um livro lançado em {item?.dataLancamento.substring(0,10)}</Text>
                            </View>
                        </BookCard>
                    }
                />
            </View>

            <View style={styles.bestSellersContainer}>
                <Text style={styles.title}>Destaque</Text>
                <Image style={{ width: '98%', height: '300px', margin: 'auto' }} source={{ uri: 'https://m.media-amazon.com/images/I/515U79XwAaL.jpg', }} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    flatList: {
        height: 'auto',
        flexGrow: 0
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        height: '10%',
        width: '100%',
        marginBottom: 15,
        fontFamily: 'monospace',
        backgroundColor: '#1b1c1b',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookDetailsContainer: {
        display: 'flex',
        jusitfyContent: 'space-between',
        flexDirection: 'column',
        height: '20%',
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    bookDescription: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    bestSellersContainer: {
        display: 'flex',
        width: '100%',
        height: 400,
    },
})

export default Home;