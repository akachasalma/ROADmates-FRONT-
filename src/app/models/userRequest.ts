export class Address {
  street: string;
  housenumber: string;
  zipcode: string;
  

  constructor(street: string, housenumber : string, zipcode: string) {
    this.street = street;
    this.housenumber= housenumber;
    this.zipcode = zipcode;
  
  }
}

export class UserRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: string;
  birthday: Date;
  identityCard: string;
  address: Address;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    phonenumber: string,
    birthday: Date,
    identityCard: string,
    address: Address
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.phonenumber = phonenumber;
    this.birthday = birthday;
    this.identityCard = identityCard;
    this.address = address;
  }
}
