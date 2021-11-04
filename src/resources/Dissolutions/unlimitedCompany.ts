import { DissolutionResourceIF } from '@/interfaces'
import { CorpTypeCd, FilingCodes } from '@/enums'
import { GetCorpFullDescription } from '@bcrs-shared-components/corp-type-module'
import { CorpDissolutionSteps } from '@/resources/Dissolutions/stepTemplates'

export const UnlimitedDissolutionResource: DissolutionResourceIF = {
  entityType: CorpTypeCd.BC_ULC_COMPANY,
  displayName: GetCorpFullDescription(CorpTypeCd.BC_ULC_COMPANY),
  steps: CorpDissolutionSteps,
  filingData: {
    entityType: CorpTypeCd.BC_ULC_COMPANY,
    filingTypeCode: FilingCodes.DISSOLUTION_VOLUNTARY
  },
  affidavit: {
    affidavitActionText: 'deposit the affidavit in the Company\'s records book.',
    helpSection: {
      header: `The affidavit must state:`,
      helpText: [
        `The Company has no assets; and`,
        `The Company has no liabilities or has made provision for the payment of each of the Company's unpaid
          liabilities and has obtained the written consent to that provision for payment from each creditor.`
      ],
      note: `The affidavit is to be sworn before a Commissioner for Taking Oaths for British Columbia with a seal
        affixed.`
    },
    sampleSection: {
      fileName: `corp-sample-affidavit.pdf`
    },
    confirmSection: {
      checkboxLabel: `I confirm the following items are included as required in the Business Corporations Act and have
      been deposited in the Company's records book:`,
      confirmText: [
        `The affidavit references the Business Corporations Act, section 316.`,
        `The director identified in the affidavit is a current director of the Company and is the director whose
        signature is on the affidavit.`,
        `The affidavit is sealed by a Commissioner for Taking Affidavits/Oaths for British Columbia.`
      ]
    }
  },
  reviewAndConfirm: {
    completingPartyStatement: {
      certifyStatementHeader: null,
      certifyStatements: [],
      certifyClause: `Note: It is an offence to make a false or misleading statement in respect
        of a material fact in a record submitted to the Corporate Registry for filing.
        See section 427 of the Business Corporations Act.`,
      entityDisplay: GetCorpFullDescription(CorpTypeCd.BC_ULC_COMPANY)
    }
  }
}
