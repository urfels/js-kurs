class Address {
  constructor(street, postCode, city) {
    this.street = street;
    this.postCode = postCode;
    this.city = city;
  }
  //auf Werte Lesend zugreifen

  //werte setzen

  //status des objectes zurück geben

  schowAddress(){
    return this.street + " " + this.postCode + " " + this.city;
  }
}
