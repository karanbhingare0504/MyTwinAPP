// import * as Device from 'expo-device';
// import { Platform, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { AnimatedIcon } from '@/components/animated-icon';
// import { HintRow } from '@/components/hint-row';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { WebBadge } from '@/components/web-badge';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

// export default function HomeScreen() {
//   return (
//     <ThemedView style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
//         <ThemedView style={styles.heroSection}>
//           <AnimatedIcon />
//           <ThemedText type="title" style={styles.title}>
//             Welcome to&nbsp;Expo
//           </ThemedText>
//         </ThemedView>

//         <ThemedText type="code" style={styles.code}>
//           get started
//         </ThemedText>

//         <ThemedView type="backgroundElement" style={styles.stepContainer}>
//           <HintRow
//             title="Try editing"
//             hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
//           />
//           <HintRow title="Dev tools" hint={getDevMenuHint()} />
//           <HintRow
//             title="Fresh start"
//             hint={<ThemedText type="code">npm run reset-project</ThemedText>}
//           />
//         </ThemedView>

//         {Platform.OS === 'web' && <WebBadge />}
//       </SafeAreaView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   safeArea: {
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     alignItems: 'center',
//     gap: Spacing.three,
//     paddingBottom: BottomTabInset + Spacing.three,
//     maxWidth: MaxContentWidth,
//   },
//   heroSection: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     gap: Spacing.four,
//   },
//   title: {
//     textAlign: 'center',
//   },
//   code: {
//     textTransform: 'uppercase',
//   },
//   stepContainer: {
//     gap: Spacing.three,
//     alignSelf: 'stretch',
//     paddingHorizontal: Spacing.three,
//     paddingVertical: Spacing.four,
//     borderRadius: Spacing.four,
//   },
// });









// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const screens = [
//   {
//     title: 'Your Health.\nYour Twin.',
//     subtitle: 'Know your body better.',
//     description:
//       'Track your health, understand your body, live better.',
//     image: require('../../assets/images/health.png'),
//   },
//   {
//     title: 'Care That\nConnects.',
//     subtitle: 'Healthcare made simple.',
//     description:
//       'Book appointments and connect with trusted doctors.',
//     image: require('../../assets/images/appointment.png'),
//   },
//   {
//     title: 'Better Habits.\nBetter You.',
//     subtitle: 'Your wellness journey.',
//     description:
//       'Build healthy habits and track your daily progress.',
//     image: require('../../assets/images/dashboard.png'),
//   },
// ];

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor="#F2F7FF"
//       />

//       <View style={styles.header}>
//         <Text style={styles.logo}>💙 MyTwin</Text>

//         <Text style={styles.tagline}>
//           H E A L T H   •   C A R E   •   W E L L N E S S
//         </Text>

//         <Text style={styles.heading}>
//           Your Health, Your Future
//         </Text>

//         <Text style={styles.headerDescription}>
//           Discover a smarter way to care for yourself.
//         </Text>
//       </View>

//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {screens.map((screen, index) => (
//           <View style={styles.card} key={index}>
//             <View style={styles.cardHeader}>
//               <Text style={styles.smallLogo}>💙 MyTwin</Text>
//               <Text style={styles.number}>
//                 0{index + 1} / 03
//               </Text>
//             </View>

//             <Text style={styles.title}>
//               {screen.title}
//             </Text>

//             <Text style={styles.subtitle}>
//               {screen.subtitle}
//             </Text>

//             <Text style={styles.description}>
//               {screen.description}
//             </Text>

//             <Image
//               source={screen.image}
//               style={styles.phoneImage}
//               resizeMode="contain"
//             />

//             <View style={styles.dots}>
//               {screens.map((_, dotIndex) => (
//                 <View
//                   key={dotIndex}
//                   style={[
//                     styles.dot,
//                     index === dotIndex && styles.activeDot,
//                   ]}
//                 />
//               ))}
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//       <View style={styles.footer}>
//         <Text style={styles.footerTitle}>
//           Your health, all in one place.
//         </Text>

//         <Text style={styles.footerText}>
//           HEALTH  •  CARE  •  WELLNESS
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F2F7FF',
//     paddingTop: 12,
//   },

//   header: {
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     marginBottom: 20,
//   },

//   logo: {
//     fontSize: 34,
//     fontWeight: '900',
//     color: '#09204D',
//   },

//   tagline: {
//     marginTop: 8,
//     fontSize: 9,
//     color: '#33476B',
//   },

//   heading: {
//     marginTop: 20,
//     fontSize: 23,
//     fontWeight: '800',
//     color: '#09204D',
//     textAlign: 'center',
//   },

//   headerDescription: {
//     fontSize: 13,
//     color: '#60708C',
//     marginTop: 7,
//     textAlign: 'center',
//   },

//   scrollContent: {
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     paddingBottom: 15,
//   },

//   card: {
//     width: 270,
//     marginHorizontal: 8,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 25,
//     padding: 14,
//     elevation: 5,
//     shadowColor: '#173D75',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.12,
//     shadowRadius: 12,
//   },

//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 17,
//   },

//   smallLogo: {
//     fontSize: 17,
//     fontWeight: '800',
//     color: '#09204D',
//   },

//   number: {
//     fontSize: 10,
//     color: '#7586A3',
//   },

//   title: {
//     fontSize: 25,
//     fontWeight: '900',
//     color: '#10264D',
//     lineHeight: 31,
//   },

//   subtitle: {
//     fontSize: 17,
//     fontWeight: '800',
//     color: '#00BFD8',
//     marginTop: 4,
//   },

//   description: {
//     fontSize: 12,
//     color: '#52617A',
//     lineHeight: 18,
//     marginTop: 9,
//     marginBottom: 12,
//   },

//   phoneImage: {
//     width: '100%',
//     height: 350,
//     alignSelf: 'center',
//   },

//   dots: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 12,
//     gap: 7,
//   },

//   dot: {
//     width: 7,
//     height: 7,
//     borderRadius: 5,
//     backgroundColor: '#CAD5E8',
//   },

//   activeDot: {
//     width: 19,
//     backgroundColor: '#00C9E8',
//   },

//   footer: {
//     alignItems: 'center',
//     padding: 15,
//   },

//   footerTitle: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#10264D',
//   },

//   footerText: {
//     marginTop: 6,
//     fontSize: 10,
//     color: '#687A98',
//     letterSpacing: 1,
//   },
// });










// import { useState } from 'react';
// import {
//   Image,
//   Pressable,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useWindowDimensions,
//   View,
// } from 'react-native';

// const screens = [
//   {
//     title: 'Your Health.',
//     highlight: 'Your Twin.',
//     description:
//       'Track your health, understand your body, live better.',
//     image: require('../../assets/images/health.png'),
//     button: 'Continue',
//   },
//   {
//     title: 'Care That',
//     highlight: 'Connects.',
//     description:
//       'Book appointments and connect with trusted doctors.',
//     image: require('../../assets/images/appointment.png'),
//     button: 'Continue',
//   },
//   {
//     title: 'Better Habits.',
//     highlight: 'Better You.',
//     description:
//       'Build healthy habits and track your daily progress.',
//     image: require('../../assets/images/dashboard.png'),
//     button: 'Get Started',
//   },
// ];

// export default function App() {
//   const [current, setCurrent] = useState(0);
//   const { width, height } = useWindowDimensions();
//   const screen = screens[current];

//   const imageHeight = Math.min(height * 0.48, width * 0.95, 440);

//   function handleContinue() {
//     if (current < screens.length - 1) {
//       setCurrent(current + 1);
//     } else {
//       setCurrent(0);
//     }
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />

//       <View style={styles.header}>
//         <Text style={styles.logo}>💙 MyTwin</Text>
//         <Text style={styles.tagline}>
//           HEALTH  •  CARE  •  WELLNESS
//         </Text>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.textSection}>
//           <Text style={styles.title}>{screen.title}</Text>
//           <Text style={styles.highlight}>{screen.highlight}</Text>
//           <Text style={styles.description}>
//             {screen.description}
//           </Text>
//         </View>

//         <View style={styles.imageContainer}>
//           <Image
//             source={screen.image}
//             style={[styles.image, { height: imageHeight }]}
//             resizeMode="contain"
//           />
//         </View>

//         <View style={styles.bottom}>
//           <View style={styles.dots}>
//             {screens.map((_, index) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.dot,
//                   current === index && styles.activeDot,
//                 ]}
//               />
//             ))}
//           </View>

//           <Text style={styles.page}>
//             {current + 1} of {screens.length}
//           </Text>

//           <Pressable
//             style={styles.button}
//             onPress={handleContinue}
//           >
//             <Text style={styles.buttonText}>
//               {screen.button} →
//             </Text>
//           </Pressable>

//           {current > 0 && (
//             <Pressable
//               style={styles.backButton}
//               onPress={() => setCurrent(current - 1)}
//             >
//               <Text style={styles.backText}>← Back</Text>
//             </Pressable>
//           )}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F2F7FF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingTop: 12,
//     paddingBottom: 10,
//   },
//   logo: {
//     fontSize: 30,
//     fontWeight: '900',
//     color: '#09204D',
//   },
//   tagline: {
//     fontSize: 10,
//     letterSpacing: 2,
//     color: '#30466B',
//     marginTop: 5,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 12,
//   },
//   textSection: {
//     alignItems: 'center',
//     paddingTop: 8,
//   },
//   title: {
//     fontSize: 27,
//     fontWeight: '900',
//     color: '#09204D',
//     textAlign: 'center',
//   },
//   highlight: {
//     fontSize: 27,
//     fontWeight: '900',
//     color: '#00BED8',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 13,
//     color: '#52617A',
//     textAlign: 'center',
//     marginTop: 10,
//     lineHeight: 20,
//     maxWidth: 330,
//   },
//   imageContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: 0,
//     marginVertical: 8,
//   },
//   image: {
//     width: '100%',
//     maxWidth: 440,
//   },
//   bottom: {
//     alignItems: 'center',
//     paddingTop: 8,
//   },
//   dots: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     marginBottom: 8,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 5,
//     backgroundColor: '#C7D5E9',
//   },
//   activeDot: {
//     width: 23,
//     backgroundColor: '#00C9E8',
//   },
//   page: {
//     fontSize: 11,
//     color: '#667895',
//     marginBottom: 10,
//   },
//   button: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: '#00C9E8',
//     borderRadius: 30,
//     paddingVertical: 15,
//     alignItems: 'center',
//     elevation: 3,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '800',
//   },
//   backButton: {
//     padding: 9,
//     marginTop: 3,
//   },
//   backText: {
//     color: '#173866',
//     fontSize: 13,
//     fontWeight: '700',






// import { useState } from 'react';
// import {
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// const onboardingScreens = [
//   {
//     label: 'FOOD & HEALTH',
//     title: 'MyTwin shows you',
//     highlight: 'how food affects your health.',
//     description:
//       'Discover how your daily food choices can affect your wellbeing.',
//     image: require('../../assets/images/Food Health.png'),
//   },
//   {
//     label: 'GLUCOSE INSIGHTS',
//     title: 'Get Personal',
//     highlight: 'Health Insights.',
//     description:
//       'Understand your glucose trends and personal health data.',
//     image: require('../../assets/images/Glucose Insights.png'),
//   },
//   {
//     label: 'DOCTOR CONSULTATION',
//     title: 'Expert Doctors',
//     highlight: 'at Your Fingertips.',
//     description:
//       'Connect with doctors and book appointments with ease.',
//     image: require('../../assets/images/Doctor Consultation.png'),
//   },
//   {
//     label: 'FITNESS TRACKING',
//     title: 'Track Your Fitness',
//     highlight: 'Effortlessly.',
//     description:
//       'Track your daily activity, steps and heart rate.',
//     image: require('../../assets/images/Fitness Tracking.png'),
//   },
// ];

// export default function App() {
//   const [page, setPage] = useState(0);
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [verified, setVerified] = useState(false);

//   const sendDemoOTP = () => {
//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       Alert.alert(
//         'Invalid Mobile Number',
//         'Please enter a valid 10-digit Indian mobile number.'
//       );
//       return;
//     }

//     setOtp('');
//     setOtpSent(true);
//     setPage(5);

//     Alert.alert(
//       'Demo OTP',
//       'Your demo OTP is 123456. Real SMS is not sent.'
//     );
//   };

//   const verifyDemoOTP = () => {
//     if (otp.length !== 6) {
//       Alert.alert('Invalid OTP', 'Please enter all 6 digits.');
//       return;
//     }

//     if (otp !== '123456') {
//       Alert.alert('Incorrect OTP', 'For demo, enter 123456.');
//       return;
//     }

//     setVerified(true);
//     setPage(6);
//   };

//   const resendDemoOTP = () => {
//     setOtp('');
//     Alert.alert(
//       'Demo OTP',
//       'Your demo OTP is 123456. Real SMS is not sent.'
//     );
//   };

//   const renderButton = (label, onPress) => (
//     <Pressable style={styles.primaryButton} onPress={onPress}>
//       <Text style={styles.primaryButtonText}>{label}</Text>
//     </Pressable>
//   );

//   const renderOnboarding = () => {
//     const screen = onboardingScreens[page];

//     return (
//       <ScrollView
//         contentContainerStyle={styles.onboardingContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <Text style={styles.brand}>💙 MyTwin</Text>

//         <Text style={styles.label}>{screen.label}</Text>

//         <Image
//           source={screen.image}
//           style={styles.heroImage}
//           resizeMode="contain"
//         />

//         <Text style={styles.title}>{screen.title}</Text>
//         <Text style={styles.highlight}>{screen.highlight}</Text>
//         <Text style={styles.description}>
//           {screen.description}
//         </Text>

//         <View style={styles.dots}>
//           {onboardingScreens.map((item, index) => (
//             <Pressable
//               key={item.label}
//               onPress={() => setPage(index)}
//               style={[
//                 styles.dot,
//                 page === index && styles.activeDot,
//               ]}
//             />
//           ))}
//         </View>

//         {renderButton(
//           page === 3 ? 'Get Started' : 'Continue',
//           () => setPage(page === 3 ? 4 : page + 1)
//         )}

//         {page > 0 && (
//           <Pressable
//             onPress={() => setPage(page - 1)}
//             style={styles.backButton}
//           >
//             <Text style={styles.backText}>Back</Text>
//           </Pressable>
//         )}
//       </ScrollView>
//     );
//   };

//   const renderLogin = () => (
//     <View style={styles.authContent}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.iconCircle}>
//         <Text style={styles.phoneIcon}>✆</Text>
//       </View>

//       <Text style={styles.title}>Welcome to MyTwin</Text>
//       <Text style={styles.description}>
//         Enter your mobile number to continue
//       </Text>

//       <Text style={styles.inputLabel}>Mobile Number</Text>

//       <View style={styles.phoneInputRow}>
//         <Text style={styles.countryCode}>🇮🇳 +91</Text>

//         <TextInput
//           style={styles.phoneInput}
//           placeholder="Enter 10-digit number"
//           placeholderTextColor="#929BB0"
//           keyboardType="phone-pad"
//           maxLength={10}
//           value={mobile}
//           onChangeText={(value) =>
//             setMobile(value.replace(/\D/g, '').slice(0, 10))
//           }
//         />
//       </View>

//       <Text style={styles.helperText}>
//         We will verify your mobile number with an OTP.
//       </Text>

//       {renderButton('Continue', sendDemoOTP)}

//       <Text style={styles.terms}>
//         By continuing, you agree to our Terms & Privacy Policy.
//       </Text>
//     </View>
//   );

//   const renderOTP = () => (
//     <View style={styles.authContent}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.iconCircle}>
//         <Text style={styles.phoneIcon}>✉</Text>
//       </View>

//       <Text style={styles.title}>Verify OTP</Text>

//       <Text style={styles.description}>
//         Enter the 6-digit verification code for
//       </Text>

//       <Text style={styles.mobileDisplay}>+91 {mobile}</Text>

//       <Text style={styles.inputLabel}>One-Time Password</Text>

//       <TextInput
//         style={styles.otpInput}
//         placeholder="Enter 6-digit OTP"
//         placeholderTextColor="#929BB0"
//         keyboardType="number-pad"
//         maxLength={6}
//         value={otp}
//         onChangeText={(value) =>
//           setOtp(value.replace(/\D/g, '').slice(0, 6))
//         }
//       />

//       {renderButton('Verify OTP', verifyDemoOTP)}

//       <Pressable onPress={resendDemoOTP} style={styles.backButton}>
//         <Text style={styles.resendText}>Resend OTP</Text>
//       </Pressable>

//       <Pressable
//         onPress={() => {
//           setOtp('');
//           setPage(4);
//         }}
//         style={styles.backButton}
//       >
//         <Text style={styles.backText}>Change Mobile Number</Text>
//       </Pressable>
//     </View>
//   );

//   const renderSuccess = () => (
//     <View style={styles.authContent}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.successCircle}>
//         <Text style={styles.successIcon}>✓</Text>
//       </View>

//       <Text style={styles.title}>You're Verified!</Text>

//       <Text style={styles.description}>
//         Your demo mobile verification is complete.
//       </Text>

//       <Text style={styles.mobileDisplay}>+91 {mobile}</Text>

//       {renderButton('Go to MyTwin', () =>
//         Alert.alert(
//           'Welcome to MyTwin',
//           'Login demo successful! Connect your backend to continue.'
//         )
//       )}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor="#F7F9FF"
//       />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         {page < 4
//           ? renderOnboarding()
//           : page === 4
//           ? renderLogin()
//           : page === 5
//           ? renderOTP()
//           : renderSuccess()}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F7F9FF',
//   },
//   flex: {
//     flex: 1,
//   },
//   onboardingContent: {
//     flexGrow: 1,
//     paddingHorizontal: 24,
//     paddingTop: 18,
//     paddingBottom: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   authContent: {
//     flex: 1,
//     paddingHorizontal: 26,
//     justifyContent: 'center',
//     alignItems: 'stretch',
//   },
//   brand: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#155EEF',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   label: {
//     color: '#155EEF',
//     fontSize: 12,
//     fontWeight: '800',
//     letterSpacing: 2,
//     textAlign: 'center',
//     marginBottom: 14,
//   },
//   heroImage: {
//     width: '100%',
//     height: 290,
//     marginBottom: 22,
//   },
//   title: {
//     color: '#182230',
//     fontSize: 27,
//     lineHeight: 35,
//     fontWeight: '800',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   highlight: {
//     color: '#155EEF',
//     fontSize: 23,
//     lineHeight: 31,
//     fontWeight: '700',
//     textAlign: 'center',
//   },
//   description: {
//     color: '#667085',
//     fontSize: 15,
//     lineHeight: 23,
//     textAlign: 'center',
//     marginTop: 12,
//     marginBottom: 24,
//   },
//   dots: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 24,
//     gap: 9,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 10,
//     backgroundColor: '#D0D5DD',
//   },
//   activeDot: {
//     width: 24,
//     backgroundColor: '#155EEF',
//   },
//   primaryButton: {
//     minHeight: 54,
//     backgroundColor: '#155EEF',
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 18,
//     marginTop: 8,
//   },
//   primaryButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   backButton: {
//     paddingVertical: 15,
//     alignItems: 'center',
//   },
//   backText: {
//     color: '#475467',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   iconCircle: {
//     width: 78,
//     height: 78,
//     borderRadius: 39,
//     backgroundColor: '#E8F0FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 24,
//   },
//   phoneIcon: {
//     color: '#155EEF',
//     fontSize: 35,
//     fontWeight: '700',
//   },
//   inputLabel: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#344054',
//     marginBottom: 9,
//   },
//   phoneInputRow: {
//     minHeight: 58,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 14,
//     paddingHorizontal: 12,
//   },
//   countryCode: {
//     fontSize: 15,
//     color: '#344054',
//     fontWeight: '700',
//     paddingRight: 12,
//     borderRightWidth: 1,
//     borderRightColor: '#D0D5DD',
//   },
//   phoneInput: {
//     flex: 1,
//     minWidth: 0,
//     paddingVertical: 13,
//     paddingHorizontal: 12,
//     fontSize: 16,
//     color: '#182230',
//   },
//   helperText: {
//     fontSize: 12,
//     color: '#667085',
//     marginTop: 10,
//     marginBottom: 16,
//   },
//   terms: {
//     fontSize: 11,
//     lineHeight: 17,
//     color: '#98A2B3',
//     textAlign: 'center',
//     marginTop: 22,
//   },
//   mobileDisplay: {
//     textAlign: 'center',
//     color: '#155EEF',
//     fontSize: 17,
//     fontWeight: '700',
//     marginTop: -12,
//     marginBottom: 25,
//   },
//   otpInput: {
//     minHeight: 62,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 14,
//     fontSize: 23,
//     letterSpacing: 8,
//     textAlign: 'center',
//     color: '#182230',
//     paddingHorizontal: 12,
//     marginBottom: 18,
//   },
//   resendText: {
//     color: '#155EEF',
//     fontSize: 14,
//     fontWeight: '700',
//   },
//   successCircle: {
//     width: 86,
//     height: 86,
//     borderRadius: 43,
//     backgroundColor: '#D1FADF',
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 24,
//   },
//   successIcon: {
//     color: '#039855',
//     fontSize: 45,
//     fontWeight: '700',
//   },
// });






// import { useState } from 'react';
// import {
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// const onboardingScreens = [
//   {
//     label: 'FOOD & HEALTH',
//     title: 'MyTwin shows you',
//     highlight: 'how food affects your health.',
//     description:
//       'Discover how your daily food choices can affect your wellbeing.',
//     image: require('../../assets/images/Food Health.png'),
//   },
//   {
//     label: 'GLUCOSE INSIGHTS',
//     title: 'Get Personal',
//     highlight: 'Health Insights.',
//     description:
//       'Understand your glucose trends and personal health data.',
//     image: require('../../assets/images/Glucose Insights.png'),
//   },
//   {
//     label: 'DOCTOR CONSULTATION',
//     title: 'Expert Doctors',
//     highlight: 'at Your Fingertips.',
//     description:
//       'Connect with doctors and book appointments with ease.',
//     image: require('../../assets/images/Doctor Consultation.png'),
//   },
//   {
//     label: 'FITNESS TRACKING',
//     title: 'Track Your Fitness',
//     highlight: 'Effortlessly.',
//     description:
//       'Track your daily activity, steps and heart rate.',
//     image: require('../../assets/images/Fitness Tracking.png'),
//   },
// ];

// export default function App() {
//   const [page, setPage] = useState(0);

//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState(25);
//   const [weight, setWeight] = useState(60);

//   const sendOTP = () => {
//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       Alert.alert(
//         'Invalid Mobile Number',
//         'Enter a valid 10-digit Indian mobile number.'
//       );
//       return;
//     }

//     setOtp('');
//     setPage(5);

//     Alert.alert(
//       'Demo OTP',
//       'Demo OTP is 123456. No SMS has been sent.'
//     );
//   };

//   const verifyOTP = () => {
//     if (otp.length !== 6) {
//       Alert.alert('Invalid OTP', 'Enter all 6 digits.');
//       return;
//     }

//     if (otp !== '123456') {
//       Alert.alert(
//         'Incorrect OTP',
//         'For this demo, enter 123456.'
//       );
//       return;
//     }

//     setPage(6);
//   };

//   const submitProfile = () => {
//     if (!name.trim()) {
//       Alert.alert('Required', 'Please enter your full name.');
//       return;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
//       Alert.alert('Invalid Email', 'Enter a valid email address.');
//       return;
//     }

//     if (!/^\d{6}$/.test(pincode)) {
//       Alert.alert('Invalid Pincode', 'Enter a 6-digit pincode.');
//       return;
//     }

//     if (!gender) {
//       Alert.alert('Required', 'Please select your gender.');
//       return;
//     }

//     setPage(7);
//   };

//   const button = (label, onPress) => (
//     <Pressable
//       style={styles.primaryButton}
//       onPress={onPress}
//     >
//       <Text style={styles.primaryButtonText}>{label}</Text>
//     </Pressable>
//   );

//   const field = (
//     label,
//     value,
//     onChangeText,
//     placeholder,
//     options = {}
//   ) => (
//     <View style={styles.field}>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         style={styles.input}
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         placeholderTextColor="#98A2B3"
//         {...options}
//       />
//     </View>
//   );

//   // ONBOARDING SCREENS
//   const renderOnboarding = () => {
//     const screen = onboardingScreens[page];

