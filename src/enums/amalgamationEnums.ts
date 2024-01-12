export enum AmlStatuses {
  OK,
  ERROR_CCC_MISMATCH,
  ERROR_FOREIGN,
  ERROR_FOREIGN_HORIZONTAL,
  ERROR_FOREIGN_UNLIMITED,
  ERROR_FOREIGN_UNLIMITED2,
  ERROR_FOREIGN_UNLIMITED3,
  ERROR_FUTURE_EFFECTIVE_FILING,
  ERROR_HISTORICAL,
  ERROR_LIMITED_RESTORATION,
  ERROR_NEED_BC_COMPANY,
  ERROR_NOT_AFFILIATED,
  ERROR_NOT_IN_GOOD_STANDING,
  ERROR_PENDING_FILING,
  ERROR_XPRO_ULC_CCC,
}

export enum AmlRoles {
  AMALGAMATING = 'amalgamating',
  HOLDING = 'holding'
}

export enum AmlTypes {
  LEAR = 'lear',
  FOREIGN = 'foreign'
}
