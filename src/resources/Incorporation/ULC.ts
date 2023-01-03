import { IncorporationResourceIF } from '@/interfaces'
import { CorpTypeCd, FilingCodes, RuleIds } from '@/enums'
import { IncorporationStepsCorp } from './steps'
import { GetCorpFullDescription } from '@bcrs-shared-components/corp-type-module'

export const IncorporationResourceUlc: IncorporationResourceIF = {
  entityType: CorpTypeCd.BC_ULC_COMPANY,
  displayName: GetCorpFullDescription(CorpTypeCd.BC_ULC_COMPANY),
  steps: IncorporationStepsCorp,
  filingData: [{
    entityType: CorpTypeCd.BC_ULC_COMPANY,
    filingTypeCode: FilingCodes.INCORPORATION_ULC
  }],
  peopleAndRoles: {
    header: '1. Add People or Corporations/Firms to your Application',
    blurb: `Add the people and Corporations/firms who will have a role in your company. People
      can have multiple roles; Corporations/firms can only be Incorporators.`,
    helpSection: null,
    addIncorporator: true,
    addOrganization: 'Add a Corporation or Firm',
    rules: [
      {
        id: RuleIds.NUM_COMPLETING_PARTY,
        text: 'The Completing Party',
        test: (num) => { return (num === 1) }
      },
      {
        id: RuleIds.NUM_INCORPORATORS,
        text: 'At least one Incorporator',
        test: (num) => { return (num >= 1) }
      },
      {
        id: RuleIds.NUM_DIRECTORS,
        text: 'At least one Director',
        test: (num) => { return (num >= 1) }
      }
    ]
  },
  shareClasses: {
    countMinimum: 1
  },
  incorporationArticles: {
    articles: 'Unlimited Liability Company Articles',
    articlesTooltip: 'The Articles for an Unlimited Liability Company must include the following statement: “The ' +
    'shareholders of this company are jointly and severally liable to satisfy the debts and liabilities of this ' +
    'company to the extent provided in section 51.3 of the Business Corporations Act.” Articles should also outline ' +
    'the rules and procedures for corporate matters such as holding meetings, issuing and transferring shares, and ' +
    'duties of directors and officers.',
    provisions: 'liability provision',
    provisionTooltip: 'A clause in the Articles which communicates the liability statement required by the Business ' +
    'Corporations Act 51.11.'
  },
  incorporationAgreement: {
    helpSection: [
      {
        header: 'What is the sample Incorporation Agreement and Company Articles?',
        helpText: [
          `The sample Incorporation Agreement and Company Articles is a template that you can use to create an 
            incorporation agreement and articles for your company. It uses all the standard provisions by legislation. 
            There are three types of samples depending on if you're incorporating a Limited Company, a Benefit Company, 
            or a Community Contribution Company.`,
          `If you would like to customize any other provisions in the Articles, you cannot use these samples.
            We recommend seeking professional assistance from a lawyer or accountant to help you prepare your articles.`
        ]
      },
      {
        header: 'What is a Liability Provision?',
        helpText: [
          `A Liability Provision is a statement by the company of the shareholders joint liability to satisfy all debts
            and liabilities of the company.`,
          'An Unlimited Liability Company must include a Liability Provision in its Articles.'
        ]
      }
    ],
    article: 'unlimited_liability_company_incorporation_agreement.pdf',
    documents: [
      {
        code: 'custom',
        description: 'The <b>custom Incorporation Agreement and custom Articles</b> containing the liability' +
        ' provision required by the Business Corporations Act 51.11 has been completed and a copy has been added' +
        ' to the company\'s record book.'
      }
    ]
  },
  reviewAndConfirm: {
    completingPartyStatement: {
      certifyStatementHeader: `the Completing Party, have examined the Company
        Articles and the Incorporation Agreement applicable to the company that is to be
        incorporated by the filing of this Incorporation Application and confirm that:`,
      certifyStatements: [
        'An original signature has been placed on each of those signature lines,',

        `I have no reason to believe that the signature placed on a signature line is not the
          signature of the person whose name is set out under that signature line, and`,

        'I have relevant knowledge of the company and that I am authorized to make this filing.'
      ],
      certifyClause: `Note: It is an offence to make a false or misleading statement in respect
        of a material fact in a record submitted to the Corporate Registry for filing.
        See section 427 of the Business Corporations Act.`,
      entityDisplay: null
    }
  }
}