//     return (
//       <ScrollView
//         contentContainerStyle={styles.onboardingContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.smallLabel}>{screen.label}</Text>

//         <Image
//           source={screen.image}
//           style={styles.heroImage}
//           resizeMode="contain"
//         />

//         <Text style={styles.title}>{screen.title}</Text>
//         <Text style={styles.highlight}>{screen.highlight}</Text>

//         <Text style={styles.description}>
//           {screen.description}
//         </Text>

//         <View style={styles.dots}>
//           {onboardingScreens.map((item, index) => (
//             <Pressable
//               key={item.label}
//               onPress={() => setPage(index)}
//               style={[
//                 styles.dot,
//                 page === index && styles.activeDot,
//               ]}
//             />
//           ))}
//         </View>

//         {button(
//           page === 3 ? 'Get Started' : 'Continue',
//           () => setPage(page === 3 ? 4 : page + 1)
//         )}

//         {page > 0 && (
//           <Pressable
//             style={styles.textButton}
//             onPress={() => setPage(page - 1)}
//           >
//             <Text style={styles.secondaryText}>Back</Text>
//           </Pressable>
//         )}
//       </ScrollView>
//     );
//   };

//   // MOBILE LOGIN
//   const renderLogin = () => (
//     <ScrollView
//       contentContainerStyle={styles.authContent}
//       keyboardShouldPersistTaps="handled"
//     >
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.iconCircle}>
//         <Text style={styles.iconText}>☎</Text>
//       </View>

//       <Text style={styles.title}>Welcome to MyTwin</Text>
//       <Text style={styles.description}>
//         Enter your mobile number to continue.
//       </Text>

//       <Text style={styles.label}>Mobile Number</Text>

//       <View style={styles.phoneRow}>
//         <Text style={styles.countryCode}>🇮🇳 +91</Text>

//         <TextInput
//           style={styles.phoneInput}
//           placeholder="10-digit mobile number"
//           placeholderTextColor="#98A2B3"
//           keyboardType="phone-pad"
//           maxLength={10}
//           value={mobile}
//           onChangeText={(value) =>
//             setMobile(value.replace(/\D/g, '').slice(0, 10))
//           }
//         />
//       </View>

//       {button('Send OTP', sendOTP)}

//       <Text style={styles.privacy}>
//         We will verify your mobile number.
//       </Text>
//     </ScrollView>
//   );

//   // DEMO OTP VERIFICATION
//   const renderOTP = () => (
//     <ScrollView
//       contentContainerStyle={styles.authContent}
//       keyboardShouldPersistTaps="handled"
//     >
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.iconCircle}>
//         <Text style={styles.iconText}>✉</Text>
//       </View>

//       <Text style={styles.title}>Verify OTP</Text>
//       <Text style={styles.description}>
//         Enter the 6-digit code for +91 {mobile}
//       </Text>

//       {field(
//         'One-Time Password',
//         otp,
//         (value) => setOtp(value.replace(/\D/g, '').slice(0, 6)),
//         'Enter 6-digit OTP',
//         {
//           keyboardType: 'number-pad',
//           maxLength: 6,
//           textAlign: 'center',
//         }
//       )}

//       {button('Verify OTP', verifyOTP)}

//       <Pressable
//         style={styles.textButton}
//         onPress={() => {
//           setOtp('');
//           setPage(4);
//         }}
//       >
//         <Text style={styles.linkText}>Change Mobile Number</Text>
//       </Pressable>

//       <Pressable
//         style={styles.textButton}
//         onPress={() =>
//           Alert.alert(
//             'Demo OTP',
//             'Use 123456. No SMS has been sent.'
//           )
//         }
//       >
//         <Text style={styles.linkText}>Resend OTP</Text>
//       </Pressable>
//     </ScrollView>
//   );

//   // PROFILE FORM
//   const renderProfile = () => (
//     <ScrollView
//       contentContainerStyle={styles.profileContent}
//       keyboardShouldPersistTaps="handled"
//       showsVerticalScrollIndicator={false}
//     >
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.progressTrack}>
//         <View style={styles.progressFill} />
//       </View>

//       <Text style={styles.stepText}>
//         STEP 1 OF 2 · YOUR PROFILE
//       </Text>

//       <Text style={styles.title}>Build Your Health Profile</Text>

//       <Text style={styles.description}>
//         Tell us a little about yourself to personalize your health journey.
//       </Text>

//       {field('Full Name', name, setName, 'Enter your full name', {
//         autoCapitalize: 'words',
//       })}

//       {field(
//         'Email Address',
//         email,
//         setEmail,
//         'Enter your email address',
//         {
//           keyboardType: 'email-address',
//           autoCapitalize: 'none',
//           autoCorrect: false,
//         }
//       )}

//       {field(
//         'Pincode',
//         pincode,
//         (value) =>
//           setPincode(value.replace(/\D/g, '').slice(0, 6)),
//         'Enter 6-digit pincode',
//         { keyboardType: 'number-pad', maxLength: 6 }
//       )}

//       <Text style={styles.label}>Gender</Text>

//       <View style={styles.genderRow}>
//         {['Male', 'Female', 'Other'].map((item) => (
//           <Pressable
//             key={item}
//             onPress={() => setGender(item)}
//             style={[
//               styles.genderButton,
//               gender === item && styles.genderSelected,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.genderText,
//                 gender === item && styles.genderTextSelected,
//               ]}
//             >
//               {item}
//             </Text>
//           </Pressable>
//         ))}
//       </View>

//       {button('Complete Profile', submitProfile)}

//       <Text style={styles.privacy}>
//         Your information helps personalize your experience.
//       </Text>
//     </ScrollView>
//   );

//   // PROFILE COMPLETED
//   const renderSuccess = () => (
//     <ScrollView
//       contentContainerStyle={styles.successContent}
//       showsVerticalScrollIndicator={false}
//     >
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.successCircle}>
//         <Text style={styles.successIcon}>✓</Text>
//       </View>

//       <Text style={styles.title}>Profile Completed!</Text>

//       <Text style={styles.description}>
//         Welcome, {name}! Your profile form is complete.
//       </Text>

//       <Text style={styles.summary}>Email: {email}</Text>
//       <Text style={styles.summary}>Pincode: {pincode}</Text>
//       <Text style={styles.summary}>Gender: {gender}</Text>
//       <Text style={styles.summary}>Mobile: +91 {mobile}</Text>

//       {button('Continue to MyTwin', () => setPage(8))}
//     </ScrollView>
//   );

//   // AGE SELECTION: 1–100
//   const renderAgeScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <Text style={styles.ageTitle}>What is your age?</Text>

//       <Text style={styles.ageDescription}>
//         Select your age to personalize your health journey.
//       </Text>

//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{age}</Text>
//         <Text style={styles.ageYears}>years old</Text>
//       </View>

//       <Text style={styles.ageHint}>Select your age below</Text>

//       <ScrollView
//         style={styles.ageList}
//         contentContainerStyle={styles.ageListContent}
//         showsVerticalScrollIndicator
//       >
//         {Array.from({ length: 100 }, (_, index) => index + 1).map(
//           (number) => (
//             <Pressable
//               key={number}
//               style={[
//                 styles.ageOption,
//                 age === number && styles.ageOptionSelected,
//               ]}
//               onPress={() => setAge(number)}
//             >
//               <Text
//                 style={[
//                   styles.ageOptionText,
//                   age === number && styles.ageOptionTextSelected,
//                 ]}
//               >
//                 {number}
//               </Text>
//             </Pressable>
//           )
//         )}
//       </ScrollView>

//       <Pressable
//         style={styles.primaryButton}
//         onPress={() => setPage(9)}
//       >
//         <Text style={styles.primaryButtonText}>Continue</Text>
//       </Pressable>
//     </View>
//   );

//   // WEIGHT SELECTION: 1–150 KG
//   const renderWeightScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <Text style={styles.ageTitle}>
//         What is your current weight?
//       </Text>

//       <Text style={styles.ageDescription}>
//         Select your current weight to personalize your health journey.
//       </Text>

//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{weight}</Text>
//         <Text style={styles.ageYears}>kg</Text>
//       </View>

//       <Text style={styles.ageHint}>Select your weight below</Text>

//       <ScrollView
//         style={styles.ageList}
//         contentContainerStyle={styles.ageListContent}
//         showsVerticalScrollIndicator
//       >
//         {Array.from({ length: 150 }, (_, index) => index + 1).map(
//           (number) => (
//             <Pressable
//               key={number}
//               style={[
//                 styles.ageOption,
//                 weight === number && styles.ageOptionSelected,
//               ]}
//               onPress={() => setWeight(number)}
//             >
//               <Text
//                 style={[
//                   styles.ageOptionText,
//                   weight === number && styles.ageOptionTextSelected,
//                 ]}
//               >
//                 {number} kg
//               </Text>
//             </Pressable>
//           )
//         )}
//       </ScrollView>

//       <Pressable
//         style={styles.primaryButton}
//         onPress={() =>
//           Alert.alert(
//             'Weight Selected',
//             `Your selected weight is ${weight} kg.`
//           )
//         }
//       >
//         <Text style={styles.primaryButtonText}>Continue</Text>
//       </Pressable>
//     </View>
//   );

//   // SCREEN ROUTING
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor="#F5F8FF"
//       />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         {page < 4
//           ? renderOnboarding()
//           : page === 4
//           ? renderLogin()
//           : page === 5
//           ? renderOTP()
//           : page === 6
//           ? renderProfile()
//           : page === 7
//           ? renderSuccess()
//           : page === 8
//           ? renderAgeScreen()
//           : page === 9
//           ? renderWeightScreen()
//           : renderOnboarding()}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F8FF',
//   },
//   flex: {
//     flex: 1,
//   },
//   onboardingContent: {
//     flexGrow: 1,
//     padding: 24,
//     paddingTop: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   authContent: {
//     flexGrow: 1,
//     paddingHorizontal: 26,
//     paddingVertical: 28,
//     justifyContent: 'center',
//   },
//   profileContent: {
//     flexGrow: 1,
//     paddingHorizontal: 24,
//     paddingTop: 24,
//     paddingBottom: 35,
//   },
//   brand: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#155EEF',
//     textAlign: 'center',
//     marginBottom: 28,
//   },
//   smallLabel: {
//     fontSize: 12,
//     fontWeight: '800',
//     letterSpacing: 2,
//     color: '#155EEF',
//     marginBottom: 12,
//   },
//   heroImage: {
//     width: '100%',
//     height: 280,
//     marginBottom: 18,
//   },
//   title: {
//     fontSize: 27,
//     lineHeight: 35,
//     fontWeight: '800',
//     color: '#172B4D',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   highlight: {
//     fontSize: 22,
//     lineHeight: 30,
//     fontWeight: '700',
//     color: '#155EEF',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 14,
//     lineHeight: 22,
//     color: '#667085',
//     textAlign: 'center',
//     marginTop: 12,
//     marginBottom: 24,
//   },
//   dots: {
//     flexDirection: 'row',
//     gap: 9,
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   dot: {
//     height: 8,
//     width: 8,
//     borderRadius: 10,
//     backgroundColor: '#D0D5DD',
//   },
//   activeDot: {
//     width: 24,
//     backgroundColor: '#155EEF',
//   },
//   primaryButton: {
//     minHeight: 54,
//     backgroundColor: '#155EEF',
//     borderRadius: 14,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 18,
//     paddingHorizontal: 15,
//   },
//   primaryButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   iconCircle: {
//     width: 76,
//     height: 76,
//     borderRadius: 38,
//     backgroundColor: '#E8F0FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 24,
//   },
//   iconText: {
//     fontSize: 32,
//     color: '#155EEF',
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#344054',
//     marginTop: 16,
//     marginBottom: 9,
//   },
//   input: {
//     minHeight: 53,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: '#172B4D',
//   },
//   phoneRow: {
//     minHeight: 56,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//   },
//   countryCode: {
//     color: '#344054',
//     fontSize: 14,
//     fontWeight: '700',
//     borderRightWidth: 1,
//     borderRightColor: '#D0D5DD',
//     paddingRight: 12,
//   },
//   phoneInput: {
//     flex: 1,
//     minWidth: 0,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     color: '#172B4D',
//     fontSize: 15,
//   },
//   field: {
//     marginBottom: 5,
//   },
//   textButton: {
//     padding: 12,
//     alignItems: 'center',
//   },
//   secondaryText: {
//     color: '#475467',
//     fontWeight: '600',
//   },
//   linkText: {
//     color: '#155EEF',
//     fontWeight: '700',
//   },
//   privacy: {
//     color: '#98A2B3',
//     textAlign: 'center',
//     fontSize: 11,
//     lineHeight: 17,
//     marginTop: 17,
//   },
//   progressTrack: {
//     height: 5,
//     backgroundColor: '#DCE6FF',
//     borderRadius: 5,
//     overflow: 'hidden',
//     marginBottom: 12,
//   },
//   progressFill: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#155EEF',
//   },
//   stepText: {
//     color: '#155EEF',
//     fontSize: 10,
//     fontWeight: '800',
//     letterSpacing: 1.2,
//     marginBottom: 20,
//   },
//   genderRow: {
//     flexDirection: 'row',
//     gap: 9,
//   },
//   genderButton: {
//     flex: 1,
//     height: 48,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   genderSelected: {
//     backgroundColor: '#E8F0FF',
//     borderColor: '#155EEF',
//   },
//   genderText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#475467',
//   },
//   genderTextSelected: {
//     color: '#155EEF',
//   },
//   successContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 25,
//     paddingVertical: 24,
//   },
//   successCircle: {
//     width: 82,
//     height: 82,
//     borderRadius: 41,
//     backgroundColor: '#D1FADF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 25,
//   },
//   successIcon: {
//     fontSize: 42,
//     fontWeight: '800',
//     color: '#039855',
//   },
//   summary: {
//     color: '#475467',
//     fontSize: 15,
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   selectionScreen: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 24,
//     paddingBottom: 12,
//   },
//   ageTitle: {
//     fontSize: 28,
//     lineHeight: 36,
//     fontWeight: '800',
//     color: '#172B4D',
//     textAlign: 'center',
//   },
//   ageDescription: {
//     fontSize: 14,
//     lineHeight: 22,
//     color: '#667085',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   ageSelectedBox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E8F0FF',
//     borderRadius: 20,
//     paddingVertical: 12,
//     marginTop: 18,
//   },
//   ageSelectedNumber: {
//     fontSize: 42,
//     fontWeight: '800',
//     color: '#155EEF',
//   },
//   ageYears: {
//     fontSize: 14,
//     color: '#475467',
//   },
//   ageHint: {
//     fontSize: 13,
//     color: '#667085',
//     marginTop: 14,
//     marginBottom: 8,
//   },
//   ageList: {
//     flex: 1,
//   },
//   ageListContent: {
//     paddingBottom: 10,
//   },
//   ageOption: {
//     paddingVertical: 13,
//     marginBottom: 7,
//     borderRadius: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#EAECF0',
//   },
//   ageOptionSelected: {
//     backgroundColor: '#155EEF',
//     borderColor: '#155EEF',
//   },
//   ageOptionText: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#344054',
//   },
//   ageOptionTextSelected: {
//     color: '#FFFFFF',
//   },
// });












// import { useState } from 'react';
// import {
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// const onboardingScreens = [
//   {
//     label: 'FOOD & HEALTH',
//     title: 'MyTwin shows you',
//     highlight: 'how food affects your health.',
//     description: 'Discover how your daily food choices can affect your wellbeing.',
//     image: require('../../assets/images/Food Health.png'),
//   },
//   {
//     label: 'GLUCOSE INSIGHTS',
//     title: 'Get Personal',
//     highlight: 'Health Insights.',
//     description: 'Understand your glucose trends and personal health data.',
//     image: require('../../assets/images/Glucose Insights.png'),
//   },
//   {
//     label: 'DOCTOR CONSULTATION',
//     title: 'Expert Doctors',
//     highlight: 'at Your Fingertips.',
//     description: 'Connect with doctors and book appointments with ease.',
//     image: require('../../assets/images/Doctor Consultation.png'),
//   },
//   {
//     label: 'FITNESS TRACKING',
//     title: 'Track Your Fitness',
//     highlight: 'Effortlessly.',
//     description: 'Track your daily activity, steps and heart rate.',
//     image: require('../../assets/images/Fitness Tracking.png'),
//   },
// ];

// export default function App() {
//   const [page, setPage] = useState(0);

//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState(25);
//   const [weight, setWeight] = useState(60);

//   const [heightUnit, setHeightUnit] = useState('cm');
//   const [heightCm, setHeightCm] = useState(170);
//   const [heightFeet, setHeightFeet] = useState(5);
//   const [heightInches, setHeightInches] = useState(7);

//   const sendOTP = () => {
//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       Alert.alert('Invalid Mobile Number', 'Enter a valid 10-digit Indian mobile number.');
//       return;
//     }

//     setOtp('');
//     setPage(5);
//     Alert.alert('Demo OTP', 'Demo OTP is 123456. No SMS has been sent.');
//   };

//   const verifyOTP = () => {
//     if (otp.length !== 6) {
//       Alert.alert('Invalid OTP', 'Enter all 6 digits.');
//       return;
//     }

//     if (otp !== '123456') {
//       Alert.alert('Incorrect OTP', 'For this demo, enter 123456.');
//       return;
//     }

//     setPage(6);
//   };

//   const submitProfile = () => {
//     if (!name.trim()) {
//       Alert.alert('Required', 'Please enter your full name.');
//       return;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
//       Alert.alert('Invalid Email', 'Enter a valid email address.');
//       return;
//     }

//     if (!/^\d{6}$/.test(pincode)) {
//       Alert.alert('Invalid Pincode', 'Enter a 6-digit pincode.');
//       return;
//     }

//     if (!gender) {
//       Alert.alert('Required', 'Please select your gender.');
//       return;
//     }

//     setPage(7);
//   };

//   const button = (label, onPress) => (
//     <Pressable style={styles.primaryButton} onPress={onPress}>
//       <Text style={styles.primaryButtonText}>{label}</Text>
//     </Pressable>
//   );

//   const field = (label, value, onChangeText, placeholder, options = {}) => (
//     <View style={styles.field}>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         style={styles.input}
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         placeholderTextColor="#98A2B3"
//         {...options}
//       />
//     </View>
//   );

//   // ONBOARDING
//   const renderOnboarding = () => {
//     const screen = onboardingScreens[page];

//     return (
//       <ScrollView contentContainerStyle={styles.onboardingContent} showsVerticalScrollIndicator={false}>
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.smallLabel}>{screen.label}</Text>

//         <Image source={screen.image} style={styles.heroImage} resizeMode="contain" />

//         <Text style={styles.title}>{screen.title}</Text>
//         <Text style={styles.highlight}>{screen.highlight}</Text>
//         <Text style={styles.description}>{screen.description}</Text>

//         <View style={styles.dots}>
//           {onboardingScreens.map((item, index) => (
//             <Pressable
//               key={item.label}
//               onPress={() => setPage(index)}
//               style={[styles.dot, page === index && styles.activeDot]}
//             />
//           ))}
//         </View>

//         {button(page === 3 ? 'Get Started' : 'Continue', () =>
//           setPage(page === 3 ? 4 : page + 1)
//         )}

//         {page > 0 && (
//           <Pressable style={styles.textButton} onPress={() => setPage(page - 1)}>
//             <Text style={styles.secondaryText}>Back</Text>
//           </Pressable>
//         )}
//       </ScrollView>
//     );
//   };

//   // MOBILE LOGIN
//   const renderLogin = () => (
//     <ScrollView contentContainerStyle={styles.authContent} keyboardShouldPersistTaps="handled">
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.iconCircle}>
//         <Text style={styles.iconText}>☎</Text>
//       </View>

//       <Text style={styles.title}>Welcome to MyTwin</Text>
//       <Text style={styles.description}>Enter your mobile number to continue.</Text>

//       <Text style={styles.label}>Mobile Number</Text>
//       <View style={styles.phoneRow}>
//         <Text style={styles.countryCode}>🇮🇳 +91</Text>
//         <TextInput
//           style={styles.phoneInput}
//           placeholder="10-digit mobile number"
//           placeholderTextColor="#98A2B3"
//           keyboardType="phone-pad"
//           maxLength={10}
//           value={mobile}
//           onChangeText={(value) => setMobile(value.replace(/\D/g, '').slice(0, 10))}
//         />
//       </View>

//       {button('Send OTP', sendOTP)}
//       <Text style={styles.privacy}>We will verify your mobile number.</Text>
//     </ScrollView>
//   );

//   // DEMO OTP
//   const renderOTP = () => (
//     <ScrollView contentContainerStyle={styles.authContent} keyboardShouldPersistTaps="handled">
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.iconCircle}>
//         <Text style={styles.iconText}>✉</Text>
//       </View>

//       <Text style={styles.title}>Verify OTP</Text>
//       <Text style={styles.description}>Enter the 6-digit code for +91 {mobile}</Text>

//       {field('One-Time Password', otp, (value) => setOtp(value.replace(/\D/g, '').slice(0, 6)), 'Enter 6-digit OTP', {
//         keyboardType: 'number-pad',
//         maxLength: 6,
//         textAlign: 'center',
//       })}

//       {button('Verify OTP', verifyOTP)}

//       <Pressable style={styles.textButton} onPress={() => { setOtp(''); setPage(4); }}>
//         <Text style={styles.linkText}>Change Mobile Number</Text>
//       </Pressable>

//       <Pressable style={styles.textButton} onPress={() => Alert.alert('Demo OTP', 'Use 123456. No SMS has been sent.')}>
//         <Text style={styles.linkText}>Resend OTP</Text>
//       </Pressable>
//     </ScrollView>
//   );

//   // PROFILE FORM
//   const renderProfile = () => (
//     <ScrollView contentContainerStyle={styles.profileContent} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.progressTrack}>
//         <View style={styles.progressFill} />
//       </View>

//       <Text style={styles.stepText}>STEP 1 OF 2 · YOUR PROFILE</Text>
//       <Text style={styles.title}>Build Your Health Profile</Text>
//       <Text style={styles.description}>Tell us a little about yourself to personalize your health journey.</Text>

//       {field('Full Name', name, setName, 'Enter your full name', { autoCapitalize: 'words' })}

//       {field('Email Address', email, setEmail, 'Enter your email address', {
//         keyboardType: 'email-address',
//         autoCapitalize: 'none',
//         autoCorrect: false,
//       })}

//       {field('Pincode', pincode, (value) => setPincode(value.replace(/\D/g, '').slice(0, 6)), 'Enter 6-digit pincode', {
//         keyboardType: 'number-pad',
//         maxLength: 6,
//       })}

//       <Text style={styles.label}>Gender</Text>
//       <View style={styles.genderRow}>
//         {['Male', 'Female', 'Other'].map((item) => (
//           <Pressable
//             key={item}
//             onPress={() => setGender(item)}
//             style={[styles.genderButton, gender === item && styles.genderSelected]}
//           >
//             <Text style={[styles.genderText, gender === item && styles.genderTextSelected]}>{item}</Text>
//           </Pressable>
//         ))}
//       </View>

//       {button('Complete Profile', submitProfile)}
//       <Text style={styles.privacy}>Your information helps personalize your experience.</Text>
//     </ScrollView>
//   );

//   // PROFILE COMPLETED
//   const renderSuccess = () => (
//     <ScrollView contentContainerStyle={styles.successContent} showsVerticalScrollIndicator={false}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.successCircle}>
//         <Text style={styles.successIcon}>✓</Text>
//       </View>

//       <Text style={styles.title}>Profile Completed!</Text>
//       <Text style={styles.description}>Welcome, {name}! Your profile form is complete.</Text>
//       <Text style={styles.summary}>Email: {email}</Text>
//       <Text style={styles.summary}>Pincode: {pincode}</Text>
//       <Text style={styles.summary}>Gender: {gender}</Text>
//       <Text style={styles.summary}>Mobile: +91 {mobile}</Text>

//       {button('Continue to MyTwin', () => setPage(8))}
//     </ScrollView>
//   );

//   // AGE: 1–100
//   const renderAgeScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <Text style={styles.ageTitle}>What is your age?</Text>
//       <Text style={styles.ageDescription}>Select your age to personalize your health journey.</Text>

