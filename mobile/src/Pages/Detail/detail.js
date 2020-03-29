import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as ComposeEmail from 'expo-mail-composer';

import logoImg from '../../Assets/logo.png';
import DetailStyles from './detailStyles';

const detail = () => {
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor de R$ 120,00';

    const navigation = useNavigation();
    const navigateToIncidents = () => {
        navigation.goBack();
    }

    const sendMail = () => {
        ComposeEmail.composeAsync({
            subject: 'Herói do caso: Cadelinha Atropelada',
            recipients: ['afonsomg3@gmail.com'],
            body: message
        });
    };

    const sendWpp = () => {
        Linking.openURL(`whatsapp://send?phone=+5584986328249&text=${message}`);
    };

    return (
        <View style={DetailStyles.container}>
            <View style={DetailStyles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateToIncidents}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={DetailStyles.incident}>
                <Text style={[DetailStyles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={DetailStyles.incidentValue}>APAD</Text>

                <Text style={DetailStyles.incidentProperty}>CASO:</Text>
                <Text style={DetailStyles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={DetailStyles.incidentProperty}>VALOR:</Text>
                <Text style={DetailStyles.incidentValue}>R$ 120,00</Text>            
            </View>
            <View style={DetailStyles.contactBox}>
                <Text style={DetailStyles.heroTitle}>Salve o dia!</Text>
                <Text style={DetailStyles.heroTitle}>Seja o herói deste caso!</Text>

                <Text style={DetailStyles.heroDescription}>Entre em contato</Text>
                <View style={DetailStyles.actions}>
                    <TouchableOpacity style={DetailStyles.action} onPress={sendWpp}>
                        <Text style={DetailStyles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={DetailStyles.action} onPress={sendMail}>
                        <Text style={DetailStyles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default detail;