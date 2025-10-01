---
title: "Curriculum Vitae"
permalink: /cv/
layout: single
author_profile: true
---

# Education
{% for item in site.data.cv.education %}
  **{{ item.degree }}**, {{ item.institution }}   
  {{ item.dates }}.  
  *Advisors: {{ item.advisors }}*
{% endfor %}

# Research Experience
{% for item in site.data.cv.experience %}
  **{{ item.title }}**, {{ item.institution }}  
  {{ item.dates }}   
  *Advisor(s): {{ item.advisor | default: item.advisors }}*
{% endfor %}

# Community Service
{% for item in site.data.cv.service %}
  **{{ item.role }}**, {{ item.organization }}  
  {{ item.dates }}
{% endfor %}
