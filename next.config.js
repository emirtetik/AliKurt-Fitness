/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  webpack: (config, { isServer }) => {
    // Custom font dosyalarının yüklenmesi
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
        publicPath: '/_next/static/', // Font dosyalarının publicPath'i
        outputPath: 'static/', // Font dosyalarının çıkış yolu
        esModule: false,
      },
    });
     // Sunucu tarafında (SSR) font dosyalarının yüklenmesi
     if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
module.exports = nextConfig
