# Node [hashword](https://www.npmjs.org/package/hashword)

~~A pure JavaScript password hashing framework.~~

Now, just a wrapper around bcrypt

## Installation

Use NPM to install:

    npm install hashword

## Usage

    const Hashword = require('hashword');

    //Change hash iteration count if needed. Min:8. Max:31. Defaults to 8.
    const hashword = new Hashword(12);

    //Generate a random string of 10 characters.
    let password = await hashword.generate(10);

    //Generate hash of the password with a random key.
    let hash = await hashword.hash(password);

    //Verify the hash and password
    let success = await hashword.check(password, hash);

## License
(The MIT License)

Copyright (c) 2020 Brahma Dev;

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

~~Performance / Benchmark~~

~~I have added a simple benchmark against BCrypt for generating hash and comparing password.~~

~~On average Hashword turns out to be **20% faster** than BCrypt.~~
