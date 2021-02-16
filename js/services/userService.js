class UserService{

  static init(){
  var user = UserService.createUser(1, "Herbert", "xxxx", "herbert@irgendwas.de", "01.01.1900");
  var users = UserService.createUsers("Jannes", "Marie", "Anton","Ole");
  UserService.createTableUser(user);
  UserService.createUsers(users)
  UserService.showUsers(users)
  }

  static createUser(id, name, password, email, birthday){
    var user = new User(id, name, password, email, birthday);
      return user;
  }

  static createUsers(Benutzer1, Benutzer2, Benutzer3, Benutzer4){
    var users = new Users(Benutzer1, Benutzer2, Benutzer3, Benutzer4)

    return users;
  }

  static showUsers(users){
    var usersNames = Object.values(users);
    document.getElementById("usersNames").innerHTML = usersNames;

  }


static createTableUser(user){
  var columnNames = Object.keys(user);
  var result = "<tr>";
  for (var i = 0; i < columnNames.length; i++) {
    var columnName = "<th>" + columnNames[i] + "</th>";
    result += columnName;
}
  result += "</tr>";

  var columnValueArray = Object.values(user);
  result += "<tr>"
  for (var i = 0; i < columnValueArray.length; i++) {
    var columnValue = "<td>" + columnValueArray[i] +"</td>";
    result += columnValue;

}
    result += "</tr>"

    document.getElementById("tableUser").innerHTML = result;



}

   static changePassword(oldPassword, newPassword, repeatedNewPassword){
      return "passwordChanged";
  }




}
