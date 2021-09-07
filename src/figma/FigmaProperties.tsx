import React from 'react'

import { useEffect, useState } from 'react'
import { getFileKey, getNodeId, getFigmaProperties, compareProperties } from './helpers'

import { Div, H1, H4, Table, Loader, Badge } from '@storybook/components'

type Props = {
  componentProps: any
  url: string
}

type ComparisonProps = {
  figmaProperties: string[]
  componentProperties: string[]
  same: string[]
  different: string[]
}

enum Messages {
  NotAvailable = 'Data not available',
}

const Elements = {
  H1: <H1>Propriétés</H1>,
}

const FigmaProperties = (props: Props) => {
  const [properties, setProperties] = useState<ComparisonProps>()
  const [loading, setLoading] = useState(true)

  const figmaFileKey: string = getFileKey(props.url)
  const figmaNodeIds: string[] = getNodeId(props.url)

  let array: any

  let figmaProperties: any
  let componentProperties: any
  let listSimilaritiesItems: any
  let listDifferencesItems: any

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)

        const figmaProperties: string[] = await getFigmaProperties(figmaFileKey, figmaNodeIds)
        setProperties(compareProperties(props.componentProps, figmaProperties))

        setLoading(false)
      } catch (err) {
        setLoading(false)

        console.log(err)
        return <span>{err}</span>
      }
    })()
  }, [])

  if (loading) {
    return (
      <Div>
        {Elements.H1}
        <Loader role="progressbar" />
      </Div>
    )
  }

  if (
    !properties ||
    properties?.figmaProperties.length === 0 ||
    properties?.componentProperties.length === 0 ||
    properties?.same.length === 0 ||
    properties?.different.length === 0
  ) {
    return (
      <Div>
        {Elements.H1}
        {Messages.NotAvailable}
      </Div>
    )
  }

  // Table will display correctly
  if (properties?.same?.length > properties?.different?.length) {
    array = [...Array(properties.same.length - properties.different.length).keys()].map(x => '')
    properties.different = [...properties.different, ...array]
  } else {
    array = [...Array(properties.different.length - properties.same.length).keys()].map(x => '')
    properties.same = [...properties.same, ...array]
  }

  figmaProperties = properties?.figmaProperties.map((prop: string, index: number) => (
    <span style={{ marginLeft: '5px' }}>
      <Badge key={index} status="neutral">
        {prop}
      </Badge>
    </span>
  ))
  componentProperties = properties?.componentProperties.map((prop: string, index: number) => (
    <span style={{ marginLeft: '5px' }}>
      <Badge key={index} status="neutral">
        {prop}
      </Badge>
    </span>
  ))
  listSimilaritiesItems = properties?.same.map((prop: string, index: number) => <td key={index}>{prop}</td>)
  listDifferencesItems = properties?.different.map((prop: string, index: number) => <td key={index}>{prop}</td>)

  return (
    <Div>
      {Elements.H1}
      Figma : {figmaProperties}
      <br />
      Component : {componentProperties}
      <Table>
        <tbody>
          <tr style={{ backgroundColor: 'transparent' }}>
            <th>
              <H4>Similaires</H4>
            </th>
            {listSimilaritiesItems}
          </tr>
          <tr style={{ backgroundColor: 'transparent' }}>
            <th>
              <H4>Différentes</H4>
            </th>
            {listDifferencesItems}
          </tr>
        </tbody>
      </Table>
      <br />
    </Div>
  )
}

export default FigmaProperties
