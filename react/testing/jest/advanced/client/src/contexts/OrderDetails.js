import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { pricePerItem } from '../contants';
import { formatCurrency } from '../utilities';

// @ts-ignore
const OrderDetails = createContext();

// create custom hook to check whether we`re inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) throw new Error('useOrderDetails must be used within an OrderDetailsProvider');

  return context;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);

  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  function calculateSubtotal(optionType, optionCounts) {
    let optionCount = 0;

    for (const count of optionCounts[optionType].values()) {
      optionCount += count;
    }

    return optionCount * pricePerItem[optionType];
  }

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
    const grandTotal = scoopsSubtotal + toppingsSubtotal;

    setTotals({
      scoops: formatCurrency(scoopsSubtotal),
      toppings: formatCurrency(toppingsSubtotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  // getter: object containing option counts for scoops and toppings, subtotals and totals
  // setter: updateOptionCount
  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountsMap = newOptionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionCounts);
    }

    function resetOrder() {
      setOptionCounts({
        scoops: new Map(),
        toppings: new Map(),
      });
    }

    return [{ ...optionCounts, totals }, updateItemCount, resetOrder];
  }, [optionCounts, totals]);

  return <OrderDetails.Provider value={value} {...props}></OrderDetails.Provider>;
}
