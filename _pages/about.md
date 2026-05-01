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
      <p class="home-hero__lead">I am a PhD student working with Prof. Edward D. Young and Prof. Hilke E. Schlichting at UCLA, where I study the chemical evolution of super-Earths and sub-Neptunes.</p>
      <p>My research focuses on the link between planetary interiors and atmospheres during the earliest stages of planetary evolution. Many of these planets likely passed through magma ocean phases, and in sub-Neptunes such conditions may persist for long periods of time. Under these extreme conditions, interiors and atmospheres are chemically coupled: they exchange material, evolve together, and can produce atmospheric compositions that differ fundamentally from those expected if the atmosphere were treated in isolation.</p>
      <p>This problem has become especially timely with the rise of JWST, which is now beginning to place meaningful constraints on the atmospheres of super-Earths and sub-Neptunes. A central question is how to interpret those observations physically: what atmospheric compositions are set by formation, what is reshaped by interaction with the interior, and what this tells us about the origin and evolution of these planets.</p>
      <p>To address this, I combine thermodynamics, planetary formation theory, and atmospheric modeling. My goal is to build physically grounded models that connect deep interior processes to observable atmospheric properties, and thereby to understand how the chemistry of a planet reflects its history.</p>

  </div>
  </div>
  <aside class="home-hero__panel">
    <img src="{{ '/images/profile.png' | relative_url }}" alt="Portrait of Aaron Werlen" class="home-hero__portrait">
    <div class="home-hero__meta">
      <p class="home-hero__name">Aaron Werlen</p>
      <p>PhD Student in Planetary Science at the University of California, Los Angeles</p>
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
    {% assign first_author_pubs = site.publications | where_exp: "pub", "pub.first_author == true and pub.preprint != true" | sort: "date" %}
    {% for pub in first_author_pubs reversed %}
      <div class="pub-entry">
        {% if pub.doi %}<a class="pub-entry__link" href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener noreferrer"><span class="pub-entry__citation">{{ pub.authors }} ({{ pub.date | date: "%Y" }}). {{ pub.title }}.{% if pub.journal %} <em>{{ pub.journal }}</em>.{% endif %}{% if pub.volume %} <b>{{ pub.volume }}</b>.{% endif %}{% if pub.page %} {{ pub.page }}.{% endif %}</span></a>{% else %}<span class="pub-entry__citation">{{ pub.authors }} ({{ pub.date | date: "%Y" }}). {{ pub.title }}.{% if pub.journal %} <em>{{ pub.journal }}</em>.{% endif %}{% if pub.volume %} <b>{{ pub.volume }}</b>.{% endif %}{% if pub.page %} {{ pub.page }}.{% endif %}</span>{% endif %}
      </div>
    {% endfor %}
  </div>

  <div class="pubs-list">
    <h3>Co-authored publications</h3>
    {% assign coauthor_pubs = site.publications | where_exp: "pub", "pub.first_author != true and pub.preprint != true" | sort: "date" %}
    {% for pub in coauthor_pubs reversed %}
      <div class="pub-entry">
        {% if pub.doi %}<a class="pub-entry__link" href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener noreferrer"><span class="pub-entry__citation">{{ pub.authors }} ({{ pub.date | date: "%Y" }}). {{ pub.title }}.{% if pub.journal %} <em>{{ pub.journal }}</em>.{% endif %}{% if pub.volume %} <b>{{ pub.volume }}</b>.{% endif %}{% if pub.page %} {{ pub.page }}.{% endif %}</span></a>{% else %}<span class="pub-entry__citation">{{ pub.authors }} ({{ pub.date | date: "%Y" }}). {{ pub.title }}.{% if pub.journal %} <em>{{ pub.journal }}</em>.{% endif %}{% if pub.volume %} <b>{{ pub.volume }}</b>.{% endif %}{% if pub.page %} {{ pub.page }}.{% endif %}</span>{% endif %}
      </div>
    {% endfor %}
  </div>

  <div class="pubs-list">
    <h3>Pre-prints</h3>
    {% assign preprint_pubs = site.publications | where: "preprint", true | sort: "date" %}
    {% for pub in preprint_pubs reversed %}
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
