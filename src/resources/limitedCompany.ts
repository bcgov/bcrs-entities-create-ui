import { ResourceIF } from '@/interfaces'
import { CorpTypeCd, FilingCodes, NameRequestTypes } from '@/enums'
import { BaseStepsTemplate } from './stepTemplates'
import { GetCorpFullDescription } from '@bcrs-shared-components/corp-type-module'

export const LimitedCompanyResource: ResourceIF = {
  entityType: CorpTypeCd.BC_COMPANY,
  displayName: GetCorpFullDescription(CorpTypeCd.BC_COMPANY),
  title: null,
  description: null,
  statement: null,
  nameRequestType: NameRequestTypes.CR,
  steps: BaseStepsTemplate,
  filingData: {
    filingTypeCode: FilingCodes.INCORPORATION_BC, // TBD
    entityType: CorpTypeCd.BC_COMPANY
  },
  directors: {
    countMinimum: 1
  },
  shareClasses: {
    countMinimum: 1
  },
  incorporationAgreement: {
    helpSection: [
      {
        header: `What is the sample Incorporation Agreement and Table 1 Articles?`,
        helpText: [
          `The sample Incorporation Agreement and Table 1 Articles is a template that you can use to create an
            incorporation agreement and articles for your company. It uses all the standard provisions suggested by
            legislation.`,
          `If you would like to customize any provisions in the Articles, you cannot use this sample. We recommend
            seeking professional assistance from a lawyer or accountant to help you prepare your Articles.`
        ]
      },
      {
        header: `Can I use the sample Incorporation Agreement and Table 1 Articles?`
      },
      {
        header: `You can use the Incorporation Agreement and Table 1 Articles if:`,
        icon: 'mdi-check',
        iconColor: `green darken-2`,
        statements: [
          `There are no special rights or restrictions attached to any class or series of shares in
            the corporation’s authorized share structure.`,
          `You do not wish to change any of the standard provisions in the sample Articles.`
        ]
      },
      {
        header: `You cannot use the Incorporation Agreement and Table 1 Articles if:`,
        icon: 'mdi-close',
        iconColor: `red`,
        statements: [
          `There are special rights or restrictions attached to any class or series of shares in the corporation’s
            authorized share structure.`,
          `You wish to change any of the standard provisions in the sample Articles.`
        ]
      }
    ],
    article: `Sample_articles.pdf`,
    documents: [
      {
        code: 'Table-1',
        description: 'The <b>sample Incorporation Agreement and Table 1 Articles</b> ' +
          'has been completed and a copy has been added to the company\'s record book.'
      },
      {
        code: 'custom',
        description: 'The <b>custom Incorporation Agreement and custom Articles</b> ' +
          'has been completed and a copy has been added to the company\'s record book.'
      }
    ]
  },
  reviewAndConfirm: {
    completingPartyStatement: {
      certifyStatementHeader: 'the Completing Party, have examined the Company ' +
        'Articles and the Incorporation Agreement applicable to the company that is to be ' +
        'incorporated by the filing of this Incorporation Application and confirm that:',
      certifyStatements: [
        'An original signature has been placed on each of those signature lines,',

        'I have no reason to believe that the signature placed on a signature line is not the ' +
        'signature of the person whose name is set out under that signature line, and',

        'I have relevant knowledge of the company and that I am authorized to make this filing.'
      ],
      certifyClause: 'Note: It is an offence to make a false or misleading statement in respect ' +
        'of a material fact in a record submitted to the Corporate Registry for filing. ' +
        'See section 427 of the Business Corporations Act.'
    }
  }
}
