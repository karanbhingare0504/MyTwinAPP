
import { useState } from 'react';
import {
    Alert,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function HealthProfile({ onContinue }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [gender, setGender] = useState('');

  const handleContinue = () => {
    if (!name.trim()) {
      Alert.alert('Required', 'Please enter your full name.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('Invalid Email', 'Please enter a valid email.');
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      Alert.alert('Invalid Pincode', 'Enter a 6-digit pincode.');
      return;
    }

    if (!gender) {
      Alert.alert('Required', 'Please select your gender.');
      return;
    }

    const profile = {
      name: name.trim(),
      email: email.trim(),
      pincode,
      gender,
    };

    if (onContinue) {
      onContinue(profile);
    } else {
      Alert.alert(
        'Profile Completed',
        `Welcome to MyTwin, ${profile.name}!`
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F5F8FF"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.brandRow}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>♥</Text>
          </View>
          <View>
            <Text style={styles.brand}>MyTwin</Text>
            <Text style={styles.tagline}>
              YOUR PERSONAL HEALTH COMPANION
            </Text>
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>
            Build Your Health Profile
          </Text>
          <Text style={styles.subtitle}>
            Tell us a little about yourself to personalize
            your health journey.
          </Text>
        </View>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#98A2B3"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          returnKeyType="next"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#98A2B3"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />

        <Text style={styles.label}>Pincode</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter 6-digit pincode"
          placeholderTextColor="#98A2B3"
          value={pincode}
          onChangeText={(value) =>
            setPincode(value.replace(/\D/g, '').slice(0, 6))
          }
          keyboardType="number-pad"
          maxLength={6}
          returnKeyType="done"
        />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderRow}>
          {['Male', 'Female', 'Other'].map((item) => (
            <Pressable
              key={item}
              onPress={() => setGender(item)}
              style={[
                styles.genderButton,
                gender === item && styles.genderSelected,
              ]}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === item && styles.genderTextSelected,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>

        <Text style={styles.privacy}>
          Your information helps personalize your experience.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 35,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginBottom: 36,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#155EEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 25,
  },
  brand: {
    fontSize: 23,
    fontWeight: '800',
    color: '#172B4D',
  },
  tagline: {
    fontSize: 9,
    letterSpacing: 1,
    color: '#667085',
    marginTop: 3,
  },
  header: {
    marginBottom: 27,
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '800',
    color: '#172B4D',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: '#667085',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#344054',
    marginBottom: 9,
    marginTop: 17,
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#172B4D',
  },
  genderRow: {
    flexDirection: 'row',
    gap: 10,
  },
  genderButton: {
    flex: 1,
    height: 49,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderSelected: {
    backgroundColor: '#E8F0FF',
    borderColor: '#155EEF',
  },
  genderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475467',
  },
  genderTextSelected: {
    color: '#155EEF',
  },
  continueButton: {
    height: 55,
    borderRadius: 14,
    backgroundColor: '#155EEF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  privacy: {
    textAlign: 'center',
    color: '#98A2B3',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 17,
  },
});