//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{age}</Text>
//         <Text style={styles.ageYears}>years old</Text>
//       </View>

//       <Text style={styles.ageHint}>Select your age below</Text>

//       <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent} showsVerticalScrollIndicator>
//         {Array.from({ length: 100 }, (_, index) => index + 1).map((number) => (
//           <Pressable
//             key={number}
//             style={[styles.ageOption, age === number && styles.ageOptionSelected]}
//             onPress={() => setAge(number)}
//           >
//             <Text style={[styles.ageOptionText, age === number && styles.ageOptionTextSelected]}>{number}</Text>
//           </Pressable>
//         ))}
//       </ScrollView>

//       {button('Continue', () => setPage(9))}
//     </View>
//   );

//   // WEIGHT: 1–150 KG
//   const renderWeightScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <Text style={styles.ageTitle}>What is your current weight?</Text>
//       <Text style={styles.ageDescription}>Select your current weight to personalize your health journey.</Text>

//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{weight}</Text>
//         <Text style={styles.ageYears}>kg</Text>
//       </View>

//       <Text style={styles.ageHint}>Select your weight below</Text>

//       <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent} showsVerticalScrollIndicator>
//         {Array.from({ length: 150 }, (_, index) => index + 1).map((number) => (
//           <Pressable
//             key={number}
//             style={[styles.ageOption, weight === number && styles.ageOptionSelected]}
//             onPress={() => setWeight(number)}
//           >
//             <Text style={[styles.ageOptionText, weight === number && styles.ageOptionTextSelected]}>{number} kg</Text>
//           </Pressable>
//         ))}
//       </ScrollView>

//       {button('Continue', () => setPage(10))}
//     </View>
//   );

//   // HEIGHT: CM OR FT/IN
//   const renderHeightScreen = () => {
//     const selectCm = (cm) => {
//       const totalInches = Math.round(cm / 2.54);
//       setHeightCm(cm);
//       setHeightFeet(Math.floor(totalInches / 12));
//       setHeightInches(totalInches % 12);
//     };

//     const selectFeet = (feet) => {
//       const totalCm = Math.round((feet * 12 + heightInches) * 2.54);
//       setHeightFeet(feet);
//       setHeightCm(totalCm);
//     };

//     const selectInches = (inches) => {
//       const totalCm = Math.round((heightFeet * 12 + inches) * 2.54);
//       setHeightInches(inches);
//       setHeightCm(totalCm);
//     };

//     const validHeight = (feet, inches) => {
//       const total = feet * 12 + inches;
//       return total >= 39 && total <= 80;
//     };

//     return (
//       <View style={styles.selectionScreen}>
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.ageTitle}>What is your height?</Text>
//         <Text style={styles.ageDescription}>Select your height to personalize your health journey.</Text>

//         <View style={styles.unitRow}>
//           {['cm', 'ft'].map((unit) => (
//             <Pressable
//               key={unit}
//               style={[styles.unitButton, heightUnit === unit && styles.unitButtonSelected]}
//               onPress={() => setHeightUnit(unit)}
//             >
//               <Text style={[styles.unitButtonText, heightUnit === unit && styles.unitButtonTextSelected]}>
//                 {unit === 'cm' ? 'CM' : 'FT / IN'}
//               </Text>
//             </Pressable>
//           ))}
//         </View>

//         <View style={styles.ageSelectedBox}>
//           {heightUnit === 'cm' ? (
//             <>
//               <Text style={styles.ageSelectedNumber}>{heightCm}</Text>
//               <Text style={styles.ageYears}>cm</Text>
//             </>
//           ) : (
//             <>
//               <Text style={styles.ageSelectedNumber}>{heightFeet}'{heightInches}"</Text>
//               <Text style={styles.ageYears}>{heightCm} cm</Text>
//             </>
//           )}
//         </View>

//         {heightUnit === 'cm' ? (
//           <>
//             <Text style={styles.ageHint}>Select height: 100–200 cm</Text>
//             <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent} showsVerticalScrollIndicator>
//               {Array.from({ length: 101 }, (_, index) => index + 100).map((cm) => (
//                 <Pressable
//                   key={cm}
//                   style={[styles.ageOption, heightCm === cm && styles.ageOptionSelected]}
//                   onPress={() => selectCm(cm)}
//                 >
//                   <Text style={[styles.ageOptionText, heightCm === cm && styles.ageOptionTextSelected]}>{cm} cm</Text>
//                 </Pressable>
//               ))}
//             </ScrollView>
//           </>
//         ) : (
//           <View style={styles.feetInchesRow}>
//             <View style={styles.feetColumn}>
//               <Text style={styles.label}>Feet</Text>
//               <ScrollView style={styles.feetList} nestedScrollEnabled showsVerticalScrollIndicator>
//                 {[3, 4, 5, 6].map((feet) => (
//                   <Pressable
//                     key={feet}
//                     style={[styles.ageOption, heightFeet === feet && styles.ageOptionSelected]}
//                     onPress={() => {
//                       const safeInches = Math.min(
//                         heightInches,
//                         feet === 3 ? 11 : feet === 6 ? 8 : 11
//                       );
//                       const chosenInches = Math.max(
//                         safeInches,
//                         feet === 3 ? 3 : 0
//                       );
//                       setHeightFeet(feet);
//                       setHeightInches(chosenInches);
//                       setHeightCm(Math.round((feet * 12 + chosenInches) * 2.54));
//                     }}
//                   >
//                     <Text style={[styles.ageOptionText, heightFeet === feet && styles.ageOptionTextSelected]}>{feet} ft</Text>
//                   </Pressable>
//                 ))}
//               </ScrollView>
//             </View>

//             <View style={styles.feetColumn}>
//               <Text style={styles.label}>Inches</Text>
//               <ScrollView style={styles.feetList} nestedScrollEnabled showsVerticalScrollIndicator>
//                 {Array.from({ length: 12 }, (_, index) => index).filter((inches) => validHeight(heightFeet, inches)).map((inches) => (
//                   <Pressable
//                     key={inches}
//                     style={[styles.ageOption, heightInches === inches && styles.ageOptionSelected]}
//                     onPress={() => selectInches(inches)}
//                   >
//                     <Text style={[styles.ageOptionText, heightInches === inches && styles.ageOptionTextSelected]}>{inches} in</Text>
//                   </Pressable>
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//         )}

//         {button('Continue', () =>
//           Alert.alert(
//             'Height Selected',
//             heightUnit === 'cm'
//               ? `Your selected height is ${heightCm} cm.`
//               : `Your selected height is ${heightFeet}'${heightInches}" (${heightCm} cm).`
//           )
//         )}
//       </View>
//     );
//   };

//   // SCREEN ROUTING
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#F5F8FF" />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         {page < 4
//           ? renderOnboarding()
//           : page === 4
//           ? renderLogin()
//           : page === 5
//           ? renderOTP()
//           : page === 6
//           ? renderProfile()
//           : page === 7
//           ? renderSuccess()
//           : page === 8
//           ? renderAgeScreen()
//           : page === 9
//           ? renderWeightScreen()
//           : page === 10
//           ? renderHeightScreen()
//           : renderOnboarding()}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F8FF',
//   },
//   flex: { flex: 1 },
//   onboardingContent: {
//     flexGrow: 1,
//     padding: 24,
//     paddingTop: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   authContent: {
//     flexGrow: 1,
//     paddingHorizontal: 26,
//     paddingVertical: 28,
//     justifyContent: 'center',
//   },
//   profileContent: {
//     flexGrow: 1,
//     paddingHorizontal: 24,
//     paddingTop: 24,
//     paddingBottom: 35,
//   },
//   brand: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#155EEF',
//     textAlign: 'center',
//     marginBottom: 28,
//   },
//   smallLabel: {
//     fontSize: 12,
//     fontWeight: '800',
//     letterSpacing: 2,
//     color: '#155EEF',
//     marginBottom: 12,
//   },
//   heroImage: {
//     width: '100%',
//     height: 280,
//     marginBottom: 18,
//   },
//   title: {
//     fontSize: 27,
//     lineHeight: 35,
//     fontWeight: '800',
//     color: '#172B4D',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   highlight: {
//     fontSize: 22,
//     lineHeight: 30,
//     fontWeight: '700',
//     color: '#155EEF',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 14,
//     lineHeight: 22,
//     color: '#667085',
//     textAlign: 'center',
//     marginTop: 12,
//     marginBottom: 24,
//   },
//   dots: {
//     flexDirection: 'row',
//     gap: 9,
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   dot: {
//     height: 8,
//     width: 8,
//     borderRadius: 10,
//     backgroundColor: '#D0D5DD',
//   },
//   activeDot: {
//     width: 24,
//     backgroundColor: '#155EEF',
//   },
//   primaryButton: {
//     minHeight: 54,
//     backgroundColor: '#155EEF',
//     borderRadius: 14,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 18,
//     paddingHorizontal: 15,
//   },
//   primaryButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   iconCircle: {
//     width: 76,
//     height: 76,
//     borderRadius: 38,
//     backgroundColor: '#E8F0FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 24,
//   },
//   iconText: { fontSize: 32, color: '#155EEF' },
//   label: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#344054',
//     marginTop: 16,
//     marginBottom: 9,
//   },
//   input: {
//     minHeight: 53,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: '#172B4D',
//   },
//   phoneRow: {
//     minHeight: 56,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//   },
//   countryCode: {
//     color: '#344054',
//     fontSize: 14,
//     fontWeight: '700',
//     borderRightWidth: 1,
//     borderRightColor: '#D0D5DD',
//     paddingRight: 12,
//   },
//   phoneInput: {
//     flex: 1,
//     minWidth: 0,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     color: '#172B4D',
//     fontSize: 15,
//   },
//   field: { marginBottom: 5 },
//   textButton: { padding: 12, alignItems: 'center' },
//   secondaryText: { color: '#475467', fontWeight: '600' },
//   linkText: { color: '#155EEF', fontWeight: '700' },
//   privacy: {
//     color: '#98A2B3',
//     textAlign: 'center',
//     fontSize: 11,
//     lineHeight: 17,
//     marginTop: 17,
//   },
//   progressTrack: {
//     height: 5,
//     backgroundColor: '#DCE6FF',
//     borderRadius: 5,
//     overflow: 'hidden',
//     marginBottom: 12,
//   },
//   progressFill: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#155EEF',
//   },
//   stepText: {
//     color: '#155EEF',
//     fontSize: 10,
//     fontWeight: '800',
//     letterSpacing: 1.2,
//     marginBottom: 20,
//   },
//   genderRow: { flexDirection: 'row', gap: 9 },
//   genderButton: {
//     flex: 1,
//     height: 48,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   genderSelected: { backgroundColor: '#E8F0FF', borderColor: '#155EEF' },
//   genderText: { fontSize: 14, fontWeight: '600', color: '#475467' },
//   genderTextSelected: { color: '#155EEF' },
//   successContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 25,
//     paddingVertical: 24,
//   },
//   successCircle: {
//     width: 82,
//     height: 82,
//     borderRadius: 41,
//     backgroundColor: '#D1FADF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 25,
//   },
//   successIcon: { fontSize: 42, fontWeight: '800', color: '#039855' },
//   summary: {
//     color: '#475467',
//     fontSize: 15,
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   selectionScreen: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 24,
//     paddingBottom: 12,
//   },
//   ageTitle: {
//     fontSize: 28,
//     lineHeight: 36,
//     fontWeight: '800',
//     color: '#172B4D',
//     textAlign: 'center',
//   },
//   ageDescription: {
//     fontSize: 14,
//     lineHeight: 22,
//     color: '#667085',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   ageSelectedBox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E8F0FF',
//     borderRadius: 20,
//     paddingVertical: 12,
//     marginTop: 18,
//   },
//   ageSelectedNumber: {
//     fontSize: 42,
//     fontWeight: '800',
//     color: '#155EEF',
//   },
//   ageYears: { fontSize: 14, color: '#475467' },
//   ageHint: {
//     fontSize: 13,
//     color: '#667085',
//     marginTop: 14,
//     marginBottom: 8,
//   },
//   ageList: { flex: 1 },
//   ageListContent: { paddingBottom: 10 },
//   ageOption: {
//     paddingVertical: 13,
//     marginBottom: 7,
//     borderRadius: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#EAECF0',
//   },
//   ageOptionSelected: { backgroundColor: '#155EEF', borderColor: '#155EEF' },
//   ageOptionText: { fontSize: 17, fontWeight: '600', color: '#344054' },
//   ageOptionTextSelected: { color: '#FFFFFF' },
//   unitRow: {
//     flexDirection: 'row',
//     gap: 12,
//     marginTop: 20,
//   },
//   unitButton: {
//     flex: 1,
//     paddingVertical: 14,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   unitButtonSelected: { backgroundColor: '#E8F0FF', borderColor: '#155EEF' },
//   unitButtonText: { color: '#475467', fontWeight: '700', fontSize: 15 },
//   unitButtonTextSelected: { color: '#155EEF' },
//   feetInchesRow: {
//     flex: 1,
//     flexDirection: 'row',
//     gap: 12,
//   },
//   feetColumn: { flex: 1 },
//   feetList: { flex: 1 },
// });










// import { useState } from 'react';
// import {
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// const onboardingScreens = [
//   {
//     label: 'FOOD & HEALTH',
//     title: 'MyTwin shows you',
//     highlight: 'how food affects your health.',
//     description: 'Discover how your daily food choices can affect your wellbeing.',
//     image: require('../../assets/images/Food Health.png'),
//   },
//   {
//     label: 'GLUCOSE INSIGHTS',
//     title: 'Get Personal',
//     highlight: 'Health Insights.',
//     description: 'Understand your glucose trends and personal health data.',
//     image: require('../../assets/images/Glucose Insights.png'),
//   },
//   {
//     label: 'DOCTOR CONSULTATION',
//     title: 'Expert Doctors',
//     highlight: 'at Your Fingertips.',
//     description: 'Connect with doctors and book appointments with ease.',
//     image: require('../../assets/images/Doctor Consultation.png'),
//   },
//   {
//     label: 'FITNESS TRACKING',
//     title: 'Track Your Fitness',
//     highlight: 'Effortlessly.',
//     description: 'Track your daily activity, steps and heart rate.',
//     image: require('../../assets/images/Fitness Tracking.png'),
//   },
// ];

// const questions = [
//   {
//     title: 'How active are you?',
//     description: 'Choose the option that best describes your daily activity.',
//     options: [
//       'Mostly sitting',
//       'Lightly active',
//       'Moderately active',
//       'Very active',
//     ],
//   },
//   {
//     title: 'How many days a week do you eat outside or packaged food?',
//     description: 'Select the number of days in a typical week.',
//     options: ['0 days', '1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'],
//   },
//   {
//     title: 'How much water do you drink most days?',
//     description: 'Choose the option closest to your daily water intake.',
//     options: [
//       'Less than 2 glasses',
//       '2–4 glasses',
//       '5–7 glasses',
//       '8 or more glasses',
//     ],
//   },
//   {
//     title: 'How would you rate your current stress level?',
//     description: 'Choose how you have been feeling recently.',
//     options: [
//       'Very low',
//       'Low',
//       'Moderate',
//       'High',
//       'Very high',
//     ],
//   },
//   {
//     title: 'Please select your health concerns',
//     description: 'Select all that apply. You can also choose None.',
//     options: [
//       'Weight management',
//       'Blood sugar / glucose',
//       'Heart health',
//       'Blood pressure',
//       'Sleep problems',
//       'Stress / mental wellbeing',
//       'Digestive health',
//       'Fitness / low energy',
//       'None',
//       'Other',
//     ],
//     multiple: true,
//   },
// ];

// export default function App() {
//   const [page, setPage] = useState(0);

//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [gender, setGender] = useState('');

//   const [age, setAge] = useState(25);
//   const [weight, setWeight] = useState(60);

//   const [heightUnit, setHeightUnit] = useState('cm');
//   const [heightCm, setHeightCm] = useState(170);
//   const [heightFeet, setHeightFeet] = useState(5);
//   const [heightInches, setHeightInches] = useState(7);

//   const [answers, setAnswers] = useState(['', '', '', '', []]);

//   const button = (label, onPress) => (
//     <Pressable style={styles.primaryButton} onPress={onPress}>
//       <Text style={styles.primaryButtonText}>{label}</Text>
//     </Pressable>
//   );

//   const field = (label, value, onChangeText, placeholder, options = {}) => (
//     <View style={styles.field}>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         style={styles.input}
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         placeholderTextColor="#98A2B3"
//         {...options}
//       />
//     </View>
//   );

//   const sendOTP = () => {
//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       Alert.alert('Invalid Mobile Number', 'Enter a valid 10-digit Indian mobile number.');
//       return;
//     }

//     setOtp('');
//     setPage(5);
//     Alert.alert('Demo OTP', 'Use 123456. No SMS has been sent.');
//   };

//   const verifyOTP = () => {
//     if (otp.length !== 6) {
//       Alert.alert('Invalid OTP', 'Enter all 6 digits.');
//       return;
//     }

//     if (otp !== '123456') {
//       Alert.alert('Incorrect OTP', 'For this demo, enter 123456.');
//       return;
//     }

//     setPage(6);
//   };

//   const submitProfile = () => {
//     if (!name.trim()) {
//       Alert.alert('Required', 'Please enter your full name.');
//       return;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
//       Alert.alert('Invalid Email', 'Enter a valid email address.');
//       return;
//     }

//     if (!/^\d{6}$/.test(pincode)) {
//       Alert.alert('Invalid Pincode', 'Enter a 6-digit pincode.');
//       return;
//     }

//     if (!gender) {
//       Alert.alert('Required', 'Please select your gender.');
//       return;
//     }

//     setPage(7);
//   };

//   // 1. ONBOARDING
//   const renderOnboarding = () => {
//     const screen = onboardingScreens[page];

//     return (
//       <ScrollView contentContainerStyle={styles.onboardingContent}>
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.smallLabel}>{screen.label}</Text>

//         <Image source={screen.image} style={styles.heroImage} resizeMode="contain" />

//         <Text style={styles.title}>{screen.title}</Text>
//         <Text style={styles.highlight}>{screen.highlight}</Text>
//         <Text style={styles.description}>{screen.description}</Text>

//         <View style={styles.dots}>
//           {onboardingScreens.map((item, index) => (
//             <Pressable
//               key={item.label}
//               onPress={() => setPage(index)}
//               style={[styles.dot, page === index && styles.activeDot]}
//             />
//           ))}
//         </View>

//         {button(page === 3 ? 'Get Started' : 'Continue', () =>
//           setPage(page === 3 ? 4 : page + 1)
//         )}

//         {page > 0 && (
//           <Pressable style={styles.textButton} onPress={() => setPage(page - 1)}>
//             <Text style={styles.secondaryText}>Back</Text>
//           </Pressable>
//         )}
//       </ScrollView>
//     );
//   };

//   // 2. MOBILE LOGIN
//   const renderLogin = () => (
//     <ScrollView contentContainerStyle={styles.authContent} keyboardShouldPersistTaps="handled">
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.iconCircle}>
//         <Text style={styles.iconText}>☎</Text>
//       </View>

//       <Text style={styles.title}>Welcome to MyTwin</Text>
//       <Text style={styles.description}>Enter your mobile number to continue.</Text>

//       <Text style={styles.label}>Mobile Number</Text>
//       <View style={styles.phoneRow}>
//         <Text style={styles.countryCode}>🇮🇳 +91</Text>
//         <TextInput
//           style={styles.phoneInput}
//           placeholder="10-digit mobile number"
//           placeholderTextColor="#98A2B3"
//           keyboardType="phone-pad"
//           maxLength={10}
//           value={mobile}
//           onChangeText={(value) => setMobile(value.replace(/\D/g, '').slice(0, 10))}
//         />
//       </View>

//       {button('Send OTP', sendOTP)}
//       <Text style={styles.privacy}>Demo app: OTP verification is simulated.</Text>
//     </ScrollView>
//   );

//   // 3. OTP
//   const renderOTP = () => (
//     <ScrollView contentContainerStyle={styles.authContent} keyboardShouldPersistTaps="handled">
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.iconCircle}>
//         <Text style={styles.iconText}>✉</Text>
//       </View>

//       <Text style={styles.title}>Verify OTP</Text>
//       <Text style={styles.description}>Enter the 6-digit code for +91 {mobile}</Text>

//       {field(
//         'One-Time Password',
//         otp,
//         (value) => setOtp(value.replace(/\D/g, '').slice(0, 6)),
//         'Enter 123456',
//         { keyboardType: 'number-pad', maxLength: 6, textAlign: 'center' }
//       )}

//       {button('Verify OTP', verifyOTP)}

//       <Pressable style={styles.textButton} onPress={() => { setOtp(''); setPage(4); }}>
//         <Text style={styles.linkText}>Change Mobile Number</Text>
//       </Pressable>

//       <Pressable style={styles.textButton} onPress={() => Alert.alert('Demo OTP', 'Use 123456.')}>
//         <Text style={styles.linkText}>Resend OTP</Text>
//       </Pressable>
//     </ScrollView>
//   );

//   // 4. PROFILE
//   const renderProfile = () => (
//     <ScrollView contentContainerStyle={styles.profileContent} keyboardShouldPersistTaps="handled">
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.progressTrack}><View style={styles.progressFill} /></View>

//       <Text style={styles.stepText}>YOUR PROFILE</Text>
//       <Text style={styles.title}>Build Your Health Profile</Text>
//       <Text style={styles.description}>Tell us a little about yourself.</Text>

//       {field('Full Name', name, setName, 'Enter your full name', { autoCapitalize: 'words' })}
//       {field('Email Address', email, setEmail, 'Enter your email address', {
//         keyboardType: 'email-address',
//         autoCapitalize: 'none',
//         autoCorrect: false,
//       })}
//       {field('Pincode', pincode, (value) => setPincode(value.replace(/\D/g, '').slice(0, 6)), 'Enter 6-digit pincode', {
//         keyboardType: 'number-pad',
//         maxLength: 6,
//       })}

//       <Text style={styles.label}>Gender</Text>
//       <View style={styles.genderRow}>
//         {['Male', 'Female', 'Other'].map((item) => (
//           <Pressable
//             key={item}
//             onPress={() => setGender(item)}
//             style={[styles.genderButton, gender === item && styles.genderSelected]}
//           >
//             <Text style={[styles.genderText, gender === item && styles.genderTextSelected]}>
//               {item}
//             </Text>
//           </Pressable>
//         ))}
//       </View>

//       {button('Complete Profile', submitProfile)}
//     </ScrollView>
//   );

//   // 5. PROFILE COMPLETED
//   const renderSuccess = () => (
//     <ScrollView contentContainerStyle={styles.successContent}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.successCircle}><Text style={styles.successIcon}>✓</Text></View>

//       <Text style={styles.title}>Profile Completed!</Text>
//       <Text style={styles.description}>Welcome, {name}! Your profile form is complete.</Text>
//       <Text style={styles.summary}>Email: {email}</Text>
//       <Text style={styles.summary}>Pincode: {pincode}</Text>
//       <Text style={styles.summary}>Gender: {gender}</Text>
//       <Text style={styles.summary}>Mobile: +91 {mobile}</Text>

//       {button('Continue to MyTwin', () => setPage(8))}
//     </ScrollView>
//   );

//   // 6. AGE
//   const renderAgeScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <Text style={styles.ageTitle}>What is your age?</Text>
//       <Text style={styles.ageDescription}>Select your age.</Text>

//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{age}</Text>
//         <Text style={styles.ageYears}>years old</Text>
//       </View>

//       <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent}>
//         {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
//           <Pressable
//             key={number}
//             style={[styles.ageOption, age === number && styles.ageOptionSelected]}
//             onPress={() => setAge(number)}
//           >
//             <Text style={[styles.ageOptionText, age === number && styles.ageOptionTextSelected]}>
//               {number}
//             </Text>
//           </Pressable>
//         ))}
//       </ScrollView>

//       {button('Continue', () => setPage(9))}
//     </View>
//   );

//   // 7. WEIGHT
//   const renderWeightScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <Text style={styles.ageTitle}>What is your current weight?</Text>
//       <Text style={styles.ageDescription}>Select your weight.</Text>

//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{weight}</Text>
//         <Text style={styles.ageYears}>kg</Text>
//       </View>

