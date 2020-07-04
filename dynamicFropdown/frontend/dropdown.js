const url = "http://localhost:3400/";
const getCity = () => {
    fetch(url,{method:'GET'})
    .then((data) => data.json())
    .then((out) => {
        for(i=0;i<out.length; i++){
            var node = document.createElement("option");
            var textNode = document.createTextNode(out[i].name)
            node.appendChild(textNode)
            document.getElementById('city').appendChild(node)
        }
    })
}