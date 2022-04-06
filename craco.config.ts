const path = require("path");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/@core/assets"),
      "@components": path.resolve(__dirname, "src/@core/components"),
      "@layouts": path.resolve(__dirname, "src/@core/layouts"),
      "@store": path.resolve(__dirname, "src/redux"),
      "@styles": path.resolve(__dirname, "src/@core/scss"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@utils": path.resolve(__dirname, "src/utility/Utils"),
      "@hooks": path.resolve(__dirname, "src/utility/hooks"),
    },
    configure: {
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
      },
      resolve: {
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
      },
      module: {
        rules: [
          {
            test: /\.(sass|scss)$/i,
            use: [
              {
                loader: "sass-loader",
                options: {
                  sassOptions: { includePaths: ["node_modules", "src/assets"] },
                },
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: "file-loader",
              },
            ],
          },
          {
            test: /\.(ts|tsx)?$/,
            use: ["ts-loader"],
            exclude: /node_modules/,
          },
        ],
      },
    },
  },
};
