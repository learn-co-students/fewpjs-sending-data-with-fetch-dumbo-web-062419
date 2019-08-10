// Add your code here
function submitData(name, email) {



    return  fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(response => response.json())
        .then(slapOnDom)

        function slapOnDom(json) {
        document.body.innerHTML = json[ "id" ]
        }

}