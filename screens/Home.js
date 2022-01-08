import React, { useEffect, useState } from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import SeachBar from '../components/SeachBar'
import { ScrollView } from "react-native";
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'


const YELP_API_KEY="f_WEcwtJpiMjWv8Wwffeh0_i4lwazbBnQ8SETIxqfd1nkddu7Mlca-qZkcS-TklT6QDyFq9GtcPoAq9VQLxaMGNgJzO82WUmF98ciI7JwzAF-FQgrz9N_Xt6JL3ZYXYx"

export default function Home(){
    const[restaurantData,setrestaurantData]=useState(localRestaurants)

    const getRestaurantsFromYelp = () =>{
        const yelpUrl="https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles"

        const apiOptions = {
            headers: {
              Authorization: `Bearer ${YELP_API_KEY}`,
            },
          };
      
          return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>setrestaurantData(json.businesses)
            )
        };
    
        useEffect(()=>{
            getRestaurantsFromYelp();
        },[])

    return(
        <SafeAreaView style={{backgroundColor: "#eee" , flex: 1}}>
            <View style={{backgroundColor: "white" , padding: 15}}> 
           <HeaderTabs />
           <SeachBar />
           </View>
           <ScrollView showVerticalScrollIndicator={false}>
           <Categories />
           <RestaurantItems restaurantData={restaurantData} />
           
           </ScrollView>
        </SafeAreaView>
    )
}