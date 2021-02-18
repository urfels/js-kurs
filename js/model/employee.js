class Employee extends User{
  constructor (id, name, password, email, birthday, address, role){
    super(id, name, password, email, birthday, address);
    this.role = role;
  }
}
