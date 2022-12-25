let state = {
    'users': [
        {"id": 1, "name": "sadboy", "img": process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png'},
        {"id": 2, "name": "sadgirl", "img": process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg'},
        {"id": 3, "name": "girl2", "img": process.env.PUBLIC_URL + 'avatars/girl2.jpg'},
        {"id": 4, "name": "girl3", "img": process.env.PUBLIC_URL + 'avatars/girl3.jpg'},
    ],

    'discussion_theme': [
        {
            "id": 1, "user_ava": process.env.PUBLIC_URL + 'avatars/cyber_girl.jpg', "name":
                "Zen", "text": "Guys, what do you think about chainsawman? Is it worth it to watch?"
        }
    ],

    'comments_data': [
        {"id": 1, "img": process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png', "text": 'Chainsawman is the best!'},
        {"id": 2, "img": process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg', "text": 'Makima is so cute'},
        {"id": 3, "img": process.env.PUBLIC_URL + 'avatars/girl2.jpg', "text": 'Episode 10 was a lil bit boring :('},
        {"id": 3, "img": process.env.PUBLIC_URL + 'avatars/girl3.jpg', "text": 'Episode 11 is out now!!!!! im so exited! Wanna watch it now!!'},
    ]
}

export default state