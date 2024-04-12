//The code defines a well-structured class for representing Post objects with clear properties and a constructor for initialization.

//This code defines a class named Post using the class keyword. This class serves as a blueprint for creating Post objects in your application.
//The class defines four properties:
/**
 @var userId: A number representing the user who created the post.
 @var id: A number representing the unique identifier of the post.
 @var title: A string representing the title of the post.
 @var body: A string representing the content of the post body.
 */

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  //The class defines a constructor function using the constructor keyword. The constructor is responsible for initializing the properties of a newly created Post object.
  //It takes four arguments
  /**
   * @param userId The user ID for the post (number).
   * @param id The unique ID of the post (number).
   * @param title The title of the post (string).
   * @param body The content of the post body (string).
   */
  //Inside the constructor, the this keyword is used to assign the argument values to the corresponding object properties.
  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
