import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);
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

  const styles = StyleSheet.create({
    modalContainer: {
      justifyContent: "flex-end",  //thats why the modla showed at the bottom
      flex: 1, //taking whole screen
      backgroundColor: "rgba(0, 0, 0,0.7)",
    },
    modalCheckoutContainer:{
      backgroundColor: "white", 
      padding: 16,
      height: 500,
      borderWidth: 1,

    },

    modalCheckoutButton:{
      textAlign: "center",
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 10,
    },
    subTotalContainer:{
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 15,
    },
    subTotalText:{
      textAlign: "left",
      fontSize: 15,
      fontWeight: "600",
      marginBottom: 10,
    }
  });

  const checkoutModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,

          // margin: 20,
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
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white" }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    </>
  );
}
