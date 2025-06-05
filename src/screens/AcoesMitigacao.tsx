import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

const acoes = [
  {
    id: 1,
    titulo: 'Instalação de Barreiras de Contenção',
    status: 'Concluído',
    descricao: 'Barreiras físicas foram instaladas nas áreas de maior risco de deslizamento.',
    icone: <MaterialIcons name="security" size={28} color="#003366" style={{ marginRight: 10 }} />,
  },
  {
    id: 2,
    titulo: 'Plantio de Vegetação Nativa',
    status: 'Em Andamento',
    descricao: 'Iniciado o reflorestamento com espécies nativas para estabilização do solo.',
    icone: <FontAwesome5 name="leaf" size={24} color="#003366" style={{ marginRight: 10 }} />,
  },
  {
    id: 3,
    titulo: 'Reforço em Sistemas de Drenagem',
    status: 'Pendente',
    descricao: 'Prevista a melhoria na captação e direcionamento da água da chuva.',
    icone: <Entypo name="flow-line" size={24} color="#003366" style={{ marginRight: 10 }} />,
  },
  {
    id: 4,
    titulo: 'Campanhas Educativas',
    status: 'Concluído',
    descricao: 'Ações de conscientização da população local sobre riscos e prevenção.',
    icone: <MaterialIcons name="school" size={26} color="#003366" style={{ marginRight: 10 }} />,
  },
];

const ITEMS_PER_PAGE = 2;

export default function AcoesMitigacao() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AcoesMitigacao'>>();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(acoes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = acoes.slice(startIndex, endIndex);

  return (
    <LinearGradient colors={['#B3E5FC', '#81D4FA']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text style={styles.title}>Ações de Mitigação</Text>

          {currentItems.map((acao) => (
            <View key={acao.id} style={styles.card}>
              <View style={styles.cardHeader}>
                {acao.icone}
                <Text style={styles.cardTitle}>{acao.titulo}</Text>
              </View>
              <Text style={styles.status}>
                Status: <Text style={getStatusStyle(acao.status)}>{acao.status}</Text>
              </Text>
              <Text style={styles.description}>{acao.descricao}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('BemVindo')}>
            <MaterialIcons name="arrow-back" size={24} color="#003366" style={styles.icon} />
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paginationContainer}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <TouchableOpacity
              key={page}
              style={[styles.pageButton, currentPage === page && styles.activePage]}
              onPress={() => setCurrentPage(page)}
            >
              <Text style={styles.pageText}>{page}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function getStatusStyle(status: string) {
  switch (status.toLowerCase()) {
    case 'concluído':
      return { color: 'green', fontWeight: 'bold' };
    case 'em andamento':
      return { color: 'orange', fontWeight: 'bold' };
    case 'pendente':
      return { color: 'red', fontWeight: 'bold' };
    default:
      return { color: '#003366' };
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
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
  status: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    color: '#003366',
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 10,
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  pageButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#ffffffaa',
  },
  activePage: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#003366',
  },
  pageText: {
    fontWeight: 'bold',
    color: '#003366',
  },
});
