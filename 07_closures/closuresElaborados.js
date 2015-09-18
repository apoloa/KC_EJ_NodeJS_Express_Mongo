'use strict';

function creaUsuario(name){
    var email;
    return {
       login: function () {
           console.log(name + ' ha hecho login');
       },
        logout: function () {
            console.log(name + ' ha hecho logout');
        },
        setEmail: function(emailUser){
            email = emailUser;
        },
        getEmail: function(){
            console.log(email);
        }
    };
}

var user = creaUsuario('adri');

user.login();
user.setEmail('a@a.com');

setTimeout(user.getEmail,1000);