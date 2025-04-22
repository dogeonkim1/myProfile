import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // react/no-unescaped-entities 규칙을 비활성화
      "react/no-unescaped-entities": "off",

      // react-hooks/exhaustive-deps 경고를 활성화
      "react-hooks/exhaustive-deps": "warn",  // 또는 "error"

      // 사용되지 않는 변수에 대한 경고를 강제로 활성화
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
