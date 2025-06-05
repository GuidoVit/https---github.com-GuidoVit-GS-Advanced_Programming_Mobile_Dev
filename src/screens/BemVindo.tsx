// src/screens/BemVindo.tsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BemVindo'>;

export default function BemVindo() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <LinearGradient colors={['#B3E5FC', '#81D4FA']} style={styles.container}>
      <Text style={styles.welcomeText}>Bem Vindo</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DadosAmbientais')}
      >
        <MaterialIcons name="wb-sunny" size={24} color="#003366" style={styles.icon} />
        <Text style={styles.buttonText}>Dados Ambientais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VisualizacaoRiscos')}
      >
        <FontAwesome5 name="exclamation-triangle" size={22} color="#003366" style={styles.icon} />
        <Text style={styles.buttonText}>Visualizar Riscos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HistoricoMonitoramento')}
      >
        <MaterialIcons name="history" size={24} color="#003366" style={styles.icon} />
        <Text style={styles.buttonText}>Histórico de Monitoramento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AcoesMitigacao')}
      >
        <Entypo name="tools" size={22} color="#003366" style={styles.icon} />
        <Text style={styles.buttonText}>Ações de Mitigação</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
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
