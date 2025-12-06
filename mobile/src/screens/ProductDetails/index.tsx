import React from "react";
import { ScrollView, Image } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import {
  BankIcon,
  BarcodeIcon,
  CreditCardIcon,
  MoneyIcon,
  QrCodeIcon,
  WhatsappLogoIcon,
} from "phosphor-react-native";
import { ContainedButton } from "@/components/common/buttons";
import { Heading } from "@/components/ui/heading";

const PAGE_WIDTH = 430;

export function ProductDetails() {
  const progress = useSharedValue<number>(0);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.6,
  } as const;

  const product = {
    id: 2,
    title: "Bicicleta",
    price: "120,00",
    description:
      "Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.",
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800",
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=800",
    ],
    isNew: true,
    acceptTrade: true,
    paymentMethods: [
      { id: "boleto", label: "Boleto", icon: BarcodeIcon },
      { id: "pix", label: "Pix", icon: QrCodeIcon },
      { id: "cash", label: "Dinheiro", icon: MoneyIcon },
      { id: "card", label: "Cartão de Crédito", icon: CreditCardIcon },
      { id: "deposit", label: "Depósito Bancário", icon: BankIcon },
    ],
    seller: {
      name: "Makenna Baptista",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
  };

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Back Button */}
        <Box className="relative">
          {/* Image Carousel */}

          <Carousel
            ref={ref}
            {...baseOptions}
            loop
            onProgressChange={progress}
            data={product.images}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                className="w-full h-full"
                resizeMode="cover"
              />
            )}
          />
          <Box className="relative justify-center items-center">
            <Box className="absolute bottom-[2px]">
              <Pagination.Basic
                progress={progress}
                data={product.images}
                dotStyle={{
                  backgroundColor: "#F7F7F8",
                  borderRadius: 999,
                  height: 3,
                  width: (PAGE_WIDTH - 40) / product.images.length, // Distribui igualmente
                }}
                activeDotStyle={{
                  backgroundColor: "#f1f1f1",
                  borderRadius: 999,
                  height: 3,
                }}
                containerStyle={{
                  gap: 5,
                  opacity: 0.5,
                }}
                onPress={onPressPagination}
              />
            </Box>
          </Box>
        </Box>

        {/* Content */}
        <VStack className="px-6 pt-5 ">
          {/* Seller Info */}
          <HStack className="items-center gap-2">
            <Avatar size="sm" className="border-2 border-primary-0">
              <AvatarImage source={{ uri: product.seller.avatar }} />
            </Avatar>
            <Text className="text-typography-600 font-karla text-sm">
              {product.seller.name}
            </Text>
          </HStack>

          {/* Badge */}
          <Box className="self-start mt-6">
            <Box className="bg-secondary-100 px-2 py-0.5 rounded-full">
              <Text className="text-typography-500 text-[10px] font-karla_bold uppercase">
                {product.isNew ? "NOVO" : "USADO"}
              </Text>
            </Box>
          </Box>

          {/* Title and Price */}
          <VStack className="mt-2">
            <HStack className="items-center justify-between">
              <Heading className="text-typography-600 font-karla_bold text-xl flex-1">
                {product.title}
              </Heading>
              <Text className="text-primary-0 font-karla_bold text-2xl">
                <Text className="text-primary-0 font-karla text-sm">R$ </Text>
                {product.price}
              </Text>
            </HStack>
          </VStack>

          {/* Description */}
          <Box className="mt-2">
            <Text className="text-typography-500 font-karla text-sm leading-5">
              {product.description}
            </Text>
          </Box>

          {/* Accept Trade */}
          <HStack className="items-center gap-2 mt-6">
            <Text className="text-typography-500 font-karla_bold text-sm">
              Aceita troca?
            </Text>
            <Text className="text-typography-500 font-karla text-sm">
              {product.acceptTrade ? "Sim" : "Não"}
            </Text>
          </HStack>

          {/* Payment Methods */}
          <VStack className="gap-2 mt-4">
            <Text className="text-typography-500 font-karla_bold text-sm">
              Meios de pagamento:
            </Text>
            <VStack className="gap-1">
              {product.paymentMethods.map((method) => (
                <HStack key={method.id} className="items-center gap-2">
                  <method.icon size={18} color="#1A181B" weight="regular" />
                  <Text className="text-typography-500 font-karla text-sm">
                    {method.label}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>

      {/* Footer */}
      <Box className="bg-background-0 pt-5 pb-7 px-6">
        <HStack className="items-center justify-between ">
          <VStack>
            <Text className="text-primary-0 font-karla_bold text-2xl">
              <Text className="text-primary-0 font-karla_bold  text-sm">
                R${" "}
              </Text>
              {product.price}
            </Text>
          </VStack>

          <HStack>
            <ContainedButton IconButton={WhatsappLogoIcon}>
              Entrar em contato
            </ContainedButton>
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
}
