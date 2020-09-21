# Day 2

## Installing Nodemon

```
npm install -g nodemon
```

## HTTP Status Codes

[https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Code Snippets

### jQuery AJAX Calls

```
$.ajax({
  type: "POST",
  url: "/path/",
  data: JSON.stringify(obj),
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function(result){
    
  },
  error: function(error) {
    
  }
});
```
