export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    imageUrl: string;
  }
  
  export const USERS: User[] = [
    {
      id: 1,
      name: "Marian",
      email: "marianboyeamoah@gmail.com",
      password: "test123",
      imageUrl: "blob:http://localhost:4200/d84c86bf-34b0-413c-9486-056e09b2098a"
    },
    {
      id: 2,
      name: "Ama",
      email: "ama@shana.com",
      password: "123456",
      imageUrl: "https://i.pravatar.cc/150?img=7"
    }
  ];