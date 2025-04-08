const axios = require('axios');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Configuration from environment variables
const API_URL = process.env.NOCODB_URL || 'https://app.nocodb.com/api/v2/tables/m0npw5ezr4q4rfv/records?offset=0&limit=25&where=&viewId=vws6w9ju2dz3fcmh';
const API_TOKEN = process.env.NOCODB_APIKEY;

if (!API_TOKEN) {
  console.error('Error: NOCODB_APIKEY environment variable is required');
  process.exit(1);
}

// Function to convert a title to a slug
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Function to format date for Hugo
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString();
}

// Function to create a markdown file for a job
function createJobMarkdown(job) {
  // Map NocoDB fields to Hugo frontmatter
  const frontmatter = {
    title: job.title || 'Untitled Job',
    date: formatDate(job.datePosted) || new Date().toISOString(),
    validThrough: job.validThrough ? formatDate(job.validThrough) : new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
    draft: false,
    employmentType: job.employmentType || 'FULL_TIME',
    company: job['hiringOrganization name'] || '',
    companyUrl: job.companyUrl || '',
    companyLogo: job['hiringOrganization logo'] || '',
    streetAddress: job.streetAddress || '',
    city: job.addressLocality || '',
    region: job.addressRegion || '',
    country: job.country || '',
    salaryCurrency: job.salaryCurrency || 'USD',
    salaryValue: job.salaryValue || 0,
    salaryUnit: job.salaryUnit || 'YEAR',
    tags: job.tags ? job.tags.split(',').map(tag => tag.trim()) : [],
    applyto: job.applyto || ''
  };

  // Create the markdown content
  let content = '---\n';
  content += yaml.dump(frontmatter);
  content += '---\n\n';
  
  // Add job description
  content += job.description || '[Job description not provided]';

  return content;
}

async function fetchAndCreateJobs() {
  try {
    console.log('Fetching jobs from NocoDB...');
    
    // Fetch data from NocoDB
    const response = await axios.get(API_URL, {
      headers: {
        'xc-token': API_TOKEN
      }
    });
    
    const jobs = response.data.list;
    console.log(`Found ${jobs.length} jobs`);
    
    // Create the content/jobs directory if it doesn't exist
    const jobsDir = path.join(process.cwd(), 'content', 'jobs');
    if (!fs.existsSync(jobsDir)) {
      fs.mkdirSync(jobsDir, { recursive: true });
    }
    
    // Process each job
    for (const job of jobs) {
      const slug = slugify(job.title);
      const filename = `${slug}.md`;
      const filePath = path.join(jobsDir, filename);
      
      // Create the markdown content
      const markdown = createJobMarkdown(job);
      
      // Write to file
      fs.writeFileSync(filePath, markdown);
      console.log(`Created job file: ${filename}`);
    }
    
    console.log('Job creation completed successfully!');
  } catch (error) {
    console.error('Error fetching or processing jobs:', error.message);
    if (error.response) {
      console.error('API response:', error.response.data);
    }
    process.exit(1);
  }
}

// Run the main function
fetchAndCreateJobs();
