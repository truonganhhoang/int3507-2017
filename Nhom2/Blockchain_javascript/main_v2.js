const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;//thời gian khối được thêm
    this.data = data;// dữ liệu của khối
    this.hash = this.calculateHash();
    this.nonce = 0; // Số lần lặp lại trước khi tìm được khối hợp lệ.
  }
 //Tính Hash lấy trị số của block hash trước đó, timestamp, block data, and nonce như là giá trị đầu vào
  calculateHash() {
      return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
  }
 // Tăng nonce cho đến khi có giá trịnh hợp lệ
  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
        this.nonce++;
        this.hash = this.calculateHash();
    }

    console.log("BLOCK MINED: " + this.hash);
    console.log("NONCE: " + this.nonce);
  }
}


class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2; 
    }

    createGenesisBlock() {
        return new Block(0, "01/10/2017", "Group2 block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

let SnowCoin = new Blockchain();
console.log('Mining block 1...');
SnowCoin.addBlock(new Block(1, "20/10/2017", { amount: 4 }));

console.log('Mining block 2...');
SnowCoin.addBlock(new Block(2, "20/10/2017", { amount: 8 }));
