import { Button, Input, InputWrapper, LoadingOverlay } from "@mantine/core";
import { IconPencil, IconMail } from "@tabler/icons";
import { useForm } from "react-hook-form";
import { useAddAuthorMutation } from "../generated/apollo";
import { AuthInput } from "../generated/types";

export const Content = () => {
  const [addAuthor, { loading }] = useAddAuthorMutation();
  const { register, handleSubmit } = useForm<AuthInput>();
  const onSubmit = (data: AuthInput) => {
    addAuthor({
      variables: { payload: { ...data, id: parseInt(String(data.id)) } },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoadingOverlay visible={loading} />
      <div className="max-w-2xl mx-auto py-4 space-y-4">
        <InputWrapper
          label="First name"
          description="First name author information profile"
        >
          <Input
            icon={<IconPencil size={14} />}
            placeholder="FirstName"
            {...register("firstName")}
          />
        </InputWrapper>

        <InputWrapper
          label="Last name"
          description="last name author information profile"
        >
          <Input
            icon={<IconPencil size={14} />}
            placeholder="FirstName"
            {...register("lastName")}
          />
        </InputWrapper>

        <InputWrapper label="Email" description="Email information profile">
          <Input
            icon={<IconMail size={14} />}
            placeholder="Email"
            type="number"
            {...register("id")}
          />
        </InputWrapper>

        <div className="text-right">
          <Button type="submit" className=" my-4">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};
