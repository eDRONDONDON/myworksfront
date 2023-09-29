let user ={}

Object.defineProperties(user,{
  name : { value : prompt('enter name')
},
  lastName : { value : prompt('enter lastname')
},
  getLogin : {
    get:function(){
    return this.name.charAt(0) + this.lastName;
    }
  }
});
alert(user.getLogin.toLowerCase());
