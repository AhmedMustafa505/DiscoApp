import { useMemo, useState, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TransactionsList } from "../Components/TransactionsList";
import { ViewAllButton } from "../Components/ViewAllButton";
import TotalExpenses from "../Components/TotalExpenses";
import { CategoriesList } from "../Components/CategoriesList";
import DateRange from "../Components/DateRange";
import NoTransactions from "../Components/NoTransactions";

const PersonalBudgetScreen = () => {
  const [viewAll, setViewAll] = useState(false);
  const [dateRange, setDateRange] = useState({
    start: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    end: new Date(),
  });

  const { transactions } = useSelector((state) => state.transactions);

  const personalTransactions = useMemo(() => {
    return transactions.filter((transaction) =>
      ["Clothes", "Food"].includes(transaction.category)
    );
  }, [transactions]);

  const handleDateChange = (newDate, type) => {
    setDateRange((prevRange) => ({
      ...prevRange,
      [type]: newDate,
    }));
  };

  const filteredTransactions = personalTransactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return (
      transactionDate >= dateRange.start && transactionDate <= dateRange.end
    );
  });

  const totalAmount = filteredTransactions.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const totals = filteredTransactions.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const categories = Object.keys(totals).map((key) => ({
    name: key,
    percentage: ((totals[key] / totalAmount) * 100).toFixed(2),
  }));

  const onViewAllHandler = () => {
    setViewAll((prev) => !prev);
  };

  const onCloseHandler = () => {
    setViewAll(false);
  };

  return (
    <View style={styles.container}>
      <DateRange
        onDateChange={handleDateChange}
        start={dateRange.start}
        end={dateRange.end}
      />
      <TotalExpenses totalAmount={totalAmount} />
      {!viewAll && <CategoriesList categories={categories} />}
      {filteredTransactions.length > 0 ? (
        <TransactionsList
          transactions={filteredTransactions}
          viewAll={viewAll}
          onClose={onCloseHandler}
        />
      ) : (
        <NoTransactions />
      )}
      {!viewAll && (
        <View style={styles.viewAllButton}>
          <ViewAllButton onPress={onViewAllHandler} />
        </View>
      )}
    </View>
  );
};
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: width * 0.05,
  },
  viewAllButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.05,
  },
});

export default PersonalBudgetScreen;
