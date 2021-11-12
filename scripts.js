let link = "https://uselessfacts.jsph.pl/random.json?language=en";

fetch(link)
    .then(response => response.text())
    .then((textResponse) => {
        let json2 = JSON.parse(textResponse);   
        let text = json2.text; 
        let src = json2.source; 

        let element = document.body;
        element.innerHTML = element.innerHTML + "your text = " + text + "<hr>";
        element.innerHTML = element.innerHTML + "your src = " + src + "<hr>";
})
    let myPromise = new Promise(function(myResolve, myReject) {
      myResolve();
      myReject(); 
    });

    myPromise.then(
      function(value) { console.log('PROMISE WORKS') },
      function(error) { console.log('PROMISE DOES NOT WORKS') }
    );