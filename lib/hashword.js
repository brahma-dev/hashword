/*!
 * hashword
 * MIT Licensed
 */
exports.version = '0.1.1';

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