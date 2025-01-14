const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Callback endpoint
app.post('/tavus-callback', (req, res) => {
    const callbackData = req.body;

    console.log("Callback Data Received:", callbackData);

    // Process the data (e.g., log, store in DB, notify user)
    if (callbackData.status === "success") {
        console.log(`Replica "${callbackData.replica_name}" created successfully.`);
    } else {
        console.error(`Replica creation failed: ${callbackData.details.error_message}`);
    }

    // Respond to Tavus API
    res.status(200).send("Callback received.");
});

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
