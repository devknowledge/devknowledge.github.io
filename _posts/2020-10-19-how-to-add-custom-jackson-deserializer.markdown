---
permalink: java/how-to-add-custom-jackson-deserializer
layout: post
title: 'How to add custom Jackson deserializer'
tags:
  - java
  - jackson
category: java
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1511075675422-c8e008f749d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80
---

In this post I'm going to share with you how a use case where where we can use custom Jackson deserializer

Supposing we want to consume the [Placeholder](https://jsonplaceholder.typicode.com/) `/user/1` API

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

And we have defined our `User` like this in our source code

```java
@Data
public class User {
    private String username;
    private String email;
    private String companyName;
}
```

In this case, we need:

- Implement a new class that extends the `StdDeserializer` Jackson abstract

  ```java
  public class UserDeserializer extends StdDeserializer<User> {

      public UserDeserializer() {
          this(null);
      }

      public UserDeserializer(Class<?> vc) {
          super(vc);
      }

      @Override
      public User deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
          try {
              JsonNode userNode = jsonParser.getCodec().readTree(jsonParser);
              String username = userNode.get("username").asText();
              String email = userNode.get("email").asText();
              JsonNode companyNode = userNode.get("company");
              String companyName = companyNode.get("name").asText();
              return new User(username, email, companyName);
          } catch (Exception e) {
              throw new JsonProcessingException("error while deserializing user object", e);
          }
      }
  }
  ```

- Register the deserializer while creating the Jackson `ObjectMapper` mapper

  ```java
  public class Main {
      public static final String JSONPLACEHOLDER_USER_API = "https://jsonplaceholder.typicode.com/users/1";

      public static void main(String[] args) throws IOException {
          HttpClient httpClient = HttpClientBuilder.create().build();
          InputStream httpResponse = httpClient
                  .execute(new HttpGet(JSONPLACEHOLDER_USER_API))
                  .getEntity().getContent();
          ObjectMapper mapper = createObjectMapper();
          User user = mapper.readValue(httpResponse, User.class);
      }

      public static ObjectMapper createObjectMapper() {
          ObjectMapper mapper = new ObjectMapper();
          SimpleModule module = new SimpleModule();
          module.addDeserializer(User.class, new UserDeserializer());
          mapper.registerModule(module);
          return mapper;
      }
  }
  ```

I hope you find it useful :)

## References

- [Jackson website](https://github.com/FasterXML/jackson)
- [Bealdung jackson-deserialization article](https://www.baeldung.com/jackson-deserialization)
