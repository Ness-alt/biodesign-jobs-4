---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
validThrough: {{ now.AddDate 0 1 0 }}
draft: true
employmentType: "FULL_TIME" # FULL_TIME, PART_TIME, CONTRACT, TEMPORARY, INTERN, VOLUNTEER, PER_DIEM
company: ""
companyUrl: ""
companyLogo: ""
streetAddress: ""
city: ""
region: ""
country: ""
salaryCurrency: "USD"
salaryValue: 0
salaryUnit: "YEAR" # HOUR, DAY, WEEK, MONTH, YEAR
tags: []
applyto: ""
---

{{/* Schema.org JobPosting structured data */}}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "{{ .Title }}",
  "datePosted": "{{ .Date }}",
  "validThrough": "{{ .Params.validThrough }}",
  "employmentType": "{{ .Params.employmentType }}",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "{{ .Params.company }}",
    "sameAs": "{{ .Params.companyUrl }}",
    "logo": "{{ .Params.companyLogo }}"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "{{ .Params.streetAddress }}",
      "addressLocality": "{{ .Params.city }}",
      "addressRegion": "{{ .Params.region }}",
      "addressCountry": "{{ .Params.country }}"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "{{ .Params.salaryCurrency }}",
    "value": {
      "@type": "QuantitativeValue",
      "value": {{ .Params.salaryValue }},
      "unitText": "{{ .Params.salaryUnit }}"
    }
  }
}
</script>

{{/* Job details section */}}
<div class="job-meta">
  <div class="job-meta-item">
    <span class="job-meta-label">Company:</span>
    <span><a href="{{ .Params.companyUrl }}" target="_blank">{{ .Params.company }}</a></span>
  </div>
  {{ if .Params.companyLogo }}
  <img src="{{ .Params.companyLogo }}" alt="{{ .Params.company }} logo" class="company-logo">
  {{ end }}
  <div class="job-meta-item">
    <span class="job-meta-label">Location:</span>
    <span>{{ .Params.city }}, {{ .Params.region }}, {{ .Params.country }}</span>
  </div>
  <div class="job-meta-item">
    <span class="job-meta-label">Employment Type:</span>
    <span>{{ .Params.employmentType }}</span>
  </div>
  <div class="job-meta-item">
    <span class="job-meta-label">Salary:</span>
    <span>{{ .Params.salaryCurrency }} {{ .Params.salaryValue }}/{{ .Params.salaryUnit }}</span>
  </div>
  <div class="job-meta-item">
    <span class="job-meta-label">Valid Through:</span>
    <span>{{ .Params.validThrough }}</span>
  </div>
</div>

{{/* Job description */}}
[Job description goes here]

{{/* Skills and requirements */}}
## Requirements
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## Responsibilities
- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]

## Benefits
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

<div class="read-more-section">
  <a href="{{ .Params.companyUrl }}/careers" class="apply-now-button" target="_blank">Apply Now</a>
</div>


