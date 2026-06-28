document.querySelector('form').addEventListener('submit', async(e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const submissionDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    try {
        const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                message,
                date: submissionDate
            })
        });

        if (response.ok) {
            alert("Thank You! Your message has been sent to Pune Explore.");
            window.location.href = "index.html";
            document.querySelector('form').reset();
        }
    } catch (err) {
        console.error(err);
    }
});