// Wczytujemy Express
const express = require("express");
const mongo = require("mongodb");

// Tworzymy serwer
const app = express();

app.use(express.json());
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

// Ustawienie nasłuchiwania
const myPort = process.env.port || 4000;

const dbName = "SkyNote";
const url =
  "mongodb+srv://userMaster22:nIo0VqrVPqEWaxgF@cluster0.lg8ndpz.mongodb.net/test";
const client = new mongo.MongoClient(url);

app.listen(myPort, "127.0.0.1", () => {
  console.log("Nasłuchujemy na porcie: " + myPort);
});

// Jeśli chcemy obsłużyć polecenie get (zapytanie od usera)
// (link strony, callback)
// - req - zapytanie od klienta
// - res - odpowiedź serwera

app.get("/hi", (req, res) => {
  console.log("Przykład");
  res.json({
    a: "test",
  });
});

// Pobieranie całej kolekcji "LibraryStars" - wszystkie gwiazdy
app.get("/library-stars", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("LibraryStars");

  const allStars = await collection.find({}).toArray();
  res.header("Access-Control-Allow-Origin", "*");

  await res.json({
    data: allStars,
  });

  //client.close();
});

// Dodawanie nowej gwiazdy do bazy
app.post("/library-stars/add", async (req, res) => {
  await client.connect();
  console.log("Connected successfully to server - create new star");
  console.log(req.body);
  const db = client.db(dbName);
  const collection = db.collection("LibraryStars");

  const { name, latinName, linkToPhoto, constellation } = req.body;
  await collection.insertOne({
    name,
    latinName,
    linkToPhoto,
    constellation,
    description: req.body.description ? req.body.description : null,
  });

  res.header("Access-Control-Allow-Origin", "*");
  await res.json({
    status: "Ok",
  });

  client.close();
});

// Pobieranie całej kolekcji "ObserveList" - wszystkie obserwacje
app.get("/observation-list", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("ObserveList");

  const allObservation = await collection.find({}).toArray();
  res.header("Access-Control-Allow-Origin", "*");

  await res.json({
    data: allObservation,
  });

  //client.close();
});

// Pobieranie wybranej obserwacji na podstawie parametru id
app.get("/observation-list/:id?", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("ObserveList");
  const id = req.params.id;
  const choosedObservation = await collection
    .find({ _id: mongo.ObjectId(id) })
    .toArray();
  res.header("Access-Control-Allow-Origin", "*");

  await res.json({
    data: choosedObservation,
  });

  //client.close();
});

// Dodawanie nowej obserwacji do bazy
app.post("/observe/add", async (req, res) => {
  await client.connect();
  console.log("Connected successfully to server - create new observe");
  console.log(req.body);
  const db = client.db(dbName);
  const collection = db.collection("ObserveList");

  const { date, location, weatherConditions, visibilityStars } = req.body;
  await collection.insertOne({
    date,
    location,
    weatherConditions,
    visibilityStars,
  });

  res.header("Access-Control-Allow-Origin", "*");
  await res.json({
    status: "Ok",
  });

  client.close();
});

// Na każdej metodzie app wykona przy linku '/' te funkcje
app.all("/", (req, res) => {});
