---
permalink: /
title: "Aaron Werlen"
author_profile: false
hide_title: true
redirect_from:
  - /about/
  - /about.html
---

<section id="about" class="home-hero home-anchor-section">
  <div class="home-hero__content">
    <p class="home-hero__eyebrow">Planetary Science PhD Student · UCLA</p>
    <h1>Planetary interiors, atmospheres, and volatile chemistry.</h1>
    <div id="research" class="home-hero__summary home-anchor-section">
      <p class="home-hero__lead">I am a PhD student in Prof. Edward D. Young's group at UCLA, where I study the chemical evolution of super-Earths and sub-Neptunes from formation through early evolution.</p>
      <p>My work focuses on how volatile elements such as hydrogen, carbon, nitrogen, and sulfur partition between magma-ocean interiors and planetary atmospheres, and how these exchanges shape atmospheric composition over time.</p>
      <p>I develop thermodynamic and numerical models of interior-atmosphere equilibrium, combining them with planet formation theory and exoplanet observations to better understand the diversity of planetary interiors and atmospheres. I am especially interested in problems linking geochemistry, planetary formation, and atmospheric evolution, and I am always happy to discuss related collaborations.</p>
    </div>
  </div>
  <aside class="home-hero__panel">
    <img src="{{ '/images/profile.png' | relative_url }}" alt="Portrait of Aaron Werlen" class="home-hero__portrait">
    <div class="home-hero__meta">
      <p class="home-hero__name">Aaron Werlen</p>
      <p>PhD Student in Planetary Science at the University of California, Los Angeles</p>
      <ul class="home-hero__facts">
        <li>Los Angeles, CA</li>
      </ul>
      <div class="home-social-links" aria-label="Profile links">
        <a class="home-social-link" href="mailto:werlen@ucla.edu" aria-label="Email Aaron Werlen" title="Email">
          <i class="fas fa-envelope" aria-hidden="true"></i>
          <span class="sr-only">Email</span>
        </a>
        <a class="home-social-link home-social-link--ads" href="https://ui.adsabs.harvard.edu/search/p_=0&q=-docs(99b5c7193e21dde3e67753fa38fc6113)%20author%3A%22Werlen%2C%20A.%22&sort=date%20desc%2C%20bibcode%20desc" target="_blank" rel="noopener noreferrer" aria-label="NASA ADS profile" title="NASA ADS">
          <img src="{{ '/assets/images/nasa_ads_2.svg' | relative_url }}" alt="">
          <span class="sr-only">NASA ADS</span>
        </a>
        <a class="home-social-link" href="https://www.linkedin.com/in/aaron-werlen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
          <i class="fab fa-linkedin-in" aria-hidden="true"></i>
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  </aside>
</section>

<section class="home-section home-section--narrow home-anchor-section">
  <h2>Education</h2>
  <div class="home-timeline">
    <div class="home-timeline__item">
      <span class="home-timeline__date">Present</span>
      <div>
        <h3>University of California, Los Angeles</h3>
        <p>PhD in Planetary Science</p>
        <p>Advisors: Prof. Edward D. Young &amp; Prof. Hilke E. Schlichting</p>
      </div>
    </div>
    <div class="home-timeline__item">
      <span class="home-timeline__date">MSc</span>
      <div>
        <h3>ETH Zurich</h3>
        <p>MSc in Physics</p>
        <p>Thesis: <em>Investigating the Compositions of Planets in Global Chemical Equilibrium</em></p>
        <p>Advisors: Prof. Caroline Dorn &amp; Dr. Simon Grimm</p>
      </div>
    </div>
    <div class="home-timeline__item">
      <span class="home-timeline__date">BSc</span>
      <div>
        <h3>University of Bern</h3>
        <p>BSc in Physics &amp; Astronomy</p>
        <p>Thesis: <em>The Importance of Jeans Escape on H-He Envelopes of Exoplanets Orbiting M-dwarfs</em></p>
        <p>Advisor: Prof. Christoph Mordasini</p>
      </div>
    </div>
  </div>
</section>

