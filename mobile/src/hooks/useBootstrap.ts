import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";

export const useBootstrap = () => {
  const [loaded, error] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  return {
    isReady: loaded || error,
  };
};
