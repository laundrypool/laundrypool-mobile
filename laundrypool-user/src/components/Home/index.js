import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import CustomButton from '../commonComponents/CustomButton';
import PreLoginLogo from '../commonComponents/PreLoginLogo';

export default class Home extends Component {
  onPress = (key) => {
    this.props.navigation.navigate('LoginRegister', {
      tabkey: key,
    });
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <PreLoginLogo />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.heading}>
              <Text style={styles.headingText}>Let's Get Start</Text>
            </View>
            <View style={styles.subHeading}>
              <View style={{width: 250, alignSelf: 'center'}}>
                <Text style={styles.subHeadingText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </View>
            </View>
            <View style={styles.subHeading}>
              <View style={{width: 250, alignSelf: 'center'}}>
                <CustomButton
                  title="Create account"
                  onPress={() => this.onPress("2")}
                  marginTop="mT30"
                />
                <CustomButton onPress={() => this.onPress("1")} title="Login" primary={false} marginTop="mT30" />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}
