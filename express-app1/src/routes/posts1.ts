import express from 'express';

let postsRouterv2 = express.Router( );

let data = {
    posts: [
        {id: 1, userId: 1, title: 'sunt aut facere', body: 'sunt aut facere...'},
        {id: 2, userId: 1, title: 'qui est esse', body: 'qui est esse...'},
        {id: 3, userId: 1, title: 'ea molestias quasi', body: 'ea molestias quasi...'}
    ]
};

postsRouterv2.get('/', (req, res) => {
    res.json(data.posts);
});

postsRouterv2.post('/', (req, res) => {
    res.json('creating in v2...');
});

postsRouterv2.patch('/', (req, res) => {
    res.json('patching...');
});

postsRouterv2.delete('/', (req, res) => {
    res.json('deleting...');
});

export default postsRouterv2;