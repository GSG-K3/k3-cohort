let xhr = new XMLHttpRequest;
let apiCall = (method, url, callback) =>{
    xhr.onreadystatechange =() =>{
        if(xhr.status === 200 && xhr.readyState === 4){
            const response =  JSON.parse(xhr.responseText)
            if(typeof callback === 'function')
            {callback(response);}
        }
    }
    xhr.open(method, url);
    xhr.send();
    
}
console.log("sssssssssssssss")

const container = document.getElementById('container');
function getDatabase() {
    apiCall('GET' ,'/getk3info',(res)=>{
        console.log(res)
if(res.length === 0) {
    console.log("There is no any information to show")
    const k3DB = document.createElement('h1');
    k3DB.innerHTML = "There is no any orders to show";
    container.appendChild(k3DB);

} else {
    res.forEach( element=> {
        console.log(element.name);
        
        const infoContainer = document.createElement('div');
        infoContainer.classList.add("info-name");
           const student_name = document.createElement('h2');
           student_name.classList.add('student_name');

           student_name.innerHTML = element.name ;
           student_name.style.color = 'rgb(79, 73, 73)';
           infoContainer.appendChild(student_name);
           container.appendChild(infoContainer);

           const city = document.createElement('h4');
           city.innerHTML = 'City name: '+ element.city;
           infoContainer.appendChild(city);
           container.appendChild(infoContainer);

           const specialized = document.createElement('h4');
           specialized.innerHTML = 'Specialized: '+ element.specialized;
           infoContainer.appendChild(specialized);
           container.appendChild(infoContainer);

           const email = document.createElement('h4');
           email.innerHTML = 'Email : '+ element.email;
           infoContainer.appendChild(email);
           container.appendChild(infoContainer);



    }
    )

}})
}

window.addEventListener('load',()=>{
    getDatabase();
})

