const projectTitle = document.querySelector('.input');
const container = document.querySelector('.container')

function createProject(){

const projectContainer = document.createElement('div');
const projectHead = document.createElement('div');
const inputProject = document.createElement('input');


projectContainer.classList.add('projectContainer');
container.appendChild(projectContainer);


projectHead.classList.add('projectHead');
projectContainer.appendChild(projectHead);
projectHead.innerText=`${projectTitle.value}`

projectContainer.appendChild(inputProject)


const project = (projectTitle.value);



/*test*/
   let x= console.log(projectTitle.value)
   return x 
   /*test*/
}

export default createProject

  
  
 


/* document.body.appendChild(project)*/
