// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    ignores: ['src/schema.ts'],
    rules: {
      'ts/explicit-function-return-type': 'off',
    },
  },
)
