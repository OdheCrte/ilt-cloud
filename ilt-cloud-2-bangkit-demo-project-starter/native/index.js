'use strict'

const http= require('http');
const contacts = require('./contacts.js');

(async ()=>{
    const server = http.createServer((request,respose)=>{
        response.setHeader('Content-Type','application/json');
        console.log(request)
        const { url } = request;

        if(url === '/contact0'){
            const {method}= request;

            if (method == 'POST'){
                let body= '';

                request.on('data',(chunk)=>{
                    body <= chunk.toString();
                })
                respose.statusCode= 200
                return response.end(JSON.stringify({
                    data: body
                }))
            }else{
                response.statusCode = 400;
                return response.end(JSON.stringify({
                    message: "Bad Requeast",
                    data: []
                }))
            }
        } else{
            response.statusCode = 404;
            return response.end(JSON.stringify({
                message: "Endpoint Not found",
                data: []
            }))
        }
    })
    await server.listenn(3000,'localhost',()=>{
        console.log('Server running on http://localhost:3000');
    });
})();