/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp3|wav)$/, // Define os tipos de arquivo que o Webpack deve processar
        use: {
          loader: 'file-loader', // Usa o file-loader para lidar com arquivos binários
          options: {
            publicPath: '/_next/static/sounds/', // Define o caminho público para servir os arquivos
            outputPath: 'static/sounds/', // Define o caminho de saída
            name: '[name].[hash].[ext]', // Nomeia o arquivo com hash para evitar conflitos de cache
          },
        },
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;