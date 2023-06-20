import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import {
    Container,
    PublishingCompanyCard,
    BookCard,
} from './style.js';

function Home() {

    const editoras = [
        {
            name: 'Editora 1',
            id: 1
        },
        {
            name: 'Editora 2',
            id: 2
        },
        {
            name: 'Editora 3',
            id: 3
        },
        {
            name: 'Editora 4',
            id: 4
        },
        {
            name: 'Editora 5',
            id: 5
        }
    ]

    const livros = [
        {
            id: "001",
            author: "Chinua Achebe",
            country: "Nigeria",
            imageLink: "https://m.media-amazon.com/images/I/81vlAVbRl3L._AC_UF1000,1000_QL80_.jpg",
            language: "English",
            link: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
            pages: 209,
            title: "Things Fall Apart",
            year: 1958
        },
        {
            id: "002",
            author: "Hans Christian Andersen",
            country: "Denmark",
            imageLink: "https://m.media-amazon.com/images/I/91vQkYjbkNL._AC_UF1000,1000_QL80_.jpg",
            language: "Danish",
            link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
            pages: 784,
            title: "Fairy tales",
            year: 1836
        },
        {
            id: "003",
            author: "Dante Alighieri",
            country: "Italy",
            imageLink: "https://m.media-amazon.com/images/I/51dLq-ja74L.jpg",
            language: "Italian",
            link: "https://en.wikipedia.org/wiki/Divine_Comedy",
            pages: 928,
            title: "The Divine Comedy",
            year: 1315
        },
        {
            id: "004",
            author: "Unknown",
            country: "Sumer and Akkadian Empire",
            imageLink: "https://m.media-amazon.com/images/I/71zlWzz1AmL._AC_UF1000,1000_QL80_.jpg",
            language: "Akkadian",
            link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
            pages: 160,
            title: "The Epic Of Gilgamesh",
            year: -1700
        },
        {
            id: "005",
            author: "Unknown",
            country: "Achaemenid Empire",
            imageLink: "https://kbimages1-a.akamaihd.net/945b5eae-7768-4957-b36a-95f23dc5a86f/1200/1200/False/the-book-of-job-49.jpg",
            language: "Hebrew",
            link: "https://en.wikipedia.org/wiki/Book_of_Job",
            pages: 176,
            title: "The Book Of Job",
            year: -600
        },
        {
            id: "006",
            author: "Unknown",
            country: "India/Iran/Iraq/Egypt/Tajikistan",
            imageLink: "https://m.media-amazon.com/images/I/51ZgP+R5kNL.jpg",
            language: "Arabic",
            link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
            pages: 288,
            title: "One Thousand and One Nights",
            year: 1200
        },
        {
            id: "007",
            author: "Unknown",
            country: "Iceland",
            imageLink: "https://m.media-amazon.com/images/I/81bwnDjr8TL._AC_UF1000,1000_QL80_.jpg",
            language: "Old Norse",
            link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
            pages: 384,
            title: "Njál's Saga",
            year: 1350
        },
        {
            id: "008",
            author: "Jane Austen",
            country: "United Kingdom",
            imageLink: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
            language: "English",
            link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
            pages: 226,
            title: "Pride and Prejudice",
            year: 1813
        },
        {
            id: "009",
            author: "Honoré de Balzac",
            country: "France",
            imageLink: "https://m.media-amazon.com/images/I/81jmppwxtSL._AC_UF1000,1000_QL80_.jpg",
            language: "French",
            link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
            pages: 443,
            title: "Le Père Goriot",
            year: 1835
        },
        {
            id: "010",
            author: "Samuel Beckett",
            country: "Republic of Ireland",
            imageLink: "https://m.media-amazon.com/images/I/A1M8hz+ogCL.jpg",
            language: "French, English",
            link: "https://en.wikipedia.org/wiki/Molloy_(novel)",
            pages: 256,
            title: "Molloy, Malone Dies, The Unnamable, the trilogy",
            year: 1952
        }
    ]

    return (
        <Container>
            <FlatList
                style={styles.flatList}
                horizontal={true}
                data={editoras}
                showsHorizontalScrollIndicator={false}
                keyExtrator={item => item.id}
                renderItem={({ item }) => <PublishingCompanyCard>{item.name}</PublishingCompanyCard>}
            />

            <View>
                <Text style={styles.title}>Recentes</Text>
                <FlatList
                    style={styles.flatList}
                    horizontal={true}
                    data={livros}
                    showsHorizontalScrollIndicator={false}
                    keyExtrator={item => item.id}
                    renderItem={({ item }) =>
                        <BookCard>
                            <Image style={{ width: '100%', height: '70%' }} source={{ uri: item.imageLink, }} />
                            <View style={styles.bookDetailsContainer}>
                                <Text style={styles.bookTitle}>{item.title}</Text>
                                <Text style={styles.bookDescription}>um livro com {item.pages} páginas</Text>
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