console.log("Jay SiyaRam")

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

let githubData = {
    "login": "rohitkambojjs",
    "id": 154302736,
    "node_id": "U_kgDOCTJ5EA",
    "avatar_url": "https://avatars.githubusercontent.com/u/154302736?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rohitkambojjs",
    "html_url": "https://github.com/rohitkambojjs",
    "followers_url": "https://api.github.com/users/rohitkambojjs/followers",
    "following_url": "https://api.github.com/users/rohitkambojjs/following{/other_user}",
    "gists_url": "https://api.github.com/users/rohitkambojjs/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rohitkambojjs/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rohitkambojjs/subscriptions",
    "organizations_url": "https://api.github.com/users/rohitkambojjs/orgs",
    "repos_url": "https://api.github.com/users/rohitkambojjs/repos",
    "events_url": "https://api.github.com/users/rohitkambojjs/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rohitkambojjs/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rohit Kamboj",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Hi, my name Rohit Kamboj. I am a web developer.",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-12-19T05:28:54Z",
    "updated_at": "2024-01-15T06:41:30Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('User Name : Rohit Kamboj')
})

app.get('/login', (req, res) => {
    res.send('<h1>User Login</h1>')
})

app.get('/gethub', (req, res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log(`Example app listening on port ${port}`)