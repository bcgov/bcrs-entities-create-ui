import { StateModelIF } from '@/interfaces'

export const stateModel: StateModelIF = {
  tombstone: {
    keycloakRoles: [],
    authRoles: [],
    authenticated: false
  },
  nameRequest: {
    nrNumber: '',
    entityType: '',
    filingId: null
  },
  currentDate: '',
  certifyState: {
    certifyFormValid: false,
    certifiedBy: ''
  },
  currentStep: 1,
  isSaving: false,
  isSavingResuming: false,
  isFilingPaying: false,
  defineCompanyStep: {
    valid: false,
    businessContact: {
      email: '',
      confirmEmail: '',
      phone: '',
      phoneExtension: ''
    },
    officeAddresses: {}
  },
  addPeopleAndRoleStep: {
    valid: false,
    orgPeople: []
  },
  createShareStructureStep: {
    valid: false,
    shareClasses: []
  }
}
