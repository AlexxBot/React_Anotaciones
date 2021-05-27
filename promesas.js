var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () =>
    (request.status === 200) ?
    resolves(JSON.parse(request.response).results) :
    reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
   })
   

   getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(err
    /* new Error("cannot load members from randomuser.me") */)
   )


   /* let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) {  },
      function(error) {  }
    ); */
   