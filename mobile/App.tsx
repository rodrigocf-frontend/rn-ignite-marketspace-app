import "./global.css";
import { GluestackUIProvider } from "@/config/gluestack-ui-provider";
import { useBootstrap } from "@/hooks/useBootstrap";
import { Home } from "@/screens/Home";
import { Login } from "@/screens/Login";
import { ProductDetails } from "@/screens/ProductDetails";
import { SignUp } from "@/screens/SignUp";
import { MyAnnouncements } from "@/screens/MyAnnouncements";
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
        <MyAnnouncements />
      </GluestackUIProvider>
    </KeyboardProvider>
  );
}
