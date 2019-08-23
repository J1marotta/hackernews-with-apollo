import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Link from './Link'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>'...'</div>
          if (error) return <div>Shit went wrong</div>

          const LinksToRender = data.feed.links
          return LinksToRender.map((link, index) => (
            <Link key={link.id} index={index} link={link} />
          ))
        }}
      </Query>
    )
  }
}

export default LinkList

///https://www.howtographql.com/react-apollo/2-queries-loading-links/
