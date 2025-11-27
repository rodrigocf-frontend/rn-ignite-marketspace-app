import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ArrowRightIcon, TagIcon } from "phosphor-react-native";
import { Pressable } from "react-native";

export function AdvertisementInfo() {
  return (
    <Box className="max-w-sm w-full m-auto  ">
      <Pressable onPress={() => {}}>
        <Box className="rounded-md px-4 py-3 bg-primary-0/10 mt-3">
          <HStack className="items-center justify-between">
            <HStack className="items-center gap-4 flex-1">
              <TagIcon size={22} color="#364D9D" weight="regular" />
              <VStack>
                <Text className="text-typography-500 font-bold text-xl">4</Text>
                <Text className="text-typography-500 font-karla text-xs">
                  anúncios ativos
                </Text>
              </VStack>
            </HStack>

            <HStack className="items-center gap-2">
              <Text className="text-primary-0 font-bold text-xs">
                Meus anúncios
              </Text>
              <ArrowRightIcon size={16} color="#364D9D" weight="bold" />
            </HStack>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
}
