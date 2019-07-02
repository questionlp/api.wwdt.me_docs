## General Info

All of the Wait Wait... Don't Tell Me! Stats API endpoints are implemented to
only accept `GET` HTTP requests. Other methods are not supported and will
return `405 Method Not Allowed` when such requests are attempted.

Due to the use of a `return 301` statement used to redirect non-HTTPS request
URIs to the corresponding HTTPS request URIs, this will, in most cases, cause
any non-`GET` requests to convert into `GET` requests.