import "./global.css";
import { GluestackUIProvider } from "@/config/gluestack-ui-provider";
import { useBootstrap } from "@/hooks/useBootstrap";
import { Login } from "@/screens/Login";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isReady } = useBootstrap();

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <GluestackUIProvider mode="light">
      <Login />
    </GluestackUIProvider>
  );
}
