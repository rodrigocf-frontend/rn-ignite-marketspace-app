import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "react-native";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  status: string;
  avatar: string;
};

interface Props {
  data: Product;
}

export function AdvertisementCard({ data }: Props) {
  const { avatar, id, image, price, status, title } = data;

  return (
    <Pressable onPress={() => {}} className="flex-1">
      <VStack className="gap-1">
        <Box className="relative rounded-md overflow-hidden">
          <Image
            source={{ uri: image }}
            className="w-full h-24 rounded-md"
            resizeMode="cover"
            alt="product"
          />
          {/* Avatar */}
          <Box className="absolute top-1 left-1">
            <Avatar size="xs" className="border border-secondary-0 w-6 h-6">
              <AvatarImage source={{ uri: avatar }} alt="product" />
            </Avatar>
          </Box>

          {/* Badge */}
          <Box
            className={`absolute top-1 right-1 px-2 py-0.5 rounded-full ${
              status === "NOVO" ? "bg-primary-50" : "bg-secondary-500"
            }`}
          >
            <Text className="text-typography-white font-karla_bold text-2xs">
              {status}
            </Text>
          </Box>
        </Box>

        <Text className="text-typography-500 font-karla text-sm mt-1">
          {title}
        </Text>
        <Text className="text-typography-600 font-karla_bold text-base">
          R$ {price}
        </Text>
      </VStack>
    </Pressable>
  );
}
