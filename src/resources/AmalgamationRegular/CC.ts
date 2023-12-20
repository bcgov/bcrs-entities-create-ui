import { AmalgamationRegResourceIF } from '@/interfaces'
import { FilingCodes, RuleIds } from '@/enums'
import { AmalgamationRegularSteps } from './steps'
import { CorpTypeCd, GetCorpFullDescription } from '@bcrs-shared-components/corp-type-module'

export const AmalgamationRegResourceCc: AmalgamationRegResourceIF = {
  entityType: CorpTypeCd.BC_CCC,
  displayName: GetCorpFullDescription(CorpTypeCd.BC_CCC),
  steps: AmalgamationRegularSteps,
  filingData: [{
    entityType: CorpTypeCd.BC_CCC,
    filingTypeCode: FilingCodes.AMALGAMATION_REGULAR
  }],
  peopleAndRoles: {
    header: '1. Add People to your Application',
    blurb: `Add the people who will have a role in the amalgamated business. A person can be
      both the Completing Party and a Director.`,
    helpSection: null,
    addIncorporator: true,
    addOrganization: true,
    rules: [
      {
        id: RuleIds.NUM_COMPLETING_PARTY,
        text: 'The Completing Party',
        test: (num) => { return (num === 1) }
      },
      {
        id: RuleIds.NUM_DIRECTORS,
        text: 'At least three Directors',
        test: (num) => { return (num >= 3) }
      }
    ]
  },
  shareClasses: {
    countMinimum: 1
  },
  incorporationArticles: {
    articles: 'Community Contribution Company Articles',
    articlesTooltip: 'The Articles for a Community Contribution Company must include the following statements “This ' +
    'company is a community contribution company, and, as such, has purposes beneficial to society. This company is ' +
    'restricted, in accordance with Part 2.2 of the Business Corporations Act, in its ability to pay dividends and ' +
    'to distribute its assets on dissolution or otherwise.” Articles should also outline the rules and procedures ' +
    'for corporate matters such as holding meetings, issuing and transferring shares, and duties of directors ' +
    'and officers.',
    provisions: 'community provision',
    provisionTooltip: 'A clause in the Articles which communicates the liability statement required by the Business ' +
    'Corporations Act 51.11.'
  },
  incorporationAgreement: {
    helpSection: [
      {
        header: 'What is the sample Incorporation Agreement and Company Articles?',
        helpText: [
          `The sample Incorporation Agreement and Company Articles is a template that you can use to create an 
            Incorporation Agreement and articles for your company. It uses all the standard provisions by legislation. 
            There are three types of samples depending on if you're incorporating a Limited Company, a Benefit Company, 
            Unlimited Liability Company, or a Community Contribution Company.`,
          `If you would like to customize any other provisions in the Articles, you cannot use these samples. 
            We recommend seeking professional assistance from a lawyer or accountant to help you prepare your articles.`
        ]
      },
      {
        header: 'What is a Community Provision?',
        helpText: [
          `A Community Provision is a statement by the company of its benefits to society and its restrictions in its 
            ability to pay dividends and distribute assets.`,
          `A Community Contribution Company must include a community provision in its Articles.`
        ]
      }
    ],
    article: 'community_contribution_company_incorporation_agreement.pdf',
    documents: [
      {
        code: 'custom',
        description: 'The <b>custom Incorporation Agreement and custom Articles</b> containing the community' +
        ' provision required by the Business Corporations Act 51.911 has been completed and a copy has been added' +
        ' to the company\'s record book.'
      }
    ]
  },
  reviewAndConfirm: {
    completingPartyStatement: {
      certifyStatements: [],
      certifyClause: `Note: It is an offence to make a false or misleading statement in respect
        of a material fact in a record submitted to the Corporate Registry for filing.
        See section 427 of the Business Corporations Act.`,
      entityDisplay: null
    }
  }
}
