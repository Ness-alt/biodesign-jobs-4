# Biodesign Jobs Website

A Hugo-powered job board and content platform for the biodesign field, built with the PaperMod theme.

## Getting Started

1. Install Hugo (extended version):
   ```bash
   brew install hugo # macOS
   ```

2. Clone this repository:
   ```bash
   git clone <repository-url>
   cd biodesign-jobs
   ```

3. Start the development server:
   ```bash
   hugo server -D
   ```

The site will be available at `http://localhost:1313/`

## Adding Content

### Creating a New Job Posting

1. Use Hugo's built-in command:
   ```bash
   hugo new content jobs/job-title.md
   ```

2. Edit the front matter with job details:
   ```yaml
   ---
   title: "Job Title"
   date: YYYY-MM-DDT00:00:00-04:00
   validThrough: YYYY-MM-DDT00:00:00-04:00
   draft: false
   employmentType: "FULL_TIME"
   company: "Company Name"
   companyUrl: "https://company-website.com"
   companyLogo: "/images/companies/company-logo.png"
   streetAddress: "Street Address"
   city: "City"
   region: "State"
   country: "Country"
   salaryCurrency: "USD"
   salaryValue: 100000
   salaryUnit: "YEAR"
   tags: ["tag1", "tag2"]
   ---
   ```

3. Add the job description, requirements, and other details in Markdown format below the front matter.

### Creating a New Article

1. Create a new article:
   ```bash
   hugo new content articles/article-title.md
   ```

2. Edit the front matter:
   ```yaml
   ---
   title: "Article Title"
   date: YYYY-MM-DDT00:00:00-04:00
   draft: false
   description: "Brief description of the article"
   tags: ["tag1", "tag2"]
   author: "Author Name"
   showToc: true
   TocOpen: false
   ---
   ```

3. Write your article content in Markdown format below the front matter.

## File Structure

```
biodesign-jobs/
├── archetypes/       # Content templates
├── assets/           
│   └── css/          # Custom CSS
├── content/
│   ├── jobs/         # Job postings
│   ├── articles/     # Articles
│   ├── about/        # About page
│   └── contact/      # Contact page
├── layouts/          # Custom layouts
├── static/          
│   └── images/       # Image assets
└── hugo.toml         # Site configuration
```

## Configuration

### Google Analytics

1. Get your Google Analytics tracking ID
2. Add it to `hugo.toml`:
   ```toml
   googleAnalytics = "G-XXXXXXXXXX"
   ```

### Adding Company Logos

1. Place company logos in `static/images/companies/`
2. Reference in job posts using:
   ```yaml
   companyLogo: "/images/companies/company-name-logo.png"
   ```

## SEO

The site includes:
- Schema.org JobPosting structured data for job listings
- Automatic sitemap generation
- Meta tags for social sharing
- Robots.txt configuration

## Development

### Custom CSS

Add custom styles to `assets/css/custom.css`. The file is already configured in `hugo.toml`.

### Creating New Templates

1. Place new templates in `layouts/`
2. Override theme templates by matching the theme's directory structure

## Deployment

1. Build the site:
   ```bash
   hugo serve
   ```

2. The built site will be in the `public/` directory

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Submit a pull request

## License

[Add your license information here]
