import { shallowWrapperFactory } from '../jest-wrapper-factory'
import { ReviewConfirmDissolution } from '@/views/Dissolutions'

// Store
import { getVuexStore } from '@/store'
import { DissolutionResources } from '@/resources/'

const store = getVuexStore()

// Test Case Data
const reviewConfirmTestCases = [
  {
    entityType: 'CP',
    isStaff: true
  },
  {
    entityType: 'CP',
    isStaff: false
  },
  {
    entityType: 'BEN',
    isStaff: true
  },
  {
    entityType: 'BEN',
    isStaff: false
  }
]

for (const test of reviewConfirmTestCases) {
  describe(`Review Confirm view for a ${test.entityType} as a ${test.isStaff ? 'staff' : 'regular'} user`, () => {
    let wrapper: any

    it('renders the component properly', () => {
      wrapper = shallowWrapperFactory(
        ReviewConfirmDissolution,
        null,
        { entityType: test.entityType },
        null,
        DissolutionResources)

      // verify page content
      expect(wrapper.find('h2').text()).toBe('Review and Confirm')
    })

    it('displays Effective Date Time section only when corp and staff', () => {
      wrapper = shallowWrapperFactory(
        ReviewConfirmDissolution,
        null,
        {
          entityType: test.entityType,
          tombstone: { authRoles: test.isStaff ? ['staff'] : [] }
        },
        null,
        DissolutionResources)

      const expected = (test.entityType !== 'CP' && test.isStaff)
      expect(wrapper.find('#effective-date-time').exists()).toBe(expected)
    })

    it('displays Affidavit section', () => {
      wrapper = shallowWrapperFactory(
        ReviewConfirmDissolution,
        null,
        { entityType: test.entityType },
        null,
        DissolutionResources)

      expect(wrapper.find('#affidavit-summary').exists()).toBe(true)
    })

    it('displays Resolution section', () => {
      wrapper = shallowWrapperFactory(
        ReviewConfirmDissolution,
        null,
        { entityType: test.entityType },
        null,
        DissolutionResources)

      expect(wrapper.find('#resolution-summary').exists()).toBe(true)
    })

    // FUTURE: Expand unit testing for validation on step 5. Include routing to appropriate steps from error links.
  })
}