//       <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent}>
//         {Array.from({ length: 150 }, (_, i) => i + 1).map((number) => (
//           <Pressable
//             key={number}
//             style={[styles.ageOption, weight === number && styles.ageOptionSelected]}
//             onPress={() => setWeight(number)}
//           >
//             <Text style={[styles.ageOptionText, weight === number && styles.ageOptionTextSelected]}>
//               {number} kg
//             </Text>
//           </Pressable>
//         ))}
//       </ScrollView>

//       {button('Continue', () => setPage(10))}
//     </View>
//   );

//   // 8. HEIGHT
//   const renderHeightScreen = () => {
//     const selectCm = (cm) => {
//       const totalInches = Math.round(cm / 2.54);
//       setHeightCm(cm);
//       setHeightFeet(Math.floor(totalInches / 12));
//       setHeightInches(totalInches % 12);
//     };

//     const validHeight = (feet, inches) => {
//       const total = feet * 12 + inches;
//       return total >= 39 && total <= 80;
//     };

//     return (
//       <View style={styles.selectionScreen}>
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.ageTitle}>What is your height?</Text>
//         <Text style={styles.ageDescription}>Select your height.</Text>

//         <View style={styles.unitRow}>
//           {['cm', 'ft'].map((unit) => (
//             <Pressable
//               key={unit}
//               style={[styles.unitButton, heightUnit === unit && styles.unitButtonSelected]}
//               onPress={() => setHeightUnit(unit)}
//             >
//               <Text style={[styles.unitButtonText, heightUnit === unit && styles.unitButtonTextSelected]}>
//                 {unit === 'cm' ? 'CM' : 'FT / IN'}
//               </Text>
//             </Pressable>
//           ))}
//         </View>

//         <View style={styles.ageSelectedBox}>
//           <Text style={styles.ageSelectedNumber}>
//             {heightUnit === 'cm' ? heightCm : `${heightFeet}'${heightInches}"`}
//           </Text>
//           <Text style={styles.ageYears}>
//             {heightUnit === 'cm' ? 'centimetres' : `${heightCm} cm`}
//           </Text>
//         </View>

//         {heightUnit === 'cm' ? (
//           <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent}>
//             {Array.from({ length: 101 }, (_, i) => i + 100).map((cm) => (
//               <Pressable
//                 key={cm}
//                 style={[styles.ageOption, heightCm === cm && styles.ageOptionSelected]}
//                 onPress={() => selectCm(cm)}
//               >
//                 <Text style={[styles.ageOptionText, heightCm === cm && styles.ageOptionTextSelected]}>
//                   {cm} cm
//                 </Text>
//               </Pressable>
//             ))}
//           </ScrollView>
//         ) : (
//           <View style={styles.feetInchesRow}>
//             <View style={styles.feetColumn}>
//               <Text style={styles.label}>Feet</Text>
//               <ScrollView style={styles.feetList}>
//                 {[3, 4, 5, 6].map((feet) => (
//                   <Pressable
//                     key={feet}
//                     style={[styles.ageOption, heightFeet === feet && styles.ageOptionSelected]}
//                     onPress={() => {
//                       let inches = heightInches;
//                       if (feet === 3) inches = Math.max(3, inches);
//                       if (feet === 6) inches = Math.min(8, inches);
//                       setHeightFeet(feet);
//                       setHeightInches(inches);
//                       setHeightCm(Math.round((feet * 12 + inches) * 2.54));
//                     }}
//                   >
//                     <Text style={[styles.ageOptionText, heightFeet === feet && styles.ageOptionTextSelected]}>
//                       {feet} ft
//                     </Text>
//                   </Pressable>
//                 ))}
//               </ScrollView>
//             </View>

//             <View style={styles.feetColumn}>
//               <Text style={styles.label}>Inches</Text>
//               <ScrollView style={styles.feetList}>
//                 {Array.from({ length: 12 }, (_, i) => i)
//                   .filter((inches) => validHeight(heightFeet, inches))
//                   .map((inches) => (
//                     <Pressable
//                       key={inches}
//                       style={[styles.ageOption, heightInches === inches && styles.ageOptionSelected]}
//                       onPress={() => {
//                         setHeightInches(inches);
//                         setHeightCm(Math.round((heightFeet * 12 + inches) * 2.54));
//                       }}
//                     >
//                       <Text style={[styles.ageOptionText, heightInches === inches && styles.ageOptionTextSelected]}>
//                         {inches} in
//                       </Text>
//                     </Pressable>
//                   ))}
//               </ScrollView>
//             </View>
//           </View>
//         )}

//         {button('Continue', () => setPage(11))}
//       </View>
//     );
//   };

//   // 9. QUESTIONS - INTRO + QUESTION SCREENS
//   const renderQuestions = () => {
//     const questionIndex = page - 12;
//     const question = questions[questionIndex];

//     if (page === 11) {
//       return (
//         <View style={styles.questionIntro}>
//           <Text style={styles.brand}>💙 MyTwin</Text>

//           <View style={styles.questionIllustration}>
//             <Text style={styles.questionIllustrationEmoji}>🩺</Text>
//           </View>

//           <Text style={styles.title}>A Few Questions to Learn More About You</Text>
//           <Text style={styles.description}>
//             Help us understand your lifestyle, habits and health concerns so we can personalize your MyTwin experience.
//           </Text>

//           <View style={styles.infoCard}>
//             <Text style={styles.infoCardTitle}>What to expect</Text>
//             <Text style={styles.infoCardText}>✓ 5 quick questions</Text>
//             <Text style={styles.infoCardText}>✓ Choose answers that suit you</Text>
//             <Text style={styles.infoCardText}>✓ You can go back and change answers</Text>
//           </View>

//           {button('Let’s Start', () => setPage(12))}
//           <Pressable style={styles.textButton} onPress={() => setPage(10)}>
//             <Text style={styles.secondaryText}>Back to Height</Text>
//           </Pressable>
//         </View>
//       );
//     }

//     if (page === 17) {
//       return (
//         <ScrollView contentContainerStyle={styles.finalContent}>
//           <Text style={styles.brand}>💙 MyTwin</Text>
//           <View style={styles.successCircle}>
//             <Text style={styles.successIcon}>✓</Text>
//           </View>
//           <Text style={styles.title}>You're All Set!</Text>
//           <Text style={styles.description}>
//             Thank you, {name}. Your lifestyle questionnaire is complete.
//           </Text>

//           <View style={styles.answerSummary}>
//             {questions.map((item, index) => (
//               <View key={item.title} style={styles.answerSummaryItem}>
//                 <Text style={styles.answerQuestion}>{item.title}</Text>
//                 <Text style={styles.answerValue}>
//                   {Array.isArray(answers[index])
//                     ? answers[index].join(', ') || 'Not selected'
//                     : answers[index] || 'Not answered'}
//                 </Text>
//               </View>
//             ))}
//           </View>

//           {button('Finish', () =>
//             Alert.alert(
//               'MyTwin',
//               'Your demo profile and questionnaire are complete.'
//             )
//           )}
//         </ScrollView>
//       );
//     }

//     if (!question) return null;

//     const currentAnswer = answers[questionIndex];

//     const selectOption = (option) => {
//       setAnswers((previous) => {
//         const updated = [...previous];

//         if (question.multiple) {
//           let selected = [...updated[questionIndex]];

//           if (option === 'None') {
//             selected = selected.includes('None') ? [] : ['None'];
//           } else {
//             selected = selected.filter((item) => item !== 'None');
//             selected = selected.includes(option)
//               ? selected.filter((item) => item !== option)
//               : [...selected, option];
//           }

//           updated[questionIndex] = selected;
//         } else {
//           updated[questionIndex] = option;
//         }

//         return updated;
//       });
//     };

//     const isSelected = (option) =>
//       question.multiple
//         ? currentAnswer.includes(option)
//         : currentAnswer === option;

//     const goNext = () => {
//       const hasAnswer = question.multiple
//         ? currentAnswer.length > 0
//         : Boolean(currentAnswer);

//       if (!hasAnswer) {
//         Alert.alert(
//           'Select an Answer',
//           'Please select at least one option before continuing.'
//         );
//         return;
//       }

//       setPage(page === 16 ? 17 : page + 1);
//     };

//     return (
//       <View style={styles.questionScreen}>
//         <Text style={styles.brand}>💙 MyTwin</Text>

//         <View style={styles.questionProgressTrack}>
//           <View style={[styles.questionProgressFill, { width: `${((questionIndex + 1) / questions.length) * 100}%` }]} />
//         </View>

//         <Text style={styles.questionStep}>QUESTION {questionIndex + 1} OF {questions.length}</Text>
//         <Text style={styles.questionTitle}>{question.title}</Text>
//         <Text style={styles.questionDescription}>{question.description}</Text>

//         <ScrollView style={styles.questionOptions} contentContainerStyle={styles.questionOptionsContent}>
//           {question.options.map((option) => (
//             <Pressable
//               key={option}
//               onPress={() => selectOption(option)}
//               style={[
//                 styles.questionOption,
//                 isSelected(option) && styles.questionOptionSelected,
//               ]}
//             >
//               <Text style={[
//                 styles.questionOptionText,
//                 isSelected(option) && styles.questionOptionTextSelected,
//               ]}>
//                 {option}
//               </Text>

//               <View style={[
//                 styles.radioCircle,
//                 isSelected(option) && styles.radioCircleSelected,
//               ]}>
//                 {isSelected(option) && <View style={styles.radioInner} />}
//               </View>
//             </Pressable>
//           ))}
//         </ScrollView>

//         {questionIndex > 0 && (
//           <Pressable style={styles.textButton} onPress={() => setPage(page - 1)}>
//             <Text style={styles.secondaryText}>Back</Text>
//           </Pressable>
//         )}

//         {button(questionIndex === 4 ? 'Complete Questions' : 'Next', goNext)}
//       </View>
//     );
//   };

//   // SCREEN ROUTING
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#F5F8FF" />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         {page < 4
//           ? renderOnboarding()
//           : page === 4
//           ? renderLogin()
//           : page === 5
//           ? renderOTP()
//           : page === 6
//           ? renderProfile()
//           : page === 7
//           ? renderSuccess()
//           : page === 8
//           ? renderAgeScreen()
//           : page === 9
//           ? renderWeightScreen()
//           : page === 10
//           ? renderHeightScreen()
//           : page >= 11 && page <= 17
//           ? renderQuestions()
//           : renderOnboarding()}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5F8FF' },
//   flex: { flex: 1 },

//   onboardingContent: {
//     flexGrow: 1,
//     padding: 24,
//     paddingTop: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   authContent: {
//     flexGrow: 1,
//     paddingHorizontal: 26,
//     paddingVertical: 28,
//     justifyContent: 'center',
//   },
//   profileContent: {
//     flexGrow: 1,
//     paddingHorizontal: 24,
//     paddingTop: 24,
//     paddingBottom: 35,
//   },
//   brand: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#155EEF',
//     textAlign: 'center',
//     marginBottom: 28,
//   },
//   smallLabel: {
//     fontSize: 12,
//     fontWeight: '800',
//     letterSpacing: 2,
//     color: '#155EEF',
//     marginBottom: 12,
//   },
//   heroImage: { width: '100%', height: 280, marginBottom: 18 },
//   title: {
//     fontSize: 27,
//     lineHeight: 35,
//     fontWeight: '800',
//     color: '#172B4D',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   highlight: {
//     fontSize: 22,
//     lineHeight: 30,
//     fontWeight: '700',
//     color: '#155EEF',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 14,
//     lineHeight: 22,
//     color: '#667085',
//     textAlign: 'center',
//     marginTop: 12,
//     marginBottom: 24,
//   },
//   dots: { flexDirection: 'row', gap: 9, marginBottom: 20, alignItems: 'center' },
//   dot: { height: 8, width: 8, borderRadius: 10, backgroundColor: '#D0D5DD' },
//   activeDot: { width: 24, backgroundColor: '#155EEF' },

//   primaryButton: {
//     minHeight: 54,
//     backgroundColor: '#155EEF',
//     borderRadius: 14,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 18,
//     paddingHorizontal: 15,
//   },
//   primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },

//   iconCircle: {
//     width: 76,
//     height: 76,
//     borderRadius: 38,
//     backgroundColor: '#E8F0FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 24,
//   },
//   iconText: { fontSize: 32, color: '#155EEF' },
//   label: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#344054',
//     marginTop: 16,
//     marginBottom: 9,
//   },
//   input: {
//     minHeight: 53,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: '#172B4D',
//   },
//   phoneRow: {
//     minHeight: 56,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//   },
//   countryCode: {
//     color: '#344054',
//     fontSize: 14,
//     fontWeight: '700',
//     borderRightWidth: 1,
//     borderRightColor: '#D0D5DD',
//     paddingRight: 12,
//   },
//   phoneInput: {
//     flex: 1,
//     minWidth: 0,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     color: '#172B4D',
//     fontSize: 15,
//   },
//   field: { marginBottom: 5 },
//   textButton: { padding: 12, alignItems: 'center' },
//   secondaryText: { color: '#475467', fontWeight: '600' },
//   linkText: { color: '#155EEF', fontWeight: '700' },
//   privacy: {
//     color: '#98A2B3',
//     textAlign: 'center',
//     fontSize: 11,
//     lineHeight: 17,
//     marginTop: 17,
//   },
//   progressTrack: {
//     height: 5,
//     backgroundColor: '#DCE6FF',
//     borderRadius: 5,
//     overflow: 'hidden',
//     marginBottom: 12,
//   },
//   progressFill: { width: '100%', height: '100%', backgroundColor: '#155EEF' },
//   stepText: {
//     color: '#155EEF',
//     fontSize: 10,
//     fontWeight: '800',
//     letterSpacing: 1.2,
//     marginBottom: 20,
//   },
//   genderRow: { flexDirection: 'row', gap: 9 },
//   genderButton: {
//     flex: 1,
//     height: 48,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   genderSelected: { backgroundColor: '#E8F0FF', borderColor: '#155EEF' },
//   genderText: { fontSize: 14, fontWeight: '600', color: '#475467' },
//   genderTextSelected: { color: '#155EEF' },

//   successContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 25,
//     paddingVertical: 24,
//   },
//   successCircle: {
//     width: 82,
//     height: 82,
//     borderRadius: 41,
//     backgroundColor: '#D1FADF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 25,
//   },
//   successIcon: { fontSize: 42, fontWeight: '800', color: '#039855' },
//   summary: { color: '#475467', fontSize: 15, textAlign: 'center', marginBottom: 8 },

//   selectionScreen: { flex: 1, paddingHorizontal: 24, paddingTop: 24, paddingBottom: 12 },
//   ageTitle: { fontSize: 28, lineHeight: 36, fontWeight: '800', color: '#172B4D', textAlign: 'center' },
//   ageDescription: { fontSize: 14, lineHeight: 22, color: '#667085', textAlign: 'center', marginTop: 10 },
//   ageSelectedBox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E8F0FF',
//     borderRadius: 20,
//     paddingVertical: 12,
//     marginTop: 18,
//   },
//   ageSelectedNumber: { fontSize: 42, fontWeight: '800', color: '#155EEF' },
//   ageYears: { fontSize: 14, color: '#475467' },
//   ageList: { flex: 1, marginTop: 12 },
//   ageListContent: { paddingBottom: 10 },
//   ageOption: {
//     paddingVertical: 13,
//     marginBottom: 7,
//     borderRadius: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#EAECF0',
//   },
//   ageOptionSelected: { backgroundColor: '#155EEF', borderColor: '#155EEF' },
//   ageOptionText: { fontSize: 17, fontWeight: '600', color: '#344054' },
//   ageOptionTextSelected: { color: '#FFFFFF' },

//   unitRow: { flexDirection: 'row', gap: 12, marginTop: 20 },
//   unitButton: {
//     flex: 1,
//     paddingVertical: 14,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   unitButtonSelected: { backgroundColor: '#E8F0FF', borderColor: '#155EEF' },
//   unitButtonText: { color: '#475467', fontWeight: '700', fontSize: 15 },
//   unitButtonTextSelected: { color: '#155EEF' },
//   feetInchesRow: { flex: 1, flexDirection: 'row', gap: 12 },
//   feetColumn: { flex: 1 },
//   feetList: { flex: 1 },

//   questionIntro: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 25,
//     paddingVertical: 20,
//   },
//   questionIllustration: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#E8F0FF',
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 24,
//   },
//   questionIllustrationEmoji: { fontSize: 48 },
//   infoCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 18,
//     borderWidth: 1,
//     borderColor: '#EAECF0',
//   },
//   infoCardTitle: { fontSize: 16, fontWeight: '800', color: '#172B4D', marginBottom: 12 },
//   infoCardText: { fontSize: 14, color: '#475467', marginBottom: 9, lineHeight: 21 },

//   questionScreen: { flex: 1, paddingHorizontal: 22, paddingTop: 24, paddingBottom: 12 },
//   questionProgressTrack: {
//     height: 6,
//     backgroundColor: '#DCE6FF',
//     borderRadius: 6,
//     overflow: 'hidden',
//     marginBottom: 14,
//   },
//   questionProgressFill: { height: '100%', backgroundColor: '#155EEF', borderRadius: 6 },
//   questionStep: {
//     color: '#155EEF',
//     fontSize: 11,
//     fontWeight: '800',
//     letterSpacing: 1.3,
//     marginBottom: 12,
//   },
//   questionTitle: {
//     fontSize: 25,
//     lineHeight: 33,
//     fontWeight: '800',
//     color: '#172B4D',
//   },
//   questionDescription: {
//     fontSize: 14,
//     lineHeight: 21,
//     color: '#667085',
//     marginTop: 10,
//     marginBottom: 16,
//   },
//   questionOptions: { flex: 1 },
//   questionOptionsContent: { paddingBottom: 10 },
//   questionOption: {
//     minHeight: 55,
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//     marginBottom: 10,
//     borderRadius: 14,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     gap: 12,
//   },
//   questionOptionSelected: { backgroundColor: '#E8F0FF', borderColor: '#155EEF' },
//   questionOptionText: { flex: 1, fontSize: 14, lineHeight: 20, fontWeight: '600', color: '#344054' },
//   questionOptionTextSelected: { color: '#155EEF' },
//   radioCircle: {
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     borderWidth: 2,
//     borderColor: '#98A2B3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radioCircleSelected: { borderColor: '#155EEF' },
//   radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#155EEF' },

//   finalContent: { flexGrow: 1, paddingHorizontal: 22, paddingVertical: 24 },
//   answerSummary: { gap: 12 },
//   answerSummaryItem: {
//     padding: 14,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#EAECF0',
//     borderRadius: 12,
//   },
//   answerQuestion: { fontSize: 13, fontWeight: '700', color: '#344054', marginBottom: 6 },
//   answerValue: { fontSize: 14, color: '#155EEF', lineHeight: 21 },
// });








// import { useState } from 'react';
// import {
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// const onboardingScreens = [
//   {
//     label: 'FOOD & HEALTH',
//     title: 'MyTwin shows you',
//     highlight: 'how food affects your health.',
//     description: 'Discover how your daily food choices can affect your wellbeing.',
//     image: require('../../assets/images/Food Health.png'),
//   },
//   {
//     label: 'GLUCOSE INSIGHTS',
//     title: 'Get Personal',
//     highlight: 'Health Insights.',
//     description: 'Understand your glucose trends and personal health data.',
//     image: require('../../assets/images/Glucose Insights.png'),
//   },
//   {
//     label: 'DOCTOR CONSULTATION',
//     title: 'Expert Doctors',
//     highlight: 'at Your Fingertips.',
//     description: 'Connect with doctors and book appointments with ease.',
//     image: require('../../assets/images/Doctor Consultation.png'),
//   },
//   {
//     label: 'FITNESS TRACKING',
//     title: 'Track Your Fitness',
//     highlight: 'Effortlessly.',
//     description: 'Track your daily activity, steps and heart rate.',
//     image: require('../../assets/images/Fitness Tracking.png'),
//   },
// ];

// const questions = [
//   // LIFESTYLE QUESTIONS 1–5
//   {
//     title: 'How active are you?',
//     description: 'Choose the option that best describes your daily activity.',
//     options: [
//       'Mostly sitting',
//       'Lightly active',
//       'Moderately active',
//       'Very active',
//     ],
//   },
//   {
//     title: 'How many days a week do you usually eat outside or packaged food?',
//     description: 'Select the number of days in a typical week.',
//     options: [
//       '0 days',
//       '1 day',
//       '2 days',
//       '3 days',
//       '4 days',
//       '5 days',
//       '6 days',
//       '7 days',
//     ],
//   },
//   {
//     title: 'How much water do you drink most days?',
//     description: 'Choose the option closest to your daily water intake.',
//     options: [
//       'Less than 2 glasses',
//       '2–4 glasses',
//       '5–7 glasses',
//       '8 or more glasses',
//     ],
//   },
//   {
//     title: 'How would you rate your current stress level?',
//     description: 'Choose how you have been feeling recently.',
//     options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
//   },
//   {
//     title: 'Please select your health concerns',
//     description: 'Select all that apply. You can also choose None.',
//     options: [
//       'Weight management',
//       'Blood sugar / glucose',
//       'Heart health',
//       'Blood pressure',
//       'Sleep problems',
//       'Stress / mental wellbeing',
//       'Digestive health',
//       'Fitness / low energy',
//       'None',
//       'Other',
//     ],
//     multiple: true,
//   },

//   // NEW HEALTH QUESTIONS 6–10
//   {
//     title: 'What is your current blood sugar level (HbA1c %)?',
//     description: 'Select your most recent HbA1c range, if known.',
//     options: [
//       'Below 5.7%',
//       '5.7%–6.4%',
//       '6.5%–7%',
//       'Above 7%',
//       'I do not know my HbA1c',
//       'I have not been tested',
//     ],
//   },
//   {
//     title: 'Are you on any medications?',
//     description: 'Tell us whether you currently take any medication.',
//     options: [
//       'Yes, regularly',
//       'Yes, occasionally',
//       'No',
//       'Prefer not to say',
//     ],
//   },
//   {
//     title: 'How much do you spend on healthcare each month?',
//     description: 'Include doctor visits, medicines and other healthcare costs.',
//     options: [
//       '₹0–₹500',
//       '₹501–₹1,000',
//       '₹1,001–₹2,500',
//       '₹2,501–₹5,000',
//       'Above ₹5,000',
//       'Not sure',
//       'Prefer not to say',
//     ],
//   },
//   {
//     title: 'How often do you smoke?',
//     description: 'Choose the option that best describes your smoking habits.',
//     options: [
//       'Never',
//       'Former smoker',
//       'Occasionally',
//       'A few days a week',
//       'Daily',
//       'Prefer not to say',
//     ],
//   },
//   {
//     title: 'How often do you drink alcohol?',
//     description: 'Choose the option that best describes your drinking habits.',
//     options: [
//       'Never',
//       'Less than once a month',
//       '1–3 times a month',
//       '1–2 times a week',
//       '3 or more times a week',
//       'Prefer not to say',
//     ],
//   },
// ];

// export default function App() {
//   const [page, setPage] = useState(0);

//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [gender, setGender] = useState('');

//   const [age, setAge] = useState(25);
//   const [weight, setWeight] = useState(60);

//   const [heightUnit, setHeightUnit] = useState('cm');
//   const [heightCm, setHeightCm] = useState(170);
//   const [heightFeet, setHeightFeet] = useState(5);
//   const [heightInches, setHeightInches] = useState(7);

//   // Question 5 is multi-select; all others are single-select.
//   const [answers, setAnswers] = useState([
//     '', '', '', '', [],
//     '', '', '', '', '',
//   ]);

//   const button = (label, onPress) => (
//     <Pressable style={styles.primaryButton} onPress={onPress}>
//       <Text style={styles.primaryButtonText}>{label}</Text>
//     </Pressable>
//   );

//   const field = (
//     label,
//     value,
//     onChangeText,
//     placeholder,
//     options = {}
//   ) => (
//     <View style={styles.field}>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         style={styles.input}
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         placeholderTextColor="#98A2B3"
//         {...options}
//       />
//     </View>
//   );

//   // LOGIN
//   const sendOTP = () => {
//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       Alert.alert(
//         'Invalid Mobile Number',
//         'Enter a valid 10-digit Indian mobile number.'
//       );
//       return;
//     }

//     setOtp('');
//     setPage(5);
//     Alert.alert('Demo OTP', 'Use 123456. No SMS has been sent.');
//   };

