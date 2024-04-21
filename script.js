// Fonction pour générer les articles
function generateArticle(nomProduit, prix, image, description) {
  const article = document.createElement('div');
  article.classList.add('article');
  article.onclick = function() {
    openArticle(nomProduit, prix, image, description);
  };
  article.innerHTML = `
    <img src="${image}" alt="${nomProduit}">
    <div class="article-info">
      <h2>${nomProduit}</h2>
      <p>Prix: ${prix}</p>
    </div>
  `;
  return article;
}


// Fonction pour ouvrir les détails de l'article
function openArticle(nomProduit, prix, image, description) {
  const mainTitle = document.getElementById("mainTitle");
  const articlesContainer = document.getElementById("articlesContainer");
  const articleDetails = document.getElementById("articleDetails");
  mainTitle.style.display = "none"; // Cache le titre "Articles"
  articlesContainer.style.display = "none"; // Cache les articles
  articleDetails.innerHTML = `
    <div class="article-details">
      <img src="${image}" alt="${nomProduit}" style="max-width: 400px; margin-bottom: 20px;">
      <div style="display: inline-block; vertical-align: top; margin-left: 20px;">
        <h2>${nomProduit}</h2>
        <p><b>Prix:</b> ${prix}</p>
        <p>${description}</p>
        <!-- Bouton PayPal -->
        <div id="paypal-button-container"></div>
      </div>
    </div>
  `;
  articleDetails.style.display = "block"; // Affiche les détails de l'article

  // Créer le bouton PayPal avec le prix de l'article
  paypal.Buttons({
      createOrder: function(data, actions) {
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: prix,
                      currency_code: 'EUR'
                  }
              }]
          });
      },
      onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
              alert('Transaction réussie !');
          });
      },
      onError: function(err) {
          console.error(err);
      }
  }).render('#paypal-button-container');
}

// Générer les articles
const articlesContainer = document.getElementById("articlesContainer");
articlesContainer.appendChild(generateArticle("Lightsaber with multi color", "44.99€", "lightsaber_image_1.jpeg", "You want to become a jedi or a sith, here is a lightsaber with more than ten blade colors (RGB) <br> Vous souhaitez devenir un jedi ou un sith, voici un sabre laser avec plus de dix couleurs de lame (RVB)  <br> Size: full length 80CM/handle 25CM (diameter 30MM)/sword body about 60CM <br>Taille : pleine longueur 80CM/poignée 25CM (diamètre 30MM)/corps de l'épée environ 60CM"));
articlesContainer.appendChild(generateArticle("The most powerful water gun", "54.99€", "the_most_powerful_water_gun_image_1.jpeg", "Here is one of the most powerful water guns in the world,<br> with its futuristic shape and incredible power. Perfect for water fights <br> Voici l'un des pistolets à eau les plus puissants au monde, <br>avec sa forme futuriste et sa puissance incroyable. Parfait pour les combats d'eau <br> The battery and its charger are included <br> La batterie et son chargeur sont inclus"));

articlesContainer.appendChild(generateArticle("Super balle à effet", "24.99€", "super_effect_ball_image_2.jpeg", "You want to make shots with superb effects like your favorite footballers, here is a ball that produces very fun effects <br>Vous souhaitez réaliser des clichés avec de superbes effets comme vos footballeurs préférés, <br>voici un ballon qui produit des effets très amusants "));
articlesContainer.appendChild(generateArticle("Glock water gun", "24.99€", "Glock_water_gun_image_1.png", "Here is an easy to carry water gun with superb power. Very funny <br> Voici un pistolet à eau facile à transporter et doté d'une superbe puissance. Très drôle <br> The battery and its charger are included <br> La batterie et son chargeur sont inclus"));
articlesContainer.appendChild(generateArticle("Spiderman Webshooter", "49.99€", "spiderman_webshooter_image1.jpeg", "Do you like Spiderman? Here is his Webshooter which launches real projectiles <br> Aimez-vous Spiderman? Voici son Webshooter qui lance de vrais projectiles <br> Color : black / couleur : noir"));
articlesContainer.appendChild(generateArticle("Submachine water gun", "49.99€", "submachine_water_gun.jpeg", "Here is an assault rifle for the best water fights between friends <br> Voici un fusil d'assaut pour les meilleurs combats d'eau entre amis <br> The battery and its charger are included <br> La batterie et son chargeur sont inclus"));
articlesContainer.appendChild(generateArticle("Balle météore rebondissante ", "2.99€", "Balle_météore_rebondissante.png", ""));
