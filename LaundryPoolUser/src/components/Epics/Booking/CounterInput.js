import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { ColorPallete, fonts, fontSize } from '../../../Utils/StylingInfo';
const CounterInput = () => {
  const [output, setOutput] = useState(0);
  const [color, setColor] = useState(ColorPallete.colors.counterColor);

  return (
    <View>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.plusMinus}>
          <View><AntDesignIcon name={'minuscircleo'} size={20} color={color} /></View>
        </TouchableOpacity>
        <View>
          <Text style={{color:color,fontSize: fontSize.in20}}>{output}</Text>
        </View>
        <TouchableOpacity style={styles.plusMinus}>
          <View><AntDesignIcon name={'pluscircleo'} size={20} color={color} /></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterInput;
