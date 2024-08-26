// 공식문서를 따라하면 에러나는 경우가 좀 있음 ! 차라리 여기 있는 애들을 복사해서 가공하는게 더 나음
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components/Button";

// 버튼 컴포넌트의 메타 정보를 나타내는 부분
const meta = {
  // 이 컴포넌트가 존재하는 경로(수정하면 경로 바뀜)
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // 응집도를 높이고 한 곳에서 관리하기 위해서 "description"으로 argType 정의하는게 좋음
  argTypes: {
    backgroundColor: { control: "color", description: "버튼의 배경 컬러 " },
  },
  args: { onClick: fn() },
  // 메타 정보는 버튼이 받는 prop들을 정의함
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
