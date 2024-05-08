

  window.onload = function() 
  {

    // load the dropdown list (see function below)
    initTeamsDropdown();

    let btnteams = document.getElementById("btnselect")
    btnteams.onclick = msgOnbtnClick;

}
    // other stuff

    function initTeamsDropdown() {

        let teams = [
            { teamcode:"DAL", 
              name:"Dallas Cowboys", 
              locatedIn:"Arlington, TX"
            },
            { teamcode:"DEN", 
              name:"Denver Broncos", 
              locatedIn:"Denver, CO"
            },
            { teamcode:"HOU", 
              name:"Houston Texans", 
              locatedIn:"Houston, TX"
            },
            { teamcode:"KAN", 
              name:"Kansas City Chiefs", 
              locatedIn:"Kansas City, MO"
            }
          ];


        // load the dropdown list
    
        const TeamsList = document.getElementById("football");
     
        let length = teams.length;
        for (let i = 0; i < length; i++) {
     
           // create the option element and set the text and
           // value at the same time
           let theOption = new Option(teams[i].name, teams[i].teamcode); 
     
           // append the option as a child of (inside) the 
           // select element
           TeamsList.appendChild(theOption);
        }
     }

     function msgOnbtnClick()
     {
       let msgDiv = document.getElementById("msgDiv");
       const TeamsList = document.getElementById("football");
       let selectedValue = TeamsList.value;
       msgDiv.innerHTML = selectedValue;

     }
     
     
 
 