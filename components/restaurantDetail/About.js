import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  price: "$$",
  reviews: "1500",
  rating: "4.5",
  categories: [
    { title: "Thai" },
    { title: "Comfort Food" },
    { title: "Coffee" },
    { title: "Ice cream" },
    { title: "Snacks" },
  ],
};

// const image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
// const title="FarmHouse Kitchen Thai Cuisine"
// const description="Thai · Comfort Food · $$ · 🎫 · 4 ⭐ (2913+)   "

export default function about(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" · ");

  const description = `${formattedCategories} ${
    price ? " · " + price : ""
  } · 🎫  · ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ height: 180, width: "100%" }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 22,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 12,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
