import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Post({ post, index, onDelete }: any) {
  return (
    <div className="post" style={{border: '1px solid #ccc', padding: '0px', margin: '0px', borderRadius: '15px'}}>
      <h2 style={{margin: 0, padding: 0}}>{post.title}</h2>
      <p style={{margin: 0, padding: 0}}>{post.desc}</p>
      <button style={{backgroundColor: 'red', color: 'white',padding: '2px 10px', borderRadius: '5px'}} onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
}

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [posts, setPosts] = useState([{title: 'title', desc: 'description'}])
  const handleClearPosts = () => {
    setPosts([])
  }
  const handleClear = () => {
    setTitle('')
    setDescription('')
  }
  const handleTest = () => {
    const newPost = { title: 'test title', desc: 'test desc' }
    console.log(newPost)
    setPosts([newPost, ...posts])
  }
  const handleCreate = () => {
    if (title && description) {
      const newPost = { title: title, desc: description }
      console.log(newPost)
      setPosts([newPost, ...posts])
      setTitle('')
      setDescription('')
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleDelete = (index: any) => {
    const newPosts = [...posts]
    newPosts.splice(index, 1)
    setPosts(newPosts)
  }
  return (
    <>
      <h1>
        <a
          href="https://github.com/attila5287/hackerrank-react-blog">
          <img className="logo" src={reactLogo} alt="React Logo" />
          <b>Blog Post</b>
        </a>
      </h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <button onClick={handleCreate}>Create</button>
      <br />
      <button onClick={handleTest}>Test</button>
      <button onClick={handleClear}>ClearText</button>
      <button onClick={handleClearPosts}>ClearPosts</button>
      <div className="posts">
        {posts.map((post, index) => (
          <Post 
            key={index}
            post={post}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default App
