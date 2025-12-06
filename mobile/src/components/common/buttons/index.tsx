import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Icon } from "phosphor-react-native";
import { PropsWithChildren } from "react";
import { GestureResponderEvent } from "react-native";

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  variant?: keyof typeof ButtonVariant;
  IconButton?: Icon;
}

enum ButtonVariant {
  PRIMARY = "bg-primary-0 hover:bg-primary-0 active:bg-primary-0 ",
  SECONDARY = "bg-secondary-100 hover:bg-secondary-100 ",
  TERTIARY = "bg-secondary-600 hover:bg-secondary-600 active:bg-secondary-600",
}

enum ButtonTextVariant {
  PRIMARY = "text-typography-white",
  SECONDARY = "text-typography-500 hover:text-typography-500 focus:text-typography-500 active:text-typography-50",
  TERTIARY = "text-typography-white hover:text-typography-white active:text-typography-white",
}

export const ContainedButton = ({
  onPress,
  children,
  variant = "PRIMARY",
  IconButton,
}: PropsWithChildren<Props>) => {
  return (
    <VStack className="flex-1">
      <Button
        variant="solid"
        className={
          "items-center justify-center py-4 rounded-md  h-fit " +
          ButtonVariant[variant]
        }
        onPress={onPress}
      >
        {IconButton && <IconButton size={16} color="white" weight="bold" />}
        <ButtonText
          variant="outline"
          className={
            "font-karla_bold text-sm text-center " + ButtonTextVariant[variant]
          }
        >
          {children}
        </ButtonText>
      </Button>
    </VStack>
  );
};
