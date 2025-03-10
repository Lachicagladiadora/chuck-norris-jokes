const containElement = document.getElementById("contain");
const textElement = document.getElementById("phrase");
const imgElement = document.getElementById("chuck-norris");
const dialogElement = document.getElementById("dialog");
const dialogQueueElement = document.getElementById("dialogue-queue");

const chuckNorrisUrl = "https://api.chucknorris.io/jokes/random";

// solicitud GET utilizando la API fetch
const joke = () => {
  textElement.remove;

  const charge = "Loading ...";

  textElement.innerText = charge;
  dialogQueueElement.classList.add('visible'),

    fetch(chuckNorrisUrl)
      .then((response) => response.json())
      .then((json) => {
        return !json.value
          ? (
            textElement.innerText = charge
          )
          : (
            textElement.innerText = json.value,
            dialogQueueElement.classList.remove('visible')
          );
      });
};

imgElement.addEventListener("click", joke);
dialogElement.addEventListener("click", joke);
dialogQueueElement.addEventListener("click", joke);
