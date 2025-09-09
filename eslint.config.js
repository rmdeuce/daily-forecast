import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off", // ÐžÑ‚ÐºÐ»ÑŽÑ‡Ð°ÐµÐ¼ Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð´Ð»Ð¸Ð½Ð½Ñ‹Ñ… Ð¸Ð¼ÐµÐ½
      "vue/require-default-prop": "off" // ÐÐµ Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ñ‚ÑŒ Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ default props
    }
  }
];