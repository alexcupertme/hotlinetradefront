pm2 stop frontend
pnpm i
npm run build
pm start --name frontend npm -- start
