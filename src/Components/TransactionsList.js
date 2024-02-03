import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { CloseButton } from "./CloseButton";

const { width } = Dimensions.get("window");
const imageSize = width * 0.1; // Adjust the size as needed

export const TransactionsList = ({ transactions, viewAll, onClose }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.transactionItem}>
        <Image
          source={require("../Assets/default.jpg")} // Replace with your actual image path
          style={styles.transactionImage}
        />
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionDescription}>{item.description}</Text>
          <Text style={styles.transactionDate}>
            {new Date(item.date).toLocaleDateString()}
          </Text>
        </View>
        <Text style={styles.transactionAmount}>{item.amount}$</Text>
      </View>
    );
  };

  // Sort and slice the transactions data if not in viewAll mode
  const dataToShow = viewAll
    ? transactions
    : [...transactions].sort((a, b) => b.amount - a.amount).slice(0, 3);

  return (
    <>
      {viewAll && <CloseButton onClose={onClose} />}
      <FlatList
        data={dataToShow}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
  },
  transactionImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginRight: width * 0.03,
  },
  transactionDetails: {
    flex: 1,
    justifyContent: "center",
    marginRight: width * 0.03,
  },
  transactionDescription: {
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  transactionDate: {
    fontSize: width * 0.035,
    color: "#666",
  },
  transactionAmount: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default TransactionsList;
