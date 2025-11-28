import React, { useState } from "react";
import { Keyboard, Modal, Pressable } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { XIcon } from "phosphor-react-native";
import { ContainedButton } from "@/components/common/buttons";
import { CheckIcon } from "@/components/ui/icon";

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
}

interface FilterValues {
  condition: "new" | "used" | null;
  acceptTrade: boolean;
  paymentMethods: string[];
}

const PAYMENT_METHODS = [
  { id: "boleto", label: "Boleto" },
  { id: "pix", label: "Pix" },
  { id: "cash", label: "Dinheiro" },
  { id: "card", label: "Cartão de Crédito" },
  { id: "deposit", label: "Depósito Bancário" },
];

export function FilterModal({
  visible,
  onClose,
  onApplyFilters,
}: FilterModalProps) {
  const [condition, setCondition] = useState<"new" | "used" | null>("new");
  const [acceptTrade, setAcceptTrade] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<string[]>([
    "boleto",
    "pix",
    "cash",
    "card",
    "deposit",
  ]);

  const handleTogglePaymentMethod = (methodId: string) => {
    setPaymentMethods((prev) =>
      prev.includes(methodId)
        ? prev.filter((id) => id !== methodId)
        : [...prev, methodId]
    );
  };

  const handleResetFilters = () => {
    setCondition(null);
    setAcceptTrade(false);
    setPaymentMethods(["boleto", "pix", "cash", "card", "deposit"]);
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      condition,
      acceptTrade,
      paymentMethods,
    });
    onClose();
  };

  return (
    <Modal
      onShow={() => Keyboard.dismiss()}
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable className="flex-1 bg-black/50 justify-end" onPress={onClose}>
        <Pressable onPress={(e) => e.stopPropagation()}>
          <Box className="bg-secondary-50 rounded-t-3xl pt-10 px-6 pb-8">
            <Box className="gap-6">
              {/* Header */}
              <HStack className="items-center justify-between  ">
                <Text className="text-typography-600 font-karla_bold text-xl">
                  Filtrar anúncios
                </Text>
                <Pressable onPress={onClose} className="p-1">
                  <XIcon size={24} color="#9F9BA1" weight="regular" />
                </Pressable>
              </HStack>

              {/* Content */}
              <VStack className="gap-6">
                {/* Condição */}
                <VStack className="gap-3">
                  <Text className="text-typography-500 font-karla_bold text-sm">
                    Condição
                  </Text>
                  <HStack className="gap-2">
                    <Pressable
                      onPress={() =>
                        setCondition(condition === "new" ? null : "new")
                      }
                    >
                      <Box
                        className={`py-2 gap-1 rounded-full items-center justify-center min-w-[80px] ${
                          condition === "new"
                            ? "bg-primary-0 pl-3"
                            : "bg-secondary-100"
                        }`}
                      >
                        <HStack className="items-center gap-2 ">
                          <Text
                            className={`font-karla_bold text-center text-xs uppercase ${
                              condition === "new"
                                ? "text-white"
                                : "text-typography-500"
                            }`}
                          >
                            NOVO
                          </Text>
                          {condition === "new" && (
                            <Box className="w-4 h-4 rounded-full bg-white items-center justify-center">
                              <XIcon size={12} color="#647AC7" weight="bold" />
                            </Box>
                          )}
                        </HStack>
                      </Box>
                    </Pressable>

                    <Pressable
                      onPress={() =>
                        setCondition(condition === "used" ? null : "used")
                      }
                    >
                      <Box
                        className={`py-2 px-4 rounded-full items-center justify-center max-w-fit min-w-[76px] ${
                          condition === "used"
                            ? "bg-secondary-300"
                            : "bg-secondary-200"
                        }`}
                      >
                        <Text
                          className={`font-karla_bold text-xs uppercase ${
                            condition === "used"
                              ? "text-typography-50"
                              : "text-typography-500"
                          }`}
                        >
                          USADO
                        </Text>
                      </Box>
                    </Pressable>
                  </HStack>
                </VStack>

                {/* Aceita troca? */}
                <VStack>
                  <Text className="text-typography-500 font-karla_bold text-sm">
                    Aceita troca?
                  </Text>
                  <Switch
                    size="lg"
                    value={acceptTrade}
                    onValueChange={setAcceptTrade}
                    className="self-start"
                  />
                </VStack>

                {/* Meios de pagamento */}
                <VStack className="gap-2">
                  <Text className="text-typography-500 font-karla_bold text-sm">
                    Meios de pagamento aceitos
                  </Text>
                  <VStack className="gap-2">
                    {PAYMENT_METHODS.map((method) => (
                      <Checkbox
                        key={method.id}
                        value={method.id}
                        isChecked={paymentMethods.includes(method.id)}
                        onChange={() => handleTogglePaymentMethod(method.id)}
                        className="gap-2"
                      >
                        <CheckboxIndicator className="border-secondary-400">
                          <CheckboxIcon
                            as={CheckIcon}
                            className="text-typography-white"
                          />
                        </CheckboxIndicator>
                        <CheckboxLabel className="text-typography-600 font-karla text-base">
                          {method.label}
                        </CheckboxLabel>
                      </Checkbox>
                    ))}
                  </VStack>
                </VStack>
              </VStack>
            </Box>
            {/* Footer */}
            <HStack className="pt-4 gap-3 mt-16">
              <ContainedButton variant="SECONDARY">
                Resetar filtros
              </ContainedButton>

              <ContainedButton variant="TERTIARY" onPress={handleApplyFilters}>
                Aplicar filtros
              </ContainedButton>
            </HStack>
          </Box>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
