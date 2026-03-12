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

### First time contributing?

1. Request to join the [@bbv-blogger team](https://github.com/orgs/bbvch/teams/bbv-blogger) if not already a member.
2. Clone the repo and setup your local environment. Follow instructions in [README.md](README.md).
3. [Add yourself as an author](#author-and-tag-registry) in `blog/authors.json` if not already present.
4. Join our Slack channel #tech-insights-blog

### Publishing workflow

1. Idea for a blog post?
   1. Announce your idea in the backlog as a draft item.
2. Ready to write?
   1. Put your draft item in "ready to write"
   2. Share your idea with @bbv-blog-admin
   3. Find together with @bbv-blog-admin a person who would write a blog on bbv.ch
   4. Arrange a date with @bbv-blog-admin (In Roadmap view)
3. Start with writing
   1. Convert to an issue
   2. Put it "in progress"
   3. Assign it to yourself
   4. Create a branch (e.g., `blog/my-post-slug`) for your blog post.
   5. Create a [blog structure](#blog-post-structure).
4. Ready to review?
    1. Put it "in review"
    2. Create a PR and link to issue with #{issue-number}
    3. Request feedback from somebody
    4. Update based on feedback where helpful
5. Ready to publish?
   1. Request from bbv-blog-admin approval in PR
   2. When approved, you can merge
6. Congrats, you published your post! [Share it widely and engage with readers in the comments](#cross-posting).

### Blog post structure

```
blog/
   YYYY-MM-DD-your-slug/
      index.mdx
      images/
         cover.png
         other-image.png
```

- Each blog post should be in its own folder under `blog/` with a name following the pattern `YYYY-MM-DD-your-slug/`. The date can be the publish date committed with @bbv-blog-admin.
- `index.mdx` is the main content file for your blog post. It should include [frontmatter](#frontmatter-example) at the top with metadata about the post (title, description, authors, date, tags, image).
- The `images/` folder is for any images you want to include in your post. The image used in the frontmatter will be the cover image for the blog list card and the blog post header. You can reference images in your content using relative paths (e.g., `./images/other-image.png`).

### Frontmatter example

```yaml
---
title: "My Post Title"
description: "Short description for the blog list card" # SEO purpose, used in BlogListPage cards
authors:
  - autherkey  # from blog/authors.yml
date: 2026-01-21 # publish date: use it, if you want to override the date used in the folder name
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
