import * as React from "react";
import { EventData } from "@nativescript/core";
import { AnimatedCircle } from "@nativescript/animated-circle";

export function HomeScreen() {
  const onMenuTap = (args: EventData) => {
    // Implement menu handling
    console.log("Menu tapped");
  };

  return (
    <gridLayout rows="auto, *" className="bg-primary">
      <stackLayout row="0" className="p-4">
        <flexboxLayout className="justify-between items-center">
          <label text="&#xf0c9;" className="fas menu-icon" onTap={onMenuTap} />
          <label className="text-xl font-bold text-primary">Dashboard</label>
          <label text="&#xf0f3;" className="fas menu-icon" />
        </flexboxLayout>
      </stackLayout>

      <scrollView row="1">
        <stackLayout className="p-4">
          <label className="text-xl text-primary mb-4">Sustainability Score</label>
          
          <AnimatedCircle
            progress={75}
            maxValue={100}
            rimColor="#ffffff"
            barColor="#ffd700"
            rimWidth={20}
            barWidth={20}
            textColor="#ffffff"
            textSize={28}
            textStyle="bold"
            outerStrokeWidth={20}
            innerStrokeWidth={20}
            radius={100}
            animation={true}
            animationDuration={1000}
          />

          <gridLayout columns="*, *" className="mt-4">
            <stackLayout col="0" className="p-2">
              <label className="text-lg text-primary">Environmental Impact</label>
              <progress value={65} maxValue={100} className="m-2" />
            </stackLayout>
            
            <stackLayout col="1" className="p-2">
              <label className="text-lg text-primary">Health Score</label>
              <progress value={85} maxValue={100} className="m-2" />
            </stackLayout>
          </gridLayout>

          <label className="text-xl text-primary mt-4 mb-2">Recent Products</label>
          <listView height="200" className="bg-secondary rounded-lg" items={[]} />
        </stackLayout>
      </scrollView>
    </gridLayout>
  );
}