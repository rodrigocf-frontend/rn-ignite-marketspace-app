import { Input, InputField, InputSlot } from "@/components/ui/input";
import { ReactNode } from "react";
import { TextInputProps } from "react-native";

type Props = {
  InputSlot?: ReactNode;
} & TextInputProps;

export function TextField({ InputSlot, ...props }: Props) {
  return (
    <Input
      variant="outline"
      className="bg-background-0 border-background-0 rounded-md py-3 pl-4 pr-3 h-fit"
    >
      <InputField
        {...props}
        className="placeholder:text-typography-200 font-karla text-base"
      />
      {InputSlot}
    </Input>
  );
}
