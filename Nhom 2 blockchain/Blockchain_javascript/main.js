//Thư viện JavaScript về các tiêu chuẩn crypto

const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index; // vị trí của Block trên chain
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data; // dữ liệu khối
    this.hash = this.calculateHash(); // hash của khối trước đố
  }

  calculateHash() {
      return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}
// két nối các khối
class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];// khởi tạo một chuỗi vì chuối đầu k trỏ đến chuỗi nào.
    }

    createGenesisBlock() {
        return new Block(0, "01/10/2017", "Group2 block", "0");
    }
    //trả về chuỗi mới nhất
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    // Kiểm tra xem các khối trỏ đến chính xác các khối trước đó chưa.
    //Nó loops trên tất cả các khối và kiểm tra nếu hash của mỗi khối có chính xác hay k?
    //Nó cũng kiểm tra xem mỗi khối có trỏ đến khối chính xác trước bằng cách so sánh giá trị previousHash trước đó.
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
SnowCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
SnowCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));
// SnowCoin.chain[1].hash = SnowCoin.chain[1].calculateHash();
console.log(JSON.stringify(SnowCoin, null, 4));
console.log('Blockchain valid? ' + SnowCoin.isChainValid());
console.log('Changing a block...');
SnowCoin.chain[1].data = { amount: 100 };
console.log("Blockchain valid? " + SnowCoin.isChainValid());
