import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackNavigationProp } from "react-nativescript-navigation";

type AuthScreenProps = {
  navigation: StackNavigationProp<any, "Auth">;
};

export function AuthScreen({ navigation }: AuthScreenProps) {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleAuth = () => {
    // Implement authentication logic here
    navigation.navigate("Main");
  };

  return (
    <flexboxLayout className="bg-primary h-full">
      <stackLayout className="p-8 w-full">
        <label className="text-3xl font-bold text-primary text-center mb-8">
          ConsumeWise
        </label>
        
        <textField
          className="auth-input"
          hint="Email"
          keyboardType="email"
          text={email}
          onTextChange={(args) => setEmail(args.value)}
        />
        
        <textField
          className="auth-input"
          hint="Password"
          secure={true}
          text={password}
          onTextChange={(args) => setPassword(args.value)}
        />
        
        <button className="auth-button" onTap={handleAuth}>
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
        
        <button
          className="text-primary mt-4"
          onTap={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Need an account? Sign Up" : "Have an account? Sign In"}
        </button>
      </stackLayout>
    </flexboxLayout>
  );
}