module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:vue/recommended",
        "prettier"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2015,
        "parser": 'babel-eslint',
        "sourceType": 'module',
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'node_modules/@vue/cli-service/webpack.config.js',
            },
            node: {
                extensions: ['.js', '.jsx', '.vue'],
                moduleDirectory: ['node_modules', 'src'],
            },
            alias: {
                map: [['@', './src']],
                extensions: ['.js', '.vue', '.json'],
            },
        },
    },
    "plugins": [
        "vue",
        "import"
    ],
    "rules": {
        "import/no-unresolved": "error",
        "import/extensions": [
            "error",
            "always",
            {
                "js": "never",
                "vue": "never"
            }
        ]
    }
}
