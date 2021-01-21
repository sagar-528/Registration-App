import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GobalCss from '../Styles/GlobalCss'

const HomePage = () => {
  return(
    <View style = {GobalCss.container}>
      <View style = {GobalCss.homeHeader}>
        <Animatable.Image
        animation = "bounceIn"
        duraton = "1500"
        source = {require('../Assets/avatar.png')}/>
      </View>
      <Animatable.View 
        style = {GobalCss.homeFooter}
        animation = "fadeInUpBig"
      >
        <Text style = {GobalCss.title}>Wellcome to Registartion App.</Text>
        <Text style = {GobalCss.text}>Sign in with new account.</Text> 
        <View style = {GobalCss.homeButton}>
          <TouchableOpacity>
              <LinearGradient
                  colors = {['#08d4c4', '#01ab9d']}
                  style = {GobalCss.homeSignIn}
              >
                  <Text style = {GobalCss.homeTextSign}>Get Started</Text>
                  <FontAwesome5 
                        name = "angle-double-right"
                        color = "#fff"
                        size = {20}
                        style = {GobalCss.icon}
                  />
              </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default HomePage

