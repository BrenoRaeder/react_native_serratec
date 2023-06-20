import { useState } from 'react';
import { 
    View,
    Text, 
    TextInput, 
    StyleSheet, 
    Pressable,
} from 'react-native';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log(email);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo</Text>
            <View style={styles.containerLogin}>
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
                    <Pressable
                        style={({pressed}) => !pressed ? styles.button : styles.buttonPressed}
                    >
                        <Text style={styles.txtButton}>
                            Login
                        </Text>
                    </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 50,
        width: '100%',
        alignItems: 'center',
    },
    containerLogin: {
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
        width: '70%',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        padding: 5,
        borderColor: '#1b1c1b',
        fontFamily: 'monospace',
        fontSize: 18,
    },
    button: {
        backgroundColor: '#1b1c1b',
        width: '70%',
        margin: 'auto',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    buttonPressed: {
        backgroundColor: '#fff',
        width: '70%',
        margin: 'auto',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '.3s',
    },  
    txtButton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'monospace',
        transition: '.3s',
    },
})

export default Login;