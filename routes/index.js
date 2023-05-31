var express = require('express');
var router = express.Router();

// On crée la route qui va nous permettre de récupérer les articles de la source "the-verge"
router.get('/articles', function (req, res, next) {
  fetch(
    `https://newsapi.org/v2/everything?sources=the-verge&apiKey=${process.env.MY_API_KEY}`
  )
    .then((response) => response.json()) // On récupère la réponse de l'API au format JSON
    .then((data) => {
      // On récupère les données de la réponse
      if (data.status === 'ok') {
        // Si le status de la réponse est "ok" on renvoie les articles à notre front
        res.json({ articles: data.articles }); // On renvoie les articles à notre front au format JSON
      }
    });
});

module.exports = router;
