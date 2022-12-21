// Wczytujemy Express
const express = require("express");
const mongo = require("mongodb");


// Tworzymy serwer
const app = express();

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
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("LibraryStars");

  const allStars = await collection.find({}).toArray();


  res.header('Access-Control-Allow-Origin', '*');
  await res.json({
    data: allStars
  });

  // client.close();
});

app.get("/library-stars/add", async (req, res) => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("LibraryStars");
  await collection.insertOne({
    id: 1,
    date: "test",
    title: "Gwiazda zwykła",
  });

  await res.json({
    a: "test",
  });

  client.close();
});

// Na każdej metodzie app wykona przy linku '/' te funkcje
app.all("/", (req, res) => {});
