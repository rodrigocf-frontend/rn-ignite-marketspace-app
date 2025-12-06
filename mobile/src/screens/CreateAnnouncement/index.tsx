import React, { useState } from "react";
import { ScrollView, Pressable, Image } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading } from "@/components/ui/heading";
import { TextField } from "@/components/common/inputs/TextField";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { CheckIcon, CircleIcon } from "@/components/ui/icon";
import { Switch } from "@/components/ui/switch";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import {
  ArrowLeftIcon,
  PlugsIcon,
  PlusIcon,
  XIcon,
} from "phosphor-react-native";
import { ContainedButton } from "@/components/common/buttons";

export function CreateAnnouncement() {
  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400",
  ]);
  const [title, setTitle] = useState("Luminária pendente");
  const [description, setDescription] = useState(
    "Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus."
  );
  const [condition, setCondition] = useState("used");
  const [price, setPrice] = useState("45,00");
  const [acceptTrade, setAcceptTrade] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<string[]>([]);

  const handleAddImage = () => {
    console.log("Adicionar imagem");
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleBack = () => {
    console.log("Voltar");
  };

  const handleCancel = () => {
    console.log("Cancelar");
  };

  const handleAdvance = () => {
    console.log("Avançar");
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary-50" edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="max-w-sm m-auto "
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        {/* Header */}
        <HStack className="items-center">
          <Pressable onPress={handleBack} className="mr-4">
            <ArrowLeftIcon size={24} color="#1A181B" weight="regular" />
          </Pressable>
          <Heading className="text-typography-600 font-karla_bold text-xl flex-1 text-center mr-8">
            Criar anúncio
          </Heading>
        </HStack>

        <VStack className="mt-6">
          {/* Images Section */}
          <VStack>
            <VStack className="gap-1">
              <Text className="text-typography-500 font-karla_bold text-base">
                Imagens
              </Text>
              <Text className="text-typography-400 font-karla text-sm">
                Escolha até 3 imagens para mostrar o quando o seu produto é
                incrível!
              </Text>
            </VStack>

            <HStack className="mt-4 gap-2">
              {/* Existing Images */}
              {images.map((image, index) => (
                <Box key={index} className="relative w-24 h-24">
                  <Image
                    source={{ uri: image }}
                    className="w-full h-full rounded-md"
                    resizeMode="cover"
                  />
                  <Pressable
                    onPress={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 w-5 h-5 rounded-full bg-background-500 items-center justify-center"
                  >
                    <XIcon size={12} color="white" weight="bold" />
                  </Pressable>
                </Box>
              ))}

              {/* Add Image Button */}
              {images.length < 3 && (
                <Pressable
                  onPress={handleAddImage}
                  className="w-24 h-24 rounded-md bg-secondary-100 items-center justify-center"
                >
                  <PlusIcon size={24} color="#9F9BA1" weight="regular" />
                </Pressable>
              )}
            </HStack>
          </VStack>

          {/* About Product */}
          <VStack className="gap-4 mt-8">
            <Text className="text-typography-500 font-karla_bold text-base">
              Sobre o produto
            </Text>

            {/* Title */}
            <TextField
              placeholder="Título do anúncio"
              value={title}
              onChangeText={setTitle}
              className="font-karla text-typography-50 text-base"
            />

            {/* Description */}
            <Textarea className="bg-white border border-secondary-300 rounded-md">
              <TextareaInput
                placeholder="Descrição do produto"
                value={description}
                onChangeText={setDescription}
                className="text-typography-600 font-karla text-base p-3"
              />
            </Textarea>
            <RadioGroup value={condition} onChange={setCondition}>
              <HStack className="gap-5">
                <Radio value="new">
                  <RadioIndicator
                    className={
                      condition === "new"
                        ? "border-primary-0"
                        : "border-secondary-200"
                    }
                  >
                    <RadioIcon
                      as={CircleIcon}
                      color="#647AC7"
                      fill={"#647AC7"}
                    />
                  </RadioIndicator>
                  <RadioLabel className="text-typography-500 font-karla text-base">
                    Produto novo
                  </RadioLabel>
                </Radio>

                <Radio value="used">
                  <RadioIndicator
                    className={
                      condition === "used"
                        ? "border-primary-0"
                        : "border-secondary-200"
                    }
                  >
                    <RadioIcon
                      as={CircleIcon}
                      color="#647AC7"
                      fill={"#647AC7"}
                    />
                  </RadioIndicator>
                  <RadioLabel className="text-typography-500 font-karla text-base">
                    Produto usado
                  </RadioLabel>
                </Radio>
              </HStack>
            </RadioGroup>
          </VStack>
          {/* Condition Radio */}

          {/* Sale */}
          <VStack className="mt-8 gap-4">
            <Text className="text-typography-600 font-karla_bold text-base">
              Venda
            </Text>

            {/* Price */}
            <TextField
              placeholder="Valor do produto"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
              InputSlot={
                <Box className="pl-3">
                  <Text className="text-typography-600 font-karla text-base">
                    R$
                  </Text>
                </Box>
              }
            />

            {/* Accept Trade */}
            <VStack>
              <Text className="text-typography-600 font-karla_bold text-sm">
                Aceita troca?
              </Text>
              <Switch
                className="self-start"
                value={acceptTrade}
                onValueChange={setAcceptTrade}
                trackColor={{
                  false: "#D9D8DA",
                  true: "#647AC7",
                }}
                thumbColor="white"
                ios_backgroundColor="#D9D8DA"
              />
            </VStack>

            {/* Payment Methods */}
            <VStack>
              <Text className="text-typography-600 font-karla_bold text-sm">
                Meios de pagamento aceitos
              </Text>

              <CheckboxGroup
                className="mt-3"
                value={paymentMethods}
                onChange={setPaymentMethods}
              >
                <VStack className="gap-2">
                  <Checkbox value="boleto f">
                    <CheckboxIndicator className="border-secondary-400 bg-white data-[checked=true]:bg-primary-0 data-[checked=true]:border-primary-0">
                      <CheckboxIcon as={CheckIcon} className="text-white" />
                    </CheckboxIndicator>
                    <CheckboxLabel className="text-typography-600 font-karla text-base w-full ">
                      Boleto
                    </CheckboxLabel>
                  </Checkbox>

                  <Checkbox value="pix">
                    <CheckboxIndicator className="border-secondary-400 bg-white data-[checked=true]:bg-primary-0 data-[checked=true]:border-primary-0">
                      <CheckboxIcon as={CheckIcon} className="text-white" />
                    </CheckboxIndicator>
                    <CheckboxLabel className="text-typography-600 font-karla text-base w-full">
                      Pix
                    </CheckboxLabel>
                  </Checkbox>

                  <Checkbox value="cash">
                    <CheckboxIndicator className="border-secondary-400 bg-white data-[checked=true]:bg-primary-0 data-[checked=true]:border-primary-0">
                      <CheckboxIcon as={CheckIcon} className="text-white" />
                    </CheckboxIndicator>
                    <CheckboxLabel className="text-typography-600 font-karla text-base w-full">
                      Dinheiro
                    </CheckboxLabel>
                  </Checkbox>

                  <Checkbox value="card">
                    <CheckboxIndicator className="border-secondary-400 bg-white data-[checked=true]:bg-primary-0 data-[checked=true]:border-primary-0">
                      <CheckboxIcon as={CheckIcon} className="text-white" />
                    </CheckboxIndicator>
                    <CheckboxLabel className="text-typography-600 font-karla text-base w-full">
                      Cartão de Crédito
                    </CheckboxLabel>
                  </Checkbox>

                  <Checkbox value="deposit">
                    <CheckboxIndicator className="border-secondary-400 bg-white data-[checked=true]:bg-primary-0 data-[checked=true]:border-primary-0">
                      <CheckboxIcon as={CheckIcon} className="text-white" />
                    </CheckboxIndicator>
                    <CheckboxLabel className="text-typography-600 font-karla text-base w-full">
                      Depósito Bancário
                    </CheckboxLabel>
                  </Checkbox>
                </VStack>
              </CheckboxGroup>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>

      {/* Footer Buttons */}
      <Box className="bg-background-0 px-6 pt-5 pb-7 ">
        <HStack className="mx-auto w-full justify-between gap-3 ">
          <ContainedButton variant="SECONDARY" onPress={handleAdvance}>
            Avançar
          </ContainedButton>

          <ContainedButton variant="TERTIARY" onPress={handleAdvance}>
            Avançar
          </ContainedButton>
        </HStack>
      </Box>
    </SafeAreaView>
  );
}
