import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ColorPallete, fonts, fontSize} from '../../../Utils/StylingInfo';
const CounterInput = ({bucketList}) => {
  const [output, setOutput] = useState(0);
  const [color, setColor] = useState(ColorPallete.colors.counterColor);
  const [selectedOne, setSelectedOne] = useState(0);
  const [tempSelectedOne, setTempSelectedOne] = useState(selectedOne);

  useEffect(() => {
    console.log(selectedOne);
  }, [selectedOne]);

  return (
    <View>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={styles.plusMinus}
          onPress={e => {
            setColor(ColorPallete.colors.primary);
            setSelectedOne(bucketList.index);
            output > 0 ? setOutput(output - 1) : null;
          }}>
          <View>
            <AntDesignIcon
              name={'minuscircleo'}
              size={18}
              style={{
                fontWeight: 800
              }}
              color={output ? color : ColorPallete.colors.counterColor}
            />
          </View>
        </TouchableOpacity>
        <View>
          {output ? (
            <Text style={{color: color, fontSize: fontSize.in16, fontFamily: fonts.seogeUISemiBold}}>
              {output}
            </Text>
          ) : (
            <Text
              style={{color: ColorPallete.colors.counterColor, fontSize: fontSize.in16, fontFamily: fonts.seogeUISemiBold}}>
              {output}
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.plusMinus}
          onPress={() => {
            setColor(ColorPallete.colors.primary);
            setSelectedOne(bucketList.index);
            setOutput(output + 1);
          }}>
          <View>
            <AntDesignIcon
              name={'pluscircleo'}
              size={18}
              color={output ? color : ColorPallete.colors.counterColor}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterInput;