//   // OTP VERIFICATION - DEMO ONLY
//   const verifyOTP = () => {
//     if (otp.length !== 6) {
//       Alert.alert('Invalid OTP', 'Enter all 6 digits.');
//       return;
//     }

//     if (otp !== '123456') {
//       Alert.alert('Incorrect OTP', 'For this demo, enter 123456.');
//       return;
//     }

//     setPage(6);
//   };

//   // PROFILE VALIDATION
//   const submitProfile = () => {
//     if (!name.trim()) {
//       Alert.alert('Required', 'Please enter your full name.');
//       return;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
//       Alert.alert('Invalid Email', 'Enter a valid email address.');
//       return;
//     }

//     if (!/^\d{6}$/.test(pincode)) {
//       Alert.alert('Invalid Pincode', 'Enter a 6-digit pincode.');
//       return;
//     }

//     if (!gender) {
//       Alert.alert('Required', 'Please select your gender.');
//       return;
//     }

//     setPage(7);
//   };

//   // 1. ONBOARDING
//   const renderOnboarding = () => {
//     const screen = onboardingScreens[page];

//     return (
//       <ScrollView
//         contentContainerStyle={styles.onboardingContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.smallLabel}>{screen.label}</Text>

//         <Image
//           source={screen.image}
//           style={styles.heroImage}
//           resizeMode="contain"
//         />

//         <Text style={styles.title}>{screen.title}</Text>
//         <Text style={styles.highlight}>{screen.highlight}</Text>
//         <Text style={styles.description}>{screen.description}</Text>

//         <View style={styles.dots}>
//           {onboardingScreens.map((item, index) => (
//             <Pressable
//               key={item.label}
//               onPress={() => setPage(index)}
//               style={[
//                 styles.dot,
//                 page === index && styles.activeDot,
//               ]}
//             />
//           ))}
//         </View>

//         {button(page === 3 ? 'Get Started' : 'Continue', () =>
//           setPage(page === 3 ? 4 : page + 1)
//         )}

//         {page > 0 && (
//           <Pressable
//             style={styles.textButton}
//             onPress={() => setPage(page - 1)}
//           >
//             <Text style={styles.secondaryText}>Back</Text>
//           </Pressable>
//         )}
//       </ScrollView>
//     );
//   };

//   // 2. MOBILE LOGIN
//   const renderLogin = () => (
//     <ScrollView
//       contentContainerStyle={styles.authContent}
//       keyboardShouldPersistTaps="handled"
//     >
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.iconCircle}>
//         <Text style={styles.iconText}>☎</Text>
//       </View>

//       <Text style={styles.title}>Welcome to MyTwin</Text>
//       <Text style={styles.description}>
//         Enter your mobile number to continue.
//       </Text>

//       <Text style={styles.label}>Mobile Number</Text>

//       <View style={styles.phoneRow}>
//         <Text style={styles.countryCode}>🇮🇳 +91</Text>
//         <TextInput
//           style={styles.phoneInput}
//           placeholder="10-digit mobile number"
//           placeholderTextColor="#98A2B3"
//           keyboardType="phone-pad"
//           maxLength={10}
//           value={mobile}
//           onChangeText={(value) =>
//             setMobile(value.replace(/\D/g, '').slice(0, 10))
//           }
//         />
//       </View>

//       {button('Send OTP', sendOTP)}
//       <Text style={styles.privacy}>
//         Demo app: OTP verification is simulated.
//       </Text>
//     </ScrollView>
//   );

//   // 3. OTP
//   const renderOTP = () => (
//     <ScrollView
//       contentContainerStyle={styles.authContent}
//       keyboardShouldPersistTaps="handled"
//     >
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.iconCircle}>
//         <Text style={styles.iconText}>✉</Text>
//       </View>

//       <Text style={styles.title}>Verify OTP</Text>
//       <Text style={styles.description}>
//         Enter the 6-digit code for +91 {mobile}
//       </Text>

//       {field(
//         'One-Time Password',
//         otp,
//         (value) => setOtp(value.replace(/\D/g, '').slice(0, 6)),
//         'Enter 123456',
//         {
//           keyboardType: 'number-pad',
//           maxLength: 6,
//           textAlign: 'center',
//         }
//       )}

//       {button('Verify OTP', verifyOTP)}

//       <Pressable
//         style={styles.textButton}
//         onPress={() => {
//           setOtp('');
//           setPage(4);
//         }}
//       >
//         <Text style={styles.linkText}>Change Mobile Number</Text>
//       </Pressable>

//       <Pressable
//         style={styles.textButton}
//         onPress={() =>
//           Alert.alert('Demo OTP', 'Use 123456. No SMS has been sent.')
//         }
//       >
//         <Text style={styles.linkText}>Resend OTP</Text>
//       </Pressable>
//     </ScrollView>
//   );

//   // 4. PROFILE
//   const renderProfile = () => (
//     <ScrollView
//       contentContainerStyle={styles.profileContent}
//       keyboardShouldPersistTaps="handled"
//     >
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.progressTrack}>
//         <View style={styles.progressFill} />
//       </View>

//       <Text style={styles.stepText}>YOUR PROFILE</Text>
//       <Text style={styles.title}>Build Your Health Profile</Text>
//       <Text style={styles.description}>
//         Tell us a little about yourself.
//       </Text>

//       {field(
//         'Full Name',
//         name,
//         setName,
//         'Enter your full name',
//         { autoCapitalize: 'words' }
//       )}

//       {field(
//         'Email Address',
//         email,
//         setEmail,
//         'Enter your email address',
//         {
//           keyboardType: 'email-address',
//           autoCapitalize: 'none',
//           autoCorrect: false,
//         }
//       )}

//       {field(
//         'Pincode',
//         pincode,
//         (value) => setPincode(value.replace(/\D/g, '').slice(0, 6)),
//         'Enter 6-digit pincode',
//         {
//           keyboardType: 'number-pad',
//           maxLength: 6,
//         }
//       )}

//       <Text style={styles.label}>Gender</Text>

//       <View style={styles.genderRow}>
//         {['Male', 'Female', 'Other'].map((item) => (
//           <Pressable
//             key={item}
//             onPress={() => setGender(item)}
//             style={[
//               styles.genderButton,
//               gender === item && styles.genderSelected,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.genderText,
//                 gender === item && styles.genderTextSelected,
//               ]}
//             >
//               {item}
//             </Text>
//           </Pressable>
//         ))}
//       </View>

//       {button('Complete Profile', submitProfile)}
//     </ScrollView>
//   );

//   // 5. PROFILE COMPLETED
//   const renderSuccess = () => (
//     <ScrollView contentContainerStyle={styles.successContent}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.successCircle}>
//         <Text style={styles.successIcon}>✓</Text>
//       </View>

//       <Text style={styles.title}>Profile Completed!</Text>
//       <Text style={styles.description}>
//         Welcome, {name}! Your profile form is complete.
//       </Text>

//       <Text style={styles.summary}>Email: {email}</Text>
//       <Text style={styles.summary}>Pincode: {pincode}</Text>
//       <Text style={styles.summary}>Gender: {gender}</Text>
//       <Text style={styles.summary}>Mobile: +91 {mobile}</Text>

//       {button('Continue to MyTwin', () => setPage(8))}
//     </ScrollView>
//   );

//   // 6. AGE
//   const renderAgeScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <Text style={styles.ageTitle}>What is your age?</Text>
//       <Text style={styles.ageDescription}>
//         Select your age to personalize your health journey.
//       </Text>

//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{age}</Text>
//         <Text style={styles.ageYears}>years old</Text>
//       </View>

//       <Text style={styles.ageHint}>Select your age below</Text>

//       <ScrollView
//         style={styles.ageList}
//         contentContainerStyle={styles.ageListContent}
//       >
//         {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
//           <Pressable
//             key={number}
//             style={[
//               styles.ageOption,
//               age === number && styles.ageOptionSelected,
//             ]}
//             onPress={() => setAge(number)}
//           >
//             <Text
//               style={[
//                 styles.ageOptionText,
//                 age === number && styles.ageOptionTextSelected,
//               ]}
//             >
//               {number}
//             </Text>
//           </Pressable>
//         ))}
//       </ScrollView>

//       {button('Continue', () => setPage(9))}
//     </View>
//   );

//   // 7. WEIGHT
//   const renderWeightScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <Text style={styles.ageTitle}>What is your current weight?</Text>
//       <Text style={styles.ageDescription}>
//         Select your current weight.
//       </Text>

//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{weight}</Text>
//         <Text style={styles.ageYears}>kg</Text>
//       </View>

//       <Text style={styles.ageHint}>Select your weight below</Text>

//       <ScrollView
//         style={styles.ageList}
//         contentContainerStyle={styles.ageListContent}
//       >
//         {Array.from({ length: 150 }, (_, i) => i + 1).map((number) => (
//           <Pressable
//             key={number}
//             style={[
//               styles.ageOption,
//               weight === number && styles.ageOptionSelected,
//             ]}
//             onPress={() => setWeight(number)}
//           >
//             <Text
//               style={[
//                 styles.ageOptionText,
//                 weight === number && styles.ageOptionTextSelected,
//               ]}
//             >
//               {number} kg
//             </Text>
//           </Pressable>
//         ))}
//       </ScrollView>

//       {button('Continue', () => setPage(10))}
//     </View>
//   );

//   // 8. HEIGHT
//   const renderHeightScreen = () => {
//     const selectCm = (cm) => {
//       const totalInches = Math.round(cm / 2.54);
//       setHeightCm(cm);
//       setHeightFeet(Math.floor(totalInches / 12));
//       setHeightInches(totalInches % 12);
//     };

//     const validHeight = (feet, inches) => {
//       const total = feet * 12 + inches;
//       return total >= 39 && total <= 80;
//     };

//     return (
//       <View style={styles.selectionScreen}>
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.ageTitle}>What is your height?</Text>
//         <Text style={styles.ageDescription}>
//           Select your height to personalize your health journey.
//         </Text>

//         <View style={styles.unitRow}>
//           {['cm', 'ft'].map((unit) => (
//             <Pressable
//               key={unit}
//               style={[
//                 styles.unitButton,
//                 heightUnit === unit && styles.unitButtonSelected,
//               ]}
//               onPress={() => setHeightUnit(unit)}
//             >
//               <Text
//                 style={[
//                   styles.unitButtonText,
//                   heightUnit === unit && styles.unitButtonTextSelected,
//                 ]}
//               >
//                 {unit === 'cm' ? 'CM' : 'FT / IN'}
//               </Text>
//             </Pressable>
//           ))}
//         </View>

//         <View style={styles.ageSelectedBox}>
//           <Text style={styles.ageSelectedNumber}>
//             {heightUnit === 'cm'
//               ? heightCm
//               : `${heightFeet}'${heightInches}"`}
//           </Text>
//           <Text style={styles.ageYears}>
//             {heightUnit === 'cm' ? 'centimetres' : `${heightCm} cm`}
//           </Text>
//         </View>

//         {heightUnit === 'cm' ? (
//           <>
//             <Text style={styles.ageHint}>Select height: 100–200 cm</Text>
//             <ScrollView
//               style={styles.ageList}
//               contentContainerStyle={styles.ageListContent}
//             >
//               {Array.from({ length: 101 }, (_, i) => i + 100).map((cm) => (
//                 <Pressable
//                   key={cm}
//                   style={[
//                     styles.ageOption,
//                     heightCm === cm && styles.ageOptionSelected,
//                   ]}
//                   onPress={() => selectCm(cm)}
//                 >
//                   <Text
//                     style={[
//                       styles.ageOptionText,
//                       heightCm === cm && styles.ageOptionTextSelected,
//                     ]}
//                   >
//                     {cm} cm
//                   </Text>
//                 </Pressable>
//               ))}
//             </ScrollView>
//           </>
//         ) : (
//           <View style={styles.feetInchesRow}>
//             <View style={styles.feetColumn}>
//               <Text style={styles.label}>Feet</Text>
//               <ScrollView style={styles.feetList}>
//                 {[3, 4, 5, 6].map((feet) => (
//                   <Pressable
//                     key={feet}
//                     style={[
//                       styles.ageOption,
//                       heightFeet === feet && styles.ageOptionSelected,
//                     ]}
//                     onPress={() => {
//                       let inches = heightInches;

//                       if (feet === 3) inches = Math.max(3, inches);
//                       if (feet === 6) inches = Math.min(8, inches);

//                       setHeightFeet(feet);
//                       setHeightInches(inches);
//                       setHeightCm(
//                         Math.round((feet * 12 + inches) * 2.54)
//                       );
//                     }}
//                   >
//                     <Text
//                       style={[
//                         styles.ageOptionText,
//                         heightFeet === feet && styles.ageOptionTextSelected,
//                       ]}
//                     >
//                       {feet} ft
//                     </Text>
//                   </Pressable>
//                 ))}
//               </ScrollView>
//             </View>

//             <View style={styles.feetColumn}>
//               <Text style={styles.label}>Inches</Text>
//               <ScrollView style={styles.feetList}>
//                 {Array.from({ length: 12 }, (_, i) => i)
//                   .filter((inches) => validHeight(heightFeet, inches))
//                   .map((inches) => (
//                     <Pressable
//                       key={inches}
//                       style={[
//                         styles.ageOption,
//                         heightInches === inches &&
//                           styles.ageOptionSelected,
//                       ]}
//                       onPress={() => {
//                         setHeightInches(inches);
//                         setHeightCm(
//                           Math.round(
//                             (heightFeet * 12 + inches) * 2.54
//                           )
//                         );
//                       }}
//                     >
//                       <Text
//                         style={[
//                           styles.ageOptionText,
//                           heightInches === inches &&
//                             styles.ageOptionTextSelected,
//                         ]}
//                       >
//                         {inches} in
//                       </Text>
//                     </Pressable>
//                   ))}
//               </ScrollView>
//             </View>
//           </View>
//         )}

//         {button('Continue', () => setPage(11))}
//       </View>
//     );
//   };

//   // 9. QUESTION INTRO
//   const renderQuestionIntro = () => (
//     <View style={styles.questionIntro}>
//       <Text style={styles.brand}>💙 MyTwin</Text>

//       <View style={styles.questionIllustration}>
//         <Text style={styles.questionIllustrationEmoji}>🩺</Text>
//       </View>

//       <Text style={styles.title}>
//         A Few Questions to Learn More About You
//       </Text>

//       <Text style={styles.description}>
//         Help us understand your lifestyle, habits and health concerns so we
//         can personalize your MyTwin experience.
//       </Text>

//       <View style={styles.infoCard}>
//         <Text style={styles.infoCardTitle}>What to expect</Text>
//         <Text style={styles.infoCardText}>✓ 10 quick questions</Text>
//         <Text style={styles.infoCardText}>✓ Choose answers that suit you</Text>
//         <Text style={styles.infoCardText}>
//           ✓ Go back to change your answers
//         </Text>
//       </View>

//       {button("Let's Start", () => setPage(12))}

//       <Pressable
//         style={styles.textButton}
//         onPress={() => setPage(10)}
//       >
//         <Text style={styles.secondaryText}>Back to Height</Text>
//       </Pressable>
//     </View>
//   );

//   // 10. ALL 10 QUESTIONS
//   const renderQuestions = () => {
//     // Pages 12–21 correspond to questions 0–9.
//     const questionIndex = page - 12;
//     const question = questions[questionIndex];

//     // FINAL SUMMARY PAGE
//     if (page === 22) {
//       return (
//         <ScrollView
//           contentContainerStyle={styles.finalContent}
//           showsVerticalScrollIndicator={false}
//         >
//           <Text style={styles.brand}>💙 MyTwin</Text>

//           <View style={styles.successCircle}>
//             <Text style={styles.successIcon}>✓</Text>
//           </View>

//           <Text style={styles.title}>You're All Set!</Text>

//           <Text style={styles.description}>
//             Thank you, {name}. Your MyTwin questionnaire is complete.
//           </Text>

//           <View style={styles.answerSummary}>
//             <View style={styles.answerSummaryItem}>
//               <Text style={styles.answerQuestion}>Age</Text>
//               <Text style={styles.answerValue}>{age} years</Text>
//             </View>

//             <View style={styles.answerSummaryItem}>
//               <Text style={styles.answerQuestion}>Weight</Text>
//               <Text style={styles.answerValue}>{weight} kg</Text>
//             </View>

//             <View style={styles.answerSummaryItem}>
//               <Text style={styles.answerQuestion}>Height</Text>
//               <Text style={styles.answerValue}>
//                 {heightCm} cm ({heightFeet}'{heightInches}")
//               </Text>
//             </View>

//             {questions.map((item, index) => (
//               <View key={item.title} style={styles.answerSummaryItem}>
//                 <Text style={styles.answerQuestion}>{item.title}</Text>
//                 <Text style={styles.answerValue}>
//                   {Array.isArray(answers[index])
//                     ? answers[index].join(', ') || 'Not selected'
//                     : answers[index] || 'Not answered'}
//                 </Text>
//               </View>
//             ))}
//           </View>

//           {button('Finish', () =>
//             Alert.alert(
//               'MyTwin',
//               'Your demo profile and all 10 questions are complete.'
//             )
//           )}
//         </ScrollView>
//       );
//     }

//     if (!question) return null;

//     const currentAnswer = answers[questionIndex];

//     const selectOption = (option) => {
//       setAnswers((previous) => {
//         const updated = [...previous];

//         if (question.multiple) {
//           let selected = [...updated[questionIndex]];

//           if (option === 'None') {
//             selected = selected.includes('None') ? [] : ['None'];
//           } else {
//             selected = selected.filter((item) => item !== 'None');

//             selected = selected.includes(option)
//               ? selected.filter((item) => item !== option)
//               : [...selected, option];
//           }

//           updated[questionIndex] = selected;
//         } else {
//           updated[questionIndex] = option;
//         }

//         return updated;
//       });
//     };

//     const isSelected = (option) =>
//       question.multiple
//         ? currentAnswer.includes(option)
//         : currentAnswer === option;

//     const goNext = () => {
//       const hasAnswer = question.multiple
//         ? currentAnswer.length > 0
//         : Boolean(currentAnswer);

//       if (!hasAnswer) {
//         Alert.alert(
//           'Select an Answer',
//           'Please select an option before continuing.'
//         );
//         return;
//       }

//       // Question 10 goes to the final summary.
//       setPage(questionIndex === 9 ? 22 : page + 1);
//     };

//     return (
//       <View style={styles.questionScreen}>
//         <Text style={styles.brand}>💙 MyTwin</Text>

//         <View style={styles.questionProgressTrack}>
//           <View
//             style={[
//               styles.questionProgressFill,
//               {
//                 width: `${((questionIndex + 1) / questions.length) * 100}%`,
//               },
//             ]}
//           />
//         </View>

//         <Text style={styles.questionStep}>
//           QUESTION {questionIndex + 1} OF {questions.length}
//         </Text>

//         <Text style={styles.questionTitle}>{question.title}</Text>

//         <Text style={styles.questionDescription}>
//           {question.description}
//         </Text>

//         <ScrollView
//           style={styles.questionOptions}
//           contentContainerStyle={styles.questionOptionsContent}
//           showsVerticalScrollIndicator
//         >
//           {question.options.map((option) => (
//             <Pressable
//               key={option}
//               onPress={() => selectOption(option)}
//               style={[
//                 styles.questionOption,
//                 isSelected(option) && styles.questionOptionSelected,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.questionOptionText,
//                   isSelected(option) &&
//                     styles.questionOptionTextSelected,
//                 ]}
//               >
//                 {option}
//               </Text>

//               <View
//                 style={[
//                   styles.radioCircle,
//                   isSelected(option) && styles.radioCircleSelected,
//                 ]}
//               >
//                 {isSelected(option) && (
//                   <View style={styles.radioInner} />
//                 )}
//               </View>
//             </Pressable>
//           ))}
//         </ScrollView>

//         <View style={styles.questionBottom}>
//           {questionIndex > 0 && (
//             <Pressable
//               style={styles.textButton}
//               onPress={() => setPage(page - 1)}
//             >
//               <Text style={styles.secondaryText}>Back</Text>
//             </Pressable>
//           )}

//           {button(
//             questionIndex === 9 ? 'Complete Questions' : 'Next',
//             goNext
//           )}
//         </View>
//       </View>
//     );
//   };

//   // SCREEN ROUTING
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor="#F5F8FF"
//       />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         {page < 4
//           ? renderOnboarding()
//           : page === 4
//           ? renderLogin()
//           : page === 5
//           ? renderOTP()
//           : page === 6
//           ? renderProfile()
//           : page === 7
//           ? renderSuccess()
//           : page === 8
//           ? renderAgeScreen()
//           : page === 9
//           ? renderWeightScreen()
//           : page === 10
//           ? renderHeightScreen()
//           : page === 11
//           ? renderQuestionIntro()
//           : page >= 12 && page <= 22
//           ? renderQuestions()
//           : renderOnboarding()}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F8FF',
//   },
//   flex: { flex: 1 },

