// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {
  shopName: "Quenchy Drinks",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
  shopLocations: [
    {
      city: "London",
      manager: "Olivia Brown",
      address: "10 Oxford Street, London W1D 1BS"
    },
    {
      city: "Manchester",
      manager: "James Wilson",
      address: "55 Market Street, Manchester M1 1WR"
    },
    {
      city: "Birmingham",
      manager: "Sophie Patel",
      address: "22 New Street, Birmingham B2 4RQ"
    },
  ]
};



// Handle the main routes

router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
}); 

router.get('/search_result', (req, res) => {
  res.json(req.query);
});

router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req, res) => { 
  if (req.body.email.indexOf('@') === -1) {
    res.send('Invalid email address. Please include an "@" symbol.');
  } else {
    res.send('Hello ' + req.body.first + ' ' + req.body.last + ', you are now registered! We will send an email to you at ' + req.body.email + '.');
  }
});

router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

router.post("/survey_submitted", (req, res) => {
  const { first, last, email, age, category, student } = req.body;
  res.render("survey_result.ejs", {
    first,
    last,
    email,
    age,
    category,
    student: student ? "Yes" : "No",
    shopName: shopData.shopName
  });
});

// Export the router object so index.js can access it
module.exports = router;
