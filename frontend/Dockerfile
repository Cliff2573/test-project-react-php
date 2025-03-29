# 使用 Node.js 18 版本
FROM node:18

# 設定工作目錄
WORKDIR /app

# 複製 package.json 進去，並安裝 npm 套件
COPY package.json package-lock.json ./
RUN npm install

# 複製所有前端程式碼進去
COPY . .

# 預設啟動指令
CMD ["npm", "start"]