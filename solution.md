```JSX
import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCreate = () => {
    if (!title || !desc) return;
    setPosts([...posts, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button onClick={handleCreate}>Create</button>

      <div style={{ display: "grid", gap: "10px", marginTop: "20px" }}>
        {posts.map((post, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

```