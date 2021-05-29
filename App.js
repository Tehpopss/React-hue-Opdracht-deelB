/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import type { Node } from 'react';
 
 import toggleLed from './toggleLed';
 import changeColor from './changeColor';
 import changeBrightness from './changeBrightness';
 import changeIP from './changeIP';
 import changeBridge from './changeBridge';
 
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   Modal,
   TextInput,
   Alert,
   Dimensions,
 } from 'react-native';
 
 import {
   Picker,
 } from '@react-native-picker/picker'
 
 import {
   createDrawerNavigator
 } from '@react-navigation/drawer'
 
 import {
   NavigationContainer
 } from '@react-navigation/native'
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import { renderNode } from 'react-native-elements/dist/helpers';
 
 const Section = ({ children, title }): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black, alignSelf: 'center',
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const Drawer = createDrawerNavigator();
 
 const App: () => Node = () => {
   return (
     <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home" >  
         <Drawer.Screen name="Home" component={HomeScreen} />    
         <Drawer.Screen name="About" component={About} />
       </Drawer.Navigator>
     </NavigationContainer>
   );
 
 /*
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Button style={styles.button}
             title="Bridge Settings"
             color="blue"
             onPress={() => setModalVisible(true)}
           />
           <Modal
             animationType="slide"
             visible={modalVisible}
             onRequestClose={() => { console.error(`Settings changed`); setModalVisible(!modalVisible) }}>
             <Button
               title="Close"
               color="blue"
               onPress={() => setModalVisible(!modalVisible)}
             />
             <Section title="Change IP">
               <View style={{width: screenWidth, }}>
                 <TextInput onChangeText={(text => setText1({ text }))} style={styles.input} placeholder={ip}></TextInput>
                 <Button style={{}}
                   title="Confirm"
                   color="blue"
                   onPress={() => changeIP(setIp, text1.text)}
                 />
               </View>
             </Section>
             <Section title="Change Username">
               <View style={{width: screenWidth, }}>
                 <TextInput onChangeText={text => setText2({ text })} style={styles.input} placeholder={bridge}></TextInput>
                 <Button style={{}}
                   title="Confirm"
                   color="blue"
                   onPress={() => changeBridge(setBridge, text2.text)}
                 />
               </View>
             </Section>
           </Modal>
 
           <Section title="Lamp 1">
             <View  style={{width: screenWidth, }}>
               <View style={styles.btnStyle}>
               <Button 
               title="Lamp 1 On"
               color="green"
               onPress={() => toggleLed(1, state1, color1, brightness1, true, setLed1, ip, bridge)}
               />
               </View>
               <View style={styles.btnStyle}>
             <Button
               title="Lamp 1 Off"
               color="red"
               onPress={() => toggleLed(1, state1, color1, brightness1, false, setLed1, ip, bridge)}
             />
             </View>
             </View>
           </Section>
 
           <Picker selectedValue= {color1} onValueChange={(value, index) => changeColor(1, state1, color1, brightness1, value, setColor1, ip, bridge)}>
             <Picker.Item label="Kies een kleur..." value= "#FFFFFF"/>
             <Picker.Item label="Rood" value="#FF0000" />
             <Picker.Item label="Geel" value="#FFFF00" />
             <Picker.Item label="Groen" value="#00FF00" />
             <Picker.Item label="Lichtblauw" value="#00FFFF" />
             <Picker.Item label="Blauw" value="#0000FF" />
             <Picker.Item label="Paars" value="#FF00FF" />
           </Picker>
 
           <Picker selectedValue={brightness1} onValueChange={(value, index) => changeBrightness(1, state1, color1, brightness1, value, setBrightness1, ip, bridge)}>
             <Picker.Item label="Stel de helderheid in..." value={brightness1} />
             <Picker.Item label="1" value="1" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="16" value="16" />
             <Picker.Item label="32" value="32" />
             <Picker.Item label="64" value="64" />
             <Picker.Item label="128" value="128" />
             <Picker.Item label="254" value="254" />
           </Picker>
 
           <Section title="Lamp 2">
           <View  style={{width: screenWidth, }}>
           <View style={styles.btnStyle}>
             <Button style={styles.btnStyle}
               title="Lamp 2 On"
               color="green"
               onPress={() => toggleLed(2, state2, color2, brightness2, true, setLed2, ip, bridge)}
             />
             </View>
             <View style={styles.btnStyle}>
             <Button style={styles.btnStyle}
               title="Lamp 2 Off"
               color="red"
               onPress={() => toggleLed(2, state2, color2, brightness2, false, setLed2, ip, bridge)}
             />
             </View>
             </View>
           </Section>
 
           <Picker selectedValue={color2} onValueChange={(value, index) => changeColor(2, state2, color2, brightness2, value, setColor2, ip, bridge)}>
             <Picker.Item label="Kies een kleur..." value="#FFFFFF" />
             <Picker.Item label="Rood" value="#FF0000" />
             <Picker.Item label="Geel" value="#FFFF00" />
             <Picker.Item label="Groen" value="#00FF00" />
             <Picker.Item label="Lichtblauw" value="#00FFFF" />
             <Picker.Item label="Blauw" value="#0000FF" />
             <Picker.Item label="Paars" value="#FF00FF" />
           </Picker>
 
           <Picker selectedValue={brightness2} onValueChange={(value, index) => changeBrightness(2, state2, color2, brightness2, value, setBrightness2, ip, bridge)}>
             <Picker.Item label="Stel de helderheid in..." value={brightness2} />
             <Picker.Item label="1" value="1" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="16" value="16" />
             <Picker.Item label="32" value="32" />
             <Picker.Item label="64" value="64" />
             <Picker.Item label="128" value="128" />
             <Picker.Item label="254" value="254" />
           </Picker>
 
           <Section title="Lamp 3">
           <View  style={{width: screenWidth, }}>
           <View style={styles.btnStyle}>
             <Button style={styles.btnStyle}
               title="Lamp 3 On"
               color="green"
               onPress={() => toggleLed(3, state3, color3, brightness3, true, setLed3, ip, bridge)}
             />
             </View>
             <View style={styles.btnStyle}>
             <Button style={styles.btnStyle}
               title="Lamp 3 Off"
               color="red"
               onPress={() => toggleLed(3, state3, color3, brightness3, true, setLed3, ip, bridge)}
             />
             </View>
             </View>
           </Section>
           <Picker selectedValue={color3} onValueChange={(value, index) => changeColor(3, state3, color3, brightness3, value, setColor3, ip, bridge)}>
             <Picker.Item label="Kies een kleur..." value="#FFFFFF" />
             <Picker.Item label="Rood" value="#FF0000" />
             <Picker.Item label="Geel" value="#FFFF00" />
             <Picker.Item label="Groen" value="#00FF00" />
             <Picker.Item label="Lichtblauw" value="#00FFFF" />
             <Picker.Item label="Blauw" value="#0000FF" />
             <Picker.Item label="Paars" value="#FF00FF" />
           </Picker>
 
           <Picker selectedValue={brightness3} onValueChange={(value, index) => changeBrightness(3, state3, color3, brightness3, value, setBrightness3, ip, bridge)}>
             <Picker.Item label="Stel de helderheid in..." value={brightness3} />
             <Picker.Item label="1" value="1" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="16" value="16" />
             <Picker.Item label="32" value="32" />
             <Picker.Item label="64" value="64" />
             <Picker.Item label="128" value="128" />
             <Picker.Item label="254" value="254" />
           </Picker>
         </View>
       </ScrollView>
     </SafeAreaView>
   );*/
 };
 
 function HomeScreen({navigation}) {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const [state1, setLed1] = useState(false)
   const [brightness1, setBrightness1] = useState(50)
   const [color1, setColor1] = useState("#FFFFFF")
 
   const [state2, setLed2] = useState(false)
   const [brightness2, setBrightness2] = useState(50)
   const [color2, setColor2] = useState("#FFFFFF")
 
   const [state3, setLed3] = useState(false)
   const [brightness3, setBrightness3] = useState(50)
   const [color3, setColor3] = useState("#FFFFFF")
 
   const [text1, setText1] = useState("");
   const [text2, setText2] = useState("");
 
   const [ip, setIp] = useState("10.198.120.60")
   const [bridge, setBridge] = useState("QScScRGIUH581BZOxzAoTrW76rN38GfgXd9QIFyz")
 
   const [modalVisible, setModalVisible] = useState(false);
 
   var screenWidth = Dimensions.get('window').width - 48;
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Button style={styles.button}
             title="Bridge Settings"
             color="blue"
             onPress={() => setModalVisible(true)}
           />
           <Modal
             animationType="slide"
             visible={modalVisible}
             onRequestClose={() => { console.error(`Settings changed`); setModalVisible(!modalVisible) }}>
             <Button
               title="Close"
               color="blue"
               onPress={() => setModalVisible(!modalVisible)}
             />
             <Section title="Change IP">
               <View style={{width: screenWidth, }}>
                 <TextInput onChangeText={(text => setText1({ text }))} style={styles.input} placeholder={ip}></TextInput>
                 <Button style={{}}
                   title="Confirm"
                   color="blue"
                   onPress={() => changeIP(setIp, text1.text)}
                 />
               </View>
             </Section>
             <Section title="Change Username">
               <View style={{width: screenWidth, }}>
                 <TextInput onChangeText={text => setText2({ text })} style={styles.input} placeholder={bridge}></TextInput>
                 <Button style={{}}
                   title="Confirm"
                   color="blue"
                   onPress={() => changeBridge(setBridge, text2.text)}
                 />
               </View>
             </Section>
           </Modal>
 
           <Section title="Lamp 1">
             <View  style={{width: screenWidth, }}>
               <View style={styles.btnStyle}>
               <Button 
               title="Lamp 1 On"
               color="green"
               onPress={() => toggleLed(1, state1, color1, brightness1, true, setLed1, ip, bridge)}
               />
               </View>
               <View style={styles.btnStyle}>
             <Button
               title="Lamp 1 Off"
               color="red"
               onPress={() => toggleLed(1, state1, color1, brightness1, false, setLed1, ip, bridge)}
             />
             </View>
             </View>
           </Section>
 
           <Picker selectedValue= {color1} onValueChange={(value, index) => changeColor(1, state1, color1, brightness1, value, setColor1, ip, bridge)}>
             <Picker.Item label="Kies een kleur..." value= "#FFFFFF"/>
             <Picker.Item label="Rood" value="#FF0000" />
             <Picker.Item label="Geel" value="#FFFF00" />
             <Picker.Item label="Groen" value="#00FF00" />
             <Picker.Item label="Lichtblauw" value="#00FFFF" />
             <Picker.Item label="Blauw" value="#0000FF" />
             <Picker.Item label="Paars" value="#FF00FF" />
           </Picker>
 
           <Picker selectedValue={brightness1} onValueChange={(value, index) => changeBrightness(1, state1, color1, brightness1, value, setBrightness1, ip, bridge)}>
             <Picker.Item label="Stel de helderheid in..." value={brightness1} />
             <Picker.Item label="1" value="1" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="16" value="16" />
             <Picker.Item label="32" value="32" />
             <Picker.Item label="64" value="64" />
             <Picker.Item label="128" value="128" />
             <Picker.Item label="254" value="254" />
           </Picker>
 
           <Section title="Lamp 2">
           <View  style={{width: screenWidth, }}>
           <View style={styles.btnStyle}>
             <Button style={styles.btnStyle}
               title="Lamp 2 On"
               color="green"
               onPress={() => toggleLed(2, state2, color2, brightness2, true, setLed2, ip, bridge)}
             />
             </View>
             <View style={styles.btnStyle}>
             <Button style={styles.btnStyle}
               title="Lamp 2 Off"
               color="red"
               onPress={() => toggleLed(2, state2, color2, brightness2, false, setLed2, ip, bridge)}
             />
             </View>
             </View>
           </Section>
 
           <Picker selectedValue={color2} onValueChange={(value, index) => changeColor(2, state2, color2, brightness2, value, setColor2, ip, bridge)}>
             <Picker.Item label="Kies een kleur..." value="#FFFFFF" />
             <Picker.Item label="Rood" value="#FF0000" />
             <Picker.Item label="Geel" value="#FFFF00" />
             <Picker.Item label="Groen" value="#00FF00" />
             <Picker.Item label="Lichtblauw" value="#00FFFF" />
             <Picker.Item label="Blauw" value="#0000FF" />
             <Picker.Item label="Paars" value="#FF00FF" />
           </Picker>
 
           <Picker selectedValue={brightness2} onValueChange={(value, index) => changeBrightness(2, state2, color2, brightness2, value, setBrightness2, ip, bridge)}>
             <Picker.Item label="Stel de helderheid in..." value={brightness2} />
             <Picker.Item label="1" value="1" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="16" value="16" />
             <Picker.Item label="32" value="32" />
             <Picker.Item label="64" value="64" />
             <Picker.Item label="128" value="128" />
             <Picker.Item label="254" value="254" />
           </Picker>
 
           <Section title="Lamp 3">
           <View  style={{width: screenWidth, }}>
           <View style={styles.btnStyle}>
             <Button style={styles.btnStyle}
               title="Lamp 3 On"
               color="green"
               onPress={() => toggleLed(3, state3, color3, brightness3, true, setLed3, ip, bridge)}
             />
             </View>
             <View style={styles.btnStyle}>
             <Button style={styles.btnStyle}
               title="Lamp 3 Off"
               color="red"
               onPress={() => toggleLed(3, state3, color3, brightness3, true, setLed3, ip, bridge)}
             />
             </View>
             </View>
           </Section>
           <Picker selectedValue={color3} onValueChange={(value, index) => changeColor(3, state3, color3, brightness3, value, setColor3, ip, bridge)}>
             <Picker.Item label="Kies een kleur..." value="#FFFFFF" />
             <Picker.Item label="Rood" value="#FF0000" />
             <Picker.Item label="Geel" value="#FFFF00" />
             <Picker.Item label="Groen" value="#00FF00" />
             <Picker.Item label="Lichtblauw" value="#00FFFF" />
             <Picker.Item label="Blauw" value="#0000FF" />
             <Picker.Item label="Paars" value="#FF00FF" />
           </Picker>
 
           <Picker selectedValue={brightness3} onValueChange={(value, index) => changeBrightness(3, state3, color3, brightness3, value, setBrightness3, ip, bridge)}>
             <Picker.Item label="Stel de helderheid in..." value={brightness3} />
             <Picker.Item label="1" value="1" />
             <Picker.Item label="8" value="8" />
             <Picker.Item label="16" value="16" />
             <Picker.Item label="32" value="32" />
             <Picker.Item label="64" value="64" />
             <Picker.Item label="128" value="128" />
             <Picker.Item label="254" value="254" />
           </Picker>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 }
 
   function About({navigation}) {
     return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button onPress={() => navigation.goBack()} title="Go back home" color="blue" />
       </View>
     );
   }
 
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   input: {
     marginTop: 12,
     marginBottom: 12,
     borderWidth: 2,
     borderColor: '#0000FF',
     padding: 5,
     textAlign: 'center',
   },
   btnStyle: {
     paddingTop: 5,
     paddingBottom: 5,
   }
 });
 
 export default App;