<section id="publications" class="home-section home-anchor-section">
  <div class="home-section__intro">
    <h2>Publications</h2>
  </div>

  <div class="pubs-list">
    <h3>First-author publications</h3>
    {% assign first_author_pubs = site.publications | where: "first_author", true | sort: "date" %}
    {% for pub in first_author_pubs reversed %}
      <div class="pub-entry">
        {% if pub.doi %}<a class="pub-entry__link" href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener noreferrer"><span class="pub-entry__citation">{{ pub.authors }} ({{ pub.date | date: "%Y" }}). {{ pub.title }}.{% if pub.journal %} <em>{{ pub.journal }}</em>.{% endif %}{% if pub.volume %} <b>{{ pub.volume }}</b>.{% endif %}{% if pub.page %} {{ pub.page }}.{% endif %}</span></a>{% else %}<span class="pub-entry__citation">{{ pub.authors }} ({{ pub.date | date: "%Y" }}). {{ pub.title }}.{% if pub.journal %} <em>{{ pub.journal }}</em>.{% endif %}{% if pub.volume %} <b>{{ pub.volume }}</b>.{% endif %}{% if pub.page %} {{ pub.page }}.{% endif %}</span>{% endif %}
      </div>
    {% endfor %}
  </div>

  <div class="pubs-list">
    <h3>Co-authored publications</h3>
    {% assign coauthor_pubs = site.publications | where_exp: "pub", "pub.first_author != true" | sort: "date" %}
    {% for pub in coauthor_pubs reversed %}
      <div class="pub-entry">
        {% if pub.doi %}<a class="pub-entry__link" href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener noreferrer"><span class="pub-entry__citation">{{ pub.authors }} ({{ pub.date | date: "%Y" }}). {{ pub.title }}.{% if pub.journal %} <em>{{ pub.journal }}</em>.{% endif %}{% if pub.volume %} <b>{{ pub.volume }}</b>.{% endif %}{% if pub.page %} {{ pub.page }}.{% endif %}</span></a>{% else %}<span class="pub-entry__citation">{{ pub.authors }} ({{ pub.date | date: "%Y" }}). {{ pub.title }}.{% if pub.journal %} <em>{{ pub.journal }}</em>.{% endif %}{% if pub.volume %} <b>{{ pub.volume }}</b>.{% endif %}{% if pub.page %} {{ pub.page }}.{% endif %}</span>{% endif %}
      </div>
    {% endfor %}
  </div>
</section>

<section id="talks" class="home-section home-anchor-section">
  <div class="home-section__intro">
    <h2>Talks &amp; Conferences</h2>
  </div>

  <div class="talks-list">
    <h3>Conferences</h3>
    {% assign conference_talks = site.talks | where: "talk_category", "conference" | sort: "date" %}
    {% for post in conference_talks reversed %}
      <div class="talk-entry">
        <p class="talk-entry__meta">{{ post.date | date: "%b %Y" }} · <b>{{ post.type }}</b> · {{ post.event }}, {{ post.location }}</p>
        {% if post.link %}
          <a class="talk-entry__link" href="{{ post.link }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
        {% else %}
          <p class="talk-entry__title"><i>{{ post.title }}</i></p>
        {% endif %}
      </div>
    {% endfor %}
  </div>

  <div class="talks-list">
    <h3>Invited seminars and talks</h3>
    {% assign invited_talks = site.talks | where: "talk_category", "invited" | sort: "date" %}
    {% for post in invited_talks reversed %}
      <div class="talk-entry">
        <p class="talk-entry__meta">{{ post.date | date: "%b %Y" }} · <b>{{ post.type }}</b> · {{ post.event }}, {{ post.location }}</p>
        {% if post.link %}
          <a class="talk-entry__link" href="{{ post.link }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
        {% else %}
          <p class="talk-entry__title"><i>{{ post.title }}</i></p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</section>

<section id="outreach" class="home-section home-anchor-section">
  <div class="home-section__intro">
    <h2>Outreach</h2>
  </div>

  <div class="outreach-list">
    {% for post in site.outreach reversed %}
      <div class="outreach-entry">
        {% if post.link %}
          <a class="outreach-entry__link" href="{{ post.link }}" target="_blank" rel="noopener noreferrer">
            <span class="outreach-entry__meta">{{ post.date | date: "%b %Y" }} · <b>{{ post.organization }}</b></span>
            <span class="outreach-entry__summary">{{ post.summary }}</span>
          </a>
        {% elsif post.file %}
          <a class="outreach-entry__link" href="{{ post.file }}" target="_blank" rel="noopener noreferrer">
            <span class="outreach-entry__meta">{{ post.date | date: "%b %Y" }} · <b>{{ post.organization }}</b></span>
            <span class="outreach-entry__summary">{{ post.summary }}</span>
          </a>
        {% else %}
          <p class="outreach-entry__meta">{{ post.date | date: "%b %Y" }} · <b>{{ post.organization }}</b></p>
          <p class="outreach-entry__summary">{{ post.summary }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</section>
