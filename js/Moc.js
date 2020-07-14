
let myJobsArray = [{}]
let table = document.getElementById("myTable");

//  function mylocationSelect(){
//     citySelect = document.getElementById('citySelect');
// for(i=0;i<myJobsArray.length;i++){

//     citySelect.innerHTML += `<option value=${myJobsArray[i].categories.location}>${myJobsArray[i].categories.location}</option>`;

// }
// }

fetch("https://api.lever.co/v0/postings/nisum?mode=json")
    .then(res => res.json())
    .then(data => {
        debugger
        myJobsArray = data
        myFunclist();
        
    }).catch(err => {
        debugger
        console.error('Error: ', err);
    });


function InsertRowFunc(i) {
    row = table.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell1.innerHTML =
        "<a href=https://www.nisum.com/job-opportunities/india/hyderabad/azure-data-developer>" +
        myJobsArray[i].text +
        "</a>";
    cell2.innerHTML = myJobsArray[i].categories.location;
    cell3.innerHTML =
        "<button onclick=myFunc() class=myBtn type=button class=btn btn-primary>APPLY NOW</button>";
}

function myFunclist(myCity, Worktype, Team, Keywords) {
    for (let i = 0; i < myJobsArray.length; i++) {
        if (myCity === "-Any-") {
            if (Worktype === "-Any-") {
                if (Team === "-Any-") {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }

                }
                else if (Team === undefined) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }
                else if (myJobsArray[i].categories.department === Team) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        // debugger
                        InsertRowFunc(i);
                    }

                }
            }
            else if (Worktype === undefined) {
                if (Team === "-Any-") {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }

                }
                else if (Team === undefined) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }

                }
                else if (myJobsArray[i].categories.department === Team) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }

                }

            }
            else if (myJobsArray[i].categories.commitment === Worktype) {
                if (Team === "-Any-") {

                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }

                }
                else if (Team === undefined) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }

                }
                else if (myJobsArray[i].categories.department === Team) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }

                }

            }


        }
        else if (myCity != undefined) {
            // debugger
            if (myJobsArray[i].categories.location === myCity) {
                if (Worktype === "-Any-") {
                    if (Team === "-Any-") {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                        if (Keywords === "") {
                            InsertRowFunc(i);
                        }
                    }
                    ///////////
                    else if (Team === undefined) {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                        if (Keywords === "") {
                            InsertRowFunc(i);
                        }
                    }
                    ///////////
                    else if (myJobsArray[i].categories.department === Team) {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                        if (Keywords === "") {
                            InsertRowFunc(i);
                        }
                    }

                }
                else if (Worktype === undefined) {
                    if (Team === "-Any-") {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                    }
                    ///////////
                    else if (Team === undefined) {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                        if (Keywords === "") {
                            InsertRowFunc(i);
                        }
                    }
                    ///////////
                    else if (myJobsArray[i].categories.department === Team) {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                        if (Keywords === "") {
                            InsertRowFunc(i);
                        }
                    }
                }
                else if (myJobsArray[i].categories.commitment === Worktype) {
                    if (Team === "-Any-") {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                        if (Keywords === "") {
                            InsertRowFunc(i);
                        }
                    }
                    else if (Team === undefined) {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                        if (Keywords === "") {
                            InsertRowFunc(i);
                        }
                    }
                    else if (myJobsArray[i].categories.department === Team) {
                        if (Keywords === undefined) {
                            InsertRowFunc(i);
                        }
                        if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                            InsertRowFunc(i);
                        }
                        if (Keywords === "") {
                            InsertRowFunc(i);
                        }
                    }

                }

            }
        }
        else {
            // debugger
            if (Worktype === "-Any-") {
                if (Team === "-Any-") {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }
                ////////
                else if (Team === undefined) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }
                ////////
                else if (myJobsArray[i].categories.department === Team) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }

            }
            else if (Worktype === undefined) {
                if (Team === "-Any-") {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }
                else if (Team === undefined) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }
                else if (myJobsArray[i].categories.department === Team) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }

            }
            else if (myJobsArray[i].categories.commitment === Worktype) {
                if (Team === "-Any-") {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }
                else if (Team === undefined) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }
                else if (myJobsArray[i].categories.department === Team) {
                    if (Keywords === undefined) {
                        InsertRowFunc(i);
                    }
                    if (myJobsArray[i].categories.team.includes(Keywords) || myJobsArray[i].text.includes(Keywords)) {
                        InsertRowFunc(i);
                    }
                    if (Keywords === "") {
                        InsertRowFunc(i);
                    }
                }

            }
        }
    }
}



function myFunc() {
    // debugger;
    location.href =
        "https://www.nisum.com/job-opportunities-india-apply-now?india_job_location=Hyderabad&job_title=Azure%20Data%20Developer";
}
function selectedCity() {

    // debugger;
    var myCity = document.getElementById("citySelect").value;
    var Worktype = document.getElementById("Worktype").value;
    var Team = document.getElementById("Team").value;
    var Keywords = document.getElementById("Keywords").value;





    var rowCount = table.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
        table.deleteRow(x);
    }
    myFunclist(myCity, Worktype, Team, Keywords);

}
function SortFunc() {
    // debugger

    console.log(myJobsArray)
    myJobsArray.sort((a, b) => console.log(a.text)(a.text > b.text) ? 1 : -1)
    console.log(myJobsArray)
    // debugger
}

function SortFunc(n) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }