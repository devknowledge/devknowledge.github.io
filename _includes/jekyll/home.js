window.jekyll = {};
window.jekyll.posts = [];
{% for post in site.posts %}
  {% assign post_tags_raw = post.tags | join:' ' %}
  {% assign post_excerpt = post.excerpt | jsonify %}
  window.jekyll.posts.push({
    title: '{{ post.title }}',
    tags: getPostTags('{{ post_tags_raw }}'),
    category: '{{ post.category }}',
    date: "{{ post.date | date: '%b %d, %Y' }}",
    excerpt: {{ post_excerpt }},
    author: '{{ post.author }}',
    banner: '{{ post.banner }}',
    url: '{{ post.url }}',
    author_profile: '{{ post.author_profile }}',
    search_key: '{{ post.title | append:' ' | append:post_tags_raw | append:' ' | append:post_excerpt }}'
  });
{% endfor %}


window.jekyll.tags = [];
window.jekyll.categories = [];
{% assign rawtags = "" %}
{% assign rawcategories = "" %}
{% for post in site.posts %}
  {% assign ttags = post.tags | join:'|' | append:'|' %}
  {% assign rawtags = rawtags | append:ttags %}
  {% assign tcategories = post.categories | join:'|' | append:'|' %}
  {% assign rawcategories = rawcategories | append:tcategories %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}
{% assign rawcategories = rawcategories | split:'|' | sort %}

{% assign tags = "" %}
{% for tag in rawtags %}
  {% if tag != "" %}
    {% if tags == "" %}
      {% assign tags = tag | split:'|' %}
    {% endif %}
    {% unless tags contains tag %}
      {% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
    {% endunless %}
  {% endif %}
{% endfor %}
{% for tag in tags %}
  window.jekyll.tags.push('{{ tag }}');
{% endfor %}

{% assign categories = "" %}
{% for category in rawcategories %}
  {% if category != "" %}
    {% if categories == "" %}
      {% assign categories = category | split:'|' %}
    {% endif %}
    {% unless categories contains category %}
      {% assign categories = categories | join:'|' | append:'|' | append:category | split:'|' %}
    {% endunless %}
  {% endif %}
{% endfor %}
{% for category in categories %}
  window.jekyll.categories.push('{{ category }}');
{% endfor %}

function getPostTags(postTagsRaw) {
  return postTagsRaw.split(' ');
}
