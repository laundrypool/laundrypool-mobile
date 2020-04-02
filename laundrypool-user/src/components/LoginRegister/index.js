import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './styles';
import PreLoginLogo from '../commonComponents/PreLoginLogo';
import {globalStyles} from '../commonComponents/commonStyles';
import CustomButton from '../commonComponents/CustomButton';
import {ColorPallete} from '../../Utils/StylingInfo';

const LoginRegister = props => {
  const [tabKey, setTabKey] = useState('0');

  useEffect(() => {
    setTabKey(props.navigation.state.params.tabkey);
  }, [props.navigation.state.params.tabkey]);

  handleSubmit = () => {
    props.navigation.navigate('Epics');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <PreLoginLogo />
        </View>
        <View style={styles.bottomContainer}>
          <View style={{width: 260, alignSelf: 'center'}}>
            <View style={styles.tabHeadingContainer}>
              <TouchableOpacity
                style={styles.tabStyle}
                onPress={() => setTabKey('1')}>
                <View>
                  <Text
                    style={
                      tabKey == 1 ? styles.tabHeading : styles.disabledHeading
                    }>
                    Login
                  </Text>
                  {tabKey == 1 && <View style={styles.activeBorder} />}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tabStyle}
                onPress={() => setTabKey('2')}>
                <View>
                  <Text
                    style={
                      tabKey == 2 ? styles.tabHeading : styles.disabledHeading
                    }>
                    Register
                  </Text>
                  {tabKey == 2 && <View style={styles.activeBorder} />}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.tabBody}>
              {tabKey == 1 && (
                <>
                  <View>
                    <TextInput
                      placeholder="Mobile Number"
                      style={[styles.inputBody, globalStyles.mT10]}
                      placeholderTextColor={ColorPallete.colors.disabled}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Password"
                      style={[styles.inputBody, globalStyles.mT20]}
                    />
                  </View>
                  <CustomButton
                    title="Login"
                    btnWidth="80"
                    onPress={() => this.handleSubmit()}
                  />
                </>
              )}

              {tabKey == 2 && (
                <>
                  <View>
                    <TextInput
                      placeholder="Mobile Number"
                      style={[styles.inputBody, globalStyles.mT10]}
                    />
                  </View>

                  <View>
                    <TextInput
                      placeholder="Password"
                      style={[styles.inputBody, globalStyles.mT20]}
                    />
                  </View>

                  <View>
                    <TextInput
                      placeholder="Re-type Password"
                      style={[styles.inputBody, globalStyles.mT20]}
                    />
                  </View>
                  <CustomButton
                    onPress={() => this.handleSubmit()}
                    title="Register"
                    btnWidth="80"
                  />
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginRegister;
