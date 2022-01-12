import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import {Divider} from 'react-native-elements'
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SeachBar from "../components/SeachBar";
import BottomTabs from "../components/BottomTabs";
import { ScrollView } from "react-native";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import cors from "cors";

const YELP_API_KEY =
  "f_WEcwtJpiMjWv8Wwffeh0_i4lwazbBnQ8SETIxqfd1nkddu7Mlca-qZkcS-TklT6QDyFq9GtcPoAq9VQLxaMGNgJzO82WUmF98ciI7JwzAF-FQgrz9N_Xt6JL3ZYXYx";

export default function Home() {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  const [city, setcity] = useState("San Francisco");
  const [activeTabs, setActiveTabs]=useState("Delivery")    
  // uplifting headertabs state

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        mode: cors,
        // 'Access-Control-Allow-Origin':'http://localhost:19006',
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    const res = await fetch(yelpUrl, apiOptions);
      const json = await res.json();
      return setrestaurantData(
        json.businesses.filter((business)=>
        business.transactions.includes(activeTabs.toLowerCase())));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city,activeTabs]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} />

        {/* CityState Testing Code instead of google Api ..need to be removed */}

        {/* <TextInput
          style={styles.input}
          onChangeText={setcity}
          placeholder="Enter Restaurant Name"
          value={city}
          keyboardType="default"
        /> */}

        {/* ===================================================================== */}

        <SeachBar cityHandler={setcity}/>
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
      
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider  width={1}/>
      <BottomTabs />
    </SafeAreaView>
  );
}

// CitystateTestingCode Styling..need to be removed

// const styles = StyleSheet.create({
//   input: {
//     fontWeight: "700",
//     marginTop: 25,
//     height: 50,
//     padding: 10,
//     flexDirection: "row",
//     backgroundColor: "#eee",
//     borderRadius: 50,
//     alignItems: "center",
//     marginRight: 10,
//   },
// });

{
  /* =====================================================================*/
}
