wp.blocks.registerBlockType('ourplugin/are-you-paying-attention', {
  title: 'Are You Paying Attention?',
  icon: 'smiley',
  category: 'common',
  attributes: {
    skyColor: { type: 'string' },
    grassColor: { type: 'string' },
  },
  edit: function ({ setAttributes, attributes }) {
    return (
      <div>
        <input
          type='text'
          placeholder='sky color'
          onChange={e => setAttributes({ skyColor: e.target.value })}
          value={attributes.skyColor}
        />
        <input
          type='text'
          placeholder='grass color'
          onChange={e => setAttributes({ grassColor: e.target.value })}
          value={attributes.grassColor}
        />
      </div>
    )
  },
})
