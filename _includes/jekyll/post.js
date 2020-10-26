window.jekyll = {};

window.jekyll.post = {}
window.jekyll.post.title = '{{ page.title }}';
window.jekyll.post.tags = getPostTags('{{ page.tags | join:' ' }}');
window.jekyll.post.date = '{{ page.date | date: '%B %d, %Y' }}';
window.jekyll.post.content = {{ content | jsonify }};

window.jekyll.relatedPosts = [];
{% assign maxRelated = 5 %}
{% assign minCommonTags =  1 %}
{% assign maxRelatedCounter = 0 %}

{% for post in site.posts %}
  {% assign sameTagCount = 0 %}
  {% for tag in post.tags %}
    {% if post.url != page.url %}
      {% if page.tags contains tag %}
        {% assign sameTagCount = sameTagCount | plus: 1 %}
      {% endif %}
    {% endif %}
  {% endfor %}
  {% if sameTagCount >= minCommonTags %}
    {% assign post_excerpt = post.excerpt | jsonify %}
    window.jekyll.relatedPosts.push({
      title: '{{ post.title }}',
      category: '{{ post.category }}',
      date: "{{ post.date | date: '%b %d, %Y' }}",
      excerpt: {{ post_excerpt }},
      author: '{{ post.author }}',
      banner: '{{ post.banner }}',
      url: '{{ post.url }}',
      author_profile: '{{ post.author_profile }}'
    });
    {% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
    {% if maxRelatedCounter >= maxRelated %}
      {% break %}
    {% endif %}
  {% endif %}
{% endfor %}

function getPostTags(postTagsRaw) {
  return postTagsRaw.split(' ');
}
