import React from "react"
import Layout from "components/layout/layout"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import { useStaticQuery, graphql } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allPostJson {
        edges {
          node {
            url,
            title,
            description,
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Jumbotron fluid className="bg-light m-0">

        <Container className="p-2 mb-5">
          <h3>Posts</h3>

          {
            getPosts(data).map((item, index) => {
              return (
                <div key={index}>
                  <p><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></p>
                  <p>{item.description}</p>
                </div>
              )
            })}
        </Container>

      </Jumbotron>


    </Layout>
  )
}

function getPosts(data) {
  const posts = [];
  data.posts.edges.forEach(itm => {
    posts.push(itm.node)
  });
  return posts;
}
export default Posts;