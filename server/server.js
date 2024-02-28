let express = require("express");
let app = express();
let cors = require("cors");
let nodemailer = require("nodemailer");
let port = 8080;
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
// let transport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "fakirmuzaffar771@gmail.com",
//         pass: "Muzaffar@1"
//     }
// });

app.post("/Contact", (req, res) => {
    let transport = nodemailer.createTransport({
        service: "gmail",
        port: 8000,
        auth: {
            user: "fakirmuzaffar771@gmail.com",
            pass: "fiuuynecdqzarlln"
        }
    });
    let opt = {
        from: `${req.body.email}`,
        to: "fakirmuzaffar771@gmail.com",
        subject: `${req.body.sub}`,
        text: `${req.body.body}`
    }
    transport.sendMail(opt, (data, err) => {
        if (data) {
        //    console.log(data)

        }
        else {
          //  console.log(err)
        }
    })
    console.log(req.body)

})

app.listen(port);
