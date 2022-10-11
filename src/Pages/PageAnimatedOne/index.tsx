import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import img from '../../Components/Atoms/Images/snowy.gif';
import colors from '../../Styles/colors';
import { Animated } from 'react-native';

/*para add gif animado em aplicações ,
* 
*
* add no arquivo android/app/build.gradle

dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])

    //noinspection GradleDynamicVersion
    implementation "com.facebook.react:react-native:+"  // From node_modules

  //linhas add 
    implementation 'com.facebook.fresco:fresco:2.0.0'
    implementation 'com.facebook.fresco:animated-gif:2.5.0'
    //
*/

export default function PageAnimatedOne() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false
    }).start();
  };

  const positionAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const MoveIn = () => {
    // Will change positionAnim value to 1 in 5 seconds
    Animated.timing(positionAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false
    }).start();
  };


  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <Animated.Image source={img} style={[
            {opacity:fadeAnim}
          ]}
          />
        </Header>
        <Animated.View style={[
          {
          }
        ]}>
        <BoxInfo>
          <Title color={colors.white} size={14}>
            London UK
          </Title>
        </BoxInfo>
        </Animated.View>
        <Row>
          <BoxDate backgroundcolor={colors.orange}>
            <Title color={colors.white} size={14}>
              Tod
            </Title>
          </BoxDate>
        </Row>
      </Content>
    </Container>
  );
}

const ImageA = styled.Image``;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.purpleWhite};
`;
const Content = styled.View`
  flex: 1;
`;

interface ITitle {
  color: string;
  size: number;
}

const Title = styled.Text<ITitle>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
`;

const Header = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52.5%;
  background-color: ${colors.purpleDark};
`;

const BoxInfo = styled.View`
  width: 100%;
  height: 27%;
  background-color: ${colors.red};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

interface BoxDate {
  backgroundcolor: string;
}

const BoxDate = styled.View<BoxDate>`
  height: 180px;
  width: 33%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor};
`;
