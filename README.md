# [Unirest.io](http://unirest.io)

Yesterday we released our newest open source project, which we called unicorn, unfortunately that was also the name of two other open source projects. We really dropped the ball and have been working hard to clean up the mess.  We would like to apologize to anyone in the Ruby or Python community who was confused or pissed off.  Hopefully you can look past our mistake and see the value in this project.

Since yesterday we have decided on a new name, Unirest, which we think is a great fit for the project.  We also made a <a href="http://unirest.io">new website</a>, changed out all the docs, and updated our website which autogenerates unirest API snippets.

### What problem does Unirest solve?

We’ve noticed that a lot of people have trouble wrapping their head around using public and private API’s. With API keys, varying endpoint architechture, differing response types, etc… there is a lot to think about.

Unirest tries to simplify the process by abstracting a lot of the boilerplate and focusing on the core REST verbs that we all know and love (GET, POST, PUT, UPDATE, DELETE). Similarly its methods and response structure are the same in all the supported languages. It works for all REST APIs, available both on our own mashape API marketplace and abroad.

We truly believe that APIs are changing the way we make software and by extension the world at large. Never has so much power been in the hands of a solo developer with an idea.  Our hope is that the developer community that we love will find this project helpful and build a ton of great stuff on top of it.￼

### Let's see some code

The following code submits a post request to httpbin.org

#### Java

```java
HttpResponse<JsonNode> jsonResponse = Unirest.post("http://httpbin.org/post")
  .header("accept", "application/json")
  .field("parameter", "value")
  .field("foo", "bar")
  .asJson();
```


#### PHP
```php
$response = Unirest\Request::post("http://httpbin.org/post",
  array( "Accept" => "application/json" ),
  array(
    "parameter" => 23,
    "foo" => "bar"
  )
);
```


#### Ruby
```ruby
response = Unirest::post "http://httpbin.org/post",
  { "Accept" => "application/json" },
  {
    :parameter => 23,
    :foo => "bar"
  }
```

#### Python
```python
response = unirest.post("http://httpbin.org/post",
  { "Accept": "application/json" },
  { "parameter": 23, "foo": "bar" }
)
```


#### Objective-C
```objective-c
NSDictionary* headers = [NSDictionary dictionaryWithObjectsAndKeys:@"application/json", @"accept", nil];
NSDictionary* parameters = [NSDictionary dictionaryWithObjectsAndKeys:@"value", @"parameter", @"bar", @"foo", nil];

HttpJsonResponse* response = [[Unirest post:^(MultipartRequest* request) {
  [request setUrl:@"http://httpbin.org/post"];
  [request setHeaders:headers];
  [request setParameters:parameters];
}] asJson];
```
