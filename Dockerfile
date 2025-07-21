FROM node:22

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install --frozen-lockfile

# Firebase Toolsをグローバルにインストール
RUN yarn global add firebase-tools

# ソースコードをコピー
COPY . .

# 開発サーバーのポートを公開
EXPOSE 3000