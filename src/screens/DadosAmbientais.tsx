import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'DadosAmbientais'>;

const dados = [
  [
    { titulo: 'Precipitação', valor: '120 mm' },
    { titulo: 'Umidade do Solo', valor: '85%' },
    { titulo: 'Índice de Saturação', valor: '78%' },
    { titulo: 'Inclinação do Terreno', valor: '35°' },
  ],
  [
    { titulo: 'Velocidade do Vento', valor: '14 km/h' },
    { titulo: 'Temperatura Média', valor: '22°C' },
    { titulo: 'Radiação Solar', valor: '800 W/m²' },
    { titulo: 'Altitude', valor: '320 m' },
  ],
  [
    { titulo: 'pH do Solo', valor: '6.5' },
    { titulo: 'Condutividade Elétrica', valor: '0.8 dS/m' },
    { titulo: 'Profundidade do Lençol Freático', valor: '3.2 m' },
    { titulo: 'Tipo de Solo', valor: 'Argiloso' },
  ],
];

export default function DadosAmbientaisScreen() {
  const [pagina, setPagina] = useState(0);
  const navigation = useNavigation<NavigationProp>();

  const proximaPagina = () => {
    setPagina((prev) => (prev + 1) % dados.length);
  };

  const paginaAnterior = () => {
    setPagina((prev) => (prev - 1 + dados.length) % dados.length);
  };

  return (
    <LinearGradient colors={['#B3E5FC', '#81D4FA']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Dados Ambientais</Text>

            {dados[pagina].map((dado, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{dado.titulo}</Text>
                <Text style={styles.cardValue}>{dado.valor}</Text>
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('BemVindo')}>
            <MaterialIcons name="arrow-back" size={20} color="#003366" style={{ marginRight: 8 }} />
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <View style={styles.pagination}>
            <TouchableOpacity style={styles.pageButton} onPress={paginaAnterior}>
              <MaterialIcons name="chevron-left" size={20} color="#003366" />
            </TouchableOpacity>

            <Text style={styles.pageText}>
              Página {pagina + 1} de {dados.length}
            </Text>

            <TouchableOpacity style={styles.pageButton} onPress={proximaPagina}>
              <MaterialIcons name="chevron-right" size={20} color="#003366" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
  },
  cardValue: {
    fontSize: 16,
    color: '#003366',
    marginTop: 4,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  backButtonText: {
    color: '#003366',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  pageButton: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 6,
    borderRadius: 8,
    marginHorizontal: 12,
  },
  pageText: {
    fontSize: 15,
    color: '#003366',
    fontWeight: 'bold',
  },
});
