module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:nuxt/recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "vue/multi-word-component-names": "off",
        "no-undef": "off",
        "jest/no-commented-out-tests": 0,
        "jest/expect-expect": 0,
        "vue/multiline-html-element-content-newline": [
            2,
            {
                ignores: ["h1", "h2", "a", "span", "strong", "FontAwesomeIcon"],
            },
        ],
        "vue/max-attributes-per-line": [
            2,
            {
                singleline: 5,
                multiline: 1,
            },
        ],
        "vue/singleline-html-element-content-newline": [
            1,
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                ignores: ["pre", "textarea", "span", "div"],
            },
        ],
        "vue/no-v-html": [0],
        "vue/component-name-in-template-casing": [
            "error",
            "PascalCase",
            {
                ignores: [
                    "nuxt",
                    "nuxt-link",
                    "clazy-load",
                    "v-touch",
                    "transition",
                    "component",
                    "portal",
                    "portal-target",
                ],
            },
        ],
        "vue/html-self-closing": 0,
        "vue/html-indent": 0,
        "vue/html-closing-bracket-newline": [
            "error",
            {
                singleline: "never",
                multiline: "always",
            },
        ],
        "no-console": "error",
        "no-debugger": "error",
        "no-eq-null": "error",
        "no-undefined": "error",
        "no-extra-boolean-cast": "error",
        "no-unreachable": "error",
        "no-unsafe-negation": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        eqeqeq: "error",
        "no-alert": "error",
        "no-implicit-coercion": "error",
        "require-await": "error",
        "no-unneeded-ternary": "error",
    },
};
