import 'bootstrap';
import $ from 'jquery';
import techData from '../data/techGetter';


const createTechCards = (tech) => {
  let newString = '';
  tech.forEach((technology) => {
    newString += `
      <div class="technologycard col-sm-3 px-0 m-3" id="${technology.id}">
        <div class="card-footer text-muted mt-auto">
          <h2 class="card-title text-center ">${technology.name}</h2>
          <h5 class="card-title text-center ">${technology.info}</h5>
        </div>
      </div>
    `;
    $('#technologiesPage').html(newString);
  });
};

const getTech = () => {
  techData.getTech()
    .then((techs) => {
      createTechCards(techs.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { getTech };
