import { describe, it, expect } from 'vitest'
import en from '../locales/en.json'
import es from '../locales/es.json'

function flattenKeys(obj, prefix = '') {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      return flattenKeys(value, fullKey)
    }
    return [fullKey]
  })
}

function getByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj)
}

const enKeys = flattenKeys(en)
const esKeys = flattenKeys(es)

describe('i18n translation completeness', () => {
  it('en and es have identical key sets', () => {
    const enSet = new Set(enKeys)
    const esSet = new Set(esKeys)

    const missingInEs = enKeys.filter(k => !esSet.has(k))
    const missingInEn = esKeys.filter(k => !enSet.has(k))

    expect(missingInEs, `Keys present in en but missing in es:\n  ${missingInEs.join('\n  ')}`).toHaveLength(0)
    expect(missingInEn, `Keys present in es but missing in en:\n  ${missingInEn.join('\n  ')}`).toHaveLength(0)
  })

  it('no translation value is empty or blank in en', () => {
    const empty = enKeys.filter(k => {
      const val = getByPath(en, k)
      return val === '' || val == null || (typeof val === 'string' && val.trim() === '')
    })
    expect(empty, `Empty/blank values in en:\n  ${empty.join('\n  ')}`).toHaveLength(0)
  })

  it('no translation value is empty or blank in es', () => {
    const empty = esKeys.filter(k => {
      const val = getByPath(es, k)
      return val === '' || val == null || (typeof val === 'string' && val.trim() === '')
    })
    expect(empty, `Empty/blank values in es:\n  ${empty.join('\n  ')}`).toHaveLength(0)
  })
})
