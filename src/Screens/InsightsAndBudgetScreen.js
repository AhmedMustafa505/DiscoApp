import React, { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "../Redux/transactionsSlice";
import Header from "../Components/Header";
import TopTabNavigator from "../Navigation/TopTabNavigator";
import { fetchTransactions } from "../Networking/api";

const InsightsAndBudgetScreen = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchStart());
    fetchTransactions()
      .then((response) => {
        const transactionsArray = Object.keys(response.data).map((key) => {
          return {
            id: key,
            ...response.data[key],
          };
        });
        dispatch(fetchSuccess(transactionsArray));
      })
      .catch((err) => {
        dispatch(fetchFailure(err.message));
      });
  }, [dispatch]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TopTabNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InsightsAndBudgetScreen;
