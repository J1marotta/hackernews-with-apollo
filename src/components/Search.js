import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link'

const FEED_QUERY_SEARCH = gql`
  query FeedQuerySearch($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        description
        createdAt
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

class Search extends Component {
  state = {
    links: [],
    filter: '',
  }

  _executeSearch = async () => {
    const { filter } = this.state
    const results = await this.props.client.query({
      query: FEED_QUERY_SEARCH,
      variables: { filter },
    })
    const links = results.data.feed.links
    this.setState({ links })
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type="text"
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}> OK</button>
        </div>
        {this.state.links.map((link, index) => (
          <Link id={link.id} index={index} link={link} />
        ))}
      </div>
    )
  }
}

export default withApollo(Search)
