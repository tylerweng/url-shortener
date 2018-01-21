# url-shortener

## Summary
Simple API to create shortened urls a la [bitly][bitly].
Built with [Express.js][Express.js] and [MongoDB][MongoDB].

## Sample API Calls

```bash
Request:
curl -i -H 'Content-Type: application/json' -d '{"full_url": "https://www.mongodb.com/lp/contact/mongodb-professional"}' localhost:8081/api

Response:
full_url: https://www.mongodb.com/lp/contact/mongodb-professional successfully converted to _id: XUJ0g

localhost:8081/XUJ0g now redirects to https://www.mongodb.com/lp/contact/mongodb-professional
```

[bitly]: https://www.bitly.com
[Express.js]: https://www.expressjs.com
[MongoDB]: https://www.mongodb.com
