import React, { Component } from 'react'

import Link from './Link'

class LinkList extends Component {
  render() {
    const LinksToRender = [
      {
        id: '1',
        description: 'Prisma turns your database into a GraphQL API 😎',
        url: 'https://www.prismagraphql.com',
      },
      {
        id: '2',
        description: 'The best GraphQL client',
        url: 'https://www.apollographql.com/docs/react/',
      },
    ]
    return (
      <div>
        {LinksToRender.map(link => (
          <Link key={link.id} description={link.description} url={link.url} />
        ))}
      </div>
    )
  }
}

export default LinkList
