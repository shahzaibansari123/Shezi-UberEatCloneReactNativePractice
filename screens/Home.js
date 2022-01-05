import React from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import SeachBar from '../components/SeachBar'

export default function Home(){
    return(
        <SafeAreaView style={{backgroundColor: "#eee" , flex: 1}}>
            <View style={{backgroundColor: "white" , padding: 15}}> 
           <HeaderTabs />
           <SeachBar />
           </View>
           <Categories />
        </SafeAreaView>
    )
}