import React, {useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './style';
import CounterInput from './CounterInput';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ColorPallete} from '../../../Utils/StylingInfo';
import ServiceType from './ServiceType';
import CustomIcon from '../../../Utils/CustomIcon';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTabs from './CustomTabs';

const MaterialTopTabs = createMaterialTopTabNavigator();

const BookingComponent = props => {
  const [selectedService, setSelectedService] = useState({
    washing: false,
    dryCleaning: false,
    ironing: false,
  });

  const [bucketList, setBucketList] = useState([
    {
      index: 1,
      type: 'Men',
      lists: ['Shirt', 'Tshirt', 'Trousers', 'Shorts'],
      icons: ['shirt','Tshirt','Trousers','shorts']
    },
    {
      index: 2,
      type: 'Women',
      lists: ['Shirt', 'Tshirt', 'Trousers', 'Shorts'],
      icons: ['shirt','Tshirt','Trousers','shorts']
    },
    {
      index: 3,
      type: 'Kids',
      lists: ['Shirt', 'Tshirt', 'Trousers', 'Shorts'],
      icons: ['shirt','Tshirt','Trousers','shorts']
    },
    {
      index: 4,
      type: 'Household',
      lists: ['Pillow covers', 'Curtains', 'Aprons', 'Bed Sheets'],
      icons: ['PillowCovers','Curtains','Aprons','BedSheets']
    },
  ]);

  useEffect(() => {
    setSelectedService(props.selectedBooking);
  }, [
    props.selectedBooking.washing,
    props.selectedBooking.dryCleaning,
    props.selectedBooking.ironing,
  ]);

  return (
    <ScrollView>
      <View style={styles.bookingContainer}>
        <ServiceType
          setServiceType={data => setSelectedService(data)}
          selectedService={selectedService}
        />

        <View style={styles.searchBoxTabsContainer}>
          {/* Search Box */}
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
          {/*  Men Women Tabs */}
          <View style={styles.userTabsContainer}>
            <MaterialTopTabs.Navigator
              initialRouteName="Men"
              barStyle={{
                backgroundColor: ColorPallete.colors.white,
              }}
              tabBarOptions={{
                activeTintColor: ColorPallete.colors.primary,
                inactiveTintColor: ColorPallete.colors.textColor,
                style: {
                  backgroundColor: ColorPallete.colors.white,
                  elevation: 0,
                },
                tabStyle: {},
                indicatorStyle: {
                  backgroundColor: ColorPallete.colors.primary,
                  height: 4,
                },
              }}>
              <MaterialTopTabs.Screen
                name="Men"
                style={{borderWidth: 3}}
                options={{
                  showLabel: false,
                  tabBarLabel: ({color}) => (
                    <View style={styles.userTabs}>
                      <CustomIcon
                        name={'man'}
                        size={40}
                        style={{textAlign: 'center'}}
                        color={color}
                      />
                      <Text style={[styles.tabText, {color: color}]}>Men</Text>
                    </View>
                  ),
                }}>
                {props => <CustomTabs {...props} bucketList={bucketList[0]} />}
              </MaterialTopTabs.Screen>

              <MaterialTopTabs.Screen
                name="Women"
                options={{
                  tabBarLabel: ({color}) => (
                    <View style={styles.userTabs}>
                      <CustomIcon
                        name={'woman'}
                        size={40}
                        style={{textAlign: 'center'}}
                        color={color}
                      />
                      <Text style={[styles.tabText, {color: color}]}>
                        Women
                      </Text>
                    </View>
                  ),
                }}>
                {props => <CustomTabs {...props} bucketList={bucketList[1]} />}
              </MaterialTopTabs.Screen>

              <MaterialTopTabs.Screen
                name="Kids"
                options={{
                  tabBarLabel: ({color}) => (
                    <View style={styles.userTabs}>
                      <CustomIcon
                        name={'baby-boy'}
                        size={40}
                        color={color}
                        style={{textAlign: 'center'}}
                      />
                      <Text style={[styles.tabText, {color: color}]}>Kids</Text>
                    </View>
                  ),
                }}>
                {props => <CustomTabs {...props} bucketList={bucketList[2]} />}
              </MaterialTopTabs.Screen>

              <MaterialTopTabs.Screen
                name="Household"
                options={{
                  tabBarLabel: ({color}) => (
                    <View style={styles.userTabs}>
                      <CustomIcon
                        name={'bed'}
                        size={40}
                        color={color}
                        style={{textAlign: 'center'}}
                      />
                      <Text style={[styles.tabText, {color: color}]}>
                        Household
                      </Text>
                    </View>
                  ),
                }}>
                {props => <CustomTabs {...props} bucketList={bucketList[3]} />}
              </MaterialTopTabs.Screen>
            </MaterialTopTabs.Navigator>
          </View>
        </View>

        {/*  */}
        {/* <View style={styles.tabsContainerSelection}>
          <CounterInput />
        </View> */}
      </View>
    </ScrollView>
  );
};

export default BookingComponent;
