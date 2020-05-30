import river from "../../components/river.js";

const bears = [
  {
    name: 'Jeff Bridges',
    image: './assets/bear01.jpg',
    fishCaught: '9999',
    fishAttempted: '9999',
  },
  {
    name: 'Bear Grylls',
    image: './assets/bear02.jpg',
    fishCaught: '0',
    fishAttempted: '0',
  },
  {
    name: 'Bear McCreary',
    image: './assets/bear03.jpg',
    fishCaught: '0',
    fishAttempted: '0',
  },
];

const addBear = (e) => {
  event.preventDefault();
  let newBear = {
    name: $('#formName').val(),
    image: $('#formImage').val(),
    fishCaught: '0',
    fishAttempted: '0',
  }
  bears.push(newBear);
  river.buildABear();
}

const getBears = () => {
  return bears;
}

export default { addBear, getBears };
