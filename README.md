# Gonzalo Franchino - Portfolio & Blog

Personal portfolio and weekly blog on rapid SaaS development and AI-accelerated software delivery.

**Live at:** https://gonzajf.github.io/

## Project Structure

```
├── index.html              # Main resume page
├── styles.css              # Global styling
├── blog/
│   ├── index.html          # Blog list page
│   ├── post.html           # Individual post template
│   ├── blog.css            # Blog-specific styling
│   └── posts/
│       └── *.md            # Blog posts (markdown)
└── README.md               # This file
```

## Adding a New Blog Post

1. **Create a new markdown file** in `blog/posts/`:
   ```
   blog/posts/your-slug-here.md
   ```

2. **Write your post** in markdown format:
   ```markdown
   # Your Post Title

   Your content here...

   ## Section

   More content.
   ```

3. **Register the post** in `blog/index.html`:
   - Find the `posts` array in the script section
   - Add an entry at the top (newest first):
   ```javascript
   {
       title: "Your Post Title",
       date: "2026-06-27",        // YYYY-MM-DD format
       slug: "your-slug-here",    // matches the filename without .md
       excerpt: "A 1-2 sentence summary of your post"
   }
   ```

4. **Push to GitHub:**
   ```bash
   git add blog/posts/your-slug-here.md blog/index.html
   git commit -m "blog: add post about your topic"
   git push
   ```

## Writing Tips

- **Keep it authentic** — Write what you're learning, not what sounds impressive
- **One topic per post** — Easier to read and reference later
- **Markdown headings** — Use `#` (h1) for title, `##` for sections
- **Code blocks** — Use triple backticks with language tags:
  ````markdown
  ```javascript
  const example = "code";
  ```
  ````
- **Links** — Use standard markdown: `[link text](url)`

## Styling

- Blog styling is in `blog/blog.css`
- Main styling is in `styles.css`
- Color scheme uses CSS variables (easily customizable)
- Responsive design works on mobile, tablet, desktop

## Publishing Flow

1. Write your post locally in `blog/posts/your-slug.md`
2. Add entry to `posts` array in `blog/index.html`
3. Test locally (open `blog/index.html` in browser)
4. Commit and push to `master` branch
5. GitHub Pages auto-deploys (usually within 1-2 minutes)

## Tips for Weekly Posts

**Scheduling:**
- Set a reminder for your posting day (e.g., every Friday)
- Write posts in batches if easier (e.g., write 4 at once, schedule over month)

**Content ideas:**
- What you learned building this week
- Market observations (trends, opportunities)
- Technical insights from recent projects
- Retrospectives on past decisions

**Keep it short:**
- Aim for 500-1000 words
- 5-10 minutes to read
- One main idea per post

## Contact

Inquiries: [gj.franchino@gmail.com](mailto:gj.franchino@gmail.com)

---

Built with HTML, CSS, and markdown. No frameworks, no build step, no complexity.
