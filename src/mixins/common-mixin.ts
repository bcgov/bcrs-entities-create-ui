import { Component, Vue } from 'vue-property-decorator'
import { omit, isEqual } from 'lodash'
import { ValidationItemDetailIF } from '@/interfaces'

/**
 * Mixin that provides some useful common utilities.
 */
@Component({})
export default class CommonMixin extends Vue {
  /** Is True if Jest is running the code. */
  get isJestRunning (): boolean {
    return (process.env.JEST_WORKER_ID !== undefined)
  }

  /**
   * Compares two objects while omitting specified properties from the comparison.
   * @param objA the first object to compare
   * @param objB the second object to compare
   * @param props an optional array of properties to omit during the comparison
   * @return a boolean indicating a match of objects
   */
  isSame (objA: {}, objB: {}, props: string[] = []): boolean {
    return isEqual({ ...omit(objA, props) }, { ...omit(objB, props) })
  }

  /**
   * Scrolls the window to the top of the specified element.
   * @param element the element to scroll to the top of
   */
  async scrollToTop (element: any): Promise<void> {
    // don't call window.scrollTo during Jest tests because jsdom doesn't implement it
    if (!this.isJestRunning) await element.scrollIntoView({ behavior: 'smooth' })
  }

  /**
   * Identifies the first invalid flag and scrolls to the component.
   * @param validFlags list of current component validity flags
   * @param components list of current component IDs
   * @return whether all components are valid
   */
  async validateAndScroll (validFlags: object, components: object): Promise<boolean> {
    // Create an array of the _ordered_ validity flags
    const validFlagArray = Object.keys(validFlags).map(key => validFlags[key])

    // Find the _first_ corresponding component that is invalid
    const component = document.getElementById(components[validFlagArray.indexOf(false)])

    // If there is an invalid component, scroll to it
    if (component) {
      await this.scrollToTop(component)
      return false
    }
    return true
  }

  /**
   * Extracts validation flags from validation item detail object
   * @param validation items details object
   * @return array of validation flags for all validation items
   */
  buildValidFlags (validationItems: ValidationItemDetailIF[]): object {
    let result = {}
    for (const vi of validationItems) { result[vi.name] = vi.valid }
    return result
  }

  /**
   * Extracts element ids from validation item detail object
   * @param validation items details object
   * @return array of element ids for all validation items
   */
  buildElementIds (validationItems: ValidationItemDetailIF[]): object {
    return validationItems.map(vi => vi.elementId)
  }
}
