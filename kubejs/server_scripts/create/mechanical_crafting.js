console.log('server_scripts/create/mechanical_crafting')

ServerEvents.recipes(event => {
  console.log('Adding dragonfly:create/dirt2emerald')
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    key: {
      D: {
        item: 'minecraft:dirt'
      }
    },
    pattern: [
      ' DDD ',
      'D   D',
      'D   D',
      'D   D',
      ' DDD '
    ],
    result: {
      'count': 1,
      'id': 'minecraft:emerald'
    },
  }).id('dragonfly:create/dirt2emerald')
})
