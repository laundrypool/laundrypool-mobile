import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ColorPallete} from '../../../../Utils/StylingInfo';
import OrderList from './OrderList';

const MaterialTopTabs = createMaterialTopTabNavigator();

const AllOrders = () => {
  const [activeOrders, setActiveOrders] = useState([
    {
      orderNo: '#343432',
    },
    {
      orderNo: '#343232',
    },
    {
      orderNo: '#323432',
    },
    {
      orderNo: '#344432',
    },
    {
      orderNo: '#124332',
    },
    {
      orderNo: '#343482',
    },
    {
      orderNo: '#343439',
    },
  ]);
  const [completedOrders, setCompletedOrders] = useState([
    {
      orderNo: '#343432',
    },
    {
      orderNo: '#343232',
    },
    {
      orderNo: '#323432',
    },
    {
      orderNo: '#344432',
    },
    {
      orderNo: '#124332',
    },
    {
      orderNo: '#343482',
    },
    {
      orderNo: '#343439',
    },
  ]);

  return (
    <View style={styles.allOrdersContainer}>
      <MaterialTopTabs.Navigator
        initialRouteName="Active"
        barStyle={{
          backgroundColor: ColorPallete.backgroundColors.main,
        }}
        tabBarOptions={{
          activeTintColor: ColorPallete.colors.primary,
          inactiveTintColor: ColorPallete.colors.textColor,
          style: {
            backgroundColor: ColorPallete.backgroundColors.main,
            elevation: 0,
          },
          tabStyle: {},
          indicatorStyle: {
            backgroundColor: ColorPallete.colors.primary,
            height: 4,
            width: 80,
            left: 30,
          },
        }}>
        <MaterialTopTabs.Screen
          name="Active"
          style={{borderWidth: 3}}
          options={{
            showLabel: false,
            tabBarLabel: ({color}) => (
              <View>
                <Text style={[styles.tabText, {color: color}]}>
                  Active orders
                </Text>
              </View>
            ),
          }}>
          {props => (
            <View>
              <OrderList active={true} orders={activeOrders} {...props} />
            </View>
          )}
        </MaterialTopTabs.Screen>

        <MaterialTopTabs.Screen
          name="Completed"
          style={{borderWidth: 3}}
          options={{
            showLabel: false,
            tabBarLabel: ({color}) => (
              <View>
                <Text style={[styles.tabText, {color: color}]}>Completed</Text>
              </View>
            ),
          }}>
          {props => (
            <View>
              <OrderList active={false} orders={completedOrders} {...props} />
            </View>
          )}
        </MaterialTopTabs.Screen>
      </MaterialTopTabs.Navigator>
    </View>
  );
};

export default AllOrders;
