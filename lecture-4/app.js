const events = require("events");
const emitter = new events.EventEmitter();

const reports = [
  {
    year: 2021,
    aprroved: false,
  },
  {
    year: 2022,
    aprroved: false,
  },
  {
    year: 2023,
    aprroved: false,
  },
  {
    year: 2025,
    aprroved: true,
  },
];

const deca = [
  {
    pol: "maski",
    godini: 15,
    ime: "Vlado",
  },
  {
    pol: "zenski",
    godini: 5,
    ime: "Maja",
  },
  {
    pol: "zenski",
    godini: 45,
    ime: "Jasmina",
  },
  {
    pol: "maski",
    godini: 20,
    ime: "Janko",
  },
  {
    pol: "maski",
    godini: 8,
    ime: "Zoran",
  },
  {
    pol: "zenski",
    godini: 23,
    ime: "Hristina",
  },
];

emitter
  .on("mkd_in_eu", (data) => {
    console.log(`Site pakuvajte kuferite i si odime  vo ${data.year}`);
  })
  .on("confirmation_for_pizza", (data) => {
    console.log(
      `Vasata naracka e ispratena za nekolku minuti e na vasata adresa  (${data.address})`
    );
  })
  .on("reset_password", (data) => {
    console.log(
      `Vasiot password so username : ${data.username} i kod :${data.code} e uspesno restartiran`
    );
  })
  .on("pay_bill", (data) => {
    console.log(
      `Izvrsivte uplata od ${data.price} za smetka broj: ${data.billNumber}`
    );
  });

reports.forEach((report) => {
  if (report.aprroved == true) {
    emitter.emit("mkd_in_eu", {
      year: report.year,
    });
  }
});

deca.forEach((deca) => {
  const polnoletni = [];
  if (deca.godini < 18) {
  }
});

// logika za kupuvanje kniga

// logika za naracka na pizza

emitter.emit("confirmation_for_pizza", {
  user: "Hristijan",
  pizza: "Margarita",
  address: "Nereska br.50",
});

// logika zaa resetiranje password

emitter.emit("reset_password", {
  username: "hristijanP",
  code: "205674",
});

// logika plakanje smetka

emitter.emit("pay_bill", {
  billNumber: "123123123",
  price: "32321 denari",
});

emitter.emit("product_created", {
  subject: "New product!",
  content: "This is content for the product created event.",
});
