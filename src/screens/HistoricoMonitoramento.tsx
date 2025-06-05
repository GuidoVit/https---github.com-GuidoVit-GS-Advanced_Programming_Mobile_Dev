// src/screens/HistoricoMonitoramento.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HistoricoMonitoramento'>;

const historico = [
  { data: '04/06/2025', evento: 'Detectado risco médio de erosão' },
  { data: '02/06/2025', evento: 'Chuva acumulada excedeu 250 mm' },
  { data: '30/05/2025', evento: 'Solo atingiu 90% de umidade' },
  { data: '28/05/2025', evento: 'Alerta de deslizamento de terra' },
  { data: '25/05/2025', evento: 'Sensor detectou vibração anormal' },
];

export default function HistoricoMonitoramento() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <LinearGradient colors={['#B3E5FC', '#81D4FA']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator>
          <Text style={styles.title}>Histórico de Monitoramento</Text>

          {historico.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.date}>{item.data}</Text>
              <Text style={styles.event}>{item.evento}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BemVindo')}>
            <MaterialIcons name="arrow-back" size={24} color="#003366" style={styles.icon} />
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 4,
  },
  event: {
    fontSize: 16,
    color: '#003366',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#003366',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});
