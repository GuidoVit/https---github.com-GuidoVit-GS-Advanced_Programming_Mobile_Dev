// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Telas
import BemVindo from './src/screens/BemVindo';
import DadosAmbientais from './src/screens/DadosAmbientais';
import AcoesMitigacao from './src/screens/AcoesMitigacao';
import HistoricoMonitoramento from './src/screens/HistoricoMonitoramento';
import VisualizacaoRiscos from './src/screens/VisualizacaoRiscos';

export type RootStackParamList = {
  BemVindo: undefined;
  DadosAmbientais: undefined;
  AcoesMitigacao: undefined;
  HistoricoMonitoramento: undefined;
  VisualizacaoRiscos: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BemVindo"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="DadosAmbientais" component={DadosAmbientais} />
        <Stack.Screen name="AcoesMitigacao" component={AcoesMitigacao} />
        <Stack.Screen name="HistoricoMonitoramento" component={HistoricoMonitoramento} />
        <Stack.Screen name="VisualizacaoRiscos" component={VisualizacaoRiscos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
