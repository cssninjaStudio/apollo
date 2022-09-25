import { dashboard } from './dashboard'
import { transactions } from './transactions'
import { payments } from './payments'
import { cards } from './cards'
import { accounts } from './accounts'
import { sendPayment } from './payments-send'
import { receivePayment } from './payments-receive'

window.dashboard = dashboard
window.transactions = transactions
window.payments = payments
window.cards = cards
window.accounts = accounts
window.sendPayment = sendPayment
window.receivePayment = receivePayment
