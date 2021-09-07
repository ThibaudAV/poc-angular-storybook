import * as Figma from 'figma-api';
import { LooseObject } from '../index'

export function getFileKey(url: string): string {
  return url.split('/')[4]
}

export function getNodeId(url: string): string[] {
  const array = url.split('/')
  const lastEntry = array[array.length - 1]
  const nodeId = lastEntry.split('=')[1]

  return [decodeURIComponent(nodeId)]
}

export async function getFigmaProperties(figmaFileKey: string, figmaNodeIds: string[]): Promise<string[]> {
  const api = new Figma.Api({
    personalAccessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN!
  });

  const file = await api.getFileNodes(figmaFileKey, figmaNodeIds.map(x => decodeURIComponent(x)))
  const nodes = file.nodes
  const keyNodes = Object.keys(nodes)
  const components = nodes[keyNodes[0]]!.components
  const keyComponents = Object.keys(components)
  const componentName = components[keyComponents[keyComponents.length - 1]]!.name.split(', ')

  return componentName.map(x => x.split('=')[0].toLowerCase())
}

export function compareProperties(componentProperties: LooseObject, figmaProperties: string[]): any {
  componentProperties = Object.keys(componentProperties)

  if (!componentProperties || !figmaProperties) {
    return null
  }

  return {
    figmaProperties: figmaProperties,
    componentProperties: componentProperties,
    same: componentProperties.filter((type: string) => figmaProperties.includes(type)),
    different: componentProperties.filter((type: string) => !figmaProperties.includes(type))
  }
}
