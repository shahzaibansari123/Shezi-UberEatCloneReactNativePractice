import React from 'react'
import { View, ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function RestaurantDetail({route, navigation}) {
    return (
        <View>
         <About  route={route}/>
        <Divider width={2.8} style={{marginVertical: 20}}/>
        {/* <ScrollView showVerticalScrollIndicator={false}> */}
        <MenuItems restaurantName={route.params.name}/>
        <ViewCart navigation={navigation} restaurantName={route.params.name}/>
        {/* </ScrollView> */}
        </View>
    )
}
