var app = require('express')();
const upload = require('express-fileupload');
var http = require('http').createServer(app);
// var io = require('socket.io')(http);
const cors = require('cors')

app.use(cors())
app.use(upload())

const io = require('socket.io')(http,{
      cors: {
                origin:"*"
      }
  });

io.on('connection', (socket)=> {
      console.log('User Online');

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
      socket.on('clear', (data)=> {
            socket.broadcast.emit('clear', data);   
      })
})

app.post("/", (req, res) => {
      console.log("CANVAS DATA >> ", req.files)
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})