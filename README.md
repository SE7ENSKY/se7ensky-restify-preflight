se7ensky-restify-preflight
==========================

Drop-in preflight for Restify with support of Cookie authorization.

Features
--------
- cookie support!
- preflight handling
- simple and working CORS headers

Installing
----------
```bash
$ npm install se7ensky-restify-preflight
```

Usage
-----
server.coffee:
```coffee
...
preflightEnabler = require 'se7ensky-restify-preflight'
preflightEnabler server
...
```

ToDo
----
- make it more flexible?

Contributing
------------
Feel free to post issues or pull requests at [github repo](https://github.com/Se7enSky/se7ensky-restify-preflight).

Authors
-------

  - [Se7enSky studio](http://github.com/Se7enSky) – [official website](http://www.se7ensky.com/)
  - [Ivan Kravchenko](http://github.com/krava)

License
-------

(The MIT License)

Copyright (c) 2008-2013 Se7enSky studio &lt;info@se7ensky.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
