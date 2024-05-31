import Vue from 'vue'
import { wrapperFactory } from '../vitest-wrapper-factory'
import ExtraproRegistration from '@/components/ContinuationIn/ExtraproRegistration.vue'
import UploadAffidavit from '@/components/ContinuationIn/UploadAffidavit.vue'
import { ExistingBusinessInfoIF } from '@/interfaces'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

Vue.use(Vuex)

describe('Extrapro Registration component', () => {
  it('renders the component correctly', async () => {
    const wrapper = wrapperFactory(ExtraproRegistration)
    await Vue.nextTick()

    // verify component main exists
    expect(wrapper.findComponent(ExtraproRegistration).exists()).toBe(true)
    expect(wrapper.find('#extrapro-registration').exists()).toBe(true)

    wrapper.destroy()
  })

  // Test the Upload Affidavit component is rendered
  it('renders the component correctly when isContinuationInAffidavitRequired is true', async () => {
    // Create a mock business object
    const businessMock: ExistingBusinessInfoIF = {
      affidavitFile: null,
      affidavitFileKey: null,
      affidavitFileName: null,
      homeJurisdiction: {
        country: 'CA',
        region: 'AB'
      },
      homeIdentifier: '',
      homeIncorporationDate: '',
      homeLegalName: '',
      mode: 'EXPRO'
    }
    const getters = {
      isContinuationInAffidavitRequired: () => true,
      getExistingBusinessInfo: () => businessMock
    }

    const store = new Vuex.Store({
      getters
    })

    const wrapper = shallowMount(UploadAffidavit, {
      store,
      propsData: {
        business: businessMock
      }
    })
    await Vue.nextTick()
    expect(wrapper.findComponent(UploadAffidavit).exists()).toBe(true)

    // Check if the text content is rendered correctly
    expect(wrapper.text()).toContain('Upload the affidavit from the directors.')
    expect(wrapper.text()).toContain('Use a white background and a legible font with contrasting font colour')
    expect(wrapper.text()).toContain('PDF file type (maximum 30 MB file size)')

    wrapper.destroy()
  })
})
