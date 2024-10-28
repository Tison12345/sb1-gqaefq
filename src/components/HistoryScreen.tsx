import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function HistoryScreen() {
  return (
    <gridLayout rows="auto, *" className="bg-primary">
      <stackLayout row="0" className="p-4">
        <label className="text-xl font-bold text-primary">Purchase History</label>
      </stackLayout>

      <scrollView row="1">
        <stackLayout className="p-4">
          <gridLayout columns="*, *" className="mb-4">
            <button col="0" className="m-1 p-2 bg-secondary text-primary">All</button>
            <button col="1" className="m-1 p-2 bg-secondary text-primary">This Month</button>
          </gridLayout>

          <listView className="bg-secondary rounded-lg">
            {/* Add purchase history items here */}
          </listView>
        </stackLayout>
      </scrollView>
    </gridLayout>
  );
}