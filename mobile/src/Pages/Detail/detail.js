import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as ComposeEmail from 'expo-mail-composer';

import logoImg from '../../Assets/logo.png';
import DetailStyles from './detailStyles';

const detail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const navigateToIncidents = () => {
        navigation.goBack();
    }

    const incident = route.params.incident;

    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', }).format(incident.value)}`;


    const sendMail = () => {
        ComposeEmail.composeAsync({
            subject: `Herói do caso: ${incident.title }`,
            recipients: [incident.email],
            body: message
        });
    };

    const sendWpp = () => {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
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
                <Text style={DetailStyles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={DetailStyles.incidentProperty}>CASO:</Text>
                <Text style={DetailStyles.incidentValue}>{incident.description}</Text>

                <Text style={DetailStyles.incidentProperty}>VALOR:</Text>
                <Text style={DetailStyles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', }).format(incident.value)}
                </Text>            
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