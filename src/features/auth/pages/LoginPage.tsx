import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Input, Select } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoChevronDownOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import background from "../../../assets/background.svg";
import gasStation from "../../../assets/gas-station.svg";
import usersData from "../../../data/users.json";
import Logo from "../../../shared/components/Logo";
import { useAuth } from "../hooks/useAuth";
import BrandButton from "../../../shared/components/Button";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log(user);
      navigate("/");
    }
  }, [user, navigate]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const user = usersData.users.find(
      (user) =>
        user.username === data.username && user.password === data.password,
    );
    if (user) {
      login(user);
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="flex h-[40rem] w-[70rem] gap-5 overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="flex grow basis-1/2 flex-col p-12">
          <Logo />
          <div className="flex grow flex-col justify-center gap-4">
            <h1 className="text-[28px] font-semibold">Вход в аккаунт</h1>
            <p className="text-[16px]">
              Введите свой логин и пароль для входа в единую систему учета и
              контроля АГНКС
            </p>
            <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
              <Form.Item<FormValues>
                label="Логин"
                htmlFor="username"
                validateStatus={errors.username ? "error" : ""}
                help={errors.username?.message}
              >
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <Input id="username" className="h-[38px]" {...field} />
                  )}
                />
              </Form.Item>
              <Form.Item<FormValues>
                label="Пароль"
                htmlFor="password"
                validateStatus={errors.password ? "error" : ""}
                help={errors.password?.message}
              >
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      id="password"
                      className="h-[38px]"
                      {...field}
                    />
                  )}
                />
              </Form.Item>
              <BrandButton variant="primary">Войти в аккаунт</BrandButton>
            </Form>
          </div>
        </div>
        <div className="relative flex h-full grow basis-1/2 items-center justify-center">
          <img
            src={background}
            alt="Background Image"
            className="absolute h-full w-full object-cover"
          />
          <Select
            className="absolute right-12 top-12 h-9 w-28"
            defaultValue={["ru", "Русский"]}
            suffixIcon={<IoChevronDownOutline className="text-black" />}
            options={[
              {
                label: "Русский",
                value: "ru",
              },
              {
                label: "English",
                value: "en",
              },
            ]}
          />
          <div className="h-[410px] w-[410px]">
            <img
              src={gasStation}
              alt="Gas Station Image"
              className="relative h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
