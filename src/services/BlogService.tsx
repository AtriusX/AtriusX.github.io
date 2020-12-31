import Blogpost from '../Blogpost/Blogpost';
import posts from '../posts/posts';
import React from 'react';

       const entries      = Object.entries(posts);
export const postCount    = entries.length;
export const validPostID  =       (id  : number)             => entries[id] !== undefined;
export const getAllPosts  = async ()                         => request(0, entries, true);
export const getPostsFrom = async (from: number, to: number) => request(from, entries.slice(from, to));
export const getPost      = async (id  : number)             => (await getPostsFrom(id, id + 1))[0];

async function request(
    offset: number, posts: Array<[string, any]>, showNumber: boolean = false
): Promise<Array<JSX.Element>> {
    // Request posts from the api
    return await Promise.all(
        posts.map(([title, file]) => fetch(file).then(r => [title, r.text()]))
    ).then(data => {
        // Map all post data to components
        let posts = data.map(([title, content], index) => Promise.resolve(content).then(text => {
            return <Blogpost 
                key={offset + index + 1} 
                id={showNumber ? offset + index + 1 : undefined} 
                title={title as string} 
                text={text} 
            /> })).reverse();
        // Render all posts into the container
        return Promise.all(posts);
    });
}