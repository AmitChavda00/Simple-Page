let showName=()=>{

    const name = document.getElementById("name").value;
    alert("Hello, "+name+". Your age is "+age());
}
let age=()=>{
    let age = document.getElementById("age").value;
    return age;
}
