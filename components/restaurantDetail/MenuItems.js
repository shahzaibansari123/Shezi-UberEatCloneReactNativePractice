import React from 'react'
import { View, Text , StyleSheet, Image } from 'react-native'
import { ScrollView } from "react-native";
import { Divider } from 'react-native-elements/dist/divider/Divider';

const foods=[{
    title: 'Lasagna',
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",

},
{
    title: 'Tandoori Chicken',
    image: "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1210&q=80",
    description: "Amazing indian dish with tanderloin chicken off the sizzles",
    price: "$19.20",

},
{
    title: 'Chilaquiles',
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description: "Chilaquiles with chese and sauce, a aming mexican dish",
    price: "$14.50",

},
{
    title: 'Cicken caeser salad',
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "This recipe uses a combo of Romaine lettuce, chicken, French bread, parmesan cheese, anchovies, Greek yogurt, garlic, olive oil, mayonnaise,",
    price: "$$",

},
{
    title: 'Beachside Bardasdsadasd',
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: ["Cafe" , " Bar"],
    price: "$$",

},
]

const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
      },
})

export default function MenuItems() {
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false} >
        
        {foods.map((food, index)=>(
        <View key={index}>
        <View style={styles.menuItemStyle} >
            <FoodInfo food={food}/>
            <FoodImage food={food} />
        </View>
        <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}} />
        </View>
        
        ))}
        
        </ScrollView>
        </>
        
    )
}


const FoodInfo = (props) => (
    <View style={{ width: 220, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );

const FoodImage= (props) => (
    <View>
        <Image source={{uri: props.food.image}} style={{height: 100 , width: 100, borderRadius: 8}}/>
    </View>
)