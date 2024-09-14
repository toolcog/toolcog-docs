//import config from "./repos/toolcog/prettier.config.js";

export default {
  //...config,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        astroAllowShorthand: true,
      },
    },
  ],
};
