import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'VisualizacaoRiscos'>;

const riscosPorPagina = [
  [
    {
      id: 1,
      titulo: 'Deslizamento de Terra',
      nivel: 'Alto',
      descricao: 'Chuvas intensas nas últimas 24h com solo encharcado e inclinação elevada.',
      icone: <MaterialIcons name="terrain" size={28} color="#003366" style={{ marginRight: 10 }} />,
    },
    {
      id: 2,
      titulo: 'Erosão',
      nivel: 'Médio',
      descricao: 'Vazão da água elevada com perda de vegetação nativa na região.',
      icone: <FontAwesome5 name="water" size={24} color="#003366" style={{ marginRight: 10 }} />,
    },
  ],
  [
    {
      id: 3,
      titulo: 'Rachaduras no Solo',
      nivel: 'Alto',
      descricao: 'Rachaduras de até 12 cm de profundidade foram detectadas.',
      icone: <MaterialIcons name="warning" size={26} color="#003366" style={{ marginRight: 10 }} />,
    },
    {
      id: 4,
      titulo: 'Vibração Anormal',
      nivel: 'Baixo',
      descricao: 'Sinais leves de vibração detectados por sensores no solo.',
      icone: <Entypo name="sound-mix" size={24} color="#003366" style={{ marginRight: 10 }} />,
    },
  ],
];

export default function VisualizacaoRiscos() {
  const [pagina, setPagina] = useState(0);
  const navigation = useNavigation<NavigationProp>();

  const proximaPagina = () => {
    setPagina((prev) => (prev + 1) % riscosPorPagina.length);
  };

  const paginaAnterior = () => {
    setPagina((prev) => (prev - 1 + riscosPorPagina.length) % riscosPorPagina.length);
  };

  return (
    <LinearGradient colors={['#B3E5FC', '#81D4FA']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Visualização de Riscos</Text>

            {riscosPorPagina[pagina].map((risco) => (
              <View key={risco.id} style={styles.card}>
                <View style={styles.cardHeader}>
                  {risco.icone}
                  <Text style={styles.cardTitle}>{risco.titulo}</Text>
                </View>
                <Text style={styles.level}>
                  Nível: <Text style={getNivelStyle(risco.nivel)}>{risco.nivel}</Text>
                </Text>
                <Text style={styles.description}>{risco.descricao}</Text>
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
              Página {pagina + 1} de {riscosPorPagina.length}
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

function getNivelStyle(nivel: string) {
  switch (nivel.toLowerCase()) {
    case 'alto':
      return { color: 'red', fontWeight: 'bold' };
    case 'médio':
      return { color: 'orange', fontWeight: 'bold' };
    case 'baixo':
      return { color: 'green', fontWeight: 'bold' };
    default:
      return { color: '#003366' };
  }
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
  },
  level: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    color: '#003366',
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
