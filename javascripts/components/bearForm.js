import utils from '../helpers/utils.js';
import bearData from '../helpers/data/bearData.js';

const createForm = () => {
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
  $('#formSubmit').click(bearData.addBear)
  $('#formData').val('');
}

export default { createForm };
