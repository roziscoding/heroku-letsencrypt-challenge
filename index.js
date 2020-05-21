const morgan = require('morgan');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const CHALLENGE_PATH = process.env.CHALLENGE_PATH;
const CHALLENGE_CONTENT = process.env.CHALLENGE_CONTENT;

const LISTEN_URL = `/.well-known/acme-challenge/${CHALLENGE_PATH}`;
console.log(`Challenge live at ${LISTEN_URL}`);

app.use(morgan(':method :url :status :response-time ms'));

app.get(LISTEN_URL, (_, res) => {
    res.send(CHALLENGE_CONTENT);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
