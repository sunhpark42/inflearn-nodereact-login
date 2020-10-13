const express = require('express')
const app = express()
const port = 5000

const { User } = require('./models/User')
const bodyParser = require('body-parser')

// bodyParser : client 에서 오는 정보를 서버에서 분석해서 가져올 수 있도록 해줌
// application/x-www-form-urlencded 타입의 데이터를 분석해서 가져올 수 있게 함.
app.use(bodyParser.urlencoded({extended: true}));

// application/json 타입의 데이터를 불러오기 위함.
app.use(bodyParser.json());

// mongoDb를 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sunhpark:abcd1234@boilerplate.ccf2x.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false
    }).then(() => console.log('MongoDB connected...'))
      .catch(err => console.log(err))
// root 디렉토리에 올 때 해당 문구 출력
app.get('/', (req, res) => res.send('Hello world!'))

// 회원가입을 위한 route
app.post('/register', (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client 에서 가져오면,
  // 그것들을 DB 에 넣어줌.

  const user = new User(req.body)

  // 정보를 user 에 저장
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

// app 을 port 에서 실행.
app.listen(port, () => console.log(`Example App listening on port ${port}!`))