class UserService{

  static init(){
  var user = UserService.createUser(1, "Herbert", "xxxx", "herbert@irgendwas.de", "01.01.1900");
  var user2 =UserService.createUser(2, "Felix", "x", "Felix@irgendwas.de", "01.01.1900");
    var user3 =UserService.createUser(3, "Max", "xzzzz", "Max@irgendwas.de", "01.01.1900");
  var userList = new UserList();
  userList.addUser(user);
  userList.addUser(user2);
  userList.addUser(user3)
  //console.log(userList.users);
  UserService.createTableHeaderandContent(user);
  UserService.showUsers(userList.users);

  }

  static createUser(id, name, password, email, birthday){
    var user = new User(id, name, password, email, birthday);
      return user;
  }

  static showUsers(userList){
    var result = [];
    var resultContent = "";
    for (var i = 0; i < userList.length; i++) {
      resultContent = resultContent + "<tr>"
    let user =  userList[i];
    var result = UserService.createTableHeaderandContent(user);
    resultContent = resultContent + result[1] + "</tr>"

    }
    document.getElementById("header").innerHTML = result[0];
    document.getElementById("content").innerHTML = resultContent;

  }




  static createTableHeaderandContent(user){
  var columnNames = Object.keys(user);
    var columnValueArray = Object.values(user);
  var resultHeader = "";
  var resultContent = "<tr>";
  for (var i = 0; i < columnNames.length; i++) {

    var wrongColumnName = columnNames[i];
    var correctColumnName = wrongColumnName.substring(0,1).toUpperCase()+wrongColumnName.substring(1);


    var columnName = "<th>" + correctColumnName + "</th>";
    resultHeader += columnName;
    var columnValue = "<td>" + columnValueArray[i] +"</td>";
    resultContent += columnValue;



}

  return [resultHeader, resultContent];



}

   static changePassword(oldPassword, newPassword, repeatedNewPassword){
      return "passwordChanged";
  }




}
