import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

function NoTransactions(props) {
  return (
    <View style={styles.noTransactionContainer}>
      <Text style={styles.noTransactionsText}>
        No transactions made in this specific date range.
      </Text>
    </View>
  );
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  noTransactionContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  noTransactionsText: {
    fontSize: width * 0.04,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
});

export default NoTransactions;
