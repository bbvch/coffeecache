# Contributing to the Tech Insights Blog

Thank you for contributing! This blog is a simple, engineer-driven space for technical content produced by engineers for engineers. Contributions are welcomed as pull requests on this repository.

## Key principles

- Engineers write: posts are authored by engineers and should be technical and practical.
- Engineer review: posts should be reviewed by other engineers when desired/needed.
- Publish in English
- Share widely: engineers are encouraged to cross-post to platforms like Reddit, LinkedIn, Medium, Dev.to, etc.

## What to contribute

- Blog posts (md/mdx)
- Videos (hosted externally, embed via the `YouTube` component)
- Podcasts (hosted externally, component for embedding not available yet)

## How to contribute a blog post

1. Announce your blog post idea in the [project](https://github.com/orgs/bbvch/projects/5) with an new work item.
2. Ready to write? Assign it to yourself and set it in progress
3. Fork the repo and create a branch (e.g. `blog/my-post-slug`) for your post.
4. Add yourself as an author in `blog/authors.json` if not already present.
5. Add a dated folder under `blog/` following the pattern `YYYY-MM-DD-your-slug/`.
   1. Place the post in `index.md` (or `index.mdx`)
   2. Include frontmatter (title, description, authors, tags, image) in your post
   3. Put images in a local `images/` subfolder and reference them relatively (e.g., `./images/cover.png`).
6. Ready for review/publish?
   1. Open a Pull Request
   2. Reference the work item you created in step 1.
   3. If you want ask somebody for a review.
   4. CI checks passed?
   5. Coordinate with maintainers to schedule the publish date (if desired) and merge when ready. As soon as it's merged, it will be live on the blog! No need to wait for a specific publish date.
7. Congrats, you published your post! Share it widely and engage with readers in the comments.

### Frontmatter example

```yaml
---
title: "My Post Title"
description: "Short description for the blog list card" # SEO purpose, used in BlogListPage cards
authors:
  - autherkey  # from blog/authors.yml
date: 2026-01-21
tags: [tag1, tag2]
image: ./images/cover.png
---
```

### Cross-posting

- You can cross-post your content to other platforms, such as LinkedIn, Reddit, Medium, and dev.to. When cross-posting, please link back to the original post on our blog with a canonical URL to drive traffic and engagement.
- You can cross-post content originally posted on your personal blog here. If you do, please add the following to your blog post (MDX file):
   ```html
   <head>
   <link rel="canonical" href="https://your-original-blog-post-page.com/docs/my-post-slug" />
   </head>
   ```

### Author and tag registry

- Use the author keys defined in `blog/authors.yml` for the `authors` frontmatter.
- Use tags defined in `blog/tags.yml` for `tags` frontmatter.

## Analytics and access

- Check our [internal documentation](https://wiki.bbv.ch/index.php/TechInsights)

## Style & content guidance

- Don't clickbait titles; be clear and descriptive.
- Be technical and factual — avoid marketing language.
- Keep posts focused and reproducible: include commands, snippets, and expected outcomes.
- Prefer readable code samples and link to full sample repos on GitHub when appropriate.
- Cite sources and provide links for further reading.
- Maintain a respectful and professional tone.
- If your post includes third-party code, ensure licensing is clear.

## Support & questions

- For help with the publishing workflow, CI, or tooling, contact or tag a maintainer in your PR.

## Thanks!

Thank you for contributing. We look forward to your technical content!
