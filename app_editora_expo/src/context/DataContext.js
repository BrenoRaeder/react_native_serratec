import React, { createContext, useState }  from 'react';
import jwt_decode from 'jwt-decode';

//contexto
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [dadosUsuario, setDadosUsuario] = useState('');

    const armazenarDadosUsuario = (jwt) => {
        let jwtDecodificado = jwt_decode(jwt);

        //.user = chave do json retornado pelo backend que contem os dados do usuário logado
        let usuario = jwtDecodificado.user;
        usuario = JSON.parse(usuario);

        setDadosUsuario({
            // id: usuario?.id, -> ? para caso seja null não dê erro
            id: usuario?.id,
            username: usuario?.username,
            email: usuario?.email,
            token: jwt,
        })
    }

    return (
        <DataContext.Provider value={{
            dadosUsuario,
            armazenarDadosUsuario
        }}>
            {children}
        </DataContext.Provider>
    );
}
