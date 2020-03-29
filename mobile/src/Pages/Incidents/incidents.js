import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../Assets/logo.png';
import IncidentsStyles from './incidentsStyles';

const incidents = () => {
    const navigation = useNavigation();
    const navigateToDetail = () => {
        navigation.navigate('Details');
    };
    return (
        <View style={IncidentsStyles.container}>
            <View style={IncidentsStyles.header}>
                <Image source={logoImg}/>
                <Text style={IncidentsStyles.headerText}>
                    Total de <Text style={IncidentsStyles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>
            <Text style={IncidentsStyles.title}>Bem-vindo!</Text>
            <Text style={IncidentsStyles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={[1, 2, 3]}
                style={IncidentsStyles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={IncidentsStyles.incident}>
                        <Text style={IncidentsStyles.incidentProperty}>ONG:</Text>
                        <Text style={IncidentsStyles.incidentValue}>APAD</Text>

                        <Text style={IncidentsStyles.incidentProperty}>CASO:</Text>
                        <Text style={IncidentsStyles.incidentValue}>Cadelinha atropelada</Text>

                        <Text style={IncidentsStyles.incidentProperty}>VALOR:</Text>
                        <Text style={IncidentsStyles.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity
                            style={IncidentsStyles.detailsButton}
                            onPress={navigateToDetail}>
                            
                            <Text style={IncidentsStyles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default incidents;