//   onboardingContent: {
//     flexGrow: 1,
//     padding: 24,
//     paddingTop: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   authContent: {
//     flexGrow: 1,
//     paddingHorizontal: 26,
//     paddingVertical: 28,
//     justifyContent: 'center',
//   },
//   profileContent: {
//     flexGrow: 1,
//     paddingHorizontal: 24,
//     paddingTop: 24,
//     paddingBottom: 35,
//   },
//   brand: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#155EEF',
//     textAlign: 'center',
//     marginBottom: 28,
//   },
//   smallLabel: {
//     fontSize: 12,
//     fontWeight: '800',
//     letterSpacing: 2,
//     color: '#155EEF',
//     marginBottom: 12,
//   },
//   heroImage: {
//     width: '100%',
//     height: 280,
//     marginBottom: 18,
//   },
//   title: {
//     fontSize: 27,
//     lineHeight: 35,
//     fontWeight: '800',
//     color: '#172B4D',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   highlight: {
//     fontSize: 22,
//     lineHeight: 30,
//     fontWeight: '700',
//     color: '#155EEF',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 14,
//     lineHeight: 22,
//     color: '#667085',
//     textAlign: 'center',
//     marginTop: 12,
//     marginBottom: 24,
//   },
//   dots: {
//     flexDirection: 'row',
//     gap: 9,
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   dot: {
//     height: 8,
//     width: 8,
//     borderRadius: 10,
//     backgroundColor: '#D0D5DD',
//   },
//   activeDot: {
//     width: 24,
//     backgroundColor: '#155EEF',
//   },

//   primaryButton: {
//     minHeight: 54,
//     backgroundColor: '#155EEF',
//     borderRadius: 14,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 18,
//     paddingHorizontal: 15,
//   },
//   primaryButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },

//   iconCircle: {
//     width: 76,
//     height: 76,
//     borderRadius: 38,
//     backgroundColor: '#E8F0FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 24,
//   },
//   iconText: {
//     fontSize: 32,
//     color: '#155EEF',
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#344054',
//     marginTop: 16,
//     marginBottom: 9,
//   },
//   input: {
//     minHeight: 53,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: '#172B4D',
//   },
//   phoneRow: {
//     minHeight: 56,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//   },
//   countryCode: {
//     color: '#344054',
//     fontSize: 14,
//     fontWeight: '700',
//     borderRightWidth: 1,
//     borderRightColor: '#D0D5DD',
//     paddingRight: 12,
//   },
//   phoneInput: {
//     flex: 1,
//     minWidth: 0,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     color: '#172B4D',
//     fontSize: 15,
//   },
//   field: { marginBottom: 5 },
//   textButton: {
//     padding: 12,
//     alignItems: 'center',
//   },
//   secondaryText: {
//     color: '#475467',
//     fontWeight: '600',
//   },
//   linkText: {
//     color: '#155EEF',
//     fontWeight: '700',
//   },
//   privacy: {
//     color: '#98A2B3',
//     textAlign: 'center',
//     fontSize: 11,
//     lineHeight: 17,
//     marginTop: 17,
//   },

//   progressTrack: {
//     height: 5,
//     backgroundColor: '#DCE6FF',
//     borderRadius: 5,
//     overflow: 'hidden',
//     marginBottom: 12,
//   },
//   progressFill: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#155EEF',
//   },
//   stepText: {
//     color: '#155EEF',
//     fontSize: 10,
//     fontWeight: '800',
//     letterSpacing: 1.2,
//     marginBottom: 20,
//   },
//   genderRow: {
//     flexDirection: 'row',
//     gap: 9,
//   },
//   genderButton: {
//     flex: 1,
//     height: 48,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   genderSelected: {
//     backgroundColor: '#E8F0FF',
//     borderColor: '#155EEF',
//   },
//   genderText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#475467',
//   },
//   genderTextSelected: {
//     color: '#155EEF',
//   },

//   successContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 25,
//     paddingVertical: 24,
//   },
//   successCircle: {
//     width: 82,
//     height: 82,
//     borderRadius: 41,
//     backgroundColor: '#D1FADF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 25,
//   },
//   successIcon: {
//     fontSize: 42,
//     fontWeight: '800',
//     color: '#039855',
//   },
//   summary: {
//     color: '#475467',
//     fontSize: 15,
//     textAlign: 'center',
//     marginBottom: 8,
//   },

//   selectionScreen: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 24,
//     paddingBottom: 12,
//   },
//   ageTitle: {
//     fontSize: 28,
//     lineHeight: 36,
//     fontWeight: '800',
//     color: '#172B4D',
//     textAlign: 'center',
//   },
//   ageDescription: {
//     fontSize: 14,
//     lineHeight: 22,
//     color: '#667085',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   ageSelectedBox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E8F0FF',
//     borderRadius: 20,
//     paddingVertical: 12,
//     marginTop: 18,
//   },
//   ageSelectedNumber: {
//     fontSize: 42,
//     fontWeight: '800',
//     color: '#155EEF',
//   },
//   ageYears: {
//     fontSize: 14,
//     color: '#475467',
//   },
//   ageHint: {
//     fontSize: 13,
//     color: '#667085',
//     marginTop: 14,
//     marginBottom: 8,
//   },
//   ageList: {
//     flex: 1,
//     marginTop: 12,
//   },
//   ageListContent: {
//     paddingBottom: 10,
//   },
//   ageOption: {
//     paddingVertical: 13,
//     marginBottom: 7,
//     borderRadius: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#EAECF0',
//   },
//   ageOptionSelected: {
//     backgroundColor: '#155EEF',
//     borderColor: '#155EEF',
//   },
//   ageOptionText: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#344054',
//   },
//   ageOptionTextSelected: {
//     color: '#FFFFFF',
//   },

//   unitRow: {
//     flexDirection: 'row',
//     gap: 12,
//     marginTop: 20,
//   },
//   unitButton: {
//     flex: 1,
//     paddingVertical: 14,
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     borderRadius: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   unitButtonSelected: {
//     backgroundColor: '#E8F0FF',
//     borderColor: '#155EEF',
//   },
//   unitButtonText: {
//     color: '#475467',
//     fontWeight: '700',
//     fontSize: 15,
//   },
//   unitButtonTextSelected: {
//     color: '#155EEF',
//   },
//   feetInchesRow: {
//     flex: 1,
//     flexDirection: 'row',
//     gap: 12,
//   },
//   feetColumn: { flex: 1 },
//   feetList: { flex: 1 },

//   questionIntro: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 25,
//     paddingVertical: 20,
//   },
//   questionIllustration: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#E8F0FF',
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 24,
//   },
//   questionIllustrationEmoji: {
//     fontSize: 48,
//   },
//   infoCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 18,
//     borderWidth: 1,
//     borderColor: '#EAECF0',
//   },
//   infoCardTitle: {
//     fontSize: 16,
//     fontWeight: '800',
//     color: '#172B4D',
//     marginBottom: 12,
//   },
//   infoCardText: {
//     fontSize: 14,
//     color: '#475467',
//     marginBottom: 9,
//     lineHeight: 21,
//   },

//   questionScreen: {
//     flex: 1,
//     paddingHorizontal: 22,
//     paddingTop: 24,
//     paddingBottom: 12,
//   },
//   questionProgressTrack: {
//     height: 6,
//     backgroundColor: '#DCE6FF',
//     borderRadius: 6,
//     overflow: 'hidden',
//     marginBottom: 14,
//   },
//   questionProgressFill: {
//     height: '100%',
//     backgroundColor: '#155EEF',
//     borderRadius: 6,
//   },
//   questionStep: {
//     color: '#155EEF',
//     fontSize: 11,
//     fontWeight: '800',
//     letterSpacing: 1.3,
//     marginBottom: 12,
//   },
//   questionTitle: {
//     fontSize: 25,
//     lineHeight: 33,
//     fontWeight: '800',
//     color: '#172B4D',
//   },
//   questionDescription: {
//     fontSize: 14,
//     lineHeight: 21,
//     color: '#667085',
//     marginTop: 10,
//     marginBottom: 16,
//   },
//   questionOptions: {
//     flex: 1,
//   },
//   questionOptionsContent: {
//     paddingBottom: 10,
//   },
//   questionBottom: {
//     paddingBottom: 4,
//   },
//   questionOption: {
//     minHeight: 55,
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//     marginBottom: 10,
//     borderRadius: 14,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D0D5DD',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     gap: 12,
//   },
//   questionOptionSelected: {
//     backgroundColor: '#E8F0FF',
//     borderColor: '#155EEF',
//   },
//   questionOptionText: {
//     flex: 1,
//     fontSize: 14,
//     lineHeight: 20,
//     fontWeight: '600',
//     color: '#344054',
//   },
//   questionOptionTextSelected: {
//     color: '#155EEF',
//   },
//   radioCircle: {
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     borderWidth: 2,
//     borderColor: '#98A2B3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radioCircleSelected: {
//     borderColor: '#155EEF',
//   },
//   radioInner: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#155EEF',
//   },

//   finalContent: {
//     flexGrow: 1,
//     paddingHorizontal: 22,
//     paddingVertical: 24,
//   },
//   answerSummary: {
//     gap: 12,
//   },
//   answerSummaryItem: {
//     padding: 14,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#EAECF0',
//     borderRadius: 12,
//   },
//   answerQuestion: {
//     fontSize: 13,
//     fontWeight: '700',
//     color: '#344054',
//     marginBottom: 6,
//   },
//   answerValue: {
//     fontSize: 14,
//     color: '#155EEF',
//     lineHeight: 21,
//   },
// });











// import { useState } from 'react';
// import {
//   Alert, Image, KeyboardAvoidingView, Platform, Pressable,
//   SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,
//   TextInput, View,
// } from 'react-native';
// import Svg, { Circle } from 'react-native-svg';

// const BLUE = '#155EEF';

// const onboardingScreens = [
//   {
//     label: 'FOOD & HEALTH',
//     title: 'MyTwin shows you',
//     highlight: 'how food affects your health.',
//     description: 'Discover how your daily food choices can affect your wellbeing.',
//     image: require('../../assets/images/Food Health.png'),
//   },
//   {
//     label: 'GLUCOSE INSIGHTS',
//     title: 'Get Personal',
//     highlight: 'Health Insights.',
//     description: 'Understand your glucose trends and personal health data.',
//     image: require('../../assets/images/Glucose Insights.png'),
//   },
//   {
//     label: 'DOCTOR CONSULTATION',
//     title: 'Expert Doctors',
//     highlight: 'at Your Fingertips.',
//     description: 'Connect with doctors and book appointments with ease.',
//     image: require('../../assets/images/Doctor Consultation.png'),
//   },
//   {
//     label: 'FITNESS TRACKING',
//     title: 'Track Your Fitness',
//     highlight: 'Effortlessly.',
//     description: 'Track your daily activity, steps and heart rate.',
//     image: require('../../assets/images/Fitness Tracking.png'),
//   },
// ];

// const questions = [
//   {
//     title: 'How active are you?',
//     description: 'Choose the option that best describes your daily activity.',
//     options: ['Mostly sitting', 'Lightly active', 'Moderately active', 'Very active'],
//   },
//   {
//     title: 'How many days a week do you usually eat outside or packaged food?',
//     description: 'Select the number of days in a typical week.',
//     options: ['0 days', '1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'],
//   },
//   {
//     title: 'How much water do you drink most days?',
//     description: 'Choose the option closest to your daily water intake.',
//     options: ['Less than 2 glasses', '2–4 glasses', '5–7 glasses', '8 or more glasses'],
//   },
//   {
//     title: 'How would you rate your current stress level?',
//     description: 'Choose how you have been feeling recently.',
//     options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
//   },
//   {
//     title: 'Please select your health concerns',
//     description: 'Select all that apply. You can also choose None.',
//     options: [
//       'Weight management', 'Blood sugar / glucose', 'Heart health',
//       'Blood pressure', 'Sleep problems', 'Stress / mental wellbeing',
//       'Digestive health', 'Fitness / low energy', 'None', 'Other',
//     ],
//     multiple: true,
//   },
//   {
//     title: 'What is your current blood sugar level (HbA1c %)?',
//     description: 'Select your most recent HbA1c range, if known.',
//     options: [
//       'Below 5.7%', '5.7%–6.4%', '6.5%–7%', 'Above 7%',
//       'I do not know my HbA1c', 'I have not been tested',
//     ],
//   },
//   {
//     title: 'Are you on any medications?',
//     description: 'Tell us whether you currently take any medication.',
//     options: ['Yes, regularly', 'Yes, occasionally', 'No', 'Prefer not to say'],
//   },
//   {
//     title: 'How much do you spend on healthcare each month?',
//     description: 'Include doctor visits, medicines and other healthcare costs.',
//     options: [
//       '₹0–₹500', '₹501–₹1,000', '₹1,001–₹2,500',
//       '₹2,501–₹5,000', 'Above ₹5,000', 'Not sure', 'Prefer not to say',
//     ],
//   },
//   {
//     title: 'How often do you smoke?',
//     description: 'Choose the option that best describes your smoking habits.',
//     options: [
//       'Never', 'Former smoker', 'Occasionally',
//       'A few days a week', 'Daily', 'Prefer not to say',
//     ],
//   },
//   {
//     title: 'How often do you drink alcohol?',
//     description: 'Choose the option that best describes your drinking habits.',
//     options: [
//       'Never', 'Less than once a month', '1–3 times a month',
//       '1–2 times a week', '3 or more times a week', 'Prefer not to say',
//     ],
//   },
// ];

// export default function App() {
//   const [page, setPage] = useState(0);
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState(25);
//   const [weight, setWeight] = useState(60);
//   const [heightUnit, setHeightUnit] = useState('cm');
//   const [heightCm, setHeightCm] = useState(170);
//   const [heightFeet, setHeightFeet] = useState(5);
//   const [heightInches, setHeightInches] = useState(7);
//   const [answers, setAnswers] = useState(['', '', '', '', [], '', '', '', '', '']);

//   const button = (label, onPress) => (
//     <Pressable style={styles.primaryButton} onPress={onPress}>
//       <Text style={styles.primaryButtonText}>{label}</Text>
//     </Pressable>
//   );

//   const field = (label, value, onChangeText, placeholder, options = {}) => (
//     <View style={styles.field}>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         style={styles.input}
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         placeholderTextColor="#98A2B3"
//         {...options}
//       />
//     </View>
//   );

//   const sendOTP = () => {
//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       Alert.alert('Invalid Mobile Number', 'Enter a valid 10-digit Indian mobile number.');
//       return;
//     }
//     setOtp('');
//     setPage(5);
//     Alert.alert('Demo OTP', 'Use 123456. No SMS has been sent.');
//   };

//   const verifyOTP = () => {
//     if (otp !== '123456') {
//       Alert.alert('Incorrect OTP', 'For this demo, enter 123456.');
//       return;
//     }
//     setPage(6);
//   };

//   const submitProfile = () => {
//     if (!name.trim()) {
//       Alert.alert('Required', 'Please enter your full name.');
//       return;
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
//       Alert.alert('Invalid Email', 'Enter a valid email address.');
//       return;
//     }
//     if (!/^\d{6}$/.test(pincode)) {
//       Alert.alert('Invalid Pincode', 'Enter a 6-digit pincode.');
//       return;
//     }
//     if (!gender) {
//       Alert.alert('Required', 'Please select your gender.');
//       return;
//     }
//     setPage(7);
//   };

//   // Demo estimate only; not a validated medical score.
//   const calculateWellnessScore = () => {
//     const maps = [
//       { 'Mostly sitting': 5, 'Lightly active': 10, 'Moderately active': 15, 'Very active': 20 },
//       { '0 days': 15, '1 day': 13, '2 days': 11, '3 days': 9, '4 days': 7, '5 days': 5, '6 days': 3, '7 days': 1 },
//       { 'Less than 2 glasses': 3, '2–4 glasses': 7, '5–7 glasses': 11, '8 or more glasses': 15 },
//       { 'Very low': 15, 'Low': 12, 'Moderate': 9, 'High': 5, 'Very high': 2 },
//       null,
//       { 'Below 5.7%': 20, '5.7%–6.4%': 14, '6.5%–7%': 8, 'Above 7%': 4, 'I do not know my HbA1c': 12, 'I have not been tested': 12 },
//       null,
//       null,
//       { 'Never': 10, 'Former smoker': 8, 'Occasionally': 5, 'A few days a week': 3, 'Daily': 0, 'Prefer not to say': 5 },
//       { 'Never': 5, 'Less than once a month': 5, '1–3 times a month': 4, '1–2 times a week': 3, '3 or more times a week': 1, 'Prefer not to say': 3 },
//     ];

//     const defaults = [10, 8, 7, 9, 0, 12, 0, 0, 5, 3];
//     let total = 0;

//     maps.forEach((map, index) => {
//       if (index === 4 || index === 6 || index === 7) return;
//       const answer = answers[index];
//       total += map && answer && Object.prototype.hasOwnProperty.call(map, answer)
//         ? map[answer]
//         : defaults[index];
//     });

//     // Maximum possible total for the scored questions is 100.
//     return Math.max(0, Math.min(100, Math.round(total)));
//   };

//   const renderOnboarding = () => {
//     const screen = onboardingScreens[page];
//     return (
//       <ScrollView contentContainerStyle={styles.onboardingContent}>
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.smallLabel}>{screen.label}</Text>
//         <Image source={screen.image} style={styles.heroImage} resizeMode="contain" />
//         <Text style={styles.title}>{screen.title}</Text>
//         <Text style={styles.highlight}>{screen.highlight}</Text>
//         <Text style={styles.description}>{screen.description}</Text>
//         <View style={styles.dots}>
//           {onboardingScreens.map((item, i) => (
//             <Pressable
//               key={item.label}
//               onPress={() => setPage(i)}
//               style={[styles.dot, page === i && styles.activeDot]}
//             />
//           ))}
//         </View>
//         {button(page === 3 ? 'Get Started' : 'Continue', () => setPage(page === 3 ? 4 : page + 1))}
//         {page > 0 && (
//           <Pressable style={styles.textButton} onPress={() => setPage(page - 1)}>
//             <Text style={styles.secondaryText}>Back</Text>
//           </Pressable>
//         )}
//       </ScrollView>
//     );
//   };

//   const renderLogin = () => (
//     <ScrollView contentContainerStyle={styles.authContent} keyboardShouldPersistTaps="handled">
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.iconCircle}><Text style={styles.iconText}>☎</Text></View>
//       <Text style={styles.title}>Welcome to MyTwin</Text>
//       <Text style={styles.description}>Enter your mobile number to continue.</Text>
//       <Text style={styles.label}>Mobile Number</Text>
//       <View style={styles.phoneRow}>
//         <Text style={styles.countryCode}>🇮🇳 +91</Text>
//         <TextInput
//           style={styles.phoneInput}
//           placeholder="10-digit mobile number"
//           placeholderTextColor="#98A2B3"
//           keyboardType="phone-pad"
//           maxLength={10}
//           value={mobile}
//           onChangeText={(v) => setMobile(v.replace(/\D/g, '').slice(0, 10))}
//         />
//       </View>
//       {button('Send OTP', sendOTP)}
//       <Text style={styles.privacy}>Demo app: OTP verification is simulated.</Text>
//     </ScrollView>
//   );

//   const renderOTP = () => (
//     <ScrollView contentContainerStyle={styles.authContent} keyboardShouldPersistTaps="handled">
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.iconCircle}><Text style={styles.iconText}>✉</Text></View>
//       <Text style={styles.title}>Verify OTP</Text>
//       <Text style={styles.description}>Enter the 6-digit code for +91 {mobile}</Text>
//       {field('One-Time Password', otp, (v) => setOtp(v.replace(/\D/g, '').slice(0, 6)), 'Enter 123456', {
//         keyboardType: 'number-pad', maxLength: 6, textAlign: 'center',
//       })}
//       {button('Verify OTP', verifyOTP)}
//       <Pressable style={styles.textButton} onPress={() => { setOtp(''); setPage(4); }}>
//         <Text style={styles.linkText}>Change Mobile Number</Text>
//       </Pressable>
//       <Pressable style={styles.textButton} onPress={() => Alert.alert('Demo OTP', 'Use 123456. No SMS has been sent.')}>
//         <Text style={styles.linkText}>Resend OTP</Text>
//       </Pressable>
//     </ScrollView>
//   );

//   const renderProfile = () => (
//     <ScrollView contentContainerStyle={styles.profileContent} keyboardShouldPersistTaps="handled">
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.progressTrack}><View style={styles.progressFill} /></View>
//       <Text style={styles.stepText}>YOUR PROFILE</Text>
//       <Text style={styles.title}>Build Your Health Profile</Text>
//       <Text style={styles.description}>Tell us a little about yourself.</Text>
//       {field('Full Name', name, setName, 'Enter your full name', { autoCapitalize: 'words' })}
//       {field('Email Address', email, setEmail, 'Enter your email address', {
//         keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false,
//       })}
//       {field('Pincode', pincode, (v) => setPincode(v.replace(/\D/g, '').slice(0, 6)), 'Enter 6-digit pincode', {
//         keyboardType: 'number-pad', maxLength: 6,
//       })}
//       <Text style={styles.label}>Gender</Text>
//       <View style={styles.genderRow}>
//         {['Male', 'Female', 'Other'].map((item) => (
//           <Pressable key={item} onPress={() => setGender(item)} style={[
//             styles.genderButton, gender === item && styles.genderSelected,
//           ]}>
//             <Text style={[styles.genderText, gender === item && styles.genderTextSelected]}>{item}</Text>
//           </Pressable>
//         ))}
//       </View>
//       {button('Complete Profile', submitProfile)}
//     </ScrollView>
//   );

//   const renderSuccess = () => (
//     <ScrollView contentContainerStyle={styles.successContent}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.successCircle}><Text style={styles.successIcon}>✓</Text></View>
//       <Text style={styles.title}>Profile Completed!</Text>
//       <Text style={styles.description}>Welcome, {name}! Your profile form is complete.</Text>
//       <Text style={styles.summary}>Email: {email}</Text>
//       <Text style={styles.summary}>Pincode: {pincode}</Text>
//       <Text style={styles.summary}>Gender: {gender}</Text>
//       <Text style={styles.summary}>Mobile: +91 {mobile}</Text>
//       {button('Continue to MyTwin', () => setPage(8))}
//     </ScrollView>
//   );

//   const renderAgeScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <Text style={styles.ageTitle}>What is your age?</Text>
//       <Text style={styles.ageDescription}>Select your age to personalize your health journey.</Text>
//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{age}</Text>
//         <Text style={styles.ageYears}>years old</Text>
//       </View>
//       <Text style={styles.ageHint}>Select your age below</Text>
//       <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent}>
//         {Array.from({ length: 100 }, (_, i) => i + 1).map((n) => (
//           <Pressable key={n} style={[styles.ageOption, age === n && styles.ageOptionSelected]} onPress={() => setAge(n)}>
//             <Text style={[styles.ageOptionText, age === n && styles.ageOptionTextSelected]}>{n}</Text>
//           </Pressable>
//         ))}
//       </ScrollView>
//       {button('Continue', () => setPage(9))}
//     </View>
//   );

//   const renderWeightScreen = () => (
//     <View style={styles.selectionScreen}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <Text style={styles.ageTitle}>What is your current weight?</Text>
//       <Text style={styles.ageDescription}>Select your current weight.</Text>
//       <View style={styles.ageSelectedBox}>
//         <Text style={styles.ageSelectedNumber}>{weight}</Text>
//         <Text style={styles.ageYears}>kg</Text>
//       </View>
//       <Text style={styles.ageHint}>Select your weight below</Text>
//       <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent}>
//         {Array.from({ length: 150 }, (_, i) => i + 1).map((n) => (
//           <Pressable key={n} style={[styles.ageOption, weight === n && styles.ageOptionSelected]} onPress={() => setWeight(n)}>
//             <Text style={[styles.ageOptionText, weight === n && styles.ageOptionTextSelected]}>{n} kg</Text>
//           </Pressable>
//         ))}
//       </ScrollView>
//       {button('Continue', () => setPage(10))}
//     </View>
//   );

//   const renderHeightScreen = () => {
//     const selectCm = (cm) => {
//       const totalInches = Math.round(cm / 2.54);
//       setHeightCm(cm);
//       setHeightFeet(Math.floor(totalInches / 12));
//       setHeightInches(totalInches % 12);
//     };

//     return (
//       <View style={styles.selectionScreen}>
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <Text style={styles.ageTitle}>What is your height?</Text>
//         <Text style={styles.ageDescription}>Select your height to personalize your health journey.</Text>
//         <View style={styles.unitRow}>
//           {['cm', 'ft'].map((unit) => (
//             <Pressable key={unit} style={[styles.unitButton, heightUnit === unit && styles.unitButtonSelected]} onPress={() => setHeightUnit(unit)}>
//               <Text style={[styles.unitButtonText, heightUnit === unit && styles.unitButtonTextSelected]}>
//                 {unit === 'cm' ? 'CM' : 'FT / IN'}
//               </Text>
//             </Pressable>
//           ))}
//         </View>
//         <View style={styles.ageSelectedBox}>
//           <Text style={styles.ageSelectedNumber}>{heightUnit === 'cm' ? heightCm : `${heightFeet}'${heightInches}"`}</Text>
//           <Text style={styles.ageYears}>{heightUnit === 'cm' ? 'centimetres' : `${heightCm} cm`}</Text>
//         </View>
//         {heightUnit === 'cm' ? (
//           <>
//             <Text style={styles.ageHint}>Select height: 100–200 cm</Text>
//             <ScrollView style={styles.ageList} contentContainerStyle={styles.ageListContent}>
//               {Array.from({ length: 101 }, (_, i) => i + 100).map((cm) => (
//                 <Pressable key={cm} style={[styles.ageOption, heightCm === cm && styles.ageOptionSelected]} onPress={() => selectCm(cm)}>
//                   <Text style={[styles.ageOptionText, heightCm === cm && styles.ageOptionTextSelected]}>{cm} cm</Text>
//                 </Pressable>
//               ))}
//             </ScrollView>
//           </>
//         ) : (
//           <View style={styles.feetInchesRow}>
//             <View style={styles.feetColumn}>
//               <Text style={styles.label}>Feet</Text>
//               <ScrollView style={styles.feetList}>
//                 {[3, 4, 5, 6].map((ft) => (
//                   <Pressable key={ft} style={[styles.ageOption, heightFeet === ft && styles.ageOptionSelected]} onPress={() => {
//                     setHeightFeet(ft);
//                     setHeightCm(Math.round((ft * 12 + heightInches) * 2.54));
//                   }}>
//                     <Text style={[styles.ageOptionText, heightFeet === ft && styles.ageOptionTextSelected]}>{ft} ft</Text>
//                   </Pressable>
//                 ))}
//               </ScrollView>
//             </View>
//             <View style={styles.feetColumn}>
//               <Text style={styles.label}>Inches</Text>
//               <ScrollView style={styles.feetList}>
//                 {Array.from({ length: 12 }, (_, i) => i).map((inch) => (
//                   <Pressable key={inch} style={[styles.ageOption, heightInches === inch && styles.ageOptionSelected]} onPress={() => {
//                     setHeightInches(inch);
//                     setHeightCm(Math.round((heightFeet * 12 + inch) * 2.54));
//                   }}>
//                     <Text style={[styles.ageOptionText, heightInches === inch && styles.ageOptionTextSelected]}>{inch} in</Text>
//                   </Pressable>
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//         )}
//         {button('Continue', () => setPage(11))}
//       </View>
//     );
//   };

