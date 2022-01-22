import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import OrderItem from "./OrderItem";
// import { color } from "react-native-elements/dist/helpers";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  // const items = useSelector((state) => state.cartReducer.selectedItems.items);
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

  const addOrderToFirebase = async () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          // setModalVisible(false);
          navigation.navigate("OrderCompleted");
        }, 1500);
      });
    // setModalVisible(false)
    // navigation.navigate("OrderCompleted")
  };
  const styles = StyleSheet.create({
    modalContainer: {
      justifyContent: "flex-end", //thats why the modla showed at the bottom
      flex: 1, //taking whole screen
      backgroundColor: "rgba(0, 0, 0,0.7)",
      // marginTop: -30,
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 600,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subTotalContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 15,
    },
    subTotalText: {
      textAlign: "left",
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 10,
    },
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>SubTotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => {addOrderToFirebase();
                  setModalVisible(false);}}
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  width: 300,
                  position: "relative",
                  borderRadius: 30,
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 20,
                    top: 14,
                  }}
                >
                  ${total ? totalUSD : "--"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
      // <View
      //   style={{
      //     flex: 1,
      //     justifyContent: "center",
      //     alignItems: "center",
      //     marginTop: 30,

      // margin: 20,  ye extra tha practice
      // backgroundColor: "white",
      // borderRadius: 20,
      // padding: 35,
      // alignItems: "center",
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 2
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 4,
      // elevation: 5
      //   }}
      // >
      //   <View
      //     style={{
      //       backgroundColor: "black",
      //       padding: 10,
      //       borderRadius: 30,
      //       width: 150,
      //       alignItems: "center",
      //     }}
      //   >
      //     <TouchableOpacity onPress={() => setModalVisible(false)}>
      //       <Text style={{ color: "white" }}>Checkout</Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
    );
  };
  // const amount=" "+totalUSD.tofixed(2)

  console.log(totalUSD);
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
        
      </Modal>

      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            justifyContent: "center",
            // bottom: 130,
            top: 650,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 50 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 16, marginRight: 10 }}>
                ${totalUSD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            opacity: 0.6,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            // flex: 1,
            height: "100%",
            width: "100%",

          }}
        >
          <LottieView style={{height: 200}}
          source={require('../../assets/animations/scanner.json')} 
          autoPlay
          speed={3}/>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
