import React from "react";
import { View, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
  },
  {
    title: "Tandoori Chicken",
    image:
      "https://images.unsplash.com/photo-1567121938596-6d9d015d348b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Amazing indian dish with tanderloin chicken off the sizzles",
    price: "$19.20",
  },
  {
    title: "Chilaquiles",
    image:
      "https://images.unsplash.com/photo-1599789197514-47270cd526b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Chilaquiles with chese and sauce, a aming mexican dish",
    price: "$14.50",
  },
  {
    title: "Cicken caeser salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "This recipe uses a combo of Romaine lettuce,anchovies, mayonnaise,",
    price: "$13.4",
  },
  {
    title: "Zinger Burger",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    description: "Zinger fried Chicken with lettuce and cheese Sauce",
    price: "$12.1",
  },
  {
    title: "Chicken Karahi",
    image:
      "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    description: "hot and spicy chicken Karahi with full of spices",
    price: "$9.12",
  },
  {
    title: "Italian Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Cheesy pizza with mustard sauce and topping of olive and jalapenos",
    price: "$14.23",
  },
  {
    title: "seekh Kabab",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80",
    description: "Spicy beef seekh kabab delicious and mouth watering",
    price: "$12.22",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={2.8} style={{ marginVertical: 20 }} />
      {/* <ScrollView showVerticalScrollIndicator={false}> */}
      <MenuItems restaurantName={route.params.name} foods={foods} />
      {/* <ViewCart navigation={navigation} restaurantName={route.params.name}/>  restName getting from use Selector in viewcart*/}
      <ViewCart navigation={navigation} />
      {/* </ScrollView> */}
    </View>
  );
}
