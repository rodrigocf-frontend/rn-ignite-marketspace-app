import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
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
  avatar?: string;
  isActive?: boolean;
};

interface Props {
  data: Product;
}

export function AdvertisementCard({ data }: Props) {
  const { avatar, id, isActive, image, price, status, title } = data;

  const titleColor = isActive ? "text-typography-600" : "text-typography-400";

  return (
    <Pressable onPress={() => {}} className="flex-1">
      <VStack>
        <Box className="relative rounded-md overflow-hidden">
          <Image
            source={{ uri: image }}
            className="w-full h-24 rounded-md"
            resizeMode="cover"
            alt="product"
          />
          {/* Avatar */}
          <Box className="absolute top-1 left-1">
            {avatar && (
              <Avatar size="xs" className="border border-secondary-0 w-6 h-6">
                <AvatarImage source={{ uri: avatar }} alt="product" />
              </Avatar>
            )}
          </Box>

          {!isActive && (
            <>
              <Box className="absolute bg-background-600 w-full h-full opacity-40" />
              <Box className="absolute bottom-1  left-1">
                {!isActive && (
                  <Heading className="font-karla_bold text-[11px] text-typography-0 uppercase w-full">
                    Anúncio desativado
                  </Heading>
                )}
              </Box>
            </>
          )}

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

        <Text className={" font-karla text-sm mt-1 " + titleColor}>
          {title}
        </Text>
        <Text className={"font-karla_bold text-base " + titleColor}>
          R$ {price}
        </Text>
      </VStack>
    </Pressable>
  );
}
