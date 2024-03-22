const req = require('request');

const getTask = (url) => {
    return new Promise((resolve, reject) => {
        req(url, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
}

const sendTask = (url, solution) => {
    console.log(solution);
    data = { "nonce": solution }
    
    return new Promise((resolve, reject) => {
    
        req.post({
            url,
            json: data
        }, (error, response, body) => {
            if (error) {
            reject(error);
            } else {
            resolve(body);
            }
        })
        //console.log("sent message")

    });
}

module.exports = {getTask , sendTask};