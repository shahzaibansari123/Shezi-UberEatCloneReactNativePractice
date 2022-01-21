import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightGray", borderRadius: 0 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 200, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ height: 100, width: 100, borderRadius: 8 }}
    />
  </View>
);
