import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function HeaderTabs(props) {
    // const [activeTabs , setActiveTabs]= useState ("Delivery")
  return (
    <View style={{ marginTop: 5 , flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton 
      text="Delivery" 
      btnColor="black" 
      textColor="white" 
      activeTabs= {props.activeTabs}
      setActiveTabs={props.setActiveTabs}
      />
      <HeaderButton 
      text="Pickup" 
      btnColor="white" 
      textColor="black" 
      activeTabs= {props.activeTabs}
      setActiveTabs={props.setActiveTabs}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTabs === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}

    onPress={()=>props.setActiveTabs(props.text)}
  >
    <Text
      style={{
        color:props.activeTabs === props.text ? "white" : "black",
        fontSize: 15,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