//   const renderQuestionIntro = () => (
//     <View style={styles.questionIntro}>
//       <Text style={styles.brand}>💙 MyTwin</Text>
//       <View style={styles.questionIllustration}><Text style={styles.questionIllustrationEmoji}>🩺</Text></View>
//       <Text style={styles.title}>A Few Questions to Learn More About You</Text>
//       <Text style={styles.description}>
//         Help us understand your lifestyle, habits and health concerns so we can personalize your MyTwin experience.
//       </Text>
//       <View style={styles.infoCard}>
//         <Text style={styles.infoCardTitle}>What to expect</Text>
//         <Text style={styles.infoCardText}>✓ 10 quick questions</Text>
//         <Text style={styles.infoCardText}>✓ Choose answers that suit you</Text>
//         <Text style={styles.infoCardText}>✓ Go back to change your answers</Text>
//       </View>
//       {button("Let's Start", () => setPage(12))}
//       <Pressable style={styles.textButton} onPress={() => setPage(10)}>
//         <Text style={styles.secondaryText}>Back to Height</Text>
//       </Pressable>
//     </View>
//   );

//   const renderWellnessScore = () => {
//     const score = calculateWellnessScore();
//     const radius = 58;
//     const circumference = 2 * Math.PI * radius;
//     const inner = 2 * Math.PI * 43;
//     const arc = circumference * 0.75 * score / 100;

//     const status = score >= 80
//       ? 'Positive lifestyle indicators'
//       : score >= 60
//       ? 'Some areas to improve'
//       : 'Focus on healthy habits';

//     const message = score >= 80
//       ? 'Your answers show several positive lifestyle habits. Keep building healthy routines.'
//       : score >= 60
//       ? 'Your answers suggest a few areas where healthier daily habits may help.'
//       : 'Consider discussing your health concerns with a qualified healthcare professional.';

//     return (
//       <SafeAreaView style={styles.wellnessScreen}>
//         <View style={styles.wellnessHeader}>
//           <Pressable onPress={() => setPage(21)} style={styles.backButton}>
//             <Text style={styles.backArrow}>‹</Text>
//           </Pressable>
//         </View>
//         <Text style={styles.wellnessTitle}>Your Wellness Score</Text>

//         <View style={styles.gaugeContainer}>
//           <Svg width={230} height={230} viewBox="0 0 160 160">
//             <Circle cx="80" cy="80" r={radius} stroke="#EEEAF0" strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray={`${circumference * 0.75} ${circumference}`} rotation="135" origin="80, 80" />
//             <Circle cx="80" cy="80" r={radius} stroke="#E5A900" strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray={`${arc} ${circumference}`} rotation="135" origin="80, 80" />
//             <Circle cx="80" cy="80" r="43" stroke="#E5E7EB" strokeWidth="4" fill="none" strokeDasharray={`${inner * 0.75} ${inner}`} rotation="135" origin="80, 80" />
//             <Circle cx="80" cy="80" r="43" stroke="#D94141" strokeWidth="4" fill="none" strokeDasharray={`${inner * 0.39} ${inner}`} rotation="135" origin="80, 80" />
//             <Circle cx="80" cy="80" r="43" stroke="#16803C" strokeWidth="4" fill="none" strokeDasharray={`${inner * 0.12} ${inner}`} rotation="42" origin="80, 80" />
//           </Svg>
//           <View style={styles.gaugeNumberContainer}>
//             <Text style={styles.gaugeNumber}>{score}%</Text>
//           </View>
//         </View>

//         <Text style={styles.wellnessStatus}>{status}</Text>
//         <Text style={styles.wellnessMessage}>{message}</Text>
//         <Text style={styles.wellnessDisclaimer}>
//           This is a simple estimate based on selected answers, not a validated health score or medical diagnosis. HbA1c and other health concerns should be discussed with a healthcare professional.
//         </Text>

//         <View style={styles.wellnessBottom}>
//           {button('Get Started', () => Alert.alert('Welcome to MyTwin', `Your questionnaire-based wellness estimate is ${score}%.`))}
//         </View>
//       </SafeAreaView>
//     );
//   };

//   const renderQuestions = () => {
//     if (page === 22) return renderWellnessScore();

//     const index = page - 12;
//     const question = questions[index];
//     if (!question) return null;

//     const current = answers[index];

//     const selectOption = (option) => {
//       setAnswers((previous) => {
//         const updated = [...previous];
//         if (question.multiple) {
//           let selected = [...updated[index]];
//           if (option === 'None') {
//             selected = selected.includes('None') ? [] : ['None'];
//           } else {
//             selected = selected.filter((item) => item !== 'None');
//             selected = selected.includes(option)
//               ? selected.filter((item) => item !== option)
//               : [...selected, option];
//           }
//           updated[index] = selected;
//         } else {
//           updated[index] = option;
//         }
//         return updated;
//       });
//     };

//     const selected = (option) => question.multiple
//       ? current.includes(option)
//       : current === option;

//     const next = () => {
//       if (question.multiple ? current.length === 0 : !current) {
//         Alert.alert('Select an Answer', 'Please select an option before continuing.');
//         return;
//       }
//       setPage(index === 9 ? 22 : page + 1);
//     };

//     return (
//       <View style={styles.questionScreen}>
//         <Text style={styles.brand}>💙 MyTwin</Text>
//         <View style={styles.questionProgressTrack}>
//           <View style={[styles.questionProgressFill, { width: `${((index + 1) / questions.length) * 100}%` }]} />
//         </View>
//         <Text style={styles.questionStep}>QUESTION {index + 1} OF {questions.length}</Text>
//         <Text style={styles.questionTitle}>{question.title}</Text>
//         <Text style={styles.questionDescription}>{question.description}</Text>
//         <ScrollView style={styles.questionOptions} contentContainerStyle={styles.questionOptionsContent}>
//           {question.options.map((option) => (
//             <Pressable key={option} onPress={() => selectOption(option)} style={[
//               styles.questionOption, selected(option) && styles.questionOptionSelected,
//             ]}>
//               <Text style={[styles.questionOptionText, selected(option) && styles.questionOptionTextSelected]}>{option}</Text>
//               <View style={[styles.radioCircle, selected(option) && styles.radioCircleSelected]}>
//                 {selected(option) && <View style={styles.radioInner} />}
//               </View>
//             </Pressable>
//           ))}
//         </ScrollView>
//         <View style={styles.questionBottom}>
//           {index > 0 && (
//             <Pressable style={styles.textButton} onPress={() => setPage(page - 1)}>
//               <Text style={styles.secondaryText}>Back</Text>
//             </Pressable>
//           )}
//           {button(index === 9 ? 'View Wellness Score' : 'Next', next)}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
//       <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//         {page < 4 ? renderOnboarding()
//           : page === 4 ? renderLogin()
//           : page === 5 ? renderOTP()
//           : page === 6 ? renderProfile()
//           : page === 7 ? renderSuccess()
//           : page === 8 ? renderAgeScreen()
//           : page === 9 ? renderWeightScreen()
//           : page === 10 ? renderHeightScreen()
//           : page === 11 ? renderQuestionIntro()
//           : page >= 12 && page <= 22 ? renderQuestions()
//           : renderOnboarding()}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5F8FF' },
//   flex: { flex: 1 },
//   onboardingContent: { flexGrow: 1, padding: 24, alignItems: 'center', justifyContent: 'center' },
//   authContent: { flexGrow: 1, paddingHorizontal: 26, paddingVertical: 28, justifyContent: 'center' },
//   profileContent: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 24, paddingBottom: 35 },
//   brand: { fontSize: 24, fontWeight: '800', color: BLUE, textAlign: 'center', marginBottom: 22 },
//   smallLabel: { fontSize: 12, fontWeight: '800', letterSpacing: 2, color: BLUE, marginBottom: 12 },
//   heroImage: { width: '100%', height: 260, marginBottom: 18 },
//   title: { fontSize: 27, lineHeight: 35, fontWeight: '800', color: '#172B4D', textAlign: 'center', marginBottom: 8 },
//   highlight: { fontSize: 22, lineHeight: 30, fontWeight: '700', color: BLUE, textAlign: 'center' },
//   description: { fontSize: 14, lineHeight: 22, color: '#667085', textAlign: 'center', marginTop: 12, marginBottom: 24 },
//   dots: { flexDirection: 'row', gap: 9, marginBottom: 20, alignItems: 'center' },
//   dot: { height: 8, width: 8, borderRadius: 10, backgroundColor: '#D0D5DD' },
//   activeDot: { width: 24, backgroundColor: BLUE },
//   primaryButton: { minHeight: 52, backgroundColor: '#C94016', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 14, paddingHorizontal: 15 },
//   primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
//   iconCircle: { width: 76, height: 76, borderRadius: 38, backgroundColor: '#E8F0FF', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 24 },
//   iconText: { fontSize: 32, color: BLUE },
//   label: { fontSize: 14, fontWeight: '700', color: '#344054', marginTop: 16, marginBottom: 9 },
//   input: { minHeight: 53, borderWidth: 1, borderColor: '#D0D5DD', borderRadius: 12, backgroundColor: '#FFFFFF', paddingHorizontal: 14, fontSize: 15, color: '#172B4D' },
//   phoneRow: { minHeight: 56, borderWidth: 1, borderColor: '#D0D5DD', borderRadius: 12, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },
//   countryCode: { color: '#344054', fontSize: 14, fontWeight: '700', borderRightWidth: 1, borderRightColor: '#D0D5DD', paddingRight: 12 },
//   phoneInput: { flex: 1, minWidth: 0, paddingHorizontal: 12, paddingVertical: 12, color: '#172B4D', fontSize: 15 },
//   field: { marginBottom: 5 },
//   textButton: { padding: 10, alignItems: 'center' },
//   secondaryText: { color: '#475467', fontWeight: '600' },
//   linkText: { color: BLUE, fontWeight: '700' },
//   privacy: { color: '#98A2B3', textAlign: 'center', fontSize: 11, lineHeight: 17, marginTop: 17 },
//   progressTrack: { height: 5, backgroundColor: '#DCE6FF', borderRadius: 5, overflow: 'hidden', marginBottom: 12 },
//   progressFill: { width: '100%', height: '100%', backgroundColor: BLUE },
//   stepText: { color: BLUE, fontSize: 10, fontWeight: '800', letterSpacing: 1.2, marginBottom: 20 },
//   genderRow: { flexDirection: 'row', gap: 9 },
//   genderButton: { flex: 1, height: 48, borderWidth: 1, borderColor: '#D0D5DD', borderRadius: 12, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
//   genderSelected: { backgroundColor: '#E8F0FF', borderColor: BLUE },
//   genderText: { fontSize: 14, fontWeight: '600', color: '#475467' },
//   genderTextSelected: { color: BLUE },
//   successContent: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 25, paddingVertical: 24 },
//   successCircle: { width: 82, height: 82, borderRadius: 41, backgroundColor: '#D1FADF', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 25 },
//   successIcon: { fontSize: 42, fontWeight: '800', color: '#039855' },
//   summary: { color: '#475467', fontSize: 15, textAlign: 'center', marginBottom: 8 },
//   selectionScreen: { flex: 1, paddingHorizontal: 24, paddingTop: 20, paddingBottom: 12 },
//   ageTitle: { fontSize: 27, lineHeight: 35, fontWeight: '800', color: '#172B4D', textAlign: 'center' },
//   ageDescription: { fontSize: 14, lineHeight: 22, color: '#667085', textAlign: 'center', marginTop: 10 },
//   ageSelectedBox: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8F0FF', borderRadius: 20, paddingVertical: 10, marginTop: 14 },
//   ageSelectedNumber: { fontSize: 38, fontWeight: '800', color: BLUE },
//   ageYears: { fontSize: 14, color: '#475467' },
//   ageHint: { fontSize: 13, color: '#667085', marginTop: 12, marginBottom: 6 },
//   ageList: { flex: 1, marginTop: 8 },
//   ageListContent: { paddingBottom: 10 },
//   ageOption: { paddingVertical: 12, marginBottom: 7, borderRadius: 12, alignItems: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EAECF0' },
//   ageOptionSelected: { backgroundColor: BLUE, borderColor: BLUE },
//   ageOptionText: { fontSize: 16, fontWeight: '600', color: '#344054' },
//   ageOptionTextSelected: { color: '#FFFFFF' },
//   unitRow: { flexDirection: 'row', gap: 12, marginTop: 16 },
//   unitButton: { flex: 1, paddingVertical: 12, borderWidth: 1, borderColor: '#D0D5DD', borderRadius: 12, alignItems: 'center', backgroundColor: '#FFFFFF' },
//   unitButtonSelected: { backgroundColor: '#E8F0FF', borderColor: BLUE },
//   unitButtonText: { color: '#475467', fontWeight: '700', fontSize: 15 },
//   unitButtonTextSelected: { color: BLUE },
//   feetInchesRow: { flex: 1, flexDirection: 'row', gap: 12 },
//   feetColumn: { flex: 1 },
//   feetList: { flex: 1 },
//   questionIntro: { flex: 1, justifyContent: 'center', paddingHorizontal: 25, paddingVertical: 20 },
//   questionIllustration: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#E8F0FF', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
//   questionIllustrationEmoji: { fontSize: 48 },
//   infoCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, borderWidth: 1, borderColor: '#EAECF0' },
//   infoCardTitle: { fontSize: 16, fontWeight: '800', color: '#172B4D', marginBottom: 12 },
//   infoCardText: { fontSize: 14, color: '#475467', marginBottom: 9, lineHeight: 21 },
//   questionScreen: { flex: 1, paddingHorizontal: 22, paddingTop: 20, paddingBottom: 12 },
//   questionProgressTrack: { height: 6, backgroundColor: '#DCE6FF', borderRadius: 6, overflow: 'hidden', marginBottom: 14 },
//   questionProgressFill: { height: '100%', backgroundColor: BLUE, borderRadius: 6 },
//   questionStep: { color: BLUE, fontSize: 11, fontWeight: '800', letterSpacing: 1.3, marginBottom: 12 },
//   questionTitle: { fontSize: 24, lineHeight: 32, fontWeight: '800', color: '#172B4D' },
//   questionDescription: { fontSize: 14, lineHeight: 21, color: '#667085', marginTop: 10, marginBottom: 16 },
//   questionOptions: { flex: 1 },
//   questionOptionsContent: { paddingBottom: 10 },
//   questionBottom: { paddingBottom: 4 },
//   questionOption: { minHeight: 53, paddingHorizontal: 15, paddingVertical: 11, marginBottom: 9, borderRadius: 14, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D0D5DD', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
//   questionOptionSelected: { backgroundColor: '#E8F0FF', borderColor: BLUE },
//   questionOptionText: { flex: 1, fontSize: 14, lineHeight: 20, fontWeight: '600', color: '#344054' },
//   questionOptionTextSelected: { color: BLUE },
//   radioCircle: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: '#98A2B3', alignItems: 'center', justifyContent: 'center' },
//   radioCircleSelected: { borderColor: BLUE },
//   radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: BLUE },
//   wellnessScreen: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 22, paddingTop: 8 },
//   wellnessHeader: { height: 42, justifyContent: 'center' },
//   backButton: { width: 40, height: 40, justifyContent: 'center' },
//   backArrow: { fontSize: 36, color: '#172B4D', lineHeight: 40 },
//   wellnessTitle: { fontSize: 27, fontWeight: '800', color: '#101828', marginTop: 10 },
//   gaugeContainer: { height: 250, alignItems: 'center', justifyContent: 'center', marginTop: 32 },
//   gaugeNumberContainer: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
//   gaugeNumber: { fontSize: 38, fontWeight: '800', color: '#D9A000' },
//   wellnessStatus: { fontSize: 18, color: '#C7A84B', textAlign: 'center', marginTop: 8 },
//   wellnessMessage: { fontSize: 14, lineHeight: 22, color: '#667085', textAlign: 'center', marginTop: 10 },
//   wellnessDisclaimer: { fontSize: 11, lineHeight: 17, color: '#667085', fontStyle: 'italic', textAlign: 'center', marginTop: 12, paddingHorizontal: 8 },
//   wellnessBottom: { marginTop: 'auto', paddingBottom: 18 },
// });















