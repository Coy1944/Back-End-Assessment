const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/fortune", (req, res) => {
  const fortune = ["Bet on the Utah Jazz to win it all this year!",
					 "Contact an old fling to see where it may go!",
					 "Bet on black or red? bet on black.",
           "Go to DevMountain and change your carrerr",
           "Watch out for big dogs today.",
          ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/success", (req, res) => {
  const success = ["Write in your journal everyday!",
					 "Be sure to get exercise and sunlight!",
					 "Be sure to not critize others.",
           "Practice self love everyday",
           "Take time to enjoy nature.",
          ];

  // choose random compliment
  let random1Index = Math.floor(Math.random() * success.length);
  let randomSuccess = success[random1Index];

  res.status(200).send(randomSuccess);
  
});

app.get("/api/goal", (req, res) => {
  const goal = ["Exercise for 30",
					 "Go out and do something nice for someone!",
					 "Read one book a month",
           
          ];

  // choose random compliment
  let random2Index = Math.floor(Math.random() * goal.length);
  let randomGoal = goal[random2Index];

  res.status(200).send(randomGoal);
  
});

app.get("/api/goal2", (req, res) => {
  const goal2 = ["Join a Facebook group of your choice",
					 "Start a new hobby and research how to do it!",
					 "Set goal to do meditation everyday for 3 mins",
           
          ];

  // choose random compliment
  let random3Index = Math.floor(Math.random() * goal2.length);
  let randomGoal2 = goal2[random3Index];

  res.status(200).send(randomGoal2);
  
});

app.post('/http://localhost:4000/api/post/', (req, res) => {
  let buttons = {
    "red": "Red Button Clicked",
    "green": "Green Button Clicked",
    "blue": "Blue Button Clicked"
  }
  let reqButton = req.query.button;
  res.send(buttons[reqButton])
})


// let deleteGoal = 'goal'
// app.delete("/api/goal", deleteGoal)

// deleteGoal: (req, res) => {
//   let index = goal.findindex(elem => elem.id === +req.params.id)
//   goal.splice(index,1)
//   res.status(200).send(goal)
// }

// app.post('/api/goal', goalButton)
// goalButton: (req, res) =>
// let { goal1, goal2, goal3} = req.body
// let newGoal = {
//   goal1,
//   goal2,
//   goal3
// }
// goal.push(newGoal)
// res.status(200).send(goal)


app.listen(4000, () => console.log("Server running on 4000"));
