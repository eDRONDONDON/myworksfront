var user ={
  name : prompt('name'),
  lastName : prompt('last')
}
Object.defineProperty(user,"getLogin",{
  get:function(){
    return this.name.shift() +' '+this.lastName;
  }

});
alert(user.getLogin);
