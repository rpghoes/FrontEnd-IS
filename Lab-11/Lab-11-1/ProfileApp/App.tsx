import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard
        name="Иван Иванов"
        role="Frontend Developer"
        avatar="https://via.placeholder.com/100"
        bio="Разрабатываю мобильные приложения на React Native"
      />
      <ContactSection />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});