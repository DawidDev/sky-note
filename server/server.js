// Wczytujemy Express
const express = require("express");
const mongo = require("mongodb");
const cors = require("cors");

// Tworzymy serwer
const app = express();

// Ustawienie nasłuchiwania
const myPort = process.env.port || 4000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const dbName = "SkyNote";
const url =
  "mongodb+srv://userMaster22:nIo0VqrVPqEWaxgF@cluster0.lg8ndpz.mongodb.net/test";
const client = new mongo.MongoClient(url);

app.listen(myPort, "127.0.0.1", () => {
  console.log("Listening at port: " + myPort);
});

// Pobieranie całej kolekcji "LibraryStars" - wszystkie gwiazdy
app.get("/library-stars", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("LibraryStars");

    const allStars = await collection.find({}).toArray();
    res.header("Access-Control-Allow-Origin", "*");

    await res.json({
      data: allStars,
    });
  } catch (error) {
    console.log(error);
    console.log("Error with downloading all stars data");
  }
});

// Dodawanie nowej gwiazdy do bazy
app.post("/library-stars/add", async (req, res) => {
  try {
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
  } catch (error) {
    console.log("Error with adding new star", error);
  }

  client.close();
});

// Aktualizowanie zmian w gwieździe
app.post("/library-stars/data/update/:id?", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected successfully to server - update star");
    const db = client.db(dbName);
    const collection = db.collection("LibraryStars");

    const { name, latinName, linkToPhoto, constellation, description } =
      req.body;
    const id = req.params.id;
    await collection.updateOne(
      { _id: mongo.ObjectId(id) },
      {
        $set: {
          name: name,
          latinName: latinName,
          linkToPhoto: linkToPhoto,
          constellation: constellation,
          description: description,
        },
      },
      { upsert: false }
    );
  } catch (error) {
    console.log("Error with update data choosedstar", error);
  }

  client.close();
});

// Pobieranie wybranej gwiazdy na podstawie parametru id
app.get("/library-stars/data/:id?", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("LibraryStars");
    const id = req.params.id;
    const choosedStar = await collection
      .find({ _id: mongo.ObjectId(id) })
      .toArray();
    res.header("Access-Control-Allow-Origin", "*");

    await res.json({
      data: choosedStar,
    });
  } catch (error) {
    console.log("Error with downloading choosed star");
  }

  //client.close();
});

// Usuwanie z bazy wybranej gwiazdy na podstawie ID
app.delete("/library-stars/data/delete/:id?", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("LibraryStars");
    const id = req.params.id;
    const deleteResult = await collection.deleteMany({
      _id: mongo.ObjectId(id),
    });
  } catch (error) {
    console.log("Error during delete star");
  }

  //client.close();
});

// Pobieranie całej kolekcji "ObserveList" - wszystkie obserwacje
app.get("/observation-list", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("ObserveList");

    const allObservation = await collection.find({}).toArray();
    res.header("Access-Control-Allow-Origin", "*");

    await res.json({
      data: allObservation,
    });
  } catch (error) {
    console.log("Error with downloading observation list data");
  }

  client.close();
});

// Pobieranie wybranej obserwacji na podstawie parametru id
app.get("/observation-list/:id?", async (req, res) => {
  try {
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
  } catch (error) {
    console.log("Error during downloading choosed observation");
  }

  //client.close();
});

app.delete("/observation-list/delete/:id?", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("ObserveList");
  const id = req.params.id;
  const deleteResult = await collection.deleteMany({ _id: mongo.ObjectId(id) });
  res.header("Access-Control-Allow-Origin", "*");

  //client.close();
});

// Dodawanie nowej obserwacji do bazy
app.post("/observe/add", async (req, res) => {
  try {
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
  } catch (error) {
    console.log("Error with adding new star");
  }
  client.close();
});


//app.all("/", (req, res) => {});
