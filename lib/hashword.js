/*!
 * hashword
 * MIT Licensed
 */
exports.version = '0.1.2';

var BCrypt = require('./bcrypt').BCrypt;
var utils = require('./utils');

exports.hashword = function (iterationCountLog2) {
    //iterationCountLog2 should be greater than 3 and less than 32; defaults to 8;
    this.bcrypt = new BCrypt(iterationCountLog2);
};

exports.hashword.prototype.hashPassword = function (password) {
    var salt = this.bcrypt.genSalt();
    return this.bcrypt.hash(password, salt);
};

exports.hashword.prototype.checkPassword = function (password, storedHash) {
    var salt = storedHash.substring(0, 29);
    var hash = this.bcrypt.hash(password, salt);
    return hash == storedHash;
};

exports.hashword.prototype.generatePassword = function (length) {
    l = length || 12;
    l = l < 8 ? 8 : l;
    l = l > 24 ? 24 : l;
    //Length of generateed password should be from 8 to 24. Defaults to 12.
    g = function () {
        c = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        p = '';
        for (i = 0; i < l; i++) {
            p += c.charAt(Math.floor(Math.random() * 62));
        }
        return p;
    };
    p = g();
    while (!/[A-Z]/.test(p) || !/[0-9]/.test(p) || !/[a-z]/.test(p)) {
        p = g();
    }
    return p;
};