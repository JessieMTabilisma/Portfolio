import { useEffect, useState } from 'react';

const client = require('contentful').createClient({
	space: process.env.SPACE_ID,
	accessToken: process.env.ACCESS_TOKEN,
});

// funtion IndexPage() {
//     async function 
// }

// export default IndexPage();