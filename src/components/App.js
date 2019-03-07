import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Lucas Rodrigues",
        avatar:
          "https://avatars2.githubusercontent.com/u/39501075?s=400&u=2195eb5a23dc4a22e3869903af6cd92fb1b9702e&v=4",
        time: "há 1 min",
        body:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis"
      },
      {
        id: 2,
        name: "Lucas Cruz",
        avatar:
          "https://avatars2.githubusercontent.com/u/39501075?s=400&u=2195eb5a23dc4a22e3869903af6cd92fb1b9702e&v=4",
        time: "há 4 min",
        body:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis"
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}

export default App;
