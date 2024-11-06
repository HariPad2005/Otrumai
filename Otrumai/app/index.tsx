import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const App = () => {
 return (
   <View style={styles.container}>
     <View style={styles.landing}></View>
     <View style={styles.nextGroup}>
       <Text style={styles.next}>Next</Text>
       <View style={styles.chevronsRight}></View>
     </View>
     <View style={styles.icon}></View>
     <Image
       source={{ uri: 'your_image_url_here' }}
       style={styles.logo}
     />
     <Text style={styles.title}>HOPE BRIDGE</Text>
     <Text style={styles.subtitle}>Together, we rebuild Lives</Text>
   </View>
 );
};


const styles = StyleSheet.create({
 container: {
   position: 'relative',
   width: 430,
   height: 932,
   backgroundColor: 'transparent',
   background: 'linear-gradient(180deg, #F19A6A 0%, #999999 100%)',
 },
 landing: {
   position: 'absolute',
   width: 46,
   height: 275,
   left: 0,
   top: 191,
 },
 nextGroup: {
   position: 'absolute',
   width: 173,
   height: 48,
   left: 240,
   top: 854,
 },
 next: {
   position: 'absolute',
   left: '55.81%',
   top: '92.6%',
   fontFamily: 'Inter',
   fontStyle: 'italic',
   fontWeight: '400',
   fontSize: 32,
   lineHeight: 22,
   textAlign: 'center',
   letterSpacing: -0.43,
   color: '#FFFFFF',
 },
 chevronsRight: {
   position: 'absolute',
   left: '84.88%',
   top: '91.63%',
 },
 icon: {
   position: 'absolute',
   left: '25%',
   top: '29.17%',
   width: 100, // Define width based on your requirement
   height: 100, // Define height based on your requirement
   borderWidth: 4,
   borderColor: '#FFFFFF',
 },
 logo: {
   position: 'absolute',
   width: 355,
   height: 357,
   left: 34,
   top: 150,
 },
 title: {
   position: 'absolute',
   width: 641,
   height: 53,
   left: -112,
   top: 65,
   fontFamily: 'Inter',
   fontStyle: 'italic',
   fontWeight: '900',
   fontSize: 48,
   lineHeight: 22,
   textAlign: 'center',
   letterSpacing: -0.43,
   color: '#0085FF',
 },
 subtitle: {
   position: 'absolute',
   width: 619,
   height: 78,
   left: -90,
   top: 551,
   fontFamily: 'Inter',
   fontStyle: 'italic',
   fontWeight: '800',
   fontSize: 32,
   lineHeight: 22,
   textAlign: 'center',
   letterSpacing: -0.43,
   color: '#000000',
 },
});


export default App;


