import React from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import SeachBar from '../components/SeachBar'
import { ScrollView } from "react-native";
import RestaurantItem from '../components/ReastaurantItems'

export default function Home(){
    return(
        <SafeAreaView style={{backgroundColor: "#eee" , flex: 1}}>
            <View style={{backgroundColor: "white" , padding: 15}}> 
           <HeaderTabs />
           <SeachBar />
           </View>
           <ScrollView showVerticalScrollIndicator={false}>
           <Categories />
           <RestaurantItem />
           
           </ScrollView>
        </SafeAreaView>
    )
}