import { useState } from 'react';
import { 
    View,
    Text, 
    TextInput, 
    StyleSheet, 
    Button,
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
                    onChangeText={setPassword}
                    value={password}
                />
                <View style={{ width: '80%', margin: 'auto' }}>
                    <Button
                        title="Login"
                        color="#000"
                        onPress={() => handleLogin()}
                    />
                </View>
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
        width: '70%',
        alignItems: 'center',
    },
    containerLogin: {
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
        width: '100%',
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
        borderColor: '#000',
        fontFamily: 'monospace',
        fontSize: 18,
    },
})

export default Login;