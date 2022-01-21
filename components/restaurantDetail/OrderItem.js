import { View, Text } from "react-native";
import React from "react";

export default function OrderItem() {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "600" }}>{title}</Text>
      <Text style={{ fontSize: 15, opacity: 0.7 }}>{price}</Text>
    </View>
  );
}
