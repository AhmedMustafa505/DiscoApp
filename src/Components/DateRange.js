import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//DateRange reusable component customized to allow the user to pick the date range,
//to show the transactions made within a specific date range.

function DateRange({ onDateChange, start, end }) {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowPicker(Platform.OS === "ios");
    if (event.type === "set") {
      setDate(currentDate);
      onDateChange(currentDate, mode);
      setShowPicker(false);
    } else {
      setShowPicker(false);
    }
  };

  const showMode = (currentMode, selectedDate) => {
    setShowPicker(true);
    setMode(currentMode);
    setDate(selectedDate);
  };

  return (
    <View style={styles.dateRangeContainer}>
      <TouchableOpacity onPress={() => showMode("start", start)}>
        <Text style={styles.dateRangeText}>{start.toLocaleDateString()}</Text>
      </TouchableOpacity>
      <Text style={styles.toText}>To</Text>
      <TouchableOpacity onPress={() => showMode("end", end)}>
        <Text style={styles.dateRangeText}>{end.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display={Platform.OS === "ios" ? "default" : "default"}
          onChange={onChange}
        />
      )}
      <MaterialCommunityIcons name="calendar-edit" size={24} color="black" />
    </View>
  );
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  dateRangeContainer: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dateRangeText: {
    fontSize: width * 0.035,
    fontWeight: "bold",
    marginRight: width * 0.02,
  },
  toText: {
    fontSize: width * 0.035,
    marginHorizontal: width * 0.02,
  },
});

export default DateRange;
