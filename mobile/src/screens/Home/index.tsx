import React, { useState } from "react";
import { ScrollView, Pressable, Image, Keyboard } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input, InputSlot } from "@/components/ui/input";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MagnifyingGlassIcon,
  SlidersIcon,
  TagIcon,
  PlusIcon,
  ArrowRightIcon,
} from "phosphor-react-native";
import { HomeHeader } from "@/components/common/headers";
import { AdvertisementInfo } from "@/components/features/AdvertisementInfo";
import { TextField } from "@/components/common/inputs/TextField";
import { Divider } from "@/components/ui/divider";
import { AdvertisementCard } from "@/components/features/AdvertisementCard";
import { FilterModal } from "@/components/features/FilterModal";

// Dados mock dos produtos
const products = [
  {
    id: 1,
    title: "Tênis vermelho",
    price: "59,90",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    status: "USADO",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    title: "Bicicleta",
    price: "120,00",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400",
    status: "NOVO",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    title: "Tênis vermelho",
    price: "59,90",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
    status: "USADO",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    title: "Sofá 1,80m",
    price: "1.200,00",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
    status: "NOVO",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    title: "Luminária",
    price: "45,00",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400",
    status: "NOVO",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    title: "Cadeira gamer",
    price: "850,00",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400",
    status: "USADO",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
];

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleFilter, setVisibleFilter] = useState(false);

  const handleCreateAd = () => {
    console.log("Criar anúncio");
  };

  const handleMyAds = () => {
    console.log("Meus anúncios");
  };

  const handleProductPress = (productId: number) => {
    console.log("Produto selecionado:", productId);
  };

  const handleOpenFilter = () => setVisibleFilter(true);

  const handleCloseFilter = () => setVisibleFilter(false);

  return (
    <>
      <SafeAreaView className="flex-1 bg-secondary-50">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <HomeHeader />

          {/* My Ads Card */}
          <Box className=" max-w-sm w-full m-auto mt-8">
            <Text className="text-sm  font-karla text-typography-500  ">
              Seus produtos anunciados para venda
            </Text>
          </Box>
          <AdvertisementInfo />

          {/* Search Section */}
          <Box className=" max-w-sm w-full m-auto mt-8">
            <Text className="text-sm  font-karla text-typography-500  ">
              Compre produtos variados
            </Text>
          </Box>
          <Box className="max-w-sm w-full m-auto mt-3">
            <HStack className="gap-2">
              <Box className="flex-1">
                <TextField
                  placeholder="Buscar anúncio"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  className="text-typography-900"
                  InputSlot={
                    <>
                      <InputSlot className="pr-3">
                        <MagnifyingGlassIcon
                          size={20}
                          color="#3E3A40"
                          weight="bold"
                        />
                      </InputSlot>
                      <Divider orientation="vertical" className="mx-3" />
                      <InputSlot
                        onPress={handleOpenFilter}
                        pointerEvents="box-only"
                      >
                        <SlidersIcon size={20} color="#3E3A40" weight="bold" />
                      </InputSlot>
                    </>
                  }
                />
              </Box>
            </HStack>
          </Box>

          {/* Products Grid */}
          <Box className="max-w-sm w-full m-auto mt-6">
            <VStack className="gap-6">
              {/* Row 1 */}
              <HStack className="gap-5">
                {products.slice(0, 2).map((product) => (
                  <AdvertisementCard data={product} key={product.id} />
                ))}
              </HStack>

              {/* Row 2 */}
              <HStack className="gap-5">
                {products.slice(2, 4).map((product) => (
                  <AdvertisementCard data={product} key={product.id} />
                ))}
              </HStack>

              {/* Row 3 */}
              <HStack className="gap-5">
                {products.slice(4, 6).map((product) => (
                  <AdvertisementCard data={product} key={product.id} />
                ))}
              </HStack>
            </VStack>
          </Box>
        </ScrollView>
      </SafeAreaView>
      <FilterModal
        onClose={handleCloseFilter}
        onApplyFilters={() => {}}
        visible={visibleFilter}
      />
    </>
  );
}
