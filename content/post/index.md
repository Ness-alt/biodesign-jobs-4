---
title: "Post a Role"
layout: "single"
hidemeta: true
---

We'd love to hear from you! Whether you have questions about posting jobs, need technical support, or want to provide feedback, our team is here to help.

<div class="contact-form">
    <form name="contact" method="POST" data-netlify="true">
        <div class="form-group">
            <label for="name">Name *</label>
            <input type="text" name="name" id="name" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" name="email" id="email" required>
        </div>
        
        <div class="form-group">
            <label for="subject">Subject *</label>
            <select name="subject" id="subject" required>
                <option value="">Please select...</option>
                <option value="job-posting">Job Posting Inquiry</option>
                <option value="technical-support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="feedback">General Feedback</option>
                <option value="other">Other</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="message">Message *</label>
            <textarea name="message" id="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" class="button">Send Message</button>
    </form>
</div>

<style>
.contact-form {
    max-width: 600px;
    margin: 2rem 0;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.form-group textarea {
    resize: vertical;
}

.contact-info {
    margin-top: 3rem;
    padding: 1.5rem;
    background: #f5f5f5;
    border-radius: 8px;
}
</style>


