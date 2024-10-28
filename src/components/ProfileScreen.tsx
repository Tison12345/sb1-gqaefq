import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function ProfileScreen() {
  return (
    <scrollView className="bg-primary">
      <stackLayout className="p-4">
        <image
          src="~/assets/avatar-placeholder.png"
          className="h-24 w-24 rounded-full self-center mb-4"
        />
        
        <label className="text-xl font-bold text-primary text-center">John Doe</label>
        <label className="text-primary text-center mb-4">john.doe@email.com</label>

        <gridLayout columns="*, *" className="mb-4">
          <stackLayout col="0" className="p-2 bg-secondary rounded-lg m-1">
            <label className="text-2xl text-primary text-center">85</label>
            <label className="text-primary text-center">Eco Score</label>
          </stackLayout>
          
          <stackLayout col="1" className="p-2 bg-secondary rounded-lg m-1">
            <label className="text-2xl text-primary text-center">127</label>
            <label className="text-primary text-center">Products</label>
          </stackLayout>
        </gridLayout>

        <stackLayout className="bg-secondary rounded-lg p-4">
          <label className="text-lg font-bold text-primary mb-2">Settings</label>
          
          <button className="text-primary text-left p-2">
            <formattedString>
              <span className="fas">⚙️ </span>
              <span>Account Settings</span>
            </formattedString>
          </button>
          
          <button className="text-primary text-left p-2">
            <formattedString>
              <span className="fas"> </span>
              <span>Notifications</span>
            </formattedString>
          </button>
          
          <button className="text-primary text-left p-2">
            <formattedString>
              <span className="fas">❓ </span>
              <span>Help & Support</span>
            </formattedString>
          </button>
          
          <button className="text-primary text-left p-2">
            <formattedString>
              <span className="fas">↪️ </span>
              <span>Logout</span>
            </formattedString>
          </button>
        </stackLayout>
      </stackLayout>
    </scrollView>
  );
}