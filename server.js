const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Request.html'));
});

app.post('/api', (req, res) => {
    const data = req.body.data || [];
    const userId = "john_doe_17091999";
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";

    
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));

    
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().reverse()[0]] : [];

    const response = {
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.json(response);
});

app.get('/api', (req, res) => {
    const operationCode = "OP12345";
    res.json({ operation_code: operationCode });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
