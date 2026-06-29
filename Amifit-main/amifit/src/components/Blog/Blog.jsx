import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "2022-02-24",
      author: "Maddie Rife",
      title: "It was popularised sheets the release contain",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 87,
      shares: 58,
    },
    {
      id: 2,
      date: "2022-02-24",
      author: "Maddie Rife",
      title: "It was popularised sheets the release contain",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 87,
      shares: 58,
    },
    {
      id: 3,
      date: "2022-02-24",
      author: "Maddie Rife",
      title: "It was popularised sheets the release contain",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 87,
      shares: 58,
    },
  ];

  return (
    <section className="section blog" aria-label="blog" id="blog">
      <div className="container">
        <div className="title-wrapper">
          <p className="section-subtitle">Our Blog Post</p>
          <h2 className="h2 section-title">Latest Article of Nutrition</h2>
        </div>

        <ul className="grid-list">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <div className="blog-card">
                <div className="wrapper">
                  <time className="publish-date" dateTime={post.date}>
                    <span className="span">{new Date(post.date).getDate()}</span> {new Date(post.date).toLocaleString('default', { month: 'short' })}
                  </time>
                  <div>
                    <div className="card-author">
                      <a href="#" className="card-link">
                        By: <span className="span">{post.author}</span>
                      </a>
                    </div>
                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <p className="item-text">{post.likes} Likes</p>
                      </li>
                      <li className="card-meta-item">
                        <p className="item-text">{post.shares} Shares</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">{post.title}</a>
                </h3>
                <p className="card-text">{post.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;