## The Voting App

### Cách cài đặt

```bash
# client
cd client
npm install
npm run dev

# server
cd server
npm install
cp .env.example .env
npm run serve:dev

# local blockchain
npm install -g ethereumjs-testrpc
testrpc

# truffle
cd server/app/Truffle
truffle migrate
```