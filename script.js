
const http = require('http');
const helper = require('./helper.js');
const { get } = require('request');
const crypto = require('crypto');

const fs = require('fs');
const problemURL = 'https://hackattic.com/challenges/mini_miner/problem?access_token=bca4271990f41bef';
const sendingURL = 'https://hackattic.com/challenges/mini_miner/solve?access_token=bca4271990f41bef';

 
    

const mineBlock = (block, difficulty) => {
    let nonce = 0;
    let prefix = '0'.repeat(Math.ceil(difficulty/4));
    hash = '';  
    while (true) {
        block['nonce'] = nonce;
        b = JSON.stringify(block);

        //console.log(block);
        //console.log(nonce);
        let hash = crypto.createHash('sha256').update(b).digest('hex');
        //console.log(hash);
        //let hash_bin = '';
        
        //console.log(hash_bin);
        //console.log(hash);
        //console.log(hash);
        if (hash.startsWith(prefix)) {
            console.log(b)
            console.log(hash)
            return nonce;
        }
        nonce++;
    }
}


const data = helper.getTask(problemURL).then((data) => {
    const { block, difficulty, transactions } = data;
    //const prefix = '0'.repeat(difficulty);
    d = {"data" : block['data'] , 'nonce' : null}
    
    const nonce = mineBlock(d, difficulty);

    helper.sendTask(sendingURL, nonce).then((data) => {
        console.log(data);})
        .catch((error) => {
            console.log(error);
        });
   
    
    
    })

