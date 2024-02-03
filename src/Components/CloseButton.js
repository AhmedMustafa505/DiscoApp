import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const CloseButton = ({ onClose }) => {
  return (
    <TouchableOpacity onPress={onClose} style={styles.buttonContainer}>
      <Text>See less</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "flex-end",
  },
});
