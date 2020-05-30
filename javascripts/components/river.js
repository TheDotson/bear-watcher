import utils from '../helpers/utils.js';
import bearData from '../helpers/data/bearData.js';

const buildABear = (obj) => {
  obj = bearData.getBears();
  let domString = '';
  for (let i = 0; i < obj.length; i++) {
    domString += `
    <div class="card w-25 m-3 bearCard">
      <img src="${obj[i].image}" class="card-img-top " alt="${obj[i].name}">
      <div class="card-body">
        <h5 class="card-title">${obj[i].name}</h5>
        <p class="card-text">Fish Attempts: ${obj[i].fishAttempted}</p>
        <p class="card-text">Fish Caught: ${obj[i].fishCaught}</p>
      </div>
      <div class="card-footer">
            <div class="row mb-2">
              <button type="button" class="m-auto btn btn-outline-primary caught-button"><i class="fas fa-fish"></i></button>
              <button type="button" class="m-auto btn btn-outline-secondary attempt-button"><i class="fas fa-times-circle"></i></button>
            </div>
      </div>
    </div>`
  }
  utils.printToDom('#bearCards', domString);
  $("#formName").val("");
  $("#formImage").val("");
}

export default { buildABear };
