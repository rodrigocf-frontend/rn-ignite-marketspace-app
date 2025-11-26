import "./global.css";
import { GluestackUIProvider } from "@components/ui/gluestack-ui-provider";
import { Center } from "@/components/ui/center";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaView className="flex-1">
        <Center className="flex-1 bg-primary-500 ">
          <Text className="text-typography-0 font-bold">
            This is the center.
          </Text>
        </Center>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
