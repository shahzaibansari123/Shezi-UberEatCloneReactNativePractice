import React from 'react'
import { View, ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'

export default function RestaurantDetail({route}) {
    return (
        <View>
        <About  route={route}/>
        <Divider width={2.8} style={{marginVertical: 20}}/>
        {/* <ScrollView showVerticalScrollIndicator={false}> */}
        <MenuItems />
        {/* </ScrollView> */}
        </View>
    )
}
