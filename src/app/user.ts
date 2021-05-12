export class User {
  id: number;
  emailId: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  password: string;

  constructor() { }
}
export class Booking {
  fromDate: string;
  toDate: Date;
  noOfRoom: number;
  noOfGuest: number;
  room: string;
  name: string;

  constructor() { }
}