/* alert("loading....."); */
//function addNewWEField()
{
   // console.log("Adding New Field");

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Type here....");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}

//function addNewAQfield()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Type here....");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

/*generatiing CV*/
function  generateCV()
{
    //console.log("generating CV");

    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById('nameT1');

    nameT1.innerHTML=nameField;
    
    //direct//
    document.getElementById("nameT2").innerHTML=nameField;

    //contact//
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address//
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    //linkedin//
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    //instagram//
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    //facebook//
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    //objective//
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    

    //WE//

    //document.getElementById("weT").innerHTML=document.getElementById("weField").value;

    const wes=document.getElementsByClassName("weField");

    let str="";

    for (let e of wes)
    {
        // console.log("e");
        str = str + '<li> ' + e.value + '</li>';
    
    }
    document.getElementById("weT").innerHTML= str;

    //aq

   // document.getElementById("aqT").innerHTML=document.getElementById("eqField").value;

    const aqs=document.getElementsByClassName('eqField');

    let str1="";

    for(let e of aqs)
    {
        // console.log(e.value);
        str1 += '<li> ' +e.value + '</li>';
    }   
    document.getElementById('aqT').innerHTML=str1;

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
    
}

function printCV()
{
    window.print();
}

