import About from "../pages/About";
import Posts from "../pages/Posts";
import PostsIdPages from "../pages/PostsIdPages";
import Login from "../pages/Login";


export const privateRoutes = [
    {path : '/about' , element : About, exact : true},
    {path : '/posts' , element : Posts , exact : true},
    {path : '/posts/:id' , element : PostsIdPages , exact : true},
]

export const publicRoutes = [
    {path : '/login' , element : Login, exact : true},
]

