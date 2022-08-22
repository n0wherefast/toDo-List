function homePage (){
    
const home = document.createElement('div');
const container = document.querySelector('.container');
const sideHome = document.createElement('div');
const mainHome = document.createElement('div');
const textHomeContainer = document.createElement('div');
const homeDateContainer = document.createElement('div');
const homeRateContainer = document.createElement('form');
const formHome = document.createElement('form');
const titleHome = document.createElement('input');
const textHome = document.createElement('textarea');
const homeDate = document.createElement('input');
const homeRadio1 = document.createElement('input');
const homeRadio2 = document.createElement('input');
const homeRadio3 = document.createElement('input');
const submit = document.createElement('input');
 const homeBtn = document.querySelector('.homeBtn')
const elDetailsTitle = document.createElement('span')

class homeC {

    constructor(title,details,date,priority){

        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
    }
}


const toDothinkOne =new homeC('ToDo list Project','To do list','Finish Projec','25/08/2022?','HIGH')
let myHome =[toDothinkOne];  

   
    home.classList.add('home');
    container.appendChild(home)
            
            sideHome.className='sideHome';
            sideHome.textContent='InBox';
            home.appendChild(sideHome);

            mainHome.className='mainHome';
            home.appendChild(mainHome);

            formHome.classList.add('formHome');
            sideHome.appendChild(formHome);

        /* ADD TITLE */
            titleHome.classList.add('titleHome');
            titleHome.placeholder='Add Project Title'
            formHome.appendChild(titleHome);
        /* ADD TITLE */

       

        /*DETAILS */
            textHomeContainer.className='textHomeContainer';
            formHome.appendChild(textHomeContainer);
            textHomeContainer.textContent='Details'

            textHome.className='textHome';
            textHomeContainer.appendChild(textHome);
        /*DETAILS */

        /*DATE */
            homeDateContainer.className='homeDateContainer';
            formHome.appendChild(homeDateContainer);
            homeDateContainer.textContent='Select Date';
            
            homeDate.setAttribute("type", "date");
            homeDateContainer.appendChild(homeDate);
        /*DATE */

        /*PRIORITY */

            homeRateContainer.className='homeRateContainer';
            formHome.appendChild(homeRateContainer);
            homeRateContainer.textContent='Priority'

            homeRadio1.setAttribute("type","radio");
            homeRateContainer.appendChild(homeRadio1);
            homeRadio1.value="LOW";
            homeRadio1.name="Priority";   
        

            homeRadio2.setAttribute("type","radio");
            homeRateContainer.appendChild(homeRadio2);
            homeRadio2.value='MEDIUM';
            homeRadio2.name='Priority';

            homeRadio3.setAttribute("type","radio");
            homeRateContainer.appendChild(homeRadio3);
            homeRadio3.value='HIGH';
            homeRadio3.name='Priority';
        

        /*PRIORITY */











        /*SUBMIT*/    
            submit.setAttribute("type","submit");
            submit.textContent='Submit';
            submit.className='submit'
            formHome.appendChild(submit);   
        /*SUBMIT */



                            submit.addEventListener('click',(e)=>{
                                    e.preventDefault()
                                    
                                    const toDoContainer = document.createElement('div');
                                    const titleContainer = document.createElement('div');
                                    
                                    const overlayPopUp = document.createElement('div');
                                    const manageTodoContainer = document.createElement('div');    
                                    let priority =  function () {

                                        let homeRadio ="";
                                        if (homeRadio1.checked===true){
                                            homeRadio ="LOW";
                                            detailsButton.style.border ='3px solid blue'
                                            editBtn.style.border ='3px solid blue'
                                            closeTabBtn.style.border ='3px solid blue'
                                            return homeRadio;
                                        } else if(homeRadio2.checked===true){
                                            homeRadio="MEDIUM";
                                            detailsButton.style.border ='3px solid yellow'
                                            editBtn.style.border ='3px solid yellow'
                                            closeTabBtn.style.border ='3px solid yellow'
                                            return homeRadio
                                        } else if(homeRadio3.checked===true){
                                            homeRadio="HIGH";
                                            detailsButton.style.border ='3px solid red'
                                            editBtn.style.border ='3px solid red'
                                            closeTabBtn.style.border ='3px solid red'
                                            return homeRadio
                                        }     
                                    }  
                                

                                
                                    const checkBox = document.createElement('input');
                                    const detailsButton =document.createElement('button');
                                    const closeTabBtn =document.createElement('button');
                                    const editBtn =document.createElement('button');
                                    const dateContainer = document.createElement('div');
                                    let priorityValue = priority();

                                    const newHome = new homeC (titleHome.value,textHome.value,homeDate.value,priorityValue);
                                    
                                    myHome.push(newHome)

                                    toDoContainer.className='toDoContainer';
                                    mainHome.appendChild(toDoContainer);
                                     
                                    
                                    checkBox.setAttribute('type','checkbox');
                                    checkBox.className= 'checkB';
                                    toDoContainer.appendChild(checkBox);

                                    checkBox.addEventListener('change',()=>{
                                        
                                        if (checkBox.checked) {
                                        
                                            toDoContainer.style.backgroundColor='lightgrey'
                                            manageTodoContainer.style.backgroundColor='lightgrey'
                                            toDoContainer.style.textDecoration='line-through'
                                        } else {
                                            
                                            toDoContainer.style.backgroundColor='aquamarine'
                                            manageTodoContainer.style.backgroundColor='rgb(68, 247, 187)'
                                            toDoContainer.style.textDecoration='none'
                                        }
                                        
                                    })
                                

                                    titleContainer.className='titleContainer';
                                    titleContainer.textContent = titleHome.value;
                                    toDoContainer.appendChild(titleContainer);
                                    
                                    
                                    manageTodoContainer.className='manageCont';
                                    dateContainer.className='dateCont';
                                    dateContainer.innerText = homeDate.value;      /*date */
                                    manageTodoContainer.appendChild(dateContainer);
                                    toDoContainer.appendChild(manageTodoContainer);

                                    detailsButton.className=' detailsButton';
                                    detailsButton.textContent='DETAILS';
                                    manageTodoContainer.appendChild(detailsButton);
                                    
                                    
                                    function deleteAll(){
                                        myHome.pop();
                                        toDoContainer.style.display ='none';
                                        console.log(myHome);
                                        

                                    } 

                                    detailsButton.addEventListener('click',()=>{
                                        const elDetails = document.createElement('div');
                                        ;
                                        const elDetailsProject = document.createElement('span');
                                        const elDetailsDetail = document.createElement('span');
                                        const elDetailsDate = document.createElement('span');
                                        const elDetailsPriority = document.createElement('span');
                                        const cancelBtn =document.createElement('button')

                                        overlayPopUp.className='overlayPopUp';
                                        document.body.appendChild(overlayPopUp);


                                        elDetails.className ='elDetails';
                                        overlayPopUp.appendChild(elDetails);

                                        
                                        elDetailsTitle.className ='elDetailsTitle';
                                        elDetailsTitle.textContent = 'Project'
                                        elDetails.appendChild(elDetailsTitle);

                                        elDetailsProject.className ='elDetail';
                                        elDetailsProject.textContent =`Project: ${titleHome.value}`;
                                        elDetails.appendChild(elDetailsProject);

                                        elDetailsDetail.className ='elDetail';
                                        elDetailsDetail.textContent =`Details: ${textHome.value}`;
                                        elDetails.appendChild(elDetailsDetail);


                                        elDetailsDate.className ='elDetail';
                                        elDetailsDate.textContent =`Date: ${homeDate.value}`;
                                        elDetails.appendChild(elDetailsDate);


                                        elDetailsPriority.className ='elDetail';
                                        elDetailsPriority.textContent =`Priority: ${priorityValue}`;
                                        elDetails.appendChild(elDetailsPriority);
                                    
                                        cancelBtn.className ='cancelBtn';
                                        cancelBtn.textContent ='X';
                                        elDetails.appendChild(cancelBtn);
                                        
                                        cancelBtn.addEventListener('click',()=>{
                                            document.body.removeChild(overlayPopUp)
                                            overlayPopUp.removeChild(overlayPopUp.firstElementChild);
                                        })
                                        
                                        
                                    })
                                    
                                /*EDIT */
                                    editBtn.className='editBtn';
                                    editBtn.textContent = 'Edit';
                                    manageTodoContainer.appendChild(editBtn);

                                    editBtn.addEventListener('click',()=>{
                                    const eLedit = document.createElement('form');
                                    const cancelBtn =document.createElement('button')
                                    const submitEdit = document.createElement('button');
                                    const editHome = document.createElement('input');
                                    const editDetails = document.createElement('textarea');
                                    const editDate = document.createElement('input');
                                    const editRateContainer = document.createElement('form');
                                    const editRadio1 = document.createElement('input');
                                    const editRadio2 = document.createElement('input');
                                    const editRadio3 = document.createElement('input');
                                
                                    const checkPriority = function (){    
                                    if(priorityValue==='LOW'){
                                        editRadio1.defaultChecked = true;
                                        return editRadio1.value
                                    }else if(priorityValue==='MEDIUM'){
                                        editRadio2.defaultChecked = true;
                                        return editRadio2.value
                                    }else if(priorityValue==='HIGH'){
                                        editRadio3.defaultChecked = true;
                                        return editRadio3.value
                                    } 
                                } 
                                    checkPriority()

                                    overlayPopUp.className='overlayPopUp';
                                    document.body.appendChild(overlayPopUp);

                                    eLedit.className ='elDetails';
                                    overlayPopUp.appendChild(eLedit);

                                    editHome.classList.add('titleHome');
                                    editHome.defaultValue=titleHome.value;
                                    editHome.textContent = titleHome.value;
                                    eLedit.appendChild(editHome);  
                                    
                                    editDetails.className='textHome';
                                    eLedit.appendChild(editDetails);
                                    editDetails.defaultValue = textHome.value
                                

                                    editDate.setAttribute("type", "date");
                                    editDate.defaultValue = homeDate.value;
                                    eLedit.appendChild(editDate);
                                    
                                    
                                    editRateContainer.className='homeRateContainer';
                                    eLedit.appendChild(editRateContainer);
                                    editRateContainer.textContent='Priority'

                                    editRadio1.setAttribute("type","radio");
                                    editRateContainer.appendChild(editRadio1);
                                    editRadio1.value='LOW';
                                    editRadio1.name="Priority"; 

                                    

                                    editRadio2.setAttribute("type","radio");
                                    editRateContainer.appendChild(editRadio2);
                                    editRadio2.value='MEDIUM';
                                    editRadio2.name='Priority';

                                    editRadio3.setAttribute("type","radio");
                                    editRateContainer.appendChild(editRadio3);
                                    editRadio3.value='HIGH';
                                    editRadio3.name='Priority';
                                    
                                    
                        
                                    submitEdit.setAttribute("type","submit");
                                    submitEdit.textContent='Submit';
                                    submitEdit.className='submit';
                                    eLedit.appendChild(submitEdit);

                                    

                                    submitEdit.addEventListener('click',(e)=>{
                                        e.preventDefault()
                                        titleHome.value = editHome.value;
                                        textHome.value = editDetails.value;
                                        homeDate.value = editDate.value; 
                                        dateContainer.textContent = homeDate.value;           
                                        titleContainer.textContent = editHome.value;
                                        

                                    

                                        if (editRadio1.checked===true){
                                            priorityValue ="LOW";
                                            detailsButton.style.border ='3px solid blue'
                                            editBtn.style.border ='3px solid blue'
                                            closeTabBtn.style.border ='3px solid blue'
                                            
                                        } else if(editRadio2.checked===true){
                                            priorityValue="MEDIUM";
                                            detailsButton.style.border ='3px solid yellow'
                                            editBtn.style.border ='3px solid yellow'
                                            closeTabBtn.style.border ='3px solid yellow'
                                            
                                        } else if(editRadio3.checked===true){
                                            priorityValue="HIGH";
                                            detailsButton.style.border ='3px solid red'
                                            editBtn.style.border ='3px solid red'
                                            closeTabBtn.style.border ='3px solid red'
                                        
                                        }     
                                            
                                    });
                                    
                                    

                                    cancelBtn.className ='cancelBtn2';
                                        cancelBtn.textContent ='X';
                                        eLedit.appendChild(cancelBtn);
                                        
                                        cancelBtn.addEventListener('click',()=>{
                                            document.body.removeChild(overlayPopUp)
                                            overlayPopUp.removeChild(overlayPopUp.firstElementChild);
                                        })    
                                    })
                                    /*EDIT */



                                    closeTabBtn.className='closeTabBtn';
                                    closeTabBtn.textContent='X';
                                    manageTodoContainer.appendChild(closeTabBtn)
                                    closeTabBtn.addEventListener('click',()=>{

                                    deleteAll()
                                    
                                    })

                                    console.log(newHome);
                                    console.log(myHome);

                                    
                                   /* function isToday(date) {
                                        const today = new Date();
                                                                            
                                        if (today.toDateString() === date.toDateString()) {
                                            mainToday.appendChild(toDoContainer.cloneNode(true));
                                            
                                        } else if(today.toDateString() != date.toDateString()){
                                            mainToday.removeChild(mainToday.lastElementChild);
                                            console.log('ok')
                                        }
                                        
                                    }
                                      
                                    
                                      isToday(new Date(homeDate.value));*/
                                      

                                })
      

   
                

                         /* todayBtn.addEventListener('click',()=>{
                            home.style.display='none'
                            todaySheet.style.display='flex'
                         })  

                                todaySheet.classList.add('today');
                                container.appendChild(todaySheet)
                                
                                sideToday.className='sideHome';
                                sideToday.textContent='Today';
                                todaySheet.appendChild(sideToday);

                                mainToday.className='mainHome';
                                todaySheet.appendChild(mainToday);
                               

                                formToday.classList.add('formHome');
                                sideToday.appendChild(formToday); */
                        
                        return home 
                    }


export default homePage