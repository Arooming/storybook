/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // NotoSans, Roboto, Inter 등의 폰트를 사용한다면 `@fontsource`에서 설치하는게 가장 빠름 + 번들러 크기도 작음
    // `@fontsource`: 다양한 웹 폰트들을 npm 패키지로 해둔 것
    // 가장 자주 쓰이는 것들 위주로 설정할 것 ! 
    // 어차피 fontWeight나 lineHeight 같은 것들은 여기서 정의한 걸 override한 후, inline style로 정의한 내용들로 설정됨
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      xl: ["20px", "30px"],
      "2xl": [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      primary: "#1d2745",
      secondary: "#1de5d4",
      tertiary: "#f52c40",
      white: "#ffffff",
      mono100: "#f1f1f1",
      mono200: "#bebebe",
      mono300: "#d6d7d9",
      error: "#d01e1e",
      social: "#395997",
    },
  },
  plugins: [],
};
