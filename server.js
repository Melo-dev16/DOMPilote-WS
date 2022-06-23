import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port:8080});

wss.on('connection', client => {
    client.on('message', (message,isBinary) =>{
        let mess = JSON.stringify(message);

        if(Object.keys(mess)[0] != "type"){
            [...wss.clients].filter(c => c !== client).forEach(c => c.send(isBinary ? message.toString() : message));
        }
        
    })
})