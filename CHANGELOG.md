# Changelog
---------------
#### July 2026 Update
* **Resume & Education Restructuring**: 
  * Split University of Washington education into separate M.S. and B.S. entries with bulleted highlights and expanded academic focus.
  * Moved UW Guest Lectures to the top of Education with Google Health researcher context and top link buttons for slides.
  * Relocated Academic Writeups and Posters under the `#school` section at the bottom of the page.
  * Renamed "Awards & Additional Education" to "Accomplishments" header with refined top spacing.
* **Styling & Interaction Polish**: 
  * Fixed inline hyperlink CSS display to prevent awkward line breaks in bulleted resume details.
  * Fixed clipping on collapsible resume logo icons and made collapsed titles selectable text.
  * Updated dead external links (EcoCAR, Verellen Amplifiers) to archived Wayback Machine URLs.
  * Removed magic wand emojis from `vibe-coded` project tags.
  * Added "Webapp" link for `emojii-flow`.
  * Configured `@media print` CSS so printing automatically expands all hidden detail blocks.
* **Toolchain & Maintenance**: 
  * Added metadata and compression mappings for new project card images (`sensorfm_blog`, `sensorfm`, `bitfury_miner`, `emojii_flow`).
  * Updated minified CSS assets and maintained automated image processing pipelines.

#### May 2026 Update
* **Google Health Restructuring**: Removed the category header; moved cards to
  Blogs (Fitbit Air, Health Coach, Pixel Cough/Snore, Nest Hub) and AI/ML projects
  (FreshAir Spiro).
* **Card & Link Refinements**: Consolidated duplicate Pixel 7 snore/cough and
  Nest Hub sleep cards. Set Nest Hub buttons to "Read Release", "Read Sensing",
  and "Read Sleep Lab".
* **Asset Integrations**: Center-cropped Nest Hub respiration image to 1.11
  aspect ratio to align grid. Processed raw PNGs to optimized JPEGs.
* **Button Standardizations**: Renamed GitHub links to "Code", Deep Learning
  specs to "Build", 3D Printer Album to "Photos", and ECE Lectures to "Embedded
  AI/ML Lectures".
* **Automated Asset Pipelines**: Developed `crop_tool.py` and `import_images.py`
  to automate aspect ratio checks, cropping, and compression.
* **Date Audits & Restorations**: Updated dates for EcoCAR 2 (2013), Electric
  Car (2010), Supercollider (2013), Arduino (2013), and RC Composer (2014).
  Restored missing cards (Neural Styling, phone.ai, puppy.ai, Zuru, Analog
  Audio).
* **Navigation Flow**: Reordered School and Resume sections to page bottom and
  navigation bar end.

* **Newly Integrated Academic Papers**:
  * *Nature 2026*: An AI system to help scientists write expert empirical software
  * *Nature Medicine 2025*: Towards accurate differential diagnosis with LLMs
  * *JACI: In Practice 2025*: Assessment of Asthma Severity Using Remote Sensors
  * *arXiv 2025*: The Anatomy of a Personal Health Agent
  * *arXiv 2025*: SensorLM: Learning the Language of Wearable Sensors
  * *arXiv 2025*: LSM-2: Learning from Incomplete Wearable Sensor Data
  * *arXiv 2024*: Scaling wearable foundation models
  * *arXiv 2024*: What are the odds? LLMs are capable of probabilistic reasoning
  * *EE418 2014*: Wireless Routing in Hostile Environments

* **Newly Integrated Patents**:
  * *US11862188*: Method for detecting and classifying coughs (Jan 2024)
  * *US11627890*: Contactless cough detection and attribution (Apr 2023)
  * *WO2022035526A1*: Contactless sleep detection (Aug 2020)

* **Newly Integrated Google Research & Product Blogs**:
  * *2026*: Fitbit Air | Insulin resistance from wearables | Nature ERA launch
  * *2026*: Four ways Google scientists use Empirical Research Assistance (ERA)
  * *2025*: Accelerating scientific discovery | SensorLM | LSM-2
  * *2024*: On-device audio representations (HeAR) | Helping build audio models
  * *2024*: Scaling wearable foundation models | Stephen Curry Fitbit training
  * *2022*: Sleeping job | Contactless sleep sensing | Enhanced sleep sensing
  * *2021*: FRILL: On-device speech representations using TensorFlow Lite

* **Newly Integrated Projects & Code Repositories**:
  * *Open Source (14)*: `market-pipeline`, `ytmusic`, `lastfm-sync`, `plex-sync`,
    `reddit-scraper`, `home-scraper`, `ableton-parser`, `vocal-chords`, `SAM`,
    `tuner`, `micro-llm` notebooks, `esp32-llm`, `mujoco-puppeteer`, and
    `microcontroller-tutorial`.
  * *Personal & Hardware (7)*: Automated IoT Terrarium, Deep Learning PC Rig,
    Ginger Beer (2021), Brewing (2018), FreshAir Spiro App, jazzfuzz.club, and
    Tesla Autopilot (2015).

