import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Progress from '../../Dashboard/Progress';
import CustomIcon from '../../../../Utils/CustomIcon';
import {ColorPallete} from '../../../../Utils/StylingInfo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [selectedValue, setselectedValue] = useState({
    date: date,
    time: '',
  });
  const [show, setShow] = useState(false);

  const [dateSelector, setdateSelector] = useState({
    autoTime1: false,
    autoTime2: false,
    customTime: false,
  });

  const [timeSelector, settimeSelector] = useState([
    {
      time: '9:00am - 10:00am',
      selected: false,
    },
    {
      time: '10:00am - 11:00am',
      selected: false,
    },
    {
      time: '11:00am - 12:00pm',
      selected: false,
    },
    {
      time: '12:00pm - 01:00pm',
      selected: false,
    },
    {
      time: '1:00pm - 2:00pm',
      selected: false,
    },
    {
      time: '2:00pm - 3:00pm',
      selected: false,
    },
    {
      time: '3:00pm - 4:00pm',
      selected: false,
    },
    {
      time: '4:00pm - 5:00pm',
      selected: false,
    },
  ]);

  const handleChange = type => {
    switch (type) {
      case 'autoTime1':
        setdateSelector({autoTime1: true, autoTime2: false, customTime: false});
        break;
      case 'autoTime2':
        setdateSelector({autoTime1: false, autoTime2: true, customTime: false});
        break;
      case 'customTime':
        setdateSelector({autoTime1: false, autoTime2: false, customTime: true});
        showDatepicker();
        break;
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    date === currentDate
      ? setdateSelector({
          autoTime1: false,
          autoTime2: false,
          customTime: false,
        })
      : setselectedValue({...selectedValue, date: currentDate});

    setShow(false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const changeTimeSelector = (index, time) => {
    let tempArray = timeSelector.map((data, i) => {
      if (i === index) {
        data.selected = true;
      } else {
        data.selected = false;
      }
      return data;
    });
    settimeSelector(tempArray);
    setselectedValue({...selectedValue, time: time});
  };

  return (
    <ScrollView>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => onChange(event, selectedDate)}
        />
      )}
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeHeadingContainer}>
          <View>
            <Progress big={120}>
              <CustomIcon
                name={'pick-up-truck'}
                size={85}
                color={ColorPallete.colors.primary}
              />
            </Progress>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingTextContainer}>Pick up</Text>
          </View>
        </View>
        <View style={styles.pickUpDateContainer}>
          <View style={styles.pickUpDateHeadingContainer}>
            <Text style={styles.pickUpDateTextContainer}>
              Select Pick up Date
            </Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1, marginTop: 10}}>
            <View
              style={
                dateSelector.autoTime1
                  ? [styles.touchableIcons, styles.activeIcons]
                  : [styles.touchableIcons]
              }>
              <TouchableOpacity onPress={() => handleChange('autoTime1')}>
                <View
                  style={{
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={
                      dateSelector.autoTime1
                        ? [
                            styles.touchableIconsDateText,
                            {
                              top: 5,
                              color: ColorPallete.colors.white,
                            },
                          ]
                        : [
                            styles.touchableIconsDateText,
                            {
                              top: 5,
                            },
                          ]
                    }>
                    Today 10 sep
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={
                dateSelector.autoTime2
                  ? [styles.touchableIcons, styles.activeIcons]
                  : [styles.touchableIcons]
              }>
              <TouchableOpacity onPress={() => handleChange('autoTime2')}>
                <View
                  style={{
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={
                      dateSelector.autoTime2
                        ? [
                            styles.touchableIconsDateText,
                            {
                              top: 5,
                              color: ColorPallete.colors.white,
                            },
                          ]
                        : [
                            styles.touchableIconsDateText,
                            {
                              top: 5,
                            },
                          ]
                    }>
                    Tomorrow 10 sep
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={
                dateSelector.customTime
                  ? [
                      styles.touchableIconsDate,
                      {borderColor: ColorPallete.colors.primary},
                    ]
                  : [styles.touchableIconsDate]
              }>
              <TouchableOpacity onPress={() => handleChange('customTime')}>
                <View
                  style={{
                    alignSelf: 'center',
                  }}>
                  <Text style={styles.touchableIconsDateText}>
                    <FontAwesome5
                      name={'calendar-alt'}
                      size={30}
                      style={
                        dateSelector.customTime
                          ? {color: ColorPallete.colors.primary}
                          : null
                      }
                      color={ColorPallete.colors.textColor}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.pickUpTimeContainer}>
          <View style={styles.pickUpDateHeadingContainer}>
            <Text style={styles.pickUpDateTextContainer}>
              Select Pick up Time
            </Text>
          </View>
          <View style={styles.timeContainer}>
            {timeSelector.map((data, index) => {
              return (
                <View
                  key={index}
                  style={
                    data.selected
                      ? [styles.timeItems, styles.activeIcons]
                      : styles.timeItems
                  }>
                  <TouchableOpacity
                    onPress={() => changeTimeSelector(index, data.time)}>
                    <Text
                      style={
                        data.selected
                          ? [
                              styles.touchableIconsDateText,
                              {color: ColorPallete.colors.white},
                            ]
                          : styles.touchableIconsDateText
                      }>
                      {data.time}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DateTime;
