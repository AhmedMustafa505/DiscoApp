import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export const TotalExpenses = ({ totalAmount }) => {
  return (
    <View style={styles.totalExpensesContainer}>
      <Text style={[styles.totalExpensesText, { fontSize: width * 0.04 }]}>
        Total Expenses
      </Text>
      <Text style={[styles.totalExpensesText, { fontSize: width * 0.06 }]}>
        {totalAmount}$
      </Text>
    </View>
  );
};
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  totalExpensesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: width * 0.02,
  },
  totalExpensesText: {
    fontWeight: "bold",
  },
});

export default TotalExpenses;
