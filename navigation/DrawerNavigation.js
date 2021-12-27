import * as React from 'react';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{

    return(
        <Drawer.Navigator>
             
          <Drawer.Screen name="Home" Component = {TabNavigator}/>
          <Drawer.Screen name="Profile" Component = {Profile}/>
            
        </Drawer.Navigator>
    );
};

export default DrawerNavigator



























