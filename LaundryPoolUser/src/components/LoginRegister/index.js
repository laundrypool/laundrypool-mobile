import React, {useState, useEffect, useRef } from 'react';
import {Text, View, TouchableOpacity, TextInput, Animated} from 'react-native';
import {styles} from './styles';
import PreLoginLogo from '../commonComponents/PreLoginLogo';
import {globalStyles} from '../commonComponents/commonStyles';
import CustomButton from '../commonComponents/CustomButton';
import {ColorPallete} from '../../Utils/StylingInfo';

const LoginRegister = (props) => {
  const [tabKey, setTabKey] = useState('0');
  const [active, setactive] = useState(0);
  const [tabOne, setTabOne] = useState(0);
  const [tabTwo, setTabTwo] = useState(0);
  const [translateX, settranslateX] = useState(new Animated.Value(0));

  const elementRef = useRef();

  const handleSlide = (type) => {
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTabKey(props.navigation.state.params.tabkey);
    if( props.navigation.state.params.tabkey != '1'){
      handleSlide(117);
    }
    
  }, [props.navigation.state.params.tabkey]);

  const handleSubmit = () => {
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
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 40,
                  marginBottom: 20,
                  height: 36,
                  position: 'relative',
                }}>
                <Animated.View
                  style={[
                    styles.activeBorder,
                    {
                      transform: [
                        {
                          translateX,
                        },
                      ],
                    },
                  ]}
                />
                <TouchableOpacity
                  style={styles.tabStyle}
                  onLayout={(event) => setTabOne(event.nativeEvent.layout.x)}
                  onPress={() => {
                    setTabKey('1');
                    setactive(0);
                    handleSlide(tabOne);
                  }}>
                  <View>
                    <Text
                      style={
                        tabKey == 1 ? styles.tabHeading : styles.disabledHeading
                      }>
                      Login
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.tabStyle}
                  onLayout={(event) => setTabTwo(event.nativeEvent.layout.x)}
                  ref={elementRef}
                  onPress={() => {
                    setTabKey('2');
                    setactive(1);
                    handleSlide(tabTwo);
                  }}>
                  <View>
                    <Text
                      style={
                        tabKey == 2 ? styles.tabHeading : styles.disabledHeading
                      }>
                      Register
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
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
                    onPress={() => handleSubmit()}
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
                    onPress={() => handleSubmit()}
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
