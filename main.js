<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>HTML Textarea Example</title>
    <style>
        /* Optional styling */
        textarea {
            width: 300px;
            height: 150px;
            padding: 10px;
            font-size: 14px;
            resize: vertical; /* Allow vertical resize only */
        }
    </style>
</head>
<body>

<h2>Feedback Form</h2>

<form action="/submit" method="post">
    <label for="message">Your Message:</label><br><br>
    
    <!-- Textarea element -->
    <textarea id="message" name="message" rows="6" cols="40" placeholder="Type your message here..." required></textarea>
    
    <br><br>
    <button type="submit">Send</button>
</form>

</body>
</html>

<button onclick="alert('Button clicked!')">Click Me</button>

