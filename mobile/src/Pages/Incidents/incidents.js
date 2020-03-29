import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import API from '../../Services';
import logoImg from '../../Assets/logo.png';
import IncidentsStyles from './incidentsStyles';

const incidents = () => {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const loadIncidents = async () => {
        if (loading) {
            return;
        }
        
        if (total > 0 && incidents.length === total) {
            return;
        }
        
        setLoading(true);
        
        const response = await API.get('incidents', {params: { page }});
        setIncidents(incidents.concat(response.data));
        setTotal(+response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    const navigation = useNavigation();
    const navigateToDetail = (incident) => {
        navigation.navigate('Details', { incident });
    };
    return (
        <View style={IncidentsStyles.container}>
            <View style={IncidentsStyles.header}>
                <Image source={logoImg}/>
                <Text style={IncidentsStyles.headerText}>
                    Total de <Text style={IncidentsStyles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>
            <Text style={IncidentsStyles.title}>Bem-vindo!</Text>
            <Text style={IncidentsStyles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={IncidentsStyles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={IncidentsStyles.incident}>
                        <Text style={IncidentsStyles.incidentProperty}>ONG:</Text>
                        <Text style={IncidentsStyles.incidentValue}>{incident.name}</Text>

                        <Text style={IncidentsStyles.incidentProperty}>CASO:</Text>
                        <Text style={IncidentsStyles.incidentValue}>{incident.title}</Text>

                        <Text style={IncidentsStyles.incidentProperty}>VALOR:</Text>
                        <Text style={IncidentsStyles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', }).format(incident.value)}
                        </Text>

                        <TouchableOpacity
                            style={IncidentsStyles.detailsButton}
                            onPress={() => navigateToDetail(incident)}>
                            
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