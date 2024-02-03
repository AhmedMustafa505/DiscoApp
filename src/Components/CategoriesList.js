import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "../Utils/Colors";

const iconList = {
  Clothes: { icon: "tshirt", color: Colors.yellow },
  Food: { icon: "apple-alt", color: Colors.green },
  Business: { icon: "business-time", color: Colors.red },
  Transportation: { icon: "car", color: Colors.secondary },
};

// Categories list reusable and dynamic component to use in 3 screens.

export const CategoriesList = ({ categories }) => {
  const getIcon = (categoryName) => {
    return iconList[categoryName] || { icon: "question", color: Colors.grey };
  };

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => {
        const { icon, color } = getIcon(item.name);
        return (
          <View style={styles.categoryItem}>
            <FontAwesome5 name={icon} size={24} color={color} />
            <Text style={styles.categoryText}>{item.name}</Text>
            <Text style={styles.categoryPercentage}>{item.percentage}%</Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  );
};
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: width * 0.05,
  },
  categoryText: {
    fontSize: width * 0.04,
  },
});
