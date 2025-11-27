import "./global.css";
import { GluestackUIProvider } from "@/config/gluestack-ui-provider";
import { useBootstrap } from "@/hooks/useBootstrap";
import { Login } from "@/screens/Login";
import { SignUp } from "@/screens/SignUp";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isReady } = useBootstrap();

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <KeyboardProvider>
      <GluestackUIProvider mode="light">
        <SignUp />
      </GluestackUIProvider>
    </KeyboardProvider>
  );
}
