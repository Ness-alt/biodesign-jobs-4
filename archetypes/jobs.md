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
section: "jobs"
---
