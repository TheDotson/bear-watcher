import utils from '../helpers/utils.js';

const formSpawn = () => {

  let domString = `
  <form>
    <div class="form-group">
      <label for="formName">Bear Name</label>
      <input type="text" class="form-control" id="formName" aria-describedby="nameHelp" placeholder="Name">
    </div>
    <div class="form-group">
      <label for="formImage">Image URL</label>
      <input type="text" class="form-control" id="formImage" placeholder="URL">
    </div>
    <button id="formSubmit" type="submit" class="btn btn-primary mb-2">Submit</button>
  </form>
  `;
  utils.printToDom('#form', domString);
  // document.querySelector('#formSubmit').addEventListener('click', addBear)
}

export default { formSpawn };
