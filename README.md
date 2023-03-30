# Environmental Variable

1. Create a file at the root of the project

```
.env
```

2. Inside the .env file add the text:

- you must use `NEXT_PUBLIC`

```
NEXT_PUBLIC_TITLE = "Digital Design and Development"
```

3. On the page, in between the export and report, write the variab;e:

```
var title = process.env.NEXT_PUBLIC_TITLE;
```

4. Then in betwwen the main tag, write:

```
{title}
```

5. Make sure the `.gitignore` file has the `.env` inside

- you want to prevent the secret title from being visible

## BCIT Data from Digital Design and Development Diploma

[(Digital Design and Development Diploma)](https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/#courses
