import React, {useState, useEffect} from 'react';
import {Text, View, Alert, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import CounterInput from './CounterInput';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ColorPallete, fonts, fontSize} from '../../../Utils/StylingInfo';
import ServiceType from './ServiceType';
import CustomIcon from '../../../Utils/CustomIcon';

const BookingComponent = props => {
  const [selectedService, setSelectedService] = useState({
    washing: false,
    dryCleaning: false,
    ironing: false,
  });

  useEffect(() => {
    setSelectedService(props.selectedBooking);
  }, [
    props.selectedBooking.washing,
    props.selectedBooking.dryCleaning,
    props.selectedBooking.ironing,
  ]);

  return (
    <View>
      <ServiceType
        setServiceType={data => setSelectedService(data)}
        selectedService={selectedService}
      />
      {/* Search Box / Men Women Tabs */}
      <View style={styles.searchBoxTabsContainer}>
        <View style={styles.searchBox}>
          <View style={styles.searchIcon}>
            <AntDesignIcon
              name={'search1'}
              size={20}
              color={ColorPallete.colors.counterColor}
              style={{alignSelf: 'center'}}
            />
          </View>
          <TextInput
            placeholder="Search for laundry items here"
            style={[styles.inputBody]}
          />
        </View>

        <View style={styles.userTabsContainer}>
          <View style={styles.userTabs}>
            <CustomIcon
              name={'man'}
              size={45}
              style={{textAlign: 'center'}}
              color={ColorPallete.colors.counterColor}
            />
            <Text style={styles.tabText}>Men</Text>
          </View>
          <View style={styles.userTabs}>
            <CustomIcon
              name={'woman'}
              size={45}
              style={{textAlign: 'center'}}
              color={ColorPallete.colors.counterColor}
            />
            <Text style={styles.tabText}>Women</Text>
          </View>
          <View style={styles.userTabs}>
            <CustomIcon
              name={'baby-boy'}
              size={45}
              color={ColorPallete.colors.counterColor}
              style={{textAlign: 'center'}}
            />
            <Text style={styles.tabText}>Kids</Text>
          </View>
          <View style={styles.userTabs}>
            <CustomIcon
              name={'bed'}
              size={45}
              color={ColorPallete.colors.counterColor}
              style={{textAlign: 'center'}}
            />
            <Text style={styles.tabText}>Household</Text>
          </View>
        </View>
      </View>

      {/* <CounterInput /> */}
    </View>
  );
};

export default BookingComponent;
