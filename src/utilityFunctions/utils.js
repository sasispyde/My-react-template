import CryptoJS from 'crypto-js';

export const ENCRYPTEDATA = (data) => {
	try {
		var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRECT_KEY).toString();
		return encryptedData;
	} catch(err) {
		console.log(err);
	}
}

export const DECRYPTEDATA = (data) => {
	try {
		var bytes  = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRECT_KEY);
	    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
	    return decryptedData;
	} catch(err) {
		console.log(err);
		return {};
	}
}