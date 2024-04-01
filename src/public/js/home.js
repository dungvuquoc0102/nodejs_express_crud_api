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

// "use strict";
// class Car {
//     constructor(name, year) {
//         this._name = name;
//         this._year = year;
//     }
//     hello() {
//         return "This is a car";
//     }
// }
// class Mercedes extends Car {
//     constructor(name, year, model) {
//         super(name, year);
//         this._model = model;
//     }
//     show() {
//         return "This mercedes is " + this.model;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(x) {
//         this._name = x;
//     }
// }
// const mercedes = new Mercedes("Mercedes", 1926, "GLC 300");
// mercedes.name = "Mercedes Electronic";
// console.log(mercedes.name);

$(document).ready(function () {
    $(".btnDelete").click(function () {
        const userId = $(this).attr("data-id");
        if (confirm("Do you want delete the user with id: " + userId)) {
            $.get(window.location.href + "delete-user/" + userId, function (data) {
                console.log(data);
            });
            $(this).closest("tr").remove();
        } else {
            //do nothing
        }
    });
});
