const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
    ? 'http://myapidomain.com'
    : 'http://localhost:8080';

export default PAYMENT_SERVER_URL;

// const PAYMENT_SERVER_URL = 'https://010dd477.ngrok.io
//
// export default PAYMENT_SERVER_URL;