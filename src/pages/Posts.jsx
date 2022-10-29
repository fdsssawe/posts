import React, {useEffect, useMemo, useState} from 'react';
import {usePost} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../components/utils/pages";
import MyButton from "../components/UI/buttons/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/UI/PostForm";
import PostFilter from "../components/UI/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/Pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";


function Posts() {









    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [posts , setPosts] = useState([])
    const [filter , setFilter] = useState({sort:'', query: ''})
    const [modal , setModal] = useState(false)
    const [totalPages , setTotalPages] = useState(0)
    const [limit , setLimit] = useState(10)
    const [page , setPage] = useState(1)
    const sortedAndSearchedPosts = usePost(posts, filter.sort , filter.query)


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const [fetchPosts , isPostsLoading , postError] = useFetching(async () => {
        const response = await PostService.getAll(limit,page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount ,limit))
    })

    useEffect(()=>{
        fetchPosts()
    },[page])


    const changePage = (page) => {
        setPage(page)
    }



    return (
        <div className="App">
            <MyButton style={{width : '100%'}}onClick={()=> setModal(true)}>Add user</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px'}}></hr>
            <PostFilter filter={filter}
                        setFilter={setFilter}
            />
            {isPostsLoading
                ? <div style={{display : "flex" , justifyContent : "center"}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post list n1"}/>

            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
