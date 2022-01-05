import React from 'react'
import { View, Text , Image} from 'react-native'
import { ScrollView } from 'react-native'

const items=[
    {
        image: require('../assets/images/shopping-bag.png'),
        text: "Pick-up",
    },
    {
        image: require('../assets/images/soft-drink.png'),
        text: "Soft Drinks",
    },
    {
        image: require('../assets/images/bread.png'),
        text: "Bakery Items",
    },
    {
        image: require('../assets/images/fast-food.png'),
        text: "Fast foods",
    },
    {
        image: require('../assets/images/deals.png'),
        text: "Deals",
    },
    {
        image: require('../assets/images/coffee.png'),
        text: "Coffee & Tea",
    },
    {
        image: require('../assets/images/desserts.png'),
        text: "Desserts",
    },
]



export default function Categories() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{alignItems: 'center' , marginRight: 30}}>
            <Image source={items[0].image} 
            style={{ 
                height: 40,
                width: 50,
                resizeMode: "contain",
            }}
            />
            <Text style={{fontSize:13 , fontWeight: "900"}}>{items[0].text}</Text>
        </View>

        
        </ScrollView>
    )
}
