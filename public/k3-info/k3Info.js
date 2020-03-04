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

} else document.getElementById("hh1").innerHTML = res[0].name;

})
}

window.addEventListener('load',()=>{
    getDatabase();
})

