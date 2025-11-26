import { Button, ButtonText } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { GestureResponderEvent } from "react-native";

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  variant?: keyof typeof ButtonVariant;
}

enum ButtonVariant {
  PRIMARY = "bg-primary-0 hover:bg-primary-0 active:bg-primary-0",
  SECONDARY = "bg-secondary-100 hover:bg-secondary-100 ",
  TERTIARY = "bg-primary-0 hover:bg-primary-0 active:bg-primary-0",
}

enum ButtonTextVariant {
  PRIMARY = "text-typography-white",
  SECONDARY = "text-typography-500 hover:text-typography-500 focus:text-typography-500 active:text-typography-50",
  TERTIARY = "bg-primary-0 hover:bg-primary-0 active:bg-primary-0",
}

export const ContainedButton = ({
  onPress,
  children,
  variant = "PRIMARY",
}: PropsWithChildren<Props>) => {
  return (
    <Button
      variant="solid"
      className={
        "items-center justify-center py-4 rounded-md  w-full  h-fit " +
        ButtonVariant[variant]
      }
      onPress={onPress}
    >
      <ButtonText
        variant="outline"
        className={
          "font-karla_bold text-sm text-center " + ButtonTextVariant[variant]
        }
      >
        {children}
      </ButtonText>
    </Button>
  );
};
