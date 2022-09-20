import Alpine from 'alpinejs'

export function sidebar() {
  return {
    foldSidebar() {
      Alpine.store('app').isLayoutCompact = true
    },
  }
}
