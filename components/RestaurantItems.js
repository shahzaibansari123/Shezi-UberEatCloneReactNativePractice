import React from 'react'
import { View, Text , Image, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants=[{
    name: 'Beachside Bar',
    image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    categories:["Cafe" , " Bar"],
    price: "$$",
    reviews:"1244",
    rating: "4.5"
},
{
    name: 'Benihana',
    image_url: "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1210&q=80",
    categories:["Cafe" , " Bar"],
    price: "$$",
    reviews:"1244",
    rating: "3.7"
},
{
    name: 'Indians Grill',
    image_url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    categories:["Indian" , " Bar"],
    price: "$$",
    reviews:"1244",
    rating: "4.9"
},
]



export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
            {props.restaurantData.map((restaurant, index)=>(
        <View key={index} style={{marginTop:15, padding: 10, backgroundColor: "white"}}>
          <RestaurantImage image={restaurant.image_url}/>
          <RestaurantInfo name= {restaurant.name} rating={restaurant.rating}/>
        </View>
        ))}
        </TouchableOpacity>
    )
}

const RestaurantImage=(props)=>(
    <>
    <Image 
    source={{
        uri: props.image
    }}
    
    style={{
        width: '100%',
        height: 180, 
    }}
    />
    <TouchableOpacity
    style={{
        position: 'absolute',
        top: 10,
        right: 20,
    }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#ffff" />
    </TouchableOpacity>
    </>
)

const RestaurantInfo=(props)=>(
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    }}>
        <View>
        <Text style={{fontSize: 15 , fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{fontSize: 13 , color: 'grey'}}>30-45 · min</Text>
        </View>
        <View style={{backgroundColor: '#eee' , height: 30 , width: 30 , alignItems: 'center', borderRadius: 20 , justifyContent: 'center'}}>
        <Text style={{fontSize: 12}}>{props.rating}</Text>
        </View>
    </View>
)