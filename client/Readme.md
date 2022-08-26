## LOCAL SET UP

1. Make a `.env` file similiar to the `.env.example`.
2. Run `npm run dev` to start a local dev server at port:5000

## View the [PostManCollection](https://www.getpostman.com/collections/c4646abd46f3fff405f8)

## ROUTES

### 1. GET ALL POST

* ROUTE - `{BASE_URL}/posts/?page=1`
* Type - **GET**
* SUCCESS STATUS - *200*
* PARAMS - 
 ```page - Integer```

### 2. CREATE AND ADD A NEW POST TO THE DATABASE

 * ROUTE - `{BASE_URL}/posts/` 
* Type - **POST**
* SUCCESS STATUS - *201*
* Example **REQUEST** Body Raw (Json) 
    ```
    {
        "title":"Title_Of_Post",
        "message":"Message_By_The_Post",
        "selectedFile":"BUFFER:URL_OF_FILE",
        "creator":"Test User",
        "tags":["First","Second"]
    }
    ```

* Example **RESPONSE** 
    ```
    {
        "title":"Title_Of_Post",
        "message":"Message_By_The_Post",
        "creator": "Test User",
        "tags": [
            "First",
            "Second"
        ],
        "selectedFile": "BUFFER:URL_OF_FILE",
        "likeCount": 0,
        "createdAt": "2022-08-05T16:57:17.230Z",
        "_id": "62ed4cc31be4cd94ece69217",
        "__v": 0
    }
    ````
###  3. GET POST BY ID

* ROUTE - `{BASE_URL}/posts/:id`
* Type - **GET**
* SUCCESS STATUS - *200*
* PARAMS - 
 ```id - UNIQUE_ID_THROUGH_MONGODB```

*  Example **RESPONSE** - JSON - 
    ```
    {
        "_id": "62ed4cc31be4cd94ece69217",
        "title":"Title_Of_Post",
        "message":"Message_By_The_Post",
        "creator": "Test User",
        "tags": [
            "First",
            "Second"
        ],
        "selectedFile": "BUFFER:URL_OF_FILE",
        "likeCount": 0,
        "createdAt": "2022-08-05T16:57:17.230Z",
        "__v": 0
    }
    ```

### 4. Update Post and Content

* ROUTE - `{BASE_URL}/posts/:id`
* Type - **PATCH**
* SUCCESS STATUS - *200*
* PARAMS -
 ```id - UNIQUE_ID_THROUGH_MONGODB```
* Example **REQUEST** BODY - Raw Json
    ```
    {
        "title":"UpdatedTitle",
        "message":"UpdatedMessage",
        "selectedFile":"FILE_URL",
        "creator":"Test User",
        "tags":["First","Second","ModifiedThird"]
    }
    ```

* Example **RESPONSE** Body -
    ```
    {
        "creator": "Test User",
        "title": "UpdatedTitle",
        "message": "UpdatedMessage",
        "tags": [
            "First",
            "Second",
            "ModifiedThird"
        ],
        "selectedFile": "FILE_URL",
        "_id": "62ed4cc31be4cd94ece69217"
    }
    ```

### 5. Delete a Post by Id

* ROUTE - `{BASE_URL}/posts/:id`
* Type - **DELETE**
* SUCCESS STATUS - *200*
* PARAMS -
 ```id - UNIQUE_ID_THROUGH_MONGODB```

 * Example **RESPONSE** Body -

    ```
    {
        "message": "Post deleted successfully."
    }
    ```

### 6. Like a Post by Id

* ROUTE - `{BASE_URL}/posts/:id/like`
* Type - **PATCH**
* SUCCESS STATUS - *200*

* PARAMS -
 ```id - UNIQUE_ID_THROUGH_MONGODB```

 * Example **Response** 

 ```
 {
    "_id": "62ed69138ad5ded1f635e54c",
    "title": "Test Post Content",
    "message": "Message",
    "creator": "Test User",
    "tags": [
        "First",
        "Second"
    ],
    "selectedFile": "BUFFER",
    "likeCount": 1,
    "createdAt": "2022-08-05T19:01:36.240Z",
    "__v": 0
}
 ```

### 7. GET POSTS BY SEARCH

* ROUTE - `{BASE_URL}/posts/search?searchQuery=&tags=`
* Type - **GET**
* SUCCESS STATUS - *200*

* PARAMS 

**searchQuery** - *"STRING_SEARCHES_THROUGH_TITLES_USING_REGEX"*

**tags** - *"SEARCH_POST_BY_TAGS"*

* Example **RESPONSE** 
    ```
    {
        "data": [
            {
                "_id": "62ed69138ad5ded1f635e54c",
                "title": "Test Post Content",
                "message": "Message",
                "creator": "Test User",
                "tags": [
                    "First",
                    "Second"
                ],
                "selectedFile": "BUFFER",
                "likeCount": 1,
                "createdAt": "2022-08-05T19:01:36.240Z",
                "__v": 0
            }
        ]
    }
    ```

### 8. ADD POST TO BOOKMARKS

* ROUTE - `{BASE_URL}posts/:id/bookmark`
* Type - **PATCH**
* SUCCESS STATUS - *200*

* PARAMS -
**id**:*UNIQUE_ID_OF_THE_POST_TO_BE_BOOKMARKED*

* Example **REQUEST**
    ```
    {
  name: 'fabio-comparelli-uq2E2V4LhCY-unsplash.jpg',
  content: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/ ...
   }
    ```

* Example **Response** 
    ```
        {
            "message": {
                "PostId": "62fbf22ed199fc9c576a7cad",
                "_id": "62fbf277d199fc9c576a7cb3",
                "__v": 0
            }
        }
    ```

### 9. GET BOOKMARKED POSTS

* ROUTE - `{BASE_URL}/posts/bookmarks/?userid=default`
* Type - **GET**
* SUCCESS STATUS - *200*

* PARAMS 
userId= USER_ID_OF_THE_USER

* Example **Response** 
    ```
        {
            "message": {
                "PostId": "62fbf22ed199fc9c576a7cad",
                "_id": "62fbf277d199fc9c576a7cb3",
                "__v": 0
            }
        }
    ```

### 9. Messages Page

* ROUTE - `{BASE_URL}/message`
* Type - **UI Improvement**

### 10. User Profile Pages

* ROUTE - `{BASE_URL}/UserProfile`

For example consider a website named "sampleHomePage.com" then to view the User Profile page , the URL is "sampleHomePage.com/UserProfile" .