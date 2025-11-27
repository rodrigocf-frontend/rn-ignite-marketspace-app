import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { PlusIcon } from "phosphor-react-native";
import { ContainedButton } from "../buttons";
import { Box } from "@/components/ui/box";

export function HomeHeader() {
  return (
    <HStack className="justify-between max-w-sm w-full m-auto gap-2">
      <HStack className="items-center gap-2  ">
        <Avatar size="md" className="border-2 border-primary-0">
          <AvatarImage source={{ uri: "https://i.pravatar.cc/100?img=10" }} />
        </Avatar>
        <VStack className="">
          <Text className="text-typography-600 font-karla text-base">
            Boas vindas,
          </Text>
          <Text className="text-typography-600 font-karla_bold text-base">
            Maria!
          </Text>
        </VStack>
      </HStack>

      <Box className="max-w-[139px]">
        <ContainedButton
          variant="TERTIARY"
          onPress={() => {}}
          IconButton={PlusIcon}
        >
          Criar anúncio
        </ContainedButton>
      </Box>
    </HStack>
  );
}
