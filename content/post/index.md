---
title: "Hiring is hard in the bio-economy"
layout: "single"
hidemeta: true
hidetitle: true
---
Today companies have two options:
Use a big job board and get flooded with hundreds of applicants
Spend 20k+ on a recruiting agency per hire

One costs money. The other costs time. Both are expensive!

Biodesign Jobs connects you to the right people for less time and money. Our 10,000+ member audience is a self-selected group of qualified and mission-aligned candidates. They tend to train faster and stay in their positions longer than other employees because they want to be part of the bio-economy.


## What some of our customers say

>“We filled our role faster than expected, the quality of the applicants was exceptional!” - Founder, Fun Stuff Design, a bio-focused industrial design studio

>“It’s really exciting to see candidates come through that are stoked on the mission and have the potential to boost teams’ overall scientific comprehension.” - Hiring Manager, Bunsen, a science-focused digital design studio

>“I no longer use the larger job boards because people just click apply and move on. Half the time they don't know who we are or what we do, nor do they care. With Biodesign Jobs it's different” - HR Director at a VC-backed hardware company.

*For a limited time, we're offering posts for just $99. This is less than half of what many similar boards charge. We do this because we've been in your shoes. We know how challenging it is to find talent, and we want Biodesign Jobs to be the easiest decision in your talent search.*

<!-- filepath: content/post/index.md or a new layout file -->
<!-- ... existing markdown content ... -->

<h2>Post a New Job</h2>
<form id="job-post-form">
    <label for="title">Job Title:</label><br>
    <input type="text" id="title" name="title" required><br>

    <label for="company">Company Name:</label><br>
    <input type="text" id="company" name="hiringOrganization name" required><br> <!-- Match NocoDB field name -->

    <label for="description">Job Description (Markdown supported):</label><br>
    <textarea id="description" name="description" rows="10" required></textarea><br>

    <label for="applyToLink">Application Link (URL):</label><br>
    <input type="url" id="applyToLink" name="applyToLink"><br>

    <label for="applyToEmail">Application Email:</label><br>
    <input type="email" id="applyToEmail" name="applyToEmail"><br>

    <!-- Add other relevant fields matching your NocoDB table structure -->
    <!-- e.g., employmentType, city, region, etc. -->

    <button type="submit">Submit Job Posting</button>
</form>

<div id="form-status"></div>

<script>
  // Frontend JavaScript will go here (see next step)
</script>