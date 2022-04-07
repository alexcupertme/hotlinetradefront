forever stop frontend
pnpm i
npm run build
forever start -c "npm run start" ./ --uid "frontend"
