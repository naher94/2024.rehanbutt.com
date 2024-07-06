---
event-name: Config
location: San Francisco, CA
start-date: 2024-26-6
end-date: 2024-27-6
---
<!-- TODO add these classes to parent: align-bottom grid-x -->
<div class="grid-x cell">
  <div class="detailing cell grid-x align-justify">
    <div class="cell shrink">{{page.location}}</div>
    <div class="cell shrink">{{page.start-date}}</div>
  </div>
  <div class="cell logo-wrapper">
    {% include events/config.svg %}
  </div>
  <div class="cell type-label">attendee</div>
</div>
