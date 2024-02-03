import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export const ViewAllButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.viewAllButtonText}>View All</Text>
    </TouchableOpacity>
  );
};
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewAllButtonText: {
    color: "#000000",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});
