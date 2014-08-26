# Node [hashword](https://www.npmjs.org/package/hashword) #

A pure JavaScript password hashing framework.

[![NPM](https://nodei.co/npm/hashword.png?downloadRank=true&downloads=true)](https://nodei.co/npm/hashword.png?downloadRank=true&downloads=true)

## Installation ##

Use NPM to install:

    npm install hashword

## Usage ##

    var hashword = require('hashword');

    //Change hash iteration count if needed. Min:8. Max:31. Defaults to 8. 
    hashword.init(12);
    
    //Generate a random string of 10 characters.
    var password = hashword.generatePassword(10);
    
    //Generate hash of the password with a random key.
    var hash = hashword.hashPassword(password);
    
    //Verify the hash and password
    var success = hashword.checkPassword(password, hash);

## License ##

Uses code from the [jsBCrypt](http://code.google.com/p/javascript-bcrypt/) project licensed under [New BSD License](http://www.opensource.org/licenses/bsd-license.php).

(The MIT License)

Copyright (c) 2014 Afzaalace;

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
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
