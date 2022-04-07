pm2 stop frontend
pnpm i
npm run build
pm2 start --name frontend serve -- -s build