import { useState } from 'react';
import {
  Alert, Image, KeyboardAvoidingView, Platform, Pressable,
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,
  TextInput, View,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const BLUE = '#155EEF';

const onboarding = [
  {
    label: 'FOOD & HEALTH',
    title: 'MyTwin shows you',
    highlight: 'how food affects your health.',
    description: 'Discover how your daily food choices affect your wellbeing.',
    image: require('../../assets/images/Food Health.png'),
  },
  {
    label: 'GLUCOSE INSIGHTS',
    title: 'Get Personal',
    highlight: 'Health Insights.',
    description: 'Understand your glucose trends and personal health data.',
    image: require('../../assets/images/Glucose Insights.png'),
  },
  {
    label: 'DOCTOR CONSULTATION',
    title: 'Expert Doctors',
    highlight: 'at Your Fingertips.',
    description: 'Connect with doctors and book appointments with ease.',
    image: require('../../assets/images/Doctor Consultation.png'),
  },
  {
    label: 'FITNESS TRACKING',
    title: 'Track Your Fitness',
    highlight: 'Effortlessly.',
    description: 'Track daily activity, steps and heart rate.',
    image: require('../../assets/images/Fitness Tracking.png'),
  },
];

const questions = [
  {
    title: 'How active are you?',
    description: 'Choose your usual daily activity.',
    options: ['Mostly sitting', 'Lightly active', 'Moderately active', 'Very active'],
  },
  {
    title: 'How many days a week do you eat outside or packaged food?',
    description: 'Choose the number of days.',
    options: ['0 days', '1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'],
  },
  {
    title: 'How much water do you drink most days?',
    description: 'Choose your usual water intake.',
    options: ['Less than 2 glasses', '2–4 glasses', '5–7 glasses', '8 or more glasses'],
  },
  {
    title: 'How would you rate your stress level?',
    description: 'Think about how you have felt recently.',
    options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
  },
  {
    title: 'Please select your health concerns',
    description: 'Select all that apply.',
    multiple: true,
    options: [
      'Weight management', 'Blood sugar / glucose', 'Heart health',
      'Blood pressure', 'Sleep problems', 'Stress / mental wellbeing',
      'Digestive health', 'Fitness / low energy', 'None', 'Other',
    ],
  },
  {
    title: 'What is your current HbA1c level?',
    description: 'Choose your latest result if you know it.',
    options: [
      'Below 5.7%', '5.7%–6.4%', '6.5%–7%', 'Above 7%',
      'I do not know', 'Not tested yet',
    ],
  },
  {
    title: 'Are you on any medications?',
    description: 'Choose the option that applies to you.',
    options: ['Yes, regularly', 'Yes, occasionally', 'No', 'Prefer not to say'],
  },
  {
    title: 'How much do you spend on healthcare each month?',
    description: 'Include medicines, doctor visits and other costs.',
    options: [
      '₹0–₹500', '₹501–₹1,000', '₹1,001–₹2,500',
      '₹2,501–₹5,000', 'Above ₹5,000', 'Not sure', 'Prefer not to say',
    ],
  },
  {
    title: 'How often do you smoke?',
    description: 'Choose the option that best describes you.',
    options: [
      'Never', 'Former smoker', 'Occasionally',
      'A few days a week', 'Daily', 'Prefer not to say',
    ],
  },
  {
    title: 'How often do you drink alcohol?',
    description: 'Choose the option that best describes you.',
    options: [
      'Never', 'Less than once a month', '1–3 times a month',
      '1–2 times a week', '3 or more times a week', 'Prefer not to say',
    ],
  },
];

const optionPoints = [
  {
    'Mostly sitting': 5, 'Lightly active': 10,
    'Moderately active': 15, 'Very active': 20,
  },
  {
    '0 days': 10, '1 day': 9, '2 days': 8, '3 days': 6,
    '4 days': 5, '5 days': 4, '6 days': 2, '7 days': 1,
  },
  {
    'Less than 2 glasses': 2, '2–4 glasses': 5,
    '5–7 glasses': 8, '8 or more glasses': 10,
  },
  {
    'Very low': 10, 'Low': 8, 'Moderate': 6,
    'High': 3, 'Very high': 1,
  },
  null,
  {
    'Below 5.7%': 10, '5.7%–6.4%': 7, '6.5%–7%': 4,
    'Above 7%': 2, 'I do not know': 6, 'Not tested yet': 6,
  },
  null,
  null,
  {
    'Never': 5, 'Former smoker': 4, 'Occasionally': 3,
    'A few days a week': 1, 'Daily': 0, 'Prefer not to say': 2,
  },
  {
    'Never': 5, 'Less than once a month': 5,
    '1–3 times a month': 4, '1–2 times a week': 3,
    '3 or more times a week': 1, 'Prefer not to say': 3,
  },
];

export default function App() {
  const [page, setPage] = useState(0);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('25');
  const [weight, setWeight] = useState('60');
  const [height, setHeight] = useState('170');
  const [answers, setAnswers] = useState([
    '', '', '', '', [], '', '', '', '', '',
  ]);
  const [dashboardTab, setDashboardTab] = useState('Home');

  const button = (label, onPress) => (
    <Pressable style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </Pressable>
  );

  const field = (label, value, onChangeText, placeholder, extra = {}) => (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#98A2B3"
        {...extra}
      />
    </View>
  );

  const sendOTP = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      Alert.alert('Invalid number', 'Enter a valid 10-digit Indian mobile number.');
      return;
    }
    setPage(5);
    Alert.alert('Demo OTP', 'Use 123456. No SMS is sent in this demo.');
  };

  const verifyOTP = () => {
    if (otp !== '123456') {
      Alert.alert('Incorrect OTP', 'Enter demo OTP 123456.');
      return;
    }
    setPage(6);
  };

  const submitProfile = () => {
    if (!name.trim()) {
      Alert.alert('Required', 'Enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('Invalid email', 'Enter a valid email address.');
      return;
    }
    if (!/^\d{6}$/.test(pincode)) {
      Alert.alert('Invalid pincode', 'Enter a 6-digit pincode.');
      return;
    }
    if (!gender) {
      Alert.alert('Required', 'Select your gender.');
      return;
    }
    setPage(7);
  };

  const calculateScore = () => {
    let earned = 0;
    let possible = 0;

    questions.forEach((question, i) => {
      // Health concerns, medications and healthcare spending are not scored.
      if ([4, 6, 7].includes(i)) return;

      const answer = answers[i];
      if (!answer || Array.isArray(answer)) return;

      const points = optionPoints[i]?.[answer];
      if (typeof points === 'number') {
        earned += points;
        possible += Math.max(...Object.values(optionPoints[i]));
      }
    });

    // Show a score based only on questions that have a scoring rule.
    return possible ? Math.round((earned / possible) * 100) : 0;
  };

  const renderOnboarding = () => {
    const s = onboarding[page];
    return (
      <ScrollView contentContainerStyle={styles.onboarding}>
        <Text style={styles.brand}>💙 MyTwin</Text>
        <Text style={styles.smallLabel}>{s.label}</Text>
        <Image source={s.image} style={styles.heroImage} resizeMode="contain" />
        <Text style={styles.title}>{s.title}</Text>
        <Text style={styles.highlight}>{s.highlight}</Text>
        <Text style={styles.description}>{s.description}</Text>
        <View style={styles.dots}>
          {onboarding.map((item, i) => (
            <Pressable
              key={item.label}
              onPress={() => setPage(i)}
              style={[styles.dot, page === i && styles.activeDot]}
            />
          ))}
        </View>
        {button(page === 3 ? 'Get Started' : 'Continue', () =>
          setPage(page === 3 ? 4 : page + 1)
        )}
        {page > 0 && (
          <Pressable style={styles.textButton} onPress={() => setPage(page - 1)}>
            <Text style={styles.secondaryText}>Back</Text>
          </Pressable>
        )}
      </ScrollView>
    );
  };

  const renderLogin = () => (
    <ScrollView contentContainerStyle={styles.auth} keyboardShouldPersistTaps="handled">
      <Text style={styles.brand}>💙 MyTwin</Text>
      <View style={styles.iconCircle}><Text style={styles.iconText}>☎</Text></View>
      <Text style={styles.title}>Welcome to MyTwin</Text>
      <Text style={styles.description}>Enter your mobile number to continue.</Text>
      {field('Mobile Number (+91)', mobile,
        v => setMobile(v.replace(/\D/g, '').slice(0, 10)),
        '10-digit mobile number',
        { keyboardType: 'phone-pad', maxLength: 10 })}
      {button('Send OTP', sendOTP)}
      <Text style={styles.privacy}>Demo OTP verification. No SMS is sent.</Text>
    </ScrollView>
  );

  const renderOTP = () => (
    <ScrollView contentContainerStyle={styles.auth} keyboardShouldPersistTaps="handled">
      <Text style={styles.brand}>💙 MyTwin</Text>
      <View style={styles.iconCircle}><Text style={styles.iconText}>✉</Text></View>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.description}>Enter the demo code for +91 {mobile}.</Text>
      {field('One-Time Password', otp,
        v => setOtp(v.replace(/\D/g, '').slice(0, 6)),
        'Enter 123456',
        { keyboardType: 'number-pad', maxLength: 6, textAlign: 'center' })}
      {button('Verify OTP', verifyOTP)}
      <Pressable style={styles.textButton} onPress={() => setPage(4)}>
        <Text style={styles.linkText}>Change Mobile Number</Text>
      </Pressable>
    </ScrollView>
  );

  const renderProfile = () => (
    <ScrollView contentContainerStyle={styles.auth} keyboardShouldPersistTaps="handled">
      <Text style={styles.brand}>💙 MyTwin</Text>
      <Text style={styles.smallLabel}>YOUR PROFILE</Text>
      <Text style={styles.title}>Build Your Health Profile</Text>
      <Text style={styles.description}>Enter your information to continue.</Text>
      {field('Full Name', name, setName, 'Your full name', { autoCapitalize: 'words' })}
      {field('Email Address', email, setEmail, 'you@example.com', {
        keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false,
      })}
      {field('Pincode', pincode,
        v => setPincode(v.replace(/\D/g, '').slice(0, 6)),
        '6-digit pincode', { keyboardType: 'number-pad', maxLength: 6 })}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.genderRow}>
        {['Male', 'Female', 'Other'].map(g => (
          <Pressable key={g} onPress={() => setGender(g)}
            style={[styles.genderButton, gender === g && styles.genderSelected]}>
            <Text style={[styles.genderText, gender === g && styles.genderTextSelected]}>{g}</Text>
          </Pressable>
        ))}
      </View>
      {button('Complete Profile', submitProfile)}
    </ScrollView>
  );

  const renderProfileDone = () => (
    <View style={styles.centerScreen}>
      <Text style={styles.brand}>💙 MyTwin</Text>
      <View style={styles.successCircle}><Text style={styles.successIcon}>✓</Text></View>
      <Text style={styles.title}>Profile Completed!</Text>
      <Text style={styles.description}>Welcome, {name}. Let's personalize your health journey.</Text>
      <Text style={styles.summary}>Email: {email}</Text>
      <Text style={styles.summary}>Pincode: {pincode}</Text>
      <Text style={styles.summary}>Gender: {gender}</Text>
      {button('Continue', () => setPage(8))}
    </View>
  );

  const renderBodyInfo = () => (
    <ScrollView contentContainerStyle={styles.auth} keyboardShouldPersistTaps="handled">
      <Text style={styles.brand}>💙 MyTwin</Text>
      <Text style={styles.title}>Tell us about yourself</Text>
      <Text style={styles.description}>This information helps personalize your experience.</Text>
      {field('Age (years)', age, setAge, 'e.g. 25', { keyboardType: 'number-pad' })}
      {field('Weight (kg)', weight, setWeight, 'e.g. 60', { keyboardType: 'decimal-pad' })}
      {field('Height (cm)', height, setHeight, 'e.g. 170', { keyboardType: 'decimal-pad' })}
      {button('Continue to Questions', () => {
        if (![age, weight, height].every(v => Number(v) > 0)) {
          Alert.alert('Check your details', 'Enter a valid age, weight and height.');
          return;
        }
        setPage(11);
      })}
    </ScrollView>
  );

  const renderQuestionIntro = () => (
    <View style={styles.centerScreen}>
      <Text style={styles.brand}>💙 MyTwin</Text>
      <View style={styles.iconCircle}><Text style={styles.iconText}>🩺</Text></View>
      <Text style={styles.title}>A Few Questions to Learn More About You</Text>
      <Text style={styles.description}>
        Answer 10 questions about your lifestyle and health. Your answers will be used to estimate your Wellness Score.
      </Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoCardTitle}>What to expect</Text>
        <Text style={styles.infoCardText}>✓ 10 quick questions</Text>
        <Text style={styles.infoCardText}>✓ Your own selected answers</Text>
        <Text style={styles.infoCardText}>✓ Review your answers before your score</Text>
      </View>
      {button("Let's Start", () => setPage(12))}
      <Pressable style={styles.textButton} onPress={() => setPage(10)}>
        <Text style={styles.secondaryText}>Back</Text>
      </Pressable>
    </View>
  );

  const renderQuestion = () => {
    const index = page - 12;

    if (page === 22) return renderScore();
    const q = questions[index];
    if (!q) return null;

    const current = answers[index];
    const isSelected = option => q.multiple
      ? current.includes(option)
      : current === option;

    const selectOption = option => {
      setAnswers(previous => {
        const updated = [...previous];
        if (q.multiple) {
          let selected = [...updated[index]];
          if (option === 'None') {
            selected = selected.includes('None') ? [] : ['None'];
          } else {
            selected = selected.filter(x => x !== 'None');
            selected = selected.includes(option)
              ? selected.filter(x => x !== option)
              : [...selected, option];
          }
          updated[index] = selected;
        } else {
          updated[index] = option;
        }
        return updated;
      });
    };

    const next = () => {
      if (q.multiple ? current.length === 0 : !current) {
        Alert.alert('Select an answer', 'Please select an option before continuing.');
        return;
      }
      setPage(index === 9 ? 22 : page + 1);
    };

    return (
      <View style={styles.questionScreen}>
        <Text style={styles.brand}>💙 MyTwin</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${((index + 1) / 10) * 100}%` }]} />
        </View>
        <Text style={styles.smallLabel}>QUESTION {index + 1} OF 10</Text>
        <Text style={styles.questionTitle}>{q.title}</Text>
        <Text style={styles.description}>{q.description}</Text>
        <ScrollView style={styles.optionsList} contentContainerStyle={{ paddingBottom: 10 }}>
          {q.options.map(option => (
            <Pressable key={option} onPress={() => selectOption(option)}
              style={[styles.option, isSelected(option) && styles.optionSelected]}>
              <Text style={[styles.optionText, isSelected(option) && styles.optionTextSelected]}>
                {option}
              </Text>
              <View style={[styles.radio, isSelected(option) && styles.radioSelected]}>
                {isSelected(option) && <View style={styles.radioInner} />}
              </View>
            </Pressable>
          ))}
        </ScrollView>
        <View style={styles.bottomButtons}>
          {index > 0 && (
            <Pressable style={styles.textButton} onPress={() => setPage(page - 1)}>
              <Text style={styles.secondaryText}>Back</Text>
            </Pressable>
          )}
          {button(index === 9 ? 'Calculate My Score' : 'Next', next)}
        </View>
      </View>
    );
  };

  const renderScore = () => {
    const score = calculateScore();
    const radius = 55;
    const circumference = 2 * Math.PI * radius;
    const arc = circumference * 0.75 * score / 100;

    const answered = answers.filter(a => Array.isArray(a) ? a.length > 0 : Boolean(a)).length;
    const status = score >= 80 ? 'Strong positive indicators'
      : score >= 60 ? 'Some areas to improve'
      : 'A few healthy habits to work on';

    return (
      <ScrollView contentContainerStyle={styles.scoreScreen}>
        <Pressable style={styles.backButton} onPress={() => setPage(21)}>
          <Text style={styles.secondaryText}>‹ Back to answers</Text>
        </Pressable>
        <Text style={styles.brand}>💙 MyTwin</Text>
        <Text style={styles.title}>Your Wellness Score</Text>
        <Text style={styles.description}>
          Based on your selected lifestyle answers.
        </Text>
        <View style={styles.gauge}>
          <Svg width={220} height={220} viewBox="0 0 160 160">
            <Circle cx="80" cy="80" r={radius} stroke="#E4E7EC" strokeWidth="12"
              fill="none" strokeLinecap="round"
              strokeDasharray={`${circumference * 0.75} ${circumference}`}
              rotation="135" origin="80, 80" />
            <Circle cx="80" cy="80" r={radius} stroke={BLUE} strokeWidth="12"
              fill="none" strokeLinecap="round"
              strokeDasharray={`${arc} ${circumference}`}
              rotation="135" origin="80, 80" />
          </Svg>
          <View style={styles.gaugeNumberContainer}>
            <Text style={styles.gaugeNumber}>{score}</Text>
            <Text style={styles.gaugePercent}>out of 100</Text>
          </View>
        </View>
        <Text style={styles.scoreStatus}>{status}</Text>
        <Text style={styles.description}>
          You answered {answered} of 10 questions. Your score is an estimate based on the lifestyle answers with scoring rules; it is not a medical diagnosis.
        </Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>Your profile</Text>
          <Text style={styles.infoCardText}>Name: {name}</Text>
          <Text style={styles.infoCardText}>Age: {age} years</Text>
          <Text style={styles.infoCardText}>Weight: {weight} kg</Text>
          <Text style={styles.infoCardText}>Height: {height} cm</Text>
        </View>
        {button('Get Started', () => {
          setDashboardTab('Home');
          setPage(23);
        })}
        <Pressable style={styles.textButton} onPress={() => setPage(12)}>
          <Text style={styles.linkText}>Review My Answers</Text>
        </Pressable>
        <Text style={styles.disclaimer}>
          HbA1c and other health concerns should be discussed with a qualified healthcare professional.
        </Text>
      </ScrollView>
    );
  };

  const renderDashboard = () => {
    const score = calculateScore();

    const tiles = [
      { icon: '📊', title: 'Explore Health Score', subtitle: 'Review your wellness estimate', tab: 'Health Score' },
      { icon: '🥗', title: 'Track Food', subtitle: 'Record your daily meals', tab: 'Track Food' },
      { icon: '🧘', title: 'Meditation', subtitle: 'Take a mindful break', tab: 'Meditation' },
      { icon: '❤️', title: 'Health Tracking', subtitle: 'Your health information', tab: 'Health Tracking' },
      { icon: '🩺', title: 'Doctor Consultation', subtitle: 'Explore consultation options', tab: 'Doctor' },
      { icon: '💧', title: 'Water Tracker', subtitle: 'Remember to drink water', tab: 'Water' },
    ];

    const content = {
      Home: (
        <>
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>Hello, {name}! 👋</Text>
            <Text style={styles.welcomeText}>Welcome to your MyTwin health dashboard.</Text>
          </View>
          <Pressable style={styles.scoreCard} onPress={() => setDashboardTab('Health Score')}>
            <View>
              <Text style={styles.cardEyebrow}>YOUR WELLNESS SCORE</Text>
              <Text style={styles.cardScore}>{score}<Text style={styles.cardOutOf}> / 100</Text></Text>
              <Text style={styles.cardLink}>Explore your score →</Text>
            </View>
            <View style={styles.miniCircle}><Text style={styles.miniCircleText}>♥</Text></View>
          </Pressable>
          <Text style={styles.sectionTitle}>Quick Links</Text>
          {tiles.map(tile => (
            <Pressable key={tile.tab} style={styles.dashboardTile}
              onPress={() => setDashboardTab(tile.tab)}>
              <Text style={styles.tileIcon}>{tile.icon}</Text>
              <View style={styles.tileCopy}>
                <Text style={styles.tileTitle}>{tile.title}</Text>
                <Text style={styles.tileSubtitle}>{tile.subtitle}</Text>
              </View>
              <Text style={styles.tileArrow}>›</Text>
            </Pressable>
          ))}
        </>
      ),
      'Health Score': (
        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>Explore Health Score</Text>
          <Text style={styles.detailScore}>{score}/100</Text>
          <Text style={styles.description}>
            This is your questionnaire-based wellness estimate, not a diagnosis.
          </Text>
          <Text style={styles.infoCardText}>Age: {age} years</Text>
          <Text style={styles.infoCardText}>Weight: {weight} kg</Text>
          <Text style={styles.infoCardText}>Height: {height} cm</Text>
          <Text style={styles.infoCardText}>Activity: {answers[0] || 'Not provided'}</Text>
          <Text style={styles.infoCardText}>Water intake: {answers[2] || 'Not provided'}</Text>
          <Text style={styles.infoCardText}>HbA1c: {answers[5] || 'Not provided'}</Text>
        </View>
      ),
      'Track Food': (
        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>🥗 Track Food</Text>
          <Text style={styles.description}>Record a meal you have eaten today.</Text>
          <Text style={styles.label}>Meal or food</Text>
          <TextInput style={styles.input} placeholder="e.g. poha, salad, rice" placeholderTextColor="#98A2B3" />
          <Text style={styles.label}>Meal type</Text>
          <Text style={styles.infoCardText}>Breakfast • Lunch • Dinner • Snack</Text>
          {button('Save Meal', () => Alert.alert('Food Tracker', 'Food entry UI demo. Connect a database to save meals.'))}
        </View>
      ),
      Meditation: (
        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>🧘 Meditation</Text>
          <Text style={styles.description}>Pause, breathe, and take a mindful break.</Text>
          <Text style={styles.tileTitle}>One-minute breathing</Text>
          <Text style={styles.infoCardText}>1. Sit comfortably.</Text>
          <Text style={styles.infoCardText}>2. Breathe in gently.</Text>
          <Text style={styles.infoCardText}>3. Breathe out slowly and relax.</Text>
          {button('Start Breathing', () => Alert.alert('Breathing Exercise', 'Breathe in slowly, then breathe out slowly. Repeat comfortably for one minute.'))}
        </View>
      ),
      'Health Tracking': (
        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>❤️ Health Tracking</Text>
          <Text style={styles.description}>Your self-reported profile information.</Text>
          <Text style={styles.infoCardText}>Activity: {answers[0] || 'Not provided'}</Text>
          <Text style={styles.infoCardText}>Water intake: {answers[2] || 'Not provided'}</Text>
          <Text style={styles.infoCardText}>Health concerns: {Array.isArray(answers[4]) ? answers[4].join(', ') : 'Not provided'}</Text>
          <Text style={styles.infoCardText}>HbA1c: {answers[5] || 'Not provided'}</Text>
          <Text style={styles.infoCardText}>Medication: {answers[6] || 'Not provided'}</Text>
          <Text style={styles.infoCardText}>This demo does not connect to medical devices.</Text>
        </View>
      ),
      Doctor: (
        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>🩺 Doctor Consultation</Text>
          <Text style={styles.description}>
            This demo screen does not book real appointments. Contact a qualified healthcare provider for medical advice.
          </Text>
          {button('Consultation Information', () => Alert.alert('Doctor Consultation', 'Real appointment booking needs a backend or appointment service.'))}
        </View>
      ),
      Water: (
        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>💧 Water Tracker</Text>
          <Text style={styles.description}>Your selected usual daily water intake:</Text>
          <Text style={styles.detailScore}>{answers[2] || 'Not provided'}</Text>
          <Text style={styles.infoCardText}>This is based on your questionnaire answer, not a live tracker.</Text>
        </View>
      ),
    };

    return (
      <SafeAreaView style={styles.dashboard}>
        <View style={styles.dashboardHeader}>
          <Text style={styles.brandLeft}>💙 MyTwin</Text>
          <Text style={styles.headerAvatar}>{name ? name.trim().charAt(0).toUpperCase() : 'U'}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.dashboardContent}>
          {content[dashboardTab] || content.Home}
        </ScrollView>
        <View style={styles.tabBar}>
          {[
            { label: 'Home', icon: '⌂' },
            { label: 'Track Food', icon: '🥗' },
            { label: 'Health Tracking', icon: '♥' },
            { label: 'Meditation', icon: '🧘' },
          ].map(tab => (
            <Pressable key={tab.label} style={styles.tabItem}
              onPress={() => setDashboardTab(tab.label)}>
              <Text style={[styles.tabIcon, dashboardTab === tab.label && styles.tabActive]}>{tab.icon}</Text>
              <Text style={[styles.tabLabel, dashboardTab === tab.label && styles.tabActive]}>{tab.label}</Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F8FF" />
      <KeyboardAvoidingView style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {page < 4 ? renderOnboarding()
          : page === 4 ? renderLogin()
          : page === 5 ? renderOTP()
          : page === 6 ? renderProfile()
          : page === 7 ? renderProfileDone()
          : page === 8 ? renderBodyInfo()
          : page === 11 ? renderQuestionIntro()
          : page >= 12 && page <= 22 ? renderQuestion()
          : page === 23 ? renderDashboard()
          : renderOnboarding()}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F8FF' },
  flex: { flex: 1 },
  onboarding: { flexGrow: 1, padding: 24, alignItems: 'center', justifyContent: 'center' },
  auth: { flexGrow: 1, paddingHorizontal: 25, paddingVertical: 25, justifyContent: 'center' },
  centerScreen: { flex: 1, padding: 24, justifyContent: 'center' },
  brand: { fontSize: 24, fontWeight: '800', color: BLUE, textAlign: 'center', marginBottom: 22 },
  brandLeft: { fontSize: 22, fontWeight: '800', color: BLUE },
  smallLabel: { fontSize: 12, fontWeight: '800', letterSpacing: 1.5, color: BLUE, marginBottom: 12 },
  heroImage: { width: '100%', height: 250, marginBottom: 18 },
  title: { fontSize: 27, lineHeight: 35, fontWeight: '800', color: '#172B4D', textAlign: 'center', marginBottom: 8 },
  highlight: { fontSize: 22, lineHeight: 30, fontWeight: '700', color: BLUE, textAlign: 'center' },
  description: { fontSize: 14, lineHeight: 22, color: '#667085', textAlign: 'center', marginTop: 12, marginBottom: 20 },
  dots: { flexDirection: 'row', gap: 9, marginBottom: 20 },
  dot: { height: 8, width: 8, borderRadius: 10, backgroundColor: '#D0D5DD' },
  activeDot: { width: 24, backgroundColor: BLUE },
  primaryButton: { minHeight: 52, backgroundColor: '#C94016', borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 12, paddingHorizontal: 15 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  iconCircle: { width: 78, height: 78, borderRadius: 39, backgroundColor: '#E8F0FF', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 22 },
  iconText: { fontSize: 32, color: BLUE },
  field: { marginBottom: 6 },
  label: { fontSize: 14, fontWeight: '700', color: '#344054', marginTop: 14, marginBottom: 8 },
  input: { minHeight: 52, borderWidth: 1, borderColor: '#D0D5DD', borderRadius: 12, backgroundColor: '#FFFFFF', paddingHorizontal: 14, fontSize: 15, color: '#172B4D' },
  textButton: { padding: 10, alignItems: 'center' },
  secondaryText: { color: '#475467', fontWeight: '600' },
  linkText: { color: BLUE, fontWeight: '700' },
  privacy: { color: '#98A2B3', textAlign: 'center', fontSize: 11, marginTop: 18 },
  genderRow: { flexDirection: 'row', gap: 9 },
  genderButton: { flex: 1, height: 48, borderWidth: 1, borderColor: '#D0D5DD', borderRadius: 12, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  genderSelected: { backgroundColor: '#E8F0FF', borderColor: BLUE },
  genderText: { fontSize: 14, fontWeight: '600', color: '#475467' },
  genderTextSelected: { color: BLUE },
  successCircle: { width: 82, height: 82, borderRadius: 41, backgroundColor: '#D1FADF', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 22 },
  successIcon: { fontSize: 42, fontWeight: '800', color: '#039855' },
  summary: { color: '#475467', fontSize: 14, textAlign: 'center', marginBottom: 7 },
  infoCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 17, borderWidth: 1, borderColor: '#EAECF0', marginVertical: 12 },
  infoCardTitle: { fontSize: 16, fontWeight: '800', color: '#172B4D', marginBottom: 10 },
  infoCardText: { fontSize: 14, color: '#475467', marginBottom: 8, lineHeight: 21 },
  questionScreen: { flex: 1, paddingHorizontal: 22, paddingTop: 18, paddingBottom: 12 },
  progressTrack: { height: 6, backgroundColor: '#DCE6FF', borderRadius: 6, overflow: 'hidden', marginBottom: 14 },
  progressFill: { height: '100%', backgroundColor: BLUE, borderRadius: 6 },
  questionTitle: { fontSize: 24, lineHeight: 32, fontWeight: '800', color: '#172B4D' },
  optionsList: { flex: 1, marginTop: 4 },
  option: { minHeight: 52, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 9, borderRadius: 13, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D0D5DD', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  optionSelected: { backgroundColor: '#E8F0FF', borderColor: BLUE },
  optionText: { flex: 1, fontSize: 14, lineHeight: 20, fontWeight: '600', color: '#344054' },
  optionTextSelected: { color: BLUE },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: '#98A2B3', alignItems: 'center', justifyContent: 'center' },
  radioSelected: { borderColor: BLUE },
  radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: BLUE },
  bottomButtons: { paddingBottom: 4 },
  scoreScreen: { flexGrow: 1, paddingHorizontal: 22, paddingTop: 15, paddingBottom: 25, backgroundColor: '#FFFFFF' },
  backButton: { alignSelf: 'flex-start', paddingVertical: 10 },
  gauge: { height: 230, alignItems: 'center', justifyContent: 'center', marginTop: 5 },
  gaugeNumberContainer: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  gaugeNumber: { fontSize: 42, fontWeight: '800', color: BLUE },
  gaugePercent: { color: '#667085', fontSize: 12 },
  scoreStatus: { fontSize: 19, fontWeight: '800', color: '#172B4D', textAlign: 'center' },
  disclaimer: { fontSize: 11, lineHeight: 17, color: '#667085', textAlign: 'center', marginTop: 12 },
  dashboard: { flex: 1, backgroundColor: '#F5F8FF' },
  dashboardHeader: { paddingHorizontal: 20, paddingVertical: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF' },
  headerAvatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#E8F0FF', color: BLUE, textAlign: 'center', textAlignVertical: 'center', fontWeight: '800', fontSize: 18, overflow: 'hidden', paddingTop: 9 },
  dashboardContent: { padding: 18, paddingBottom: 25 },
  welcomeCard: { backgroundColor: '#E8F0FF', borderRadius: 18, padding: 18, marginBottom: 15 },
  welcomeTitle: { fontSize: 22, fontWeight: '800', color: '#172B4D' },
  welcomeText: { color: '#475467', marginTop: 7, lineHeight: 21 },
  scoreCard: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#E4E7EC', marginBottom: 23 },
  cardEyebrow: { fontSize: 11, fontWeight: '800', color: '#667085', letterSpacing: 1 },
  cardScore: { fontSize: 34, fontWeight: '800', color: BLUE, marginTop: 6 },
  cardOutOf: { fontSize: 16, color: '#667085' },
  cardLink: { color: BLUE, fontWeight: '700', marginTop: 7 },
  miniCircle: { width: 62, height: 62, borderRadius: 31, backgroundColor: '#E8F0FF', alignItems: 'center', justifyContent: 'center' },
  miniCircleText: { fontSize: 29, color: BLUE },
  sectionTitle: { fontSize: 21, fontWeight: '800', color: '#172B4D', marginBottom: 13 },
  dashboardTile: { backgroundColor: '#FFFFFF', borderRadius: 15, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: '#EAECF0' },
  tileIcon: { fontSize: 25, marginRight: 13 },
  tileCopy: { flex: 1 },
  tileTitle: { fontSize: 15, fontWeight: '800', color: '#172B4D' },
  tileSubtitle: { fontSize: 12, color: '#667085', marginTop: 4 },
  tileArrow: { fontSize: 27, color: '#98A2B3', marginLeft: 8 },
  detailCard: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 18, borderWidth: 1, borderColor: '#EAECF0', marginTop: 10 },
  detailScore: { fontSize: 35, fontWeight: '800', color: BLUE, textAlign: 'center', marginVertical: 14 },
  tabBar: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#EAECF0', paddingTop: 10, paddingBottom: Platform.OS === 'ios' ? 18 : 8 },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 2 },
  tabIcon: { fontSize: 19, color: '#667085', marginBottom: 4 },
  tabLabel: { fontSize: 9, color: '#667085', textAlign: 'center' },
  tabActive: { color: BLUE, fontWeight: '800' },
});
