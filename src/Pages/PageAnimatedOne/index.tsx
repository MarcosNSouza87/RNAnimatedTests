import React from 'react';
import styled from 'styled-components/native';
import img from '../../Components/Atoms/Images/snowy.gif';

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
  return (
    <Container>
      <Content>
        <ImageA source={img} />
        <TextExample>PageTest1</TextExample>
      </Content>
    </Container>
  );
}

const ImageA = styled.Image``;

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextExample = styled.Text`
  font-size: 20px;
  color: #000;
`;
