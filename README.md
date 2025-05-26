# MidnightHours

MidnightHours.site is a unique website that only works between 12:00 AM and 5:00 AM. You can access it once per day, and outside of that window, the site remains locked.

Each night, a random scary story is picked for everyone to experience together.

<div>
<a href="https://www.youtube.com/@technoph1le" target="_blank">
  <img src="https://img.shields.io/static/v1?label=&message=Watch%20on%20YouTube&labelColor=FFFFFF&color=FF0000&style=for-the-badge&logo=youtube&logoColor=FF0000" alt="Watch on YouTube">
</a>
<div>

<br>

![Website preview](/public/assets/preview.png)

## How to Contribute

First off, thanks for taking the time to contribute! ❤️ You can contribute by:

- **Adding New Stories**: Share your favorite scary story to grow the database.
- **Improving the Code**: Fix bugs, suggest new features, or optimize the project.

### Adding New Stories

1. Find your scary story (recommended length: 2–10 minutes)

2. Prepare a text file (story_name.txt) and an audio file (story_name.mp3)

3. Create a new folder with the name of your story inside /public/stories/

```
   /public/stories/
              └── story_name/
                      ├── story_name.txt
                      └── story_name.mp3
```

4. Update `/src/data/stories.json` in the following format:

```json
[
  {
    // other stories...
  },
  {
    "directory": "story_name",
    "title": "Your story",
    "textFile": "story_name.txt",
    "audioFile": "story_name.mp3"
  }
]
```

5. Done! Your story will be randomly selected and shared with everyone.

> If you're looking to convert your story to `.mp3`, you can use this **awesome free tool**: https://www.tetyys.com/SAPI4/

### Improving the Code

If you want to add a new feature or simply report a bug, feel free to [create an issue](https://github.com/technoph1le/midnighthours/issues/new).

The website is built with NextJS (App Router).
