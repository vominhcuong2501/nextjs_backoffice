/* eslint-disable no-case-declarations */
import type { DOMNode, Element, HTMLReactParserOptions, Text } from 'html-react-parser'
import parse, { attributesToProps, domToReact } from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import type { Attributes } from 'react'
import React, { createElement, Fragment } from 'react'
import { AdButton } from '@ui'
import { AdLazyIframe } from '../ad-lazy-iframe'
import { AdMotion } from '../ad-framer-motion'

type CustomTag = {
    tag: string
    component: React.FC
}

// Define a function component 'HTMLToReact' that takes a 'html' string as a prop
export const AdHTMLToReact = ({
    html,
    customTags,
    components
}: {
    html?: string
    customTags?: CustomTag[]
    components?: CustomTag[]
}) => {
    if (!html || typeof html !== 'string') return html

    // Clean HTML content by removing unnecessary whitespace and empty paragraphs
    html = html
        .replace(/\r/g, '')
        .replace(/\n\s*\n/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/<p>(&nbsp;|\s)*<\/p>|<p><\/p>/g, '')
        .trim()

    // Define options for the 'html-react-parser'
    const options: HTMLReactParserOptions = {
        // The 'replace' function is called for each node in the HTML string
        replace: (domNode) => {
            const typedDomNode = domNode as Element

            if (!typedDomNode.attribs) return null

            const customTag = customTags?.find((tag) => tag.tag === typedDomNode.name)

            if (customTag) {
                // Use a utility function to convert the inner content to a HTML string
                const getInnerHtml = (children: DOMNode[]): string => {
                    return children
                        .map((child) => {
                            if (child.type === 'tag') {
                                const element = child as Element
                                const tagName = element.name
                                const attributes = Object.entries(element.attribs || {})
                                    .map(([key, value]) => ` ${key}='${value}'`)
                                    .join('')

                                const innerContent = element.children ? getInnerHtml(element.children as DOMNode[]) : ''

                                if (tagName === 'br') {
                                    return `<${tagName}${attributes} >`
                                }

                                return `<${tagName}${attributes}>${innerContent}</${tagName}>`
                            } else if (child.type === 'text') {
                                return (child as Text).data || ''
                            }

                            return ''
                        })
                        .join('')
                }

                // Get the HTML string representation of all children
                const content = typedDomNode.children ? getInnerHtml(typedDomNode.children as DOMNode[]) : ''

                return createElement(customTag.component, {
                    ...attributesToProps(typedDomNode.attribs),
                    content
                } as Attributes & { content: string })
            }

            // Custom component get content first div tag element inside push to content props component
            const customComponents = components?.find((tag) => tag.tag === typedDomNode.name)

            if (customComponents) {
                const elementNode = domNode as Element
                const content: React.ReactElement[] = []

                elementNode.children?.forEach((child, index) => {
                    if (child.type === 'tag') {
                        const divNode = child as Element
                        content.push(<Fragment key={index}>{domToReact([divNode], options)}</Fragment>)
                    }
                })

                return createElement(customComponents.component, {
                    ...attributesToProps(elementNode.attribs),
                    content: content
                } as Attributes & { content: React.ReactElement[] })
            }

            switch (typedDomNode.name) {
                case 'video':
                    return (
                        <video {...attributesToProps(typedDomNode.attribs)} controls>
                            {typedDomNode.children && domToReact(typedDomNode.children as DOMNode[], options)}
                        </video>
                    )
                case 'a':
                    const props = attributesToProps(typedDomNode.attribs)

                    return (
                        <Link href={props.href as string} {...attributesToProps(typedDomNode.attribs)} prefetch={true}>
                            {typedDomNode.children && domToReact(typedDomNode.children as DOMNode[], options)}
                        </Link>
                    )

                case 'br':
                    return <br {...attributesToProps(typedDomNode.attribs)}></br>

                case 'img':
                    // Convert the node's attributes to React props
                    const propsImg = attributesToProps(typedDomNode.attribs)

                    // Return an 'Image' component with the node's attributes as props
                    const checkDefinition = () => {
                        if (propsImg.fill === 'true') {
                            return {
                                fill: propsImg.fill === 'true'
                            }
                        }

                        if (propsImg.width && propsImg.height) {
                            return {
                                width: parseInt((propsImg.width || 100) as string),
                                height: parseInt((propsImg.height || 100) as string)
                            }
                        }

                        return {
                            width: parseInt((propsImg.width || 100) as string),
                            height: parseInt((propsImg.height || 100) as string),
                            className: `${propsImg.className} w-auto h-auto`
                        }
                    }

                    return (
                        <Image
                            src={(propsImg['data-src'] as string) || (propsImg.src as string) || 'ntbip.com'}
                            alt={(propsImg.alt as string) || 'ntbip.com'}
                            title={(propsImg.title as string) || 'ntbip.com'}
                            className={`${propsImg.className}` as string}
                            loading={propsImg.loading as 'lazy' | 'eager'}
                            decoding={propsImg.decoding as 'sync' | 'async' | 'auto'}
                            style={propsImg.style}
                            quality={parseInt(propsImg.quality as string)}
                            priority={propsImg.priority === 'true'}
                            placeholder={propsImg.placeholder as 'empty' | 'blur'}
                            blurDataURL={propsImg.blurDataURL as string}
                            objectPosition={propsImg.objectPosition as string}
                            {...checkDefinition()}
                        />
                    )

                case 'iframe':
                    // Return a 'AdLazyIframe' component with the node's attributes as props
                    return (
                        <AdLazyIframe {...attributesToProps(typedDomNode.attribs)}>
                            {typedDomNode.children && domToReact(typedDomNode.children as DOMNode[], options)}
                        </AdLazyIframe>
                    )

                case 'custom-button':
                    // Return a 'Button' component with UI custom
                    return (
                        <AdButton {...attributesToProps(typedDomNode.attribs)}>
                            {typedDomNode.children && domToReact(typedDomNode.children as DOMNode[], options)}
                        </AdButton>
                    )

                case 'script':
                    const scriptContent =
                        typedDomNode.children?.[0]?.type === 'text' ? (typedDomNode.children[0] as Text).data : ''

                    return (
                        <Script
                            {...attributesToProps(typedDomNode.attribs)}
                            dangerouslySetInnerHTML={{ __html: scriptContent }}
                        />
                    )

                case 'motion':
                    return (
                        <AdMotion {...attributesToProps(typedDomNode.attribs)}>
                            {typedDomNode.children && domToReact(typedDomNode.children as DOMNode[], options)}
                        </AdMotion>
                    )
            }
        },
        trim: true,
        htmlparser2: {
            lowerCaseTags: false
        }
    }

    // Parse the 'html' string into React elements using the defined options

    const matches = html?.match(/<p>\|\|\|(.*?)\|\|\|<\/p>/g)

    if (matches) {
        html = html?.replace(/<p>\|\|\|(.*?)\|\|\|<\/p>/g, (_, item) => {
            return `<${item?.toLowerCase()}></${item?.toLowerCase()}>`
        })
    }

    return <>{parse(html, options)}</>
}
