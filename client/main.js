document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

// Step 1: Grab the element from HTML
  const fortuneButton = document.getElementById('fortuneButton');
  const nameButton = document.getElementById('nameButton');
  const nameInput = document.getElementById('nameInput');
  const indexButton = document.getElementById('indexButton');
  const indexInput = document.getElementById('indexInput');
  const form = document.querySelector('form');
  const newNameInput = document.getElementById('newNameInput');
  const newNameIndex = document.getElementById('newNameIndex');
  const submitForm = document.getElementById('submitForm');
  const successButton = document.getElementById('successButton');
  const goalButton = document.getElementById('goalButton');


// STEP 2: Write out the funtionality for my element
  function getFortune() {
      axios.get('http://localhost:4000/api/fortune')
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
  };

  function createName() {
    const newName = nameInput.value;

    const body = {
        newName
    };
    axios.post('http://localhost:4000/api/name', body)
        .then((res) => {
            let name = res.data[res.data.length - 1];
            alert(`You just registered ${name}!`);
            console.log(res.data);

            nameInput.value = ``;
        })
  }

function deleteName() {
    const newIndex = indexInput.value;

    axios.delete(`http://localhost:4000/api/delete/${newIndex}`)
    .then((res) => {
            alert('You have successfully delted a user.');
            console.log(res.data);
    })
    .catch((err) => {
        console.log(err.response.data);
    })

}

function editName() {
    const nameChange = newNameInput.value;
    const indexChange = newNameIndex.value;

    const body1 = {
        nameChange
    };
    axios.put(`http://localhost:4000/api/edit/${indexChange}`, body1)
    .then((res) => {
        alert(`Your users array now contains ${res.data}`);
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
}

function getSuccess() {
    axios.get('http://localhost:4000/api/success')
    .then((res) => {
      console.log(res.data);
      alert(res.data);
    })
};

function getGoal() {
    axios.get('http://localhost:4000/api/goal')
     .then((res)  => {
          console.log(res.data);
          alert(res.data);
     })
  };



// STEP 3: Add the event listener to my element
fortuneButton.addEventListener('click', getFortune);
nameButton.addEventListener('click', createName);
indexButton.addEventListener('click', deleteName);
submitForm.addEventListener('submit', editName);
successButton.addEventListener('click', getSuccess);
goalButton.addEventListener('click', getGoal);