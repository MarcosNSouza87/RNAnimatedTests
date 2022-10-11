import React from 'react';
import { Animated, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Img from '../../Components/Atoms/Images/PageSScreen';

  const style = StyleSheet.create({
    logoLong:{
      height: 100,
    },
    imgBuilds:{
      height: 400,
    },
    shine: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  });
export default function SplashScreenTwo() {


  return (
    <ImageBackground
      source={Img.Background}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode={'cover'}
    >
      <View>
        <Animated.Image 
        source={Img.Brilho} 
        resizeMode={'cover'}
        style={style.shine} 
        />
        <ImgBuilds style={style.imgBuilds}/>
        <ImgLogo style={style.logoLong} />
      </View>
      <View>
        <Image source={Img.Assinatura} style={{ width: 190, height: 150 }} />
      </View>
      
    </ImageBackground>
  );
}

const ImgBuilds = styled.Image.attrs({
  source: Img.Builds,
  resizeMode: 'contain',
})``;

const ImgLogo = styled.Image.attrs({
  source: Img.LogoLong,
  resizeMode: 'contain',
})``;
