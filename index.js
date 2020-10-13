const express = require('express')
const app = express()
const port = 5000

// mongoDb를 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sunhpark:abcd1234@boilerplate.ccf2x.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false
    }).then(() => console.log('MongoDB connected...'))
      .catch(err => console.log(err))
// root 디렉토리에 올 때 해당 문구 출력
app.get('/', (req, res) => res.send('Hello world!'))

// app 을 port 에서 실행.
app.listen(port, () => console.log(`Example App listening on port ${port}!`))