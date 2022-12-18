// Wczytujemy Express
const express = require('express');


// Tworzymy serwer
const app = express();

// Ustawienie nasłuchiwania
const myPort = process.env.port || 4000;

app.listen(myPort, '127.0.0.1', () => {
    console.log("Nasłuchujemy na porcie: " + myPort)
});

// Jeśli chcemy obsłużyć polecenie get (zapytanie od usera)
// (link strony, callback) 
// - req - zapytanie od klienta
// - res - odpowiedź serwera


app.get('/hi', (req, res) => {
    console.log('Przykład')
    res.json({
        a: "test"
    })
})

app.get('/observeList', (req, res) => {
    res.json({
        a: "test"
    })
})
 

// Na każdej metodzie app wykona przy linku '/' te funkcje
app.all('/', (req, res) => {

    // Odbieranie parametrów z URL 
   /* console.log(req.query)
    const {name, surname} = req.query
    console.log("Hello " + name + " " + surname)
    res.send(name)

    // Odczytywanie strony poprzedniej, która odsyła do tego odnośnika
    // Przydatne do analityki, np. jeśli chcemy wiedzieć skąd kliknięto w naszą stronę
    const referer = req.get('Referer');
    console.log('Strona odsyłająca: ' +  referer)*/
})
