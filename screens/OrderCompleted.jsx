import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStatusBarHeight } from "react-native-status-bar-height";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

const barHeight = getStatusBarHeight();

export default function OrderCompleted() {
  const [lastOrder,setLastOrder]=useState({
    items: [{
      title: "Lasagna",
      image:
        "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      description: "with butter lettuce , tomato and sauce bechamel",
      price: "$13.50",
    }]
  })
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe =  db.collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot(async (snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
      return ()=>unsubscribe()
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white", marginTop: barHeight }}>
      <View style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}>
      {/* <LottieView /> */}
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/1798-check-animation.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text style={{fontSize:20, fontWeight: "bold"}}>
        Your Order at {restaurantName} has been placed for ${totalUSD}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10}/>
      </ScrollView>
      <LottieView
        style={{ height: 150, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/60366-pizza-ingrediants.json")}
        autoPlay
        speed={0.5}
        // loop={false}
      />
  
      </View>
    </View>
  );
}
