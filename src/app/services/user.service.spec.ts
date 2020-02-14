import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/User';

describe('UserService', () => {
  let userService: UserService;
  let httpMock: HttpTestingController;

  const user: User = {
    id: 1,
    name: "Keerti",
    email: "keerti@gmail.com",
    password: "12345"
  }
  const dummyUserList: User[] = [
    {
      id: 1,
      name: "Keerti",
      email: "keerti@gmail.com",
      password: "12345"
    },
    {
      id: 2,
      name: "Keerti Patil",
      email: "keertipatil@gmail.com",
      password: "123456"
    }
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });

    //inject the services
    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should create the new user', () => {
    userService.createUser(user);
  });

  it('should get the userlist successfully', () => {
    userService.getUsersList().subscribe((data: any) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummyUserList);
    });
    const req = httpMock.expectOne('http://localhost:8080/getAllUsers', 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(dummyUserList);
    // httpMock.verify();
  });

});
