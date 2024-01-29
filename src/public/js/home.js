// const httpGetAsync = (theUrl, callback) => {
//     let xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = () => {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//     };
//     xmlHttp.open("GET", theUrl, true);
//     xmlHttp.send(null);
// };

// httpGetAsync("https://picsum.photos/200/300", (data) => {
//     document.getElementById("img_1").setAttribute("src", data.responseURL);
//     httpGetAsync("https://picsum.photos/200/300", (data) => {
//         document.getElementById("img_2").setAttribute("src", data.responseURL);
//         httpGetAsync("https://picsum.photos/200/300", (data) => {
//             document.getElementById("img_3").setAttribute("src", data.responseURL);
//         });
//     });
// });

// const promise = new Promise((resolve, reject) => {
//     httpGetAsync("https://picsum.photos/200/300", resolve);
// });
// promise
//     .then((data) => {
//         document.getElementById("img_1").setAttribute("src", data.responseURL);
//         return new Promise((resolve, reject) => {
//             httpGetAsync("https://picsum.photos/200/300", resolve);
//         });
//     })
//     .then((data) => {
//         document.getElementById("img_2").setAttribute("src", data.responseURL);
//         return new Promise((resolve, reject) => {
//             httpGetAsync("https://picsum.photos/200/300", resolve);
//         });
//     })
//     .then((data) => {
//         document.getElementById("img_3").setAttribute("src", data.responseURL);
//     });
