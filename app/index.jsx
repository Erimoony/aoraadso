import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter(); // Hook para navegar a otra pantalla

  return (
    <SafeAreaView style={{ backgroundColor: '#161622', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, paddingHorizontal: 16 }}>
          <Image
            source={images.logo}
            style={{ width: 130, height: 84 }} 
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            style={{ maxWidth: 380, width: '100%', height: 300 }} 
            resizeMode="contain"
          />
          <View style={{ position: 'relative', marginTop: 20 }}>
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
              Discover Endless Possibilities with{' '}
              <Text style={{ color: '#FFA001' }}>
                Aora
              </Text>
            </Text>
            <Image
              source={images.path}
              style={{ width: 136, height: 15, position: 'absolute', bottom: -8, right: -32 }}
              resizeMode="contain"
            />
          </View>
          <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#ccc', marginTop: 28, textAlign: 'center' }}>
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles={{ width: '100%', marginTop: 28 }} 
            textStyles={{ color: 'white' }}
            isLoading={false} 
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style="light" />
    </SafeAreaView>
  );
}
