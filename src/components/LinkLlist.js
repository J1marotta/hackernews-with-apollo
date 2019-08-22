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
      }
    }
  }
`

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>'fetching'</div>
          if (error) return <div>Shit went wrong</div>

          const LinksToRender = data.feed.links
          return LinksToRender.map(link => (
            <Link key={link.id} description={link.description} url={link.url} />
          ))
        }}
      </Query>
    )
  }
}

export default LinkList

///https://www.howtographql.com/react-apollo/2-queries-loading-links/
