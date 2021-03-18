const nodemailer = require("nodemailer");
const nodemailMailgun = require("nodemailer-mailgun-transport");
const events = require("events");
const emitter = new events.EventEmitter();

const auth = {
  auth: {
    api_key: "33c90ce253a7a656f42730b5d9954a1c-29561299-07b991ec",
    domain: "sandbox005bc39918814ce6916227f00893fed9.mailgun.org",
  },
};

emitter
  .on("product_created", () => {
    transporter.sendMail(product_created, function (err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Mail one  is send");
      }
    });
  })
  .on("product_deleted", (data) => {
    transporter.sendMail(product_deleted, function (err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Mail two is send");
      }
    });
  });

let transporter = nodemailer.createTransport(nodemailMailgun(auth));

const product_created = {
  from: "Excited User <me@samples.mailgun.org>",
  to: "hristijanpetkovski@hotmail.com",
  subject: "Oh no! Product deleted!",
  text: "Don't over-React.js",
};

const product_deleted = {
  from: "Excited User <me@samples.mailgun.org>",
  to: "hristijanpetkovski@hotmail.com",
  subject: "Oh no! Product deleted!",
  text: "This is content for the product created event.",
};

emitter.emit("product_created", {
  from: "Excited User <me@samples.mailgun.org>",
  to: "hristijanpetkovski@hotmail.com",
  subject: "New product!",
  text: "This is content for the product created event.",
});

emitter.emit("product_deleted", {
  from: "Excited User <me@samples.mailgun.org>",
  to: "hristijanpetkovski@hotmail.com",
  subject: "Oh no! Product deleted!",
  text: "Don't over-React.js",
});
