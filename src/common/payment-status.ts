
export enum PaymentStatus {
  NEW = 'NEW',
  FORMSHOWED = 'FORMSHOWED',
  DEADLINE_EXPIRED = 'DEADLINE_EXPIRED',
  CANCELED = 'CANCELED',
  PREAUTHORIZING = 'PREAUTHORIZING',
  AUTHORIZING = 'AUTHORIZING',
  AUTHORIZED = 'AUTHORIZED',
  AUTH_FAIL = 'AUTH_FAIL',
  REJECTED = 'REJECTED',
  _3DS_CHECKING = '3DS_CHECKING',
  _3DS_CHECKED = '3DS_CHECKED',
  REVERSING = 'REVERSING',
  PARTIAL_REVERSED = 'PARTIAL_REVERSED',
  REVERSED = 'REVERSED',
  CONFIRMING = 'CONFIRMING',
  CONFIRMED = 'CONFIRMED',
  REFUNDING = 'REFUNDING',
  PARTIAL_REFUNDED = 'PARTIAL_REFUNDED',
  REFUNDED = 'REFUNDED',
  // Merchant status
  CHECKED = 'CHECKED',
  COMPLETED = 'COMPLETED',
}
