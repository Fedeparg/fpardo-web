import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    // Keep vitest defaults but also skip nested git worktrees under .claude,
    // which would otherwise be discovered as duplicate test suites.
    exclude: [...configDefaults.exclude, '**/.claude/**'],
  },
})
