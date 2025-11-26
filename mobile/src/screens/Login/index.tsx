import React, { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "@/components/ui/form-control";
import { InputIcon, InputSlot } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, Icon, MailIcon } from "@/components/ui/icon";
import { Controller, useForm } from "react-hook-form";
import { ContainedButton } from "@/components/common/buttons";
import { HStack } from "@/components/ui/hstack";
import { TextField } from "@/components/common/inputs/TextField";
import { SafeAreaView } from "react-native-safe-area-context";
import { Brand } from "@/components/common/brand";
import { loginSchema } from "@/schemas/loginSchema";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {};

  const handleCreateAccount = () => {
    console.log("Criar nova conta");
  };

  return (
    <SafeAreaView className="flex-1">
      <VStack className="flex-1 bg-background-0">
        <VStack className=" bg-background-100 px-12 pt-[64px] pb-[68px] rounded-b-[24px]">
          {/* Logo and Title */}

          <Center>
            <Brand />
          </Center>

          {/* Form */}
          <VStack className="w-full gap-4 mt-[76.76px]">
            <Text className="text-center text-sm font-karla text-typography-500 ">
              Acesse sua conta
            </Text>

            {/* Email Input */}
            <FormControl isInvalid={!!errors.email}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    placeholder="E-mail"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="placeholder:text-typography-200 font-karla text-base"
                  />
                )}
              />
              <FormControlError>
                <FormControlErrorText className="text-red-600 text-xs mt-1">
                  {errors.email?.message}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>

            {/* Password Input */}
            <FormControl isInvalid={!!errors.password}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    placeholder="Senha"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    secureTextEntry={!showPassword}
                    InputSlot={
                      <InputSlot
                        className="pr-3"
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        <InputIcon
                          as={showPassword ? EyeIcon : EyeOffIcon}
                          className="text-gray-500"
                        />
                      </InputSlot>
                    }
                  />
                )}
              />
              <FormControlError>
                <FormControlErrorText className="text-red-600 text-xs mt-1">
                  {errors.password?.message}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>

            {/* Login Button */}
          </VStack>
          <Box className="mt-9">
            <ContainedButton onPress={() => {}}>Entrar</ContainedButton>
          </Box>
        </VStack>
        <Box className=" mt-14 ">
          <Text className="text-sm text-center font-karla text-typography-500 ">
            Ainda não tem acesso?
          </Text>
        </Box>
        <HStack className="items-center px-12 mt-4 h-[42px">
          <ContainedButton variant="SECONDARY">Criar uma conta</ContainedButton>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
