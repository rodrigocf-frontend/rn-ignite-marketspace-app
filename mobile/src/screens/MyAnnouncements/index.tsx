import React, { useState } from "react";
import { ScrollView, Pressable, Image } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "react-native-safe-area-context";
import { CaretDownIcon, PlusIcon } from "phosphor-react-native";
import { Heading } from "@/components/ui/heading";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { AdvertisementCard } from "@/components/features/AdvertisementCard";

// Dados mock dos anúncios
const myProducts = [
  {
    id: 1,
    title: "Luminária pendente",
    price: "45,00",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400",
    status: "NOVO",
    isActive: true,
  },
  {
    id: 2,
    title: "Coturno feminino",
    price: "80,00",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    status: "NOVO",
    isActive: true,
  },
  {
    id: 3,
    title: "Tênis vermelho",
    price: "59,90",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    status: "USADO",
    isActive: true,
  },
  {
    id: 4,
    title: "Tênis vermelho",
    price: "59,90",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
    status: "USADO",
    isActive: false,
  },
  {
    id: 5,
    title: "Tênis vermelho",
    price: "59,90",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400",
    status: "NOVO",
    isActive: false,
  },
];

export function MyAnnouncements() {
  const [filter, setFilter] = useState("all");

  const handleCreateAd = () => {
    console.log("Criar novo anúncio");
  };

  const handleProductPress = (productId: number) => {
    console.log("Produto selecionado:", productId);
  };

  const activeCount = myProducts.filter((p) => p.isActive).length;

  const filteredProducts =
    filter === "all"
      ? myProducts
      : myProducts.filter((p) =>
          filter === "active" ? p.isActive : !p.isActive
        );

  return (
    <SafeAreaView className="flex-1 bg-secondary-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <HStack className="px-6 pt-5 pb-6 items-center justify-between">
          <Box className="flex-1" />
          <Heading className="text-typography-600 font-karla_bold text-xl">
            Meus anúncios
          </Heading>
          <Pressable onPress={handleCreateAd} className="flex-1 items-end">
            <PlusIcon size={24} color="#1A181B" weight="regular" />
          </Pressable>
        </HStack>

        {/* Counter and Filter */}
        <HStack className="px-6 pb-5 items-center justify-between">
          <Text className="text-typography-500 font-karla text-sm">
            {activeCount} anúncios
          </Text>

          <Menu
            placement="bottom right"
            offset={5}
            trigger={({ ...triggerProps }) => (
              <Pressable {...triggerProps}>
                <HStack className="items-center gap-2 px-3 py-2 border border-secondary-300 rounded-md bg-white">
                  <Text className="text-typography-600 font-karla text-sm">
                    {filter === "all"
                      ? "Todos"
                      : filter === "active"
                      ? "Ativos"
                      : "Inativos"}
                  </Text>
                  <CaretDownIcon size={16} color="#3E3A40" weight="bold" />
                </HStack>
              </Pressable>
            )}
          >
            <MenuItem
              key="all"
              textValue="Todos"
              onPress={() => setFilter("all")}
            >
              <MenuItemLabel>Todos</MenuItemLabel>
            </MenuItem>
            <MenuItem
              key="active"
              textValue="Ativos"
              onPress={() => setFilter("active")}
            >
              <MenuItemLabel>Ativos</MenuItemLabel>
            </MenuItem>
            <MenuItem
              key="inactive"
              textValue="Inativos"
              onPress={() => setFilter("inactive")}
            >
              <MenuItemLabel>Inativos</MenuItemLabel>
            </MenuItem>
          </Menu>
        </HStack>

        {/* Products Grid */}
        <Box className="px-6">
          <VStack className="gap-6">
            {filteredProducts
              .reduce((rows: any[], product, index) => {
                if (index % 2 === 0) {
                  rows.push([product]);
                } else {
                  rows[rows.length - 1].push(product);
                }
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <HStack key={rowIndex} className="gap-5">
                  {row.map((product: any) => (
                    <AdvertisementCard data={product} key={product.id} />
                  ))}
                  {row.length === 1 && <Box className="flex-1" />}
                </HStack>
              ))}
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
