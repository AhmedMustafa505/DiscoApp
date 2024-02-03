import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Budget</Text>
      <TouchableOpacity style={styles.notificationIcon}>
        <Text style={styles.notificationText}>1</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get("window");
const iconSize = width * 0.1;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: width * 0.03,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  notificationIcon: {
    backgroundColor: "#fff",
    width: iconSize,
    height: iconSize,
    borderRadius: iconSize / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
  },
  notificationText: {
    color: "#090909",
    fontWeight: "bold",
    fontSize: iconSize / 2,
  },
});

export default Header;
