/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage (){\n    \nconst home = document.createElement('div');\nconst container = document.querySelector('.container');\nconst sideHome = document.createElement('div');\nconst mainHome = document.createElement('div');\nconst textHomeContainer = document.createElement('div');\nconst homeDateContainer = document.createElement('div');\nconst homeRateContainer = document.createElement('form');\nconst formHome = document.createElement('form');\nconst titleHome = document.createElement('input');\nconst textHome = document.createElement('textarea');\nconst homeDate = document.createElement('input');\nconst homeRadio1 = document.createElement('input');\nconst homeRadio2 = document.createElement('input');\nconst homeRadio3 = document.createElement('input');\nconst submit = document.createElement('input');\nconst elDetailsTitle = document.createElement('span');\n\nclass homeC {\n\n    constructor(title,details,date,priority){\n\n        this.title = title;\n        this.details = details;\n        this.date = date;\n        this.priority = priority;\n    }\n}\n\n\nconst toDothinkOne =new homeC('ToDo list Project','To do list','Finish Projec','25/08/2022?','HIGH')\nlet myHome =[toDothinkOne];  \n\n   \n    home.classList.add('home');\n    container.appendChild(home)\n            \n            sideHome.className='sideHome';\n            sideHome.textContent='InBox';\n            home.appendChild(sideHome);\n\n            mainHome.className='mainHome';\n            home.appendChild(mainHome);\n\n            formHome.classList.add('formHome');\n            sideHome.appendChild(formHome);\n\n        /* ADD TITLE */\n            titleHome.classList.add('titleHome');\n            titleHome.placeholder='Add Project Title'\n            formHome.appendChild(titleHome);\n        /* ADD TITLE */\n\n       \n\n        /*DETAILS */\n            textHomeContainer.className='textHomeContainer';\n            formHome.appendChild(textHomeContainer);\n            textHomeContainer.textContent='Details'\n\n            textHome.className='textHome';\n            textHomeContainer.appendChild(textHome);\n        /*DETAILS */\n\n        /*DATE */\n            homeDateContainer.className='homeDateContainer';\n            formHome.appendChild(homeDateContainer);\n            homeDateContainer.textContent='Select Date';\n            \n            homeDate.setAttribute(\"type\", \"date\");\n            homeDateContainer.appendChild(homeDate);\n        /*DATE */\n\n        /*PRIORITY */\n\n            homeRateContainer.className='homeRateContainer';\n            formHome.appendChild(homeRateContainer);\n            homeRateContainer.textContent='Priority'\n\n            homeRadio1.setAttribute(\"type\",\"radio\");\n            homeRateContainer.appendChild(homeRadio1);\n            homeRadio1.value=\"LOW\";\n            homeRadio1.name=\"Priority\";   \n        \n\n            homeRadio2.setAttribute(\"type\",\"radio\");\n            homeRateContainer.appendChild(homeRadio2);\n            homeRadio2.value='MEDIUM';\n            homeRadio2.name='Priority';\n\n            homeRadio3.setAttribute(\"type\",\"radio\");\n            homeRateContainer.appendChild(homeRadio3);\n            homeRadio3.value='HIGH';\n            homeRadio3.name='Priority';\n        \n\n        /*PRIORITY */\n\n\n\n\n\n\n\n\n\n\n\n        /*SUBMIT*/    \n            submit.setAttribute(\"type\",\"submit\");\n            submit.textContent='Submit';\n            submit.className='submit'\n            formHome.appendChild(submit);   \n        /*SUBMIT */\n\n\n\n                            submit.addEventListener('click',(e)=>{\n                                    e.preventDefault()\n                                    \n                                    const toDoContainer = document.createElement('div');\n                                    const titleContainer = document.createElement('div');\n                                    \n                                    const overlayPopUp = document.createElement('div');\n                                    const manageTodoContainer = document.createElement('div');    \n                                    let priority =  function () {\n\n                                        let homeRadio =\"\";\n                                        if (homeRadio1.checked===true){\n                                            homeRadio =\"LOW\";\n                                            detailsButton.style.border ='3px solid blue'\n                                            editBtn.style.border ='3px solid blue'\n                                            closeTabBtn.style.border ='3px solid blue'\n                                            return homeRadio;\n                                        } else if(homeRadio2.checked===true){\n                                            homeRadio=\"MEDIUM\";\n                                            detailsButton.style.border ='3px solid yellow'\n                                            editBtn.style.border ='3px solid yellow'\n                                            closeTabBtn.style.border ='3px solid yellow'\n                                            return homeRadio\n                                        } else if(homeRadio3.checked===true){\n                                            homeRadio=\"HIGH\";\n                                            detailsButton.style.border ='3px solid red'\n                                            editBtn.style.border ='3px solid red'\n                                            closeTabBtn.style.border ='3px solid red'\n                                            return homeRadio\n                                        }     \n                                    }  \n                                \n\n                                \n                                    const checkBox = document.createElement('input');\n                                    const detailsButton =document.createElement('button');\n                                    const closeTabBtn =document.createElement('button');\n                                    const editBtn =document.createElement('button');\n                                    const dateContainer = document.createElement('div');\n                                    let priorityValue = priority();\n\n                                    const newHome = new homeC (titleHome.value,textHome.value,homeDate.value,priorityValue);\n                                    \n                                    myHome.push(newHome)\n\n                                    toDoContainer.className='toDoContainer';\n                                    mainHome.appendChild(toDoContainer);\n                                     \n                                    \n                                    checkBox.setAttribute('type','checkbox');\n                                    checkBox.className= 'checkB';\n                                    toDoContainer.appendChild(checkBox);\n\n                                    checkBox.addEventListener('change',()=>{\n                                        \n                                        if (checkBox.checked) {\n                                        \n                                            toDoContainer.style.backgroundColor='lightgrey'\n                                            manageTodoContainer.style.backgroundColor='lightgrey'\n                                            toDoContainer.style.textDecoration='line-through'\n                                        } else {\n                                            \n                                            toDoContainer.style.backgroundColor='aquamarine'\n                                            manageTodoContainer.style.backgroundColor='rgb(68, 247, 187)'\n                                            toDoContainer.style.textDecoration='none'\n                                        }\n                                        \n                                    })\n                                \n\n                                    titleContainer.className='titleContainer';\n                                    titleContainer.textContent = titleHome.value;\n                                    toDoContainer.appendChild(titleContainer);\n                                    \n                                    \n                                    manageTodoContainer.className='manageCont';\n                                    dateContainer.className='dateCont';\n                                    dateContainer.innerText = homeDate.value;      /*date */\n                                    manageTodoContainer.appendChild(dateContainer);\n                                    toDoContainer.appendChild(manageTodoContainer);\n\n                                    detailsButton.className=' detailsButton';\n                                    detailsButton.textContent='DETAILS';\n                                    manageTodoContainer.appendChild(detailsButton);\n                                    \n                                    \n                                    function deleteAll(){\n                                        myHome.pop();\n                                        toDoContainer.style.display ='none';\n                                        console.log(myHome);\n                                        \n\n                                    } \n\n                                    detailsButton.addEventListener('click',()=>{\n                                        const elDetails = document.createElement('div');\n                                        ;\n                                        const elDetailsProject = document.createElement('span');\n                                        const elDetailsDetail = document.createElement('span');\n                                        const elDetailsDate = document.createElement('span');\n                                        const elDetailsPriority = document.createElement('span');\n                                        const cancelBtn =document.createElement('button')\n\n                                        overlayPopUp.className='overlayPopUp';\n                                        document.body.appendChild(overlayPopUp);\n\n\n                                        elDetails.className ='elDetails';\n                                        overlayPopUp.appendChild(elDetails);\n\n                                        \n                                        elDetailsTitle.className ='elDetailsTitle';\n                                        elDetailsTitle.textContent = 'Project'\n                                        elDetails.appendChild(elDetailsTitle);\n\n                                        elDetailsProject.className ='elDetail';\n                                        elDetailsProject.textContent =`Project: ${titleHome.value}`;\n                                        elDetails.appendChild(elDetailsProject);\n\n                                        elDetailsDetail.className ='elDetail';\n                                        elDetailsDetail.textContent =`Details: ${textHome.value}`;\n                                        elDetails.appendChild(elDetailsDetail);\n\n\n                                        elDetailsDate.className ='elDetail';\n                                        elDetailsDate.textContent =`Date: ${homeDate.value}`;\n                                        elDetails.appendChild(elDetailsDate);\n\n\n                                        elDetailsPriority.className ='elDetail';\n                                        elDetailsPriority.textContent =`Priority: ${priorityValue}`;\n                                        elDetails.appendChild(elDetailsPriority);\n                                    \n                                        cancelBtn.className ='cancelBtn';\n                                        cancelBtn.textContent ='X';\n                                        elDetails.appendChild(cancelBtn);\n                                        \n                                        cancelBtn.addEventListener('click',()=>{\n                                            document.body.removeChild(overlayPopUp)\n                                            overlayPopUp.removeChild(overlayPopUp.firstElementChild);\n                                        })\n                                        \n                                        \n                                    })\n                                    \n                                /*EDIT */\n                                    editBtn.className='editBtn';\n                                    editBtn.textContent = 'Edit';\n                                    manageTodoContainer.appendChild(editBtn);\n\n                                    editBtn.addEventListener('click',()=>{\n                                    const eLedit = document.createElement('form');\n                                    const cancelBtn =document.createElement('button')\n                                    const submitEdit = document.createElement('button');\n                                    const editHome = document.createElement('input');\n                                    const editDetails = document.createElement('textarea');\n                                    const editDate = document.createElement('input');\n                                    const editRateContainer = document.createElement('form');\n                                    const editRadio1 = document.createElement('input');\n                                    const editRadio2 = document.createElement('input');\n                                    const editRadio3 = document.createElement('input');\n                                \n                                    const checkPriority = function (){    \n                                    if(priorityValue==='LOW'){\n                                        editRadio1.defaultChecked = true;\n                                        return editRadio1.value\n                                    }else if(priorityValue==='MEDIUM'){\n                                        editRadio2.defaultChecked = true;\n                                        return editRadio2.value\n                                    }else if(priorityValue==='HIGH'){\n                                        editRadio3.defaultChecked = true;\n                                        return editRadio3.value\n                                    } \n                                } \n                                    checkPriority()\n\n                                    overlayPopUp.className='overlayPopUp';\n                                    document.body.appendChild(overlayPopUp);\n\n                                    eLedit.className ='elDetails';\n                                    overlayPopUp.appendChild(eLedit);\n\n                                    editHome.classList.add('titleHome');\n                                    editHome.defaultValue=titleHome.value;\n                                    editHome.textContent = titleHome.value;\n                                    eLedit.appendChild(editHome);  \n                                    \n                                    editDetails.className='textHome';\n                                    eLedit.appendChild(editDetails);\n                                    editDetails.defaultValue = textHome.value\n                                \n\n                                    editDate.setAttribute(\"type\", \"date\");\n                                    editDate.defaultValue = homeDate.value;\n                                    eLedit.appendChild(editDate);\n                                    \n                                    \n                                    editRateContainer.className='homeRateContainer';\n                                    eLedit.appendChild(editRateContainer);\n                                    editRateContainer.textContent='Priority'\n\n                                    editRadio1.setAttribute(\"type\",\"radio\");\n                                    editRateContainer.appendChild(editRadio1);\n                                    editRadio1.value='LOW';\n                                    editRadio1.name=\"Priority\"; \n\n                                    \n\n                                    editRadio2.setAttribute(\"type\",\"radio\");\n                                    editRateContainer.appendChild(editRadio2);\n                                    editRadio2.value='MEDIUM';\n                                    editRadio2.name='Priority';\n\n                                    editRadio3.setAttribute(\"type\",\"radio\");\n                                    editRateContainer.appendChild(editRadio3);\n                                    editRadio3.value='HIGH';\n                                    editRadio3.name='Priority';\n                                    \n                                    \n                        \n                                    submitEdit.setAttribute(\"type\",\"submit\");\n                                    submitEdit.textContent='Submit';\n                                    submitEdit.className='submit';\n                                    eLedit.appendChild(submitEdit);\n\n                                    \n\n                                    submitEdit.addEventListener('click',(e)=>{\n                                        e.preventDefault()\n                                        titleHome.value = editHome.value;\n                                        textHome.value = editDetails.value;\n                                        homeDate.value = editDate.value; \n                                        dateContainer.textContent = homeDate.value;           \n                                        titleContainer.textContent = editHome.value;\n                                        \n\n                                    \n\n                                        if (editRadio1.checked===true){\n                                            priorityValue =\"LOW\";\n                                            detailsButton.style.border ='3px solid blue'\n                                            editBtn.style.border ='3px solid blue'\n                                            closeTabBtn.style.border ='3px solid blue'\n                                            \n                                        } else if(editRadio2.checked===true){\n                                            priorityValue=\"MEDIUM\";\n                                            detailsButton.style.border ='3px solid yellow'\n                                            editBtn.style.border ='3px solid yellow'\n                                            closeTabBtn.style.border ='3px solid yellow'\n                                            \n                                        } else if(editRadio3.checked===true){\n                                            priorityValue=\"HIGH\";\n                                            detailsButton.style.border ='3px solid red'\n                                            editBtn.style.border ='3px solid red'\n                                            closeTabBtn.style.border ='3px solid red'\n                                        \n                                        }     \n                                            \n                                    });\n                                    \n                                    \n\n                                    cancelBtn.className ='cancelBtn2';\n                                        cancelBtn.textContent ='X';\n                                        eLedit.appendChild(cancelBtn);\n                                        \n                                        cancelBtn.addEventListener('click',()=>{\n                                            document.body.removeChild(overlayPopUp)\n                                            overlayPopUp.removeChild(overlayPopUp.firstElementChild);\n                                        })    \n                                    })\n                                    /*EDIT */\n\n\n\n                                    closeTabBtn.className='closeTabBtn';\n                                    closeTabBtn.textContent='X';\n                                    manageTodoContainer.appendChild(closeTabBtn)\n                                    closeTabBtn.addEventListener('click',()=>{\n\n                                    deleteAll()\n                                    \n                                    })\n\n                                    console.log(newHome);\n                                    console.log(myHome);\n\n                                    \n                                   /* function isToday(date) {\n                                        const today = new Date();\n                                                                            \n                                        if (today.toDateString() === date.toDateString()) {\n                                            mainToday.appendChild(toDoContainer.cloneNode(true));\n                                            \n                                        } else if(today.toDateString() != date.toDateString()){\n                                            mainToday.removeChild(mainToday.lastElementChild);\n                                            console.log('ok')\n                                        }\n                                        \n                                    }\n                                      \n                                    \n                                      isToday(new Date(homeDate.value));*/\n                                      \n\n                                })\n      \n\n   \n                \n\n                         /* todayBtn.addEventListener('click',()=>{\n                            home.style.display='none'\n                            todaySheet.style.display='flex'\n                         })  \n\n                                todaySheet.classList.add('today');\n                                container.appendChild(todaySheet)\n                                \n                                sideToday.className='sideHome';\n                                sideToday.textContent='Today';\n                                todaySheet.appendChild(sideToday);\n\n                                mainToday.className='mainHome';\n                                todaySheet.appendChild(mainToday);\n                               \n\n                                formToday.classList.add('formHome');\n                                sideToday.appendChild(formToday); */\n                        \n                        return home \n                    }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://todo-list/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;