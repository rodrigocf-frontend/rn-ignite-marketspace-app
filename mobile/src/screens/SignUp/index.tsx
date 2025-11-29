import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "react-native";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "@/components/ui/form-control";
import { InputSlot } from "@/components/ui/input";
import { TextField } from "@/components/common/inputs/TextField";
import { ContainedButton } from "@/components/common/buttons";
import {
  EyeIcon,
  EyeSlashIcon,
  PencilSimpleLineIcon,
  UserIcon,
} from "phosphor-react-native";
import { Brand } from "@/components/common/brand";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { signUpSchema } from "@/schemas/signupSchema";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [avatarUri, setAvatarUri] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(`Conta criada para: ${data.name}`);
  };

  const handleGoToLogin = () => {
    console.log("Ir para o login");
  };

  const handleSelectAvatar = () => {
    console.log("Selecionar foto do avatar");
    // Aqui você implementaria a seleção de imagem
  };

  return (
    <>
      <KeyboardAwareScrollView
        className="flex-1 bg-secondary-50"
        bottomOffset={100}
      >
        <SafeAreaView className="flex-1 ">
          <Box className="flex-1 ">
            {/* Main Content - Scrollable */}
            <Center className="px-6">
              <VStack className="w-full max-w-sm py-6">
                {/* Logo and Title */}
                <VStack className="items-center mb-4 gap-3">
                  <Box>
                    <Brand width={60} height={40} />
                  </Box>

                  <VStack className="items-center gap-2">
                    <Heading className="text-xl text-typography-600">
                      Boas vindas!
                    </Heading>
                    <Box className="px-8">
                      <Text className="text-sm text-center font-karla text-typography-500">
                        Crie sua conta e use o espaço para comprar itens
                        variados e vender seus produtos
                      </Text>
                    </Box>
                  </VStack>
                </VStack>

                {/* Avatar Upload */}
                <Center className="mb-4 mt-8">
                  <Pressable onPress={handleSelectAvatar}>
                    <Box className="relative">
                      <Avatar
                        size="xl"
                        className="bg-secondary-50 border-4 border-primary-0"
                      >
                        {avatarUri ? (
                          <AvatarImage source={{ uri: avatarUri }} />
                        ) : (
                          <UserIcon size={48} color="#9F9BA1" weight="bold" />
                        )}
                      </Avatar>
                      <Box className="absolute bg-primary-0 bottom-0 right-0 w-10 h-10 rounded-full items-center justify-center">
                        <PencilSimpleLineIcon size={16} color="#EDECEE" />
                      </Box>
                    </Box>
                  </Pressable>
                </Center>

                {/* Form */}
                <VStack className="w-full gap-4">
                  {/* Name Input */}
                  <FormControl isInvalid={!!errors.name}>
                    <Controller
                      control={control}
                      name="name"
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextField
                          placeholder="Nome"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorText className="text-red-600 text-xs mt-1">
                        {errors.name?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>

                  {/* Email Input */}
                  <FormControl isInvalid={!!errors.email}>
                    <Controller
                      control={control}
                      name="email"
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextField
                          placeholder="Email"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          keyboardType="email-address"
                          autoCapitalize="none"
                        />
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorText className="text-red-600 text-xs mt-1">
                        {errors.email?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>

                  {/* Phone Input */}
                  <FormControl isInvalid={!!errors.phone}>
                    <Controller
                      control={control}
                      name="phone"
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextField
                          placeholder="Telefone"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          keyboardType="phone-pad"
                        />
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorText className="text-red-600 text-xs mt-1">
                        {errors.phone?.message}
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
                              {showPassword ? (
                                <EyeIcon size={20} color="#5F5B62" />
                              ) : (
                                <EyeSlashIcon size={20} color="#5F5B62" />
                              )}
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

                  {/* Confirm Password Input */}
                  <FormControl isInvalid={!!errors.confirmPassword}>
                    <Controller
                      control={control}
                      name="confirmPassword"
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextField
                          placeholder="Confirmar senha"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          secureTextEntry={!showConfirmPassword}
                          InputSlot={
                            <InputSlot
                              className="pr-3"
                              onPress={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeIcon size={20} color="#5F5B62" />
                              ) : (
                                <EyeSlashIcon size={20} color="#5F5B62" />
                              )}
                            </InputSlot>
                          }
                        />
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorText className="text-red-600 text-xs mt-1">
                        {errors.confirmPassword?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>

                  {/* Create Account Button */}
                  <Box className="mt-6">
                    <ContainedButton
                      variant="TERTIARY"
                      onPress={handleSubmit(onSubmit)}
                    >
                      Criar
                    </ContainedButton>
                  </Box>
                </VStack>

                {/* Go to Login */}
                <VStack className="gap-4 mt-12 mb-6">
                  <Text className="text-sm text-center font-karla text-typography-500">
                    Já tem uma conta?
                  </Text>
                  <ContainedButton
                    variant="SECONDARY"
                    onPress={handleGoToLogin}
                  >
                    Ir para o login
                  </ContainedButton>
                </VStack>
              </VStack>
            </Center>
          </Box>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
}
