app.post('/submit', (req, res) => {
    const { name, email, message, honeypot } = req.body;

    if (honeypot) {
        return res.send("Thanks, we'll be in touch.");
    }

    

    res.send("Thanks, we'll be in touch.");
});