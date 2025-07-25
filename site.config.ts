import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '23a67fb78c45801ba421d5a1e68bc0a0',
  // rootNotionPageId: '23467fb78c4580cc8c31e8e4b0345a77',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '华东师大二附中社团年鉴',
  domain: 'hsefz.aeilot.top',
  author: '华东师大二附中',

  // open graph metadata (optional)
  description: '华东师大二附中社团年鉴',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'aeilot',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '社团年鉴',
      pageId: '23467fb78c4580cc8c31e8e4b0345a77'
    },
    {
      title: '部门年鉴',
      pageId: '23467fb78c4580508cc9de72453b832f'
    },
    {
      title: '分类',
      pageId: '23a67fb78c4581009994ef2fcb2177bd'
    },
    {
      title: '关于本站',
      pageId: '23a67fb78c4581e89712dfe01b6193ab'
    }
  ]
})
