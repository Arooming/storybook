// 공식문서를 따라하면 에러나는 경우가 좀 있음 ! 차라리 여기 있는 애들을 복사해서 가공하는게 더 나음
import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/Label";

// 컴포넌트의 메타 정보를 나타내는 부분
const meta = {
  // 이 컴포넌트가 존재하는 경로(수정하면 경로 바뀜)
  title: "Text/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // 응집도를 높이고 한 곳에서 관리하기 위해서 "description"으로 argType 정의하는게 좋음
  argTypes: {
    htmlFor: { control: "text", description: "label의 for 속성" },
    children: { control: "text", description: "label의 내용" },
  },
  // 메타 정보는 label이 받는 prop들을 정의함
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalt: Story = {
  args: {
    htmlFor: "username",
    children: "이메일",
  },
};
