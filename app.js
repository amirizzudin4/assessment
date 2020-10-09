const got = require("got");

const requestFromUrl = async (url) => {
	try {
		let res = await got.get(url,{retry:0});
		console.log(`your req status code is ${res.statusCode}`);
		console.log(res.body);
	} catch (e) {
		console.log(`your error code is ${e.response.statusCode}`);
	}
};

console.log('Correct URL...');
requestFromUrl('https://api.github.com/users/amirizzudin4');

setTimeout(()=>{
	console.log('Incorrect URL...');
	requestFromUrl('https://api.github.com/userss');
},2000)