* **Newly Integrated Presentations & Slide Decks**:
  * *UW Lectures*: ECE 475 Embedded AI/ML (2025) & ECE 475 Embedded Platforms (2024)
  * *Guest Lectures*: Consumer Product Engineering (2020) & Data Science (2020)
  * *Decks*: Spiro App (2019), Dedsimple (2017), Spiro AI Thesis, DSP Pitch Shift

* **Infrastructure & Tooling Overhauls**:
  * Configured Makefile console toolchain for CSS minification, image/PDF
    compression, Scholar/Patents syncing, LinkedIn parsing, and link checking.
  * Overhauled print CSS media rules, Flexbox grid layouts, and touch overlays.

#### 8/4/24 to 8/18/24
* Added "Health Sensing Google Products" section featuring Pixel Cough/Snore detection and Nest Hub Sleep/Respiration sensing.
* Added "HeAR (Health Acoustic Representations)" and "FRILL (On-Device Speech Representation)" projects under AI/ML section.
* Compressed asset images and cleaned up commented-out contact lines in index.html.

#### 6/20/24 to 7/10/24
* Refactored layout sections: renamed Machine Learning tab to "AI/ML", positioned Driver Awareness and computer vision under it, and added a School Writeups section under Publications.
* Added a dedicated Google Research Blogs grid and Patents listing.
* Swapped Academics tab header to "School".
* Integrated Google Scholar citation metrics and linked profile page inside paper cards and sidebar.
* Added Advisor role details to Google Health and Aigen work experience.
* Implemented dark mode toggle support and optimized CSS stylesheet configurations.
* Cleaned up column alignment, fixed image tiling/cropping, and updated the "Real-time Pitch Shifter" visual thumbnail to show hardware.
* Compressed PDF downloads and optimized page-break spacing for print outputs.

* Add Papers
  * FRILL A Non-Semantic Speech Embedding for Mobile Devices.pdf
  * HeAR - Health Acoustic Representations.pdf
  * LuckyChirp Opportunistic Respiration Sensing Using Cascaded Sonar on Commodity Devices.pdf
  * Optimizing Audio Augmentations for Contrastive Learning of Health-Related Acoustic Signals.pdf
  * SpiroConfidence Determining the Validity of Smartphone Based Spirometry Using Machine Learning.pdf
  * Towards Accurate Differential Diagnosis with Large Language Models.pdf
  * Whosecough In-the-Wild Cougher Verification Using Multitask Learning.pdf
  *  Wireless: https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kXNcQegAAAAJ&citation_for_view=kXNcQegAAAAJ:IjCSPb-OGe4C
  * Morbidity and mortality from COVID-19 post-vaccination breakthrough infections in association with vaccines and the emergence of variants in Bahrain: https://europepmc.org/article/ppr/ppr385975 2022

* Compress downloaded papers

* Add Patents
  * [https://patents.google.com/patent/US11627890B2](https://patents.google.com/patent/US11627890B2)
  * [https://patents.google.com/patent/WO2022035526A1](https://patents.google.com/patent/WO2022035526A1)
  * [https://patents.google.com/patent/US11862188B2](https://patents.google.com/patent/US11862188B2)

---------------
#### 2/20/20
* Fix grad date on sidebar of website
* Add CV
* 3d printer poster wrong title text
* about link in header points to wrong spot
* add nest below senosis
* remove Seattle WA at bottom

---------------
#### 12/30/19 to 1/12/20
* Added projects presentations posters and papers
* chipped away at some todo items: fabrication
* beautify html
* edited sidebar
* updated todo
* fixed typos, moved acedemic section, changed intro

---------------
#### 9/29/18
* added bot section and zuru

---------------
#### 8/12/18
* edit text
* speed up site 
* remove js/css, compress imgs
* remove cdn (awesome and jquery)
* remove js
* reorg
* compress images, zip up old ones
* update TODO.md
* big redesign
* pruned content
* updated with grad school stuff and new job

---------------
#### 2/24/17
* Added sections to projects and papers
* reduced size of images
* reorg images
* cleaned html and css
* Redesigned column layout
* new resume upload
* Rewrote about
* added to resume
* added images to resume
* style and formatting
* added papers
* hide projects and code
* updated contact
* open links in new tab

---------------
#### 6/25/16
* Removed background
* Download resume
* Updated projects
	* reorganized
	* added new
	* added multiple links
* Updated Papers
	* added new ones
	* removed bad ones
	* fixed cover pic
* Updated Resume
	* added Haiku deck
	* edited other jobs
	* updated skills and awards
	* added download link
* Updated About description and added Distraction demo

---------------
#### 4/25/16
* updated bio and jobs
* added hardware toolcheck paper
* added and organized projects
	* filters
	* parking
	* classifier
	* ADAS
* got rid of musician
* added electric gti on homepage
* removed face
* edited dijkstras
* rearranged skills
* changed colors
* adjusted project animation
----------------
