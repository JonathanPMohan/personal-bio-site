import 'bootstrap';
import $ from 'jquery';
import projectsData from '../data/projectGetter';

const initView = () => {
  $('#contactPage').show();
  $('#bioTextDiv').show();
  $('#technologiesPage').show();
  $('#projectsPage').show();
};


//  Project Cards Function

const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      newString += `
      <div class="projectcard mt-3" id="${project.id}">
      <div class="row">
        <div class="border-0 col-7">
          <img class="card-img-top img-thumbnail img-fluid" src="${project.screenshot}" alt="${project.title}">
        </div>
        <div class="card-block col-5 my-auto">
          <h1 class="card-title text-center">${project.title}</h1>
          <h4 class="card-text text-center m-3">${project.description}</h4>
          <h1> Technologies Used: </h1>
          <hr>
          <h4 class="card-text text-center"> ${project.technologiesUsed}</h4>
        </div> 
      </div>  
        <div class="card-footer w-100 text-muted row d-flex justify-content-around">
            <h3 class="text-center"><a href='${project.url}' target="_blank" class="card-link">Project Url</a></h3>
            <h3 class="text-center"><a href='${project.githubUrl}' target="_blank" class="card-link">GitHub Url</a></h3>
        </div>  
      </div>`;
    }
    $('#projectsPage').html(newString);
  });
};

const getProjects = () => {
  projectsData.loadProjects()
    .then((projects) => {
      createProjectCards(projects);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { initView, getProjects };
