import * as React from "react";
import { EventData } from "@nativescript/core";

export function SearchScreen() {
  const onSearchSubmit = (args: EventData) => {
    // Implement search
    console.log("Search submitted");
  };

  return (
    <gridLayout rows="auto, *" className="bg-primary">
      <stackLayout row="0" className="p-4">
        <searchBar
          hint="Search products..."
          className="search-bar"
          onSubmit={onSearchSubmit}
        />
      </stackLayout>

      <scrollView row="1">
        <stackLayout className="p-4">
          <label className="text-xl text-primary mb-4">Popular Categories</label>
          <wrapLayout>
            <button className="bg-secondary text-primary p-2 m-1 rounded-lg">Food</button>
            <button className="bg-secondary text-primary p-2 m-1 rounded-lg">Electronics</button>
            <button className="bg-secondary text-primary p-2 m-1 rounded-lg">Clothing</button>
          </wrapLayout>

          <label className="text-xl text-primary mt-4 mb-2">Trending Products</label>
          <listView height="400" className="bg-secondary rounded-lg" items={[]} />
        </stackLayout>
      </scrollView>
    </gridLayout>
  );
}