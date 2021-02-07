const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.set('port', process.env.PORT || 8000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('Server is up');
});