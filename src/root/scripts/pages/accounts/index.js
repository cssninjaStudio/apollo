import { balanceChart } from '../../charts/balance'

export function accounts() {
  return {
    isLoading: true,
    init() {
      const _this = this
      setTimeout(() => {
        _this.isLoading = false
      }, 2000)
      balanceChart()
    },
    activeTab: 'tab-1',
    toggle(e) {
      const _this = this
      this.isLoading = true
      const target = e.target.getAttribute('data-tab')
      this.activeTab = target
      setTimeout(() => {
        _this.isLoading = false
      }, 2000)
    },
  }
